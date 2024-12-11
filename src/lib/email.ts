import emailjs from "@emailjs/browser";
import { ContactFormValues } from "./validations/contact";

export async function sendEmail(data: ContactFormValues) {
  try {
    const response = await emailjs.send(
      "service_pkdf1oa",      // Service ID
      "template_uy3ugi8",     // Template ID
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      "s7zcVKskq4pjpEH8_"     // User ID
    );
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed. Please try again later.");
  }
}
