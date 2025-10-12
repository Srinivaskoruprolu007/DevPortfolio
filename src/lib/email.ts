import emailjs from "@emailjs/browser";
import { ContactFormValues } from "./validations/contact";

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Validate environment variables
if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error('Missing EmailJS environment variables. Please check your .env file.');
}

export async function sendEmail(data: ContactFormValues) {
  try {
    // Validate environment variables before sending
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error('EmailJS configuration is missing. Please check environment variables.');
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed. Please try again later.");
  }
}
