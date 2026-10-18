import { z } from "zod";

export const serviceOptions = [
  "Website Development",
  "Mobile App Development",
  "Custom Business Solutions",
  "E-commerce Solutions",
  "Enterprise Solutions",
  "Startup MVP Development",
  "Industry-Specific Solutions",
  "UI/UX Design",
  "Maintenance and Support",
  "Other",
] as const;

export const budgetOptions = [
  "Not decided yet",
  "Under ₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "₹1,00,000–₹5,00,000",
  "Above ₹5,00,000",
  "Prefer to discuss",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "Within one month",
  "Within three months",
  "Within six months",
  "Flexible timeline",
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please provide your full name (at least 2 characters)" })
    .max(100, { message: "Name is too long" }),
  businessEmail: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email is too long" }),
  phoneNumber: z
    .string()
    .max(30, { message: "Phone number is too long" })
    .optional()
    .or(z.literal("")),
  companyName: z
    .string()
    .max(100, { message: "Company name is too long" })
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(1, { message: "Please select a service you are interested in" }),
  budget: z.string().optional().or(z.literal("")),
  timeline: z.string().optional().or(z.literal("")),
  projectDetails: z
    .string()
    .min(15, { message: "Please provide a few details about your project (at least 15 characters)" })
    .max(3000, { message: "Project details are too long" }),
  privacyConsent: z
    .boolean()
    .refine((val: boolean) => val === true, {
      message: "You must agree to the privacy policy to submit",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
