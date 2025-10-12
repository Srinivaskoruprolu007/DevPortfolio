#!/usr/bin/env node

/**
 * EmailJS Setup Helper Script
 *
 * This script helps you configure EmailJS for your contact form.
 * Run: node emailjs-setup.js
 */

const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  red: "\x1b[31m",
};

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("\n" + colorize("=".repeat(60), "cyan"));
  console.log(colorize("📧 EmailJS Configuration Setup", "bright"));
  console.log(colorize("=".repeat(60), "cyan") + "\n");

  console.log(
    colorize(
      "This script will help you configure EmailJS for your contact form.\n",
      "blue"
    )
  );

  // Check if .env exists
  const envPath = path.join(__dirname, ".env");
  const envExamplePath = path.join(__dirname, ".env.example");

  if (!fs.existsSync(envPath)) {
    console.log(
      colorize(
        "⚠️  .env file not found. Creating from .env.example...",
        "yellow"
      )
    );
    if (fs.existsSync(envExamplePath)) {
      fs.copyFileSync(envExamplePath, envPath);
      console.log(colorize("✅ .env file created!\n", "green"));
    } else {
      console.log(
        colorize(
          "❌ .env.example not found. Creating new .env file...\n",
          "red"
        )
      );
    }
  }

  // Step 1: Instructions
  console.log(colorize("Step 1: Create EmailJS Account", "bright"));
  console.log("  1. Go to: " + colorize("https://www.emailjs.com/", "cyan"));
  console.log("  2. Sign up or log in to your account\n");

  await question(colorize("Press Enter when you have logged in...", "yellow"));

  // Step 2: Email Service
  console.log("\n" + colorize("Step 2: Set up Email Service", "bright"));
  console.log(
    "  1. In EmailJS dashboard, go to " + colorize("Email Services", "cyan")
  );
  console.log("  2. Click " + colorize("Add New Service", "cyan"));
  console.log("  3. Choose your email provider (Gmail, Outlook, etc.)");
  console.log("  4. Follow the setup instructions");
  console.log(
    "  5. Copy your " +
      colorize("Service ID", "green") +
      " (e.g., service_abc1234)\n"
  );

  const serviceId = await question(
    colorize("Enter your Service ID: ", "yellow")
  );

  // Step 3: Email Template
  console.log("\n" + colorize("Step 3: Create Email Template", "bright"));
  console.log(
    "  1. In EmailJS dashboard, go to " + colorize("Email Templates", "cyan")
  );
  console.log("  2. Click " + colorize("Create New Template", "cyan"));
  console.log("  3. Use these variables in your template:");
  console.log(
    "     - " + colorize("{{from_name}}", "green") + " - Sender's name"
  );
  console.log(
    "     - " + colorize("{{from_email}}", "green") + " - Sender's email"
  );
  console.log(
    "     - " + colorize("{{message}}", "green") + " - Message content"
  );
  console.log(
    "     - " +
      colorize("{{to_name}}", "green") +
      " - Your name (Srinivas Koruprolu)"
  );
  console.log(
    "  4. Save and copy your " +
      colorize("Template ID", "green") +
      " (e.g., template_xyz5678)\n"
  );

  const templateId = await question(
    colorize("Enter your Template ID: ", "yellow")
  );

  // Step 4: Public Key
  console.log("\n" + colorize("Step 4: Get Public Key", "bright"));
  console.log(
    "  1. In EmailJS dashboard, go to " + colorize("Account", "cyan")
  );
  console.log(
    "  2. Copy your " + colorize("Public Key", "green") + " (User ID)\n"
  );

  const publicKey = await question(
    colorize("Enter your Public Key: ", "yellow")
  );

  // Validate inputs
  if (!serviceId.trim() || !templateId.trim() || !publicKey.trim()) {
    console.log("\n" + colorize("❌ Error: All fields are required!", "red"));
    rl.close();
    return;
  }

  // Update .env file
  try {
    let envContent = fs.readFileSync(envPath, "utf8");

    // Replace or add EmailJS variables
    const updates = {
      VITE_EMAILJS_SERVICE_ID: serviceId.trim(),
      VITE_EMAILJS_TEMPLATE_ID: templateId.trim(),
      VITE_EMAILJS_PUBLIC_KEY: publicKey.trim(),
    };

    for (const [key, value] of Object.entries(updates)) {
      const regex = new RegExp(`^${key}=.*$`, "m");
      if (regex.test(envContent)) {
        envContent = envContent.replace(regex, `${key}=${value}`);
      } else {
        envContent += `\n${key}=${value}`;
      }
    }

    fs.writeFileSync(envPath, envContent);

    console.log("\n" + colorize("=".repeat(60), "green"));
    console.log(colorize("✅ Configuration Saved Successfully!", "bright"));
    console.log(colorize("=".repeat(60), "green"));

    console.log("\n" + colorize("📋 Your Configuration:", "bright"));
    console.log("  Service ID:  " + colorize(serviceId.trim(), "cyan"));
    console.log("  Template ID: " + colorize(templateId.trim(), "cyan"));
    console.log(
      "  Public Key:  " +
        colorize(publicKey.trim().substring(0, 10) + "...", "cyan")
    );

    console.log("\n" + colorize("🚀 Next Steps:", "bright"));
    console.log("  1. Restart your development server:");
    console.log("     " + colorize("npm run dev", "green"));
    console.log("  2. Test the contact form on your site");
    console.log("  3. Check your email for the test message\n");

    console.log(colorize("💡 Tip:", "yellow") + " If the form doesn't work:");
    console.log("  - Check browser console for errors");
    console.log("  - Verify your EmailJS credentials");
    console.log("  - Make sure your email service is active\n");
  } catch (error) {
    console.log(
      "\n" + colorize("❌ Error saving configuration:", "red"),
      error.message
    );
  }

  rl.close();
}

main().catch((error) => {
  console.error(colorize("❌ Error:", "red"), error);
  rl.close();
  process.exit(1);
});
