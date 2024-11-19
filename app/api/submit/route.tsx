import { AdminEmail } from "@/emails/admin";
import { formatKey } from "@/lib/helpers";
import { turnstileVerify } from "@/lib/turnstile";
import { render } from "@react-email/render";
import { contactSchema, participateSchema, subscribeSchema } from "./schemas";
import { SubscribeEmail } from "@/emails/subscribe";
import { ZodSchema } from "zod";
import { subscribe } from "@/lib/subscribe";

export async function POST(request: Request) {
  const submissionTimestamp = new Date().toISOString();
  const body = await request.formData();

  // Send email
  const bodyJson = Object.fromEntries(body.entries()) as Record<string, string>;
  // Validate with Turnstile
  const token = bodyJson["cf-turnstile-response"];
  const outcome = await turnstileVerify(request, token);

  if (!outcome.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Spam validation failed. Please refresh the page and try again.",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  // Validate
  let zodSchema: ZodSchema | null = null;

  if (bodyJson["form-name"] === "subscribe") {
    zodSchema = subscribeSchema;
  } else if (bodyJson["form-name"] === "participate") {
    zodSchema = participateSchema;
  } else if (bodyJson["form-name"] === "contact") {
    zodSchema = contactSchema;
  }

  const result = zodSchema?.safeParse(bodyJson);
  const isValid = result ? result.success : true;

  if (!isValid) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result && !result.success ? result.error : true,
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete bodyJson["cf-turnstile-response"];

  const formName = bodyJson["form-name"];

  const emailData: Record<string, any> = {
    ...bodyJson,
    timestamp: submissionTimestamp,
    "user-agent": request.headers.get("user-agent") || "",
    "form-name": formName,
  };

  // Render email HTML & metadata
  let html: string | null = null;
  let subject = "";
  let emailTo =
    process.env.NODE_ENV === "development"
      ? [{ email: "ka@kevinang.com", name: "Kevin Ang" }]
      : [{ email: "info@humanity2-0.org", name: "Humanity 2.0" }];

  if (bodyJson["form-name"] === "subscribe") {
    html = await render(<SubscribeEmail />);
    subject = `Thank you for subscribing to Humanity 2.0`;
    emailTo =
      process.env.NODE_ENV === "development"
        ? [{ email: "ka@kevinang.com", name: "Kevin Ang" }]
        : [{ email: bodyJson.email, name: "" }];
  } else {
    html = await render(
      <AdminEmail
        title={`New Web Form Submission: ${formatKey(formName)}`}
        data={emailData}
      />
    );
    subject = `New Web Form Submission: ${formatKey(formName)}`;
  }

  // Subscribe
  if (bodyJson["form-name"] === "subscribe") {
    try {
      await subscribe({ email: bodyJson.email });
    } catch (err) {
      return Response.json(
        {
          success: false,
          error: (err as Error).message,
        },
        {
          status: 400,
        }
      );
    }
  }

  console.log(html);

  // Log
  await fetch(`https://formhandler.kevinang.com/v1/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(
        `humanity2-0:${process.env.FORMHANDLER_API_KEY}`
      )}`,
    },
    body: new URLSearchParams(emailData),
  });

  let replyTo = body.get("email");
  if (replyTo && body.get("name")) {
    replyTo = `"${body.get("name")}" <${replyTo}>`;
  }

  const data = {
    from: `Humanity 2-0 <noreply@humanity2-0.org>`,
    to:
      process.env.NODE_ENV !== "production"
        ? `Kevin <ka@kevinang.com>`
        : emailTo.map((t) => (t.name ? `${t.name} <${t.email}>` : t.email)),
    reply_to: replyTo,
    subject,
    html,
  };
  const endpoint = `https://api.resend.com/emails`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  return Response.json(
    {
      success: response.ok,
      error: response.ok ? false : await response.text(),
    },
    {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
