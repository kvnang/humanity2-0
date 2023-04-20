import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Please enter a valid name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(1, { message: "Please include your message" }),
  subject: z.string().min(1, { message: "Please include a subject" }),
});

const participateSchema = z.object({
  name: z.string().min(1, { message: "Please enter a valid name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  interest: z.string().min(1, {
    message: "Please include your reasons to participate in the Forum",
  }),
  organization: z.optional(z.string()),
  title: z.optional(z.string()),
});

const subscribeSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
});

export { contactSchema, participateSchema, subscribeSchema };
