"use client";

import * as React from "react";
import {
  FormSubmitButton,
  Input,
  SuccessMessage,
  Textarea,
} from "@/components/Form";
import { toast } from "react-hot-toast";
import { useTurnstile } from "@/hooks/useTurnstile";
import { ZodError } from "zod";

export function ParticipateForm() {
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
        title="Your request has been sent!"
        text="Thank you for your interest in the Humanity 2.0 Forum. We will be in touch with you shortly."
      />
    );
  }

  return (
    <form action="/api/submit" method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="participate" />
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
            label="Organization"
            type="text"
            name="organization"
            placeholder="Company Inc."
            aria-invalid={issues.some(
              (issue) => issue.path[0] === "organization"
            )}
            disabled={loading}
          />
        </div>
        <div className="col-span-full">
          <Input
            label="Title"
            type="text"
            name="title"
            placeholder="Chief Executive Officer"
            aria-invalid={issues.some((issue) => issue.path[0] === "title")}
            disabled={loading}
          />
        </div>
        <div className="col-span-full">
          <Textarea
            label="Why would you like to participate in the Humanity 2.0 forum?"
            name="interest"
            rows={5}
            disabled={loading}
            aria-invalid={issues.some((issue) => issue.path[0] === "interest")}
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
            <FormSubmitButton loading={loading}>Submit</FormSubmitButton>
          </div>
        </div>
      </div>
    </form>
  );
}
