"use client";

import * as React from "react";
import { Button } from "@/components/Button";
import clsx from "clsx";
import { FormSubmitButton, SuccessMessage } from "../Form";

export function Subscribe({
  wrap,
  theme = "light",
}: {
  wrap?: boolean;
  theme?: "light" | "dark";
}) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // wait 5 s
    await new Promise((resolve) => setTimeout(resolve, 5000));

    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <SuccessMessage
        title="Thank you for subscribing!"
        text="We will send you an email when we have more updates to announce."
      />
    );
  }

  return (
    <form action="/api/subscribe" className="max-w-2xl" onSubmit={onSubmit}>
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
              required
            />
          </label>
        </div>
        <div className={clsx(`p-4`, wrap ? "ml-auto" : "")}>
          <FormSubmitButton loading={loading} theme={theme}>
            Subscribe
          </FormSubmitButton>
        </div>
      </div>
    </form>
  );
}
