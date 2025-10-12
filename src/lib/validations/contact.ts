import * as z from "zod";

// Sanitization helper function
function sanitizeString(str: string): string {
  return str
    .trim()
    .replace(/[<>"'&]/g, (match) => {
      const entities: { [key: string]: string } = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "&": "&amp;",
      };
      return entities[match] || match;
    })
    .slice(0, 1000); // Limit string length
}

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    )
    .transform(sanitizeString),
  email: z
    .string()
    .email("Invalid email address")
    .max(254, "Email must be less than 254 characters")
    .transform(sanitizeString),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
    .transform(sanitizeString),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
