# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for your portfolio project.

## Step 1: Create a Sanity Account

1. Go to [https://sanity.io](https://sanity.io)
2. Sign up or log in to your account
3. Create a new project

## Step 2: Set up Sanity Studio

1. Install Sanity CLI globally:

   ```bash
   npm install -g @sanity/cli
   ```

2. Create a new Sanity Studio in a separate folder:

   ```bash
   npx create-sanity@latest
   ```

3. Choose the following options:
   - Project name: "Portfolio CMS"
   - Use TypeScript: Yes
   - Dataset: production
   - Add sample data: No
   - Use clean project template: Yes

## Step 3: Configure Your Schemas

Copy the schemas from `sanity-schemas.example.ts` into your Sanity Studio project:

1. In your Sanity Studio project, create schema files:
   - `schemas/project.ts`
   - `schemas/technology.ts`
   - `schemas/skill.ts`
   - `schemas/about.ts`

2. Update your `schemas/index.ts` to include:

   ```typescript
   import { projectSchema } from "./project";
   import { technologySchema } from "./technology";
   import { skillSchema } from "./skill";
   import { aboutSchema } from "./about";

   export const schemaTypes = [
     projectSchema,
     technologySchema,
     skillSchema,
     aboutSchema,
   ];
   ```

## Step 4: Deploy Your Studio

1. In your Sanity Studio folder, run:

   ```bash
   npm run build
   npm run deploy
   ```

2. Choose a studio hostname (e.g., `your-portfolio-cms`)

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env.local` in your portfolio project
2. Update the values with your Sanity project details:
   ```
   VITE_SANITY_PROJECT_ID=your-project-id
   VITE_SANITY_DATASET=production
   ```

You can find your project ID in your Sanity dashboard at https://sanity.io/manage

## Step 6: Add CORS Origins

1. Go to your Sanity project dashboard
2. Navigate to Settings → API
3. Add CORS origins:
   - `http://localhost:5173` (for development)
   - `http://localhost:5174` (for development)
   - Your production domain (e.g., `https://your-portfolio.vercel.app`)

## Step 7: Add Content

1. Access your Sanity Studio at the deployed URL
2. Create some technologies first (React, TypeScript, etc.)
3. Add your projects with references to technologies
4. Add your skills and about information

## Step 8: Test the Integration

1. Start your portfolio development server:

   ```bash
   npm run dev
   ```

2. Check the browser console - you should see:
   - "Using projects from: Sanity" if connected successfully
   - "Using projects from: Local data" if falling back to local data

## Troubleshooting

- **CORS Errors**: Make sure you've added your domain to CORS origins in Sanity
- **Project ID Issues**: Double-check your project ID in the Sanity dashboard
- **Schema Errors**: Ensure all required fields are properly configured in your schemas

## Benefits of Using Sanity

- ✅ Real-time content updates without code deployment
- ✅ Rich text editing and media management
- ✅ Collaborative content management
- ✅ Automatic image optimization
- ✅ Version history and drafts
- ✅ Excellent developer experience
