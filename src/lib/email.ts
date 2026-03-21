import emailjs from "@emailjs/browser";
import { ContactFormValues } from "./validations/contact";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isEmailConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
);

if (isEmailConfigured) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export async function sendEmail(data: ContactFormValues) {
  if (!isEmailConfigured) {
    throw new Error(
      "The contact form is not configured yet. Please try again later."
    );
  }

  try {
    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: "Srinivas Koruprolu",
      reply_to: data.email,
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Invalid template ID")) {
        throw new Error(
          "The email template could not be found. Please check the EmailJS template configuration."
        );
      }
      if (error.message.includes("Invalid service ID")) {
        throw new Error(
          "The email service could not be found. Please check the EmailJS service configuration."
        );
      }
      if (error.message.includes("Invalid user ID")) {
        throw new Error(
          "The EmailJS public key is invalid. Please verify the contact form configuration."
        );
      }
    }

    throw new Error("Email sending failed. Please try again later.");
  }
}
