# 📧 EmailJS Configuration Guide - Complete Setup

This project uses EmailJS for handling contact form submissions. Follow these steps to set up your EmailJS configuration.

---

## 🚀 Quick Setup (Automated)

**The easiest way to configure EmailJS:**

```bash
npm run setup:emailjs
```

This interactive script will guide you through the entire setup process!

---

## 📝 Manual Setup (Step-by-Step)

### Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://www.emailjs.com/)
2. Sign up or log in to your account
3. Complete email verification if required

### Step 2: Set up Email Service

1. In your EmailJS dashboard, click **Email Services** (left sidebar)
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook/Hotmail**
   - **Yahoo**
   - Or any other supported service
4. Follow the authentication steps:
   - For Gmail: Allow EmailJS to access your account
   - For others: Follow provider-specific instructions
5. **Copy your Service ID** (e.g., `service_abc1234`)
   - You'll see it after creating the service

### Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Design your email template with these variables:

**Subject Line Example:**

```
New Contact Form Submission from {{from_name}}
```

**Email Body Example:**

```html
Hello Srinivas, You have received a new message from your portfolio contact
form. --- Name: {{from_name}} Email: {{from_email}} Message: {{message}} ---
Reply to: {{from_email}}
```

**Required Template Variables:**

- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email address
- `{{message}}` - Message content
- `{{to_name}}` - Your name (optional, defaults to "Srinivas Koruprolu")

4. Click **Save**
5. **Copy your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. In your EmailJS dashboard, go to **Account** tab
2. Scroll down to **API Keys** section
3. **Copy your Public Key** (User ID)
   - Example: `AbC123XyZ456DeFgHiJ`

### Step 5: Configure Environment Variables

1. Open the `.env` file in your project root
   - If it doesn't exist, copy from `.env.example`:
     ```bash
     cp .env.example .env
     ```

2. Update the EmailJS variables:

   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc1234
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=AbC123XyZ456DeFgHiJ
   ```

3. **Save the file**

### Step 6: Restart Development Server

```bash
npm run dev
```

---

## ✅ Testing Your Configuration

1. Navigate to the contact section on your site
2. Fill out the form with test data:
   - Name: `Test User`
   - Email: `your-email@example.com` (use your real email)
   - Message: `This is a test message`
3. Click **Send Message**
4. Check for:
   - ✅ Success toast notification
   - ✅ Form clears after submission
   - ✅ Email arrives in your inbox (check spam folder too)

---

## 🔧 Troubleshooting

### Issue: "Environment variables missing" error

**Solution:**

- Ensure all three EmailJS variables are set in `.env`
- Check that variable names start with `VITE_`
- Restart your dev server after changing `.env`

### Issue: Form submits but no email received

**Solution:**

1. Check your EmailJS dashboard:
   - Go to **Email Services** → Check service status
   - Go to **Email Templates** → Verify template is active
2. Check spam/junk folder
3. Verify email service authentication hasn't expired

### Issue: "Invalid template ID" error

**Solution:**

- Double-check your `VITE_EMAILJS_TEMPLATE_ID` in `.env`
- Ensure template exists in EmailJS dashboard
- Template ID is case-sensitive

### Issue: "Invalid service ID" error

**Solution:**

- Verify `VITE_EMAILJS_SERVICE_ID` in `.env`
- Check that email service is active
- Service ID is case-sensitive

### Issue: CORS errors

**Solution:**

1. Go to EmailJS dashboard → **Account** → **Security**
2. Add your domain to allowed origins:
   - For local: `http://localhost:5173`
   - For production: `https://yourdomain.com`

---

## 🔒 Security Best Practices

✅ **What we do:**

- Environment variables prefixed with `VITE_` for Vite compatibility
- `.env` file is in `.gitignore` (never committed)
- Public key is safe to expose (designed for client-side use)
- Template validation prevents XSS attacks
- Error handling doesn't expose sensitive data

❌ **What NOT to do:**

- Don't commit `.env` file to Git
- Don't share your Private Key (not used in this project)
- Don't expose Service ID/Template ID in error messages

---

## 📊 EmailJS Free Tier Limits

- **200 emails/month** (free tier)
- **Upgrade available** for higher limits
- Perfect for portfolio contact forms

---

## 🎨 Template Customization

You can customize your email template design:

1. Go to **Email Templates** in EmailJS
2. Edit your template
3. Use HTML/CSS for styling:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px;">
  <h2 style="color: #3b82f6;">New Contact Form Message</h2>
  <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
  <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
    <p>{{message}}</p>
  </div>
</div>
```

---

## 🚀 Production Deployment

### Vercel/Netlify

Add environment variables in your deployment platform:

1. Go to project settings
2. Add environment variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your-service-id
   VITE_EMAILJS_TEMPLATE_ID=your-template-id
   VITE_EMAILJS_PUBLIC_KEY=your-public-key
   ```
3. Redeploy your site

### Important for Production

- Add your production domain to EmailJS allowed origins
- Test the form after deployment
- Monitor EmailJS dashboard for usage

---

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Templates](https://www.emailjs.com/docs/user-guide/creating-email-template/)

---

## 💡 Pro Tips

1. **Test regularly**: Send test emails to ensure service is active
2. **Monitor usage**: Check EmailJS dashboard monthly
3. **Backup template**: Save template content in a file
4. **Set up notifications**: Configure EmailJS to notify you of failures
5. **Custom success message**: Personalize the thank you message

---

## 🎯 Expected Behavior

### Successful Submission:

1. User fills out form
2. Loading spinner appears
3. Email sent via EmailJS
4. Green success toast shows
5. Form clears automatically
6. Email arrives in your inbox

### Failed Submission:

1. User fills out form
2. Error occurs (network, config, etc.)
3. Red error toast shows
4. Form data preserved
5. User can retry
6. Error logged to console (for debugging)

---

**Need Help?** Check the browser console for detailed error messages, or review the [EmailJS troubleshooting guide](https://www.emailjs.com/docs/faq/troubleshooting/).

**Last Updated:** 2025-10-12
