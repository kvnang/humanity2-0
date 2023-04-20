"use client";

import * as React from "react";
import {
  FormSubmitButton,
  Input,
  SuccessMessage,
  Textarea,
} from "@/components/Form";
import { useTurnstile } from "@/hooks/useTurnstile";
import { toast } from "react-hot-toast";
import type { ZodError } from "zod";

export function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [issues, setIssues] = React.useState<ZodError["issues"]>([]);

  const { turnstileRef, turnstileInputRef, reset } = useTurnstile();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const urlEncoded = new URLSearchParams(formData as any).toString();

    const { error } = await fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncoded,
    }).then((res) => res.json());

    if (error) {
      if (error.name === "ZodError") {
        const { issues } = error as ZodError;
        issues.forEach((err) => {
          toast.error(err.message);
        });
        setIssues(issues);
      } else {
        console.error(error);
        toast.error(error || "Something went wrong. Please try again later.");
      }
      reset();
    } else {
      setSuccess(true);
    }

    setLoading(false);
  };

  if (success) {
    return (
      <SuccessMessage
        title="Your message has been sent!"
        text="Thank you for contacting us. We will try to respond as soon as possible."
      />
    );
  }

  return (
    <form action="/api/submit" method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-3">
          <Input
            label="Name"
            type="text"
            name="name"
            placeholder="John Doe"
            disabled={loading}
            aria-invalid={issues.some((issue) => issue.path[0] === "name")}
            required
          />
        </div>
        <div className="col-span-3">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="email@example.com"
            disabled={loading}
            aria-invalid={issues.some((issue) => issue.path[0] === "email")}
            required
          />
        </div>
        <div className="col-span-full">
          <Input
            label="Subject"
            type="text"
            name="subject"
            placeholder="About the upcoming forum ..."
            disabled={loading}
            aria-invalid={issues.some((issue) => issue.path[0] === "subject")}
            required
          />
        </div>
        <div className="col-span-full">
          <Textarea
            label="Message"
            name="message"
            placeholder="Your message ..."
            disabled={loading}
            aria-invalid={issues.some((issue) => issue.path[0] === "message")}
            required
          />
        </div>
        <div className="col-span-full">
          <div
            ref={turnstileRef}
            className={`transition-opacity ${
              loading ? "opacity-50 pointer-events-none" : ""
            }`}
          />
          <input
            ref={turnstileInputRef}
            type="hidden"
            name="cf-turnstile-response"
          />
          <div className="flex justify-end">
            <FormSubmitButton loading={loading}>Send</FormSubmitButton>
          </div>
        </div>
      </div>
    </form>
  );
}
