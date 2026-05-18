import emailjs from "@emailjs/browser";
import { ContactFormValues } from "./validations/contact";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isEmailConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
);

const emailErrorMessages = [
  {
    match: "Invalid template ID",
    message:
      "The email template could not be found. Please check the EmailJS template configuration.",
  },
  {
    match: "Invalid service ID",
    message:
      "The email service could not be found. Please check the EmailJS service configuration.",
  },
  {
    match: "Invalid user ID",
    message:
      "The EmailJS public key is invalid. Please verify the contact form configuration.",
  },
];

if (isEmailConfigured) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

function assertEmailConfigured() {
  if (!isEmailConfigured) {
    throw new Error(
      "The contact form is not configured yet. Please try again later."
    );
  }
}

function getEmailErrorMessage(error: Error) {
  return emailErrorMessages.find(({ match }) => error.message.includes(match))
    ?.message;
}

export async function sendEmail(data: ContactFormValues) {
  assertEmailConfigured();

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
      const knownError = getEmailErrorMessage(error);

      if (knownError) {
        throw new Error(knownError);
      }
    }

    throw new Error("Email sending failed. Please try again later.");
  }
}
