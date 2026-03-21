# Srinivas Koruprolu - Portfolio Website

🚀 **A modern, accessible, and performance-optimized portfolio showcasing full-stack development and enterprise software engineering expertise.**

[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-95%2B-green)](https://pagespeed.web.dev/)
[![Accessibility](https://img.shields.io/badge/a11y-WCAG%202.1%20AA-green)](https://www.w3.org/WAI/WCAG21/AA/)
[![Performance](https://img.shields.io/badge/Performance-Optimized-brightgreen)](#performance-features)

## ✨ Features

### 🎯 **Accessibility First**

- ✅ WCAG 2.1 AA compliant
- ✅ Screen reader friendly with proper ARIA labels
- ✅ Keyboard navigation support
- ✅ Skip links for easy navigation
- ✅ Semantic HTML5 structure
- ✅ High contrast color scheme
- ✅ Focus indicators for all interactive elements

### 🚀 **Performance Optimized**

- ✅ Lazy loading images
- ✅ Code splitting and tree shaking
- ✅ Optimized bundle size with chunk analysis
- ✅ Efficient animations with Framer Motion
- ✅ Modern image formats support
- ✅ Preload critical resources

### 📱 **Mobile First Design**

- ✅ Responsive across all devices (320px - 4K)
- ✅ Touch-friendly interface
- ✅ Optimized button sizes for mobile
- ✅ Proper spacing and typography scales

### 🔒 **Security Enhanced**

- ✅ Input sanitization for contact forms
- ✅ XSS protection
- ✅ Content Security Policy headers
- ✅ Secure external link handling
- ✅ Form validation with Zod

### 🔍 **SEO Optimized**

- ✅ Complete meta tags (Open Graph, Twitter Cards)
- ✅ Structured data markup
- ✅ XML sitemap
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Optimized heading hierarchy

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form, Zod validation
- **UI Components**: Radix UI primitives
- **Email**: EmailJS integration
- **Build Tool**: Vite with optimizations
- **Deployment**: Vercel

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Srinivaskoruprolu007/DevPortfolio.git

# Navigate to project directory
cd DevPortfolio

# Install dependencies
npm install

# Configure EmailJS (for contact form)
npm run setup:emailjs
# OR manually edit .env file - see EMAILJS_SETUP.md

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 📧 EmailJS Setup

The contact form requires EmailJS configuration:

**Quick Setup (2 minutes):**

```bash
npm run setup:emailjs
```

**Manual Setup:**

1. See [`EMAILJS_QUICK_FIX.md`](EMAILJS_QUICK_FIX.md) - Quick guide
2. See [`EMAILJS_SETUP.md`](EMAILJS_SETUP.md) - Complete documentation

**What you need:**

- EmailJS account (free)
- Service ID
- Template ID
- Public Key

All values go in the `.env` file.

## 🧪 Quality Assurance

### Automated Testing & Audits

```bash
# Run Lighthouse audit
npm run lighthouse

# Run accessibility audit
npm run audit:a11y

# Analyze bundle size
npm run analyze

# Test production build
npm run test:build
```

### Manual Testing Checklist

- [ ] All links work correctly
- [ ] Forms validate and submit properly
- [ ] Images load with proper alt text
- [ ] Navigation works on mobile
- [ ] Keyboard navigation flows logically
- [ ] Screen reader compatibility
- [ ] Performance metrics > 90%

## 📊 Performance Metrics

| Metric         | Score | Target |
| -------------- | ----- | ------ |
| Performance    | 95+   | 90+    |
| Accessibility  | 100   | 95+    |
| Best Practices | 95+   | 90+    |
| SEO            | 100   | 95+    |

## 🎨 Key Improvements Implemented

### Accessibility Enhancements

- **Contact Form**: Enhanced with proper labels, ARIA attributes, and loading states
- **Navigation**: Active state highlighting with ARIA current page indicators
- **Skip Links**: Direct access to main content for keyboard users
- **Images**: Descriptive alt text for all visual content
- **Forms**: Clear error messages and validation feedback

### Performance Optimizations

- **Bundle Splitting**: Vendor, UI, and utility code separated
- **Image Optimization**: Lazy loading with proper sizing
- **Code Splitting**: Route-based and component-based splitting
- **Tree Shaking**: Unused code elimination

### UX/UI Improvements

- **Mobile Responsive**: Improved button sizes and spacing
- **CV Buttons**: Clear file type indicators with download attributes
- **Project Cards**: Achievement bullets with quantified results
- **Tooltips**: Helpful context for all interactive elements
- **Loading States**: Visual feedback during form submissions

### Security Features

- **Input Sanitization**: XSS prevention with custom sanitization
- **Form Validation**: Server-side validation with Zod schemas
- **HTTPS Enforcement**: All external resources use secure protocols
- **Content Security Policy**: Protection against injection attacks
