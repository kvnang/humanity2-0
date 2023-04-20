"use client";

import * as React from "react";
import clsx from "clsx";
import { FormSubmitButton, SuccessMessage } from "../Form";
import { useTurnstile } from "@/hooks/useTurnstile";
import { toast } from "react-hot-toast";
import type { ZodError } from "zod";

export function Subscribe({
  wrap,
  theme = "light",
}: {
  wrap?: boolean;
  theme?: "light" | "dark";
}) {
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
        title="Thank you for subscribing!"
        text="We will send you an email when we have more updates to announce."
        theme={theme}
      />
    );
  }

  return (
    <form action="/api/submit" className="max-w-2xl" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="subscribe" />
      <div className={clsx(`flex items-center -m-4`, wrap ? "flex-wrap" : "")}>
        <div className={clsx(`p-4`, wrap ? "basis-full" : "flex-1")}>
          <label htmlFor="subscribe-email">
            <span className="sr-only">Email</span>
            <input
              type="email"
              name="email"
              id="subscribe-email"
              placeholder="Email address"
              className={clsx(
                `px-4 py-3 outline-offset-4 w-full border-gray-50 shadow-md rounded-md disabled:opacity-50 disabled:pointer-events-none`,
                theme === "dark" ? "bg-white" : "bg-gray-700"
              )}
              disabled={loading}
              aria-invalid={issues.some((issue) => issue.path[0] === "email")}
              required
            />
          </label>
        </div>
        <div className={clsx(`p-4`, wrap ? "ml-auto" : "")}>
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
          <FormSubmitButton loading={loading} theme={theme}>
            Subscribe
          </FormSubmitButton>
        </div>
      </div>
    </form>
  );
}
