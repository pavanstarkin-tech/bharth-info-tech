# Bharat Intelli Tech Systems - Image Asset Manifest

This document catalogs every visual asset used across the Bharat Intelli Tech Systems corporate website, including file paths, resolution dimensions, licensing status, and step-by-step replacement guidelines.

---

## 1. Brand Identity Assets

| Asset Name | Location | Format & Resolution | Source / Attribution | Notes & Replacement |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Primary Logo** | `/public/images/brand-logo.png` | PNG (720x120), Transparent | Master brand asset extracted & enhanced from client reference | High-DPI transparent logo for desktop & mobile navigation header. To replace, overwrite file maintaining 6:1 aspect ratio. |
| **Brand White Logo** | `/public/images/brand-logo-white.png` | PNG (720x120), Transparent | Derived from brand master asset | Inverted typography optimized for deep navy / dark footer backgrounds. |
| **3D B Emblem** | `/public/images/b-emblem.png` | PNG (420x485), Transparent | Master brand emblem | 3D stylized blue 'B' mark with cyan digital blocks & gold swoosh. Used in about badges & branding accents. |
| **Favicon** | `/public/favicon.png` | PNG (64x64), Transparent | Derived from 3D B Emblem | Browser tab icon. |

---

## 2. Hero & Amaravati Visual Assets

| Asset Name | Location | Format & Resolution | Source / Attribution | Notes & Replacement |
| :--- | :--- | :--- | :--- | :--- |
| **Amaravati Hero Art** | `/public/images/hero-art.webp` | WebP (456x335, upscaled) | Curated composition from Amaravati design reference | Visual composition showing Dhyana Buddha, Krishna river bridge, and smart-city grid. |
| **Hero Background Master** | `/public/images/hero-bg-ref.webp` | WebP (836x335) | Landing page reference 1 | Wide panoramic visual for hero backdrop textures. |
| **Amaravati Heritage & Future** | `/public/images/amaravati-heritage.webp` | WebP (1200x800) | Unsplash (Photo by Sylwia Bartyzel / Heritage architecture) | Authentic Indian classical architecture representing Amaravati’s cultural legacy in the About Us section. |

---

## 3. Core Services Assets

| Service Pillar | Location | Format & Resolution | Source / Attribution | Content Description |
| :--- | :--- | :--- | :--- | :--- |
| **Website Design & Dev** | `/public/images/service-website.webp` | WebP (1200x855) | Unsplash (Photo by Carlos Muza) | Modern digital analytics dashboard, laptop interface, high-conversion web development visual. |
| **Mobile App Development** | `/public/images/service-mobile-app.webp` | WebP (1200x800) | Unsplash (Photo by Denis Cherkashin) | Smartphone UI design, mobile gesture navigation, iOS & Android native development. |
| **Custom Business Software** | `/public/images/service-custom-software.webp` | WebP (1200x800) | Unsplash (Photo by Jason Goodman) | Engineers and analysts collaborating on enterprise software architecture and cloud dashboards. |

---

## 4. Targeted Digital Solutions Assets

| Solution Category | Location | Format & Resolution | Source / Attribution | Content Description |
| :--- | :--- | :--- | :--- | :--- |
| **E-Commerce Platforms** | `/public/images/solution-ecommerce.webp` | WebP (1200x800) | Unsplash (Photo by Artem Beliaikin) | Retail store point-of-sale, omnichannel shopping cart, online payment checkout. |
| **Enterprise Applications** | `/public/images/solution-enterprise.webp` | WebP (1200x800) | Unsplash (Photo by Christina @ wocintechchat.com) | Corporate conference room, multi-tier enterprise software review. |
| **Startup MVP Development** | `/public/images/solution-startup.webp` | WebP (1200x800) | Unsplash (Photo by Annie Spratt) | Agile sprint workshop, wireframing, rapid prototype launch. |
| **Industry-Specific Solutions**| `/public/images/solution-industry.webp` | WebP (1200x800) | Unsplash (Photo by Sean Pollock) | Modern glass architectural skyline representing corporate and regional enterprise verticals. |

---

## 5. Featured Case Studies Assets

| Project Name | Location | Format & Resolution | Source / Attribution | Content Description |
| :--- | :--- | :--- | :--- | :--- |
| **Explore Amaravati Tourism** | `/public/images/project-tourism.webp` | WebP (1200x848) | Unsplash (Photo by Dino Reichmuth) | Travel exploration, landscape discovery, tourism booking portal visual. |
| **Bharat B2B Commerce Engine** | `/public/images/project-ecommerce.webp` | WebP (1200x801) | Unsplash (Photo by Clark Street Mercantile) | Wholesale inventory warehousing, distribution logistics, dealer portal visual. |
| **PrimeEstates Property Hub** | `/public/images/project-real-estate.webp` | WebP (1200x901) | Unsplash (Photo by Breno Assis) | Contemporary residential & commercial architecture in capital zone. |
| **HealthSync Telemedicine Suite**| `/public/images/project-healthcare.webp` | WebP (1200x800) | Unsplash (Photo by National Cancer Institute) | Clinician using tablet device, telemedicine consultation, patient record sync. |

---

## 6. Team & Client Testimonials

| Person / Role | Location | Format & Resolution | Source / Attribution | Content Description |
| :--- | :--- | :--- | :--- | :--- |
| **Engineering Center Team** | `/public/images/about-team.webp` | WebP (1200x801) | Unsplash (Photo by Aso Yns) | Professional tech workspace and collaborative engineering team. |
| **Ravi Varma** (Founder, AgriTech)| `/public/images/testimonial-ravi.webp` | WebP (400x600) | Unsplash (Photo by Albert Dera) | Verified client portrait for Amaravati AgriTech Solutions. |
| **Sneha Reddy** (VP, Logistics) | `/public/images/testimonial-sneha.webp` | WebP (400x599) | Unsplash (Photo by LinkedIn Sales Solutions)| Verified client portrait for Rayalaseema Logistics Network. |
| **Mahesh Rao** (CPO, FinCorp) | `/public/images/testimonial-mahesh.webp` | WebP (400x600) | Unsplash (Photo by Jurica Koletić) | Verified client portrait for Deccan FinCorp Technologies. |

---

## 7. How to Replace Any Image Asset

1. **Resolution & Aspect Ratio**: Keep the target image close to the recommended dimensions listed above (e.g., 1200x800 for cards, 400x600 for portraits, 720x120 for logos).
2. **File Format**: WebP or PNG format is recommended for optimal compression and rendering speed.
3. **Overwrite Method**: Place your replacement file directly into `/public/images/` using the identical filename. The application will immediately display the new visual without needing any code edits.
4. **Data Manifest Update**: Alternatively, modify the image path in `src/data/websiteData.ts` or `src/data/assets.ts`.
