# Bharat Intelli Tech Systems — Official Corporate Website

A complete, ultra-premium single-page corporate website for **Bharat Intelli Tech Systems**, inspired by the heritage and future smart-city vision of **Amaravati, Andhra Pradesh, India**.

Built with **React, Vite, TypeScript, Tailwind CSS, React Hook Form, and Zod** following a strict **placeholder-first development strategy**.

---

## 🌟 Executive Overview

Bharat Intelli Tech Systems provides:
- **Website Design & Development** (Corporate platforms, web apps, redesigns, SEO foundations)
- **Android & iOS Mobile Application Development** (Native & cross-platform apps, API integration, push notifications)
- **Custom Software & Business Solutions** (Automation, admin dashboards, CRM integrations, cloud software)
- **E-Commerce Development** (Storefronts, catalogs, payment gateways, inventory tracking)
- **Enterprise Applications** (Role-based access, operational automation, executive reporting)
- **Startup MVP Development** (Rapid prototyping, product validation, scalable foundations)
- **Industry-Specific Digital Solutions** (Specialized workflows, scheduling, customer portals)

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9.0.0 or later

### Installation & Launch

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

The website will be live at `http://127.0.0.1:5173/` (or your assigned localhost port).

### Building for Production

```bash
# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

---

## 🖼️ Centralized Asset Manifest & Replacement Guide

All images, logos, portraits, and backgrounds are managed through:
`src/data/assets.ts`

Local, elegant SVG placeholder assets have been generated in `public/images/placeholders/`.

### How to Replace Assets

When final photography, branding assets, and screenshots are ready, simply replace the file in `public/images/` and update its manifest reference in `src/data/assets.ts` (or overwrite the placeholder SVG with your approved graphic of the same name).

| Asset Manifest Key | Current Placeholder File | Intended Final Asset | Recommended Ratio / Dimensions |
| :--- | :--- | :--- | :--- |
| `assets.logo` | `/images/placeholders/logo-placeholder.svg` | Official company logo & brand emblem | Horizontal logo (~280x60px) |
| `assets.hero` | `/images/placeholders/amaravati-hero-placeholder.svg` | Authentic Amaravati Krishna River landscape / tech horizon | 16:10 or 16:9 (~1600x1000px) |
| `assets.heritage` | `/images/placeholders/amaravati-heritage-placeholder.svg` | Amaravati stupa arch / architectural heritage photo | 3:2 or 16:10 (~1200x800px) |
| `assets.services.website` | `/images/placeholders/service-website-placeholder.svg` | Modern responsive website development showcase | 16:10 (~800x550px) |
| `assets.services.mobileApp` | `/images/placeholders/service-mobile-app-placeholder.svg` | iOS & Android smartphone app mockup | 16:10 (~800x550px) |
| `assets.services.customSoftware`| `/images/placeholders/service-custom-software-placeholder.svg`| Cloud dashboard / business software pipeline | 16:10 (~800x550px) |
| `assets.solutions.ecommerce` | `/images/placeholders/solution-ecommerce-placeholder.svg` | Modern e-commerce shopping experience | 16:10 (~800x500px) |
| `assets.solutions.enterprise`| `/images/placeholders/solution-enterprise-placeholder.svg`| Enterprise analytics console & workflow | 16:10 (~800x500px) |
| `assets.solutions.startup` | `/images/placeholders/solution-startup-placeholder.svg` | Startup MVP product launch blueprint | 16:10 (~800x500px) |
| `assets.solutions.industry` | `/images/placeholders/solution-industry-placeholder.svg` | Specialized industry platform & scheduling | 16:10 (~800x500px) |
| `assets.projects.tourism` | `/images/placeholders/project-tourism-placeholder.svg` | Tourism portal case study screenshot | 16:10 (~900x600px) |
| `assets.projects.ecommerce` | `/images/placeholders/project-ecommerce-placeholder.svg` | Online retail platform screenshot | 16:10 (~900x600px) |
| `assets.projects.realEstate` | `/images/placeholders/project-real-estate-placeholder.svg` | Real estate directory platform screenshot | 16:10 (~900x600px) |
| `assets.projects.healthcare` | `/images/placeholders/project-healthcare-placeholder.svg` | Healthcare appointment booking app screenshot | 16:10 (~900x600px) |
| `assets.about` | `/images/placeholders/about-team-placeholder.svg` | Engineering team in Amaravati workspace | 4:3 or 16:10 (~1200x800px) |
| `assets.contact` | `/images/placeholders/amaravati-contact-placeholder.svg` | Krishna River evening skyline backdrop | 16:9 (~1600x900px) |
| `assets.testimonials.client1` | `/images/placeholders/client-portrait-1.svg` | Verified client portrait 1 | 1:1 (~400x400px) |
| `assets.testimonials.client2` | `/images/placeholders/client-portrait-2.svg` | Verified client portrait 2 | 1:1 (~400x400px) |
| `assets.testimonials.client3` | `/images/placeholders/client-portrait-3.svg` | Verified client portrait 3 | 1:1 (~400x400px) |
| `assets.socialPreview` | `/images/placeholders/social-preview-placeholder.svg` | Open Graph / social media banner | 1200x630px |

---

## 🏢 Replaceable Company Configuration

All company details (phone, email, social links, location) are isolated in:
`src/data/company.ts`

- **Phone & Email:** Uses placeholders `[BUSINESS_PHONE]` and `[BUSINESS_EMAIL]` by default. `tel:` and `mailto:` links automatically activate once real contact details are configured.
- **Location:** Linked to an authentic Google Maps search for *Amaravati, Andhra Pradesh, India*.
- **Social Profiles:** LinkedIn, Instagram, Facebook, and YouTube links are automatically hidden if left unconfigured to prevent broken links.

---

## 📬 Contact Form & API Backend Integration

The **Contact Now** form is implemented with **React Hook Form** and **Zod** validation.

Features:
- Field validation with inline error messages (Full Name, Business Email, Service, Project Details, Privacy Consent).
- Service preselection: Clicking **Explore Service** or **Discuss Solution** CTAs across the page automatically preselects the corresponding dropdown option and scrolls smoothly to the form.
- Anti-spam honeypot field.
- Loading state and duplicate submission prevention.

### Backend Configuration

Inquiry submissions are managed by `src/lib/contact-api.ts`.

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Configure your backend endpoint:
   ```env
   VITE_CONTACT_API_URL=https://api.yourdomain.com/v1/inquiries
   ```
3. **Development Mode Fallback:** If `VITE_CONTACT_API_URL` is empty, the form runs a safe development simulation. It validates the form, simulates network delay, and displays a clear notice:
   > *"Development Mode Simulation: Form validation succeeded and payload was validated. Note: VITE_CONTACT_API_URL is unconfigured, so no real email or database record was sent."*

---

## 🏛️ Page Structure (Single-Page Order)

1. **Header & Navigation:** Sticky header with glassmorphism, company logo placeholder, smooth scrolling links, active section spy, mobile drawer menu, and CTA button.
2. **Hero (`#home`):** Eyebrow "AMARAVATI | FUTURE CAPITAL", headline "Building Mobile Applications for a Smarter Tomorrow", gold highlight, trust statement, and landscape placeholder.
3. **Services (`#services`):** 3 photographic placeholder cards with capability checklists and interactive CTAs.
4. **Solutions (`#solutions`):** 4 responsive solution cards (E-commerce, Enterprise, Startup, Industry-specific).
5. **Our Work (`#our-work`):** 4 concept showcase cards with category filtering and an accessible detail modal (Challenge, Solution, Key Features, Tech Stack). Marked clearly as illustrative sample concepts.
6. **About Us (`#about-us`):** Narrative connecting innovation to Amaravati, team placeholder, and four core guiding values.
7. **Why Choose Us (`#why-choose-us`):** Deep navy section with four qualitative pillars and non-numeric value statements.
8. **Testimonials (`#testimonials`):** Carousel featuring portrait placeholders, clear demo disclaimer badge, and accessible slide controls.
9. **Contact Us (`#contact-us`):** Wide Amaravati contact background with navy overlay, configurable company contact details, and the validated Contact Now form.
10. **Footer:** Brand overview, dynamic copyright year, navigation links, and Amaravati decorative motif.
11. **Back to Top:** Floating smooth scroll utility.

---

## 🎨 Brand Design Tokens

- **Deep Navy:** `#082B59`
- **Royal Blue:** `#0868B2`
- **Technology Blue:** `#078BCB`
- **Cyan:** `#26B5D8`
- **Warm Gold:** `#DDA43A`
- **Ivory:** `#FAF8F2`
- **Light Blue:** `#EDF6FC`
- **Body Text:** `#26364B`
- **Muted Text:** `#65748A`
- **Headings Font:** Plus Jakarta Sans / Manrope
- **Body Font:** Inter

---

## 📁 Project Folder Structure

```text
bharat-intelli-tech/
├── public/
│   ├── images/
│   │   └── placeholders/
│   │       ├── logo-placeholder.svg
│   │       ├── amaravati-hero-placeholder.svg
│   │       ├── amaravati-heritage-placeholder.svg
│   │       ├── service-website-placeholder.svg
│   │       ├── service-mobile-app-placeholder.svg
│   │       ├── service-custom-software-placeholder.svg
│   │       ├── solution-ecommerce-placeholder.svg
│   │       ├── solution-enterprise-placeholder.svg
│   │       ├── solution-startup-placeholder.svg
│   │       ├── solution-industry-placeholder.svg
│   │       ├── project-tourism-placeholder.svg
│   │       ├── project-ecommerce-placeholder.svg
│   │       ├── project-real-estate-placeholder.svg
│   │       ├── project-healthcare-placeholder.svg
│   │       ├── about-team-placeholder.svg
│   │       ├── amaravati-contact-placeholder.svg
│   │       ├── client-portrait-1.svg
│   │       ├── client-portrait-2.svg
│   │       ├── client-portrait-3.svg
│   │       └── social-preview-placeholder.svg
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── PlaceholderImage.tsx
│   │   ├── ResponsiveImage.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── SolutionCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   └── BackToTop.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Solutions.tsx
│   │   ├── OurWork.tsx
│   │   ├── AboutUs.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactUs.tsx
│   ├── data/
│   │   ├── assets.ts
│   │   ├── company.ts
│   │   ├── services.ts
│   │   ├── solutions.ts
│   │   ├── projects.ts
│   │   └── testimonials.ts
│   ├── lib/
│   │   ├── validation.ts
│   │   └── contact-api.ts
│   ├── index.css
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License & Attribution

Copyright © 2026 **Bharat Intelli Tech Systems**. All rights reserved.  
Inspired by Amaravati, Andhra Pradesh, India.
