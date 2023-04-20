import { SubscribeEmail } from "@/emails";
import { formatKey } from "@/lib/helpers";
import { turnstileVerify } from "@/lib/turnstile";
import { render } from "@react-email/render";

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
      JSON.stringify({ success: false, error: "Turnstile validation failed" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  // Validate
  // const validate =
  //   bodyJson["form-name"] === "jobs" ? jobsValidate : contactValidate;
  // const { success, error } = validate(bodyJson);
  delete bodyJson["cf-turnstile-response"];

  const html = render(<SubscribeEmail />);

  const formName = bodyJson["form-name"]
    ? formatKey(bodyJson["form-name"])
    : "";

  const emailData: Record<string, any> = {
    ...bodyJson,
    timestamp: submissionTimestamp,
    "form-name": formName,
  };

  // Log
  await fetch(`https://formhandler.kevinang.com/v1/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(
        `humanity2-0:${process.env.FORMHANDLER_API_KEY}`
      )}`,
    },
    body: new URLSearchParams(JSON.stringify(emailData)).toString(),
  });

  const emailTo =
    process.env.NODE_ENV === "development"
      ? [{ email: "ka@kevinang.com", name: "Kevin Ang" }]
      : [{ email: bodyJson.email }];

  const response = await fetch(
    `https://formhandler.kevinang.com/v1/email/send`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(
          `humanity2-0:${process.env.FORMHANDLER_API_KEY}`
        )}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: emailTo,
            reply_to: { email: body.get("email") },
          },
        ],
        from: { email: "noreply@humanity2-0.org", name: "Humanity 2.0 Web" },
        subject: `Thank you for subscribing to Humanity 2.0`,
        content: html
          ? [
              {
                type: "text/html",
                value: html,
              },
            ]
          : [
              {
                type: "text/plain",
                value: `Thank you for subscribing to Humanity 2.0`,
              },
            ],
      }),
    }
  );

  return new Response(
    JSON.stringify({
      success: response.ok,
      error: response.ok ? null : await response.text(),
    }),
    {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
