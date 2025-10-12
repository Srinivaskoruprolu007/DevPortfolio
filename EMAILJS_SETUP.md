# EmailJS Configuration Guide

This project uses EmailJS for handling contact form submissions. Follow these steps to set up your EmailJS configuration:

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://www.emailjs.com/)
2. Sign up or log in to your account

## Step 2: Set up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Design your email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. In your EmailJS dashboard, go to **Account**
2. Copy your **Public Key** (User ID)

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your-service-id-here
   VITE_EMAILJS_TEMPLATE_ID=your-template-id-here
   VITE_EMAILJS_PUBLIC_KEY=your-public-key-here
   ```

## Security Notes

- ✅ Environment variables are prefixed with `VITE_` for Vite compatibility
- ✅ The `.env` file is ignored by Git to keep credentials secure
- ✅ Template validation prevents XSS attacks
- ✅ Error handling provides user-friendly feedback

## Testing

After configuration, test the contact form:
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- **Form not sending**: Check browser console for error messages
- **Environment variables not loading**: Ensure they start with `VITE_`
- **EmailJS errors**: Verify your Service ID, Template ID, and Public Key
- **CORS errors**: Ensure your domain is allowed in EmailJS settings