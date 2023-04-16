"use client";

import * as React from "react";
import {
  FormSubmitButton,
  Input,
  SuccessMessage,
  Textarea,
} from "@/components/Form";

export function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // wait 3 secs
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setSuccess(true);
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
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-3">
          <Input
            label="Name"
            type="text"
            name="name"
            placeholder="John Doe"
            disabled={loading}
          />
        </div>
        <div className="col-span-3">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="email@example.com"
            disabled={loading}
          />
        </div>
        <div className="col-span-full">
          <Input
            label="Subject"
            type="text"
            name="subject"
            placeholder="About the upcoming forum ..."
            disabled={loading}
          />
        </div>
        <div className="col-span-full">
          <Textarea
            label="Message"
            name="message"
            placeholder="Your message ..."
            disabled={loading}
          />
        </div>
        <div className="col-span-full">
          <div className="flex justify-end">
            <FormSubmitButton loading={loading}>Send</FormSubmitButton>
          </div>
        </div>
      </div>
    </form>
  );
}
