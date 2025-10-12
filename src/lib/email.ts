import emailjs from "@emailjs/browser";
import { ContactFormValues } from "./validations/contact";

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Debug environment variables (remove in production)
console.log('EmailJS Environment Variables:', {
  SERVICE_ID: EMAILJS_SERVICE_ID ? 'Loaded' : 'Missing',
  TEMPLATE_ID: EMAILJS_TEMPLATE_ID ? 'Loaded' : 'Missing',
  PUBLIC_KEY: EMAILJS_PUBLIC_KEY ? 'Loaded (first 4 chars: ' + EMAILJS_PUBLIC_KEY?.substring(0, 4) + '...)' : 'Missing'
});

// Validate environment variables
if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error('❌ Missing EmailJS environment variables. Please check your .env file.');
  console.error('Required variables: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY');
}

export async function sendEmail(data: ContactFormValues) {
  try {
    // Validate environment variables before sending
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error('EmailJS configuration is missing. Please check environment variables.');
    }

    console.log('📧 Attempting to send email with EmailJS...');

    // Initialize EmailJS with public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'Srinivas Koruprolu', // Your name
      reply_to: data.email,
    };

    console.log('📨 Sending email with params:', {
      service: EMAILJS_SERVICE_ID,
      template: EMAILJS_TEMPLATE_ID,
      from: data.email,
      name: data.name
    });

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('✅ Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('❌ Error sending email:', error);

    // More specific error messages
    if (error instanceof Error) {
      if (error.message.includes('Invalid template ID')) {
        throw new Error('Email template not found. Please check your EmailJS template configuration.');
      } else if (error.message.includes('Invalid service ID')) {
        throw new Error('Email service not found. Please check your EmailJS service configuration.');
      } else if (error.message.includes('Invalid user ID')) {
        throw new Error('Invalid EmailJS public key. Please check your configuration.');
      }
    }

    throw new Error('Email sending failed. Please try again later or contact me directly.');
  }
}
