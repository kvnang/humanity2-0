"use client";

import * as React from "react";
import {
  FormSubmitButton,
  Input,
  SuccessMessage,
  Textarea,
} from "@/components/Form";

export function ParticipateForm() {
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
        title="Your request has been sent!"
        text="Thank you for your interest in the Humanity 2.0 Forum. We will be in touch shortly."
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
            label="Organization"
            type="text"
            name="organization"
            placeholder="Company Inc."
            disabled={loading}
          />
        </div>
        <div className="col-span-full">
          <Input
            label="Title"
            type="text"
            name="title"
            placeholder="Chief Executive Officer"
            disabled={loading}
          />
        </div>
        <div className="col-span-full">
          <Textarea
            label="Why would you like to participate in the Humanity 2.0 forum?"
            name="interest"
            rows={5}
            disabled={loading}
          />
        </div>
        <div className="col-span-full">
          <div className="flex justify-end">
            <FormSubmitButton loading={loading}>Submit</FormSubmitButton>
          </div>
        </div>
      </div>
    </form>
  );
}
