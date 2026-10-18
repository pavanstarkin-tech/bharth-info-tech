/**
 * Centralized Asset Manifest
 * Bharat Intelli Tech Systems
 *
 * Configured with user-supplied high-resolution assets:
 * - Hero: Amaravati Golden Waterfront Vision
 * - Logo: Bharat Intelli Tech Corporate Logo
 * - Services: services-web, serv-app, serv-custom
 * - Our Work: ourwork (1)-(4)
 * - About Us: Bharat Intelli Tech Riverside Campus
 * - Contact Us: Twilight Riverfront Skyline with Illuminated Bridge
 */

const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
const asset = (path: string) => `${base}${path.startsWith("/") ? "" : "/"}${path}`;

export const assets = {
  // Brand Logo
  logo: asset("/images/bharat-intelli-tech-logo.png"),
  logoWhite: asset("/images/bharat-intelli-tech-logo-white.png"),
  emblem: asset("/images/b-emblem.png"),

  // Hero Section
  hero: asset("/images/hero-golden-waterfront.webp"),
  heroBgFull: asset("/images/hero-golden-waterfront.webp"),
  heritage: asset("/images/amaravati-heritage.webp"),

  // Services (3 Large Cards)
  services: {
    website: asset("/images/service-website.webp"),
    mobileApp: asset("/images/service-mobile-app.webp"),
    customSoftware: asset("/images/service-custom-software.webp"),
  },

  // Solutions (4 Cards)
  solutions: {
    ecommerce: asset("/images/sol-ecommerce.webp"),
    enterprise: asset("/images/sol-enterprise.webp"),
    startup: asset("/images/sol-startup.webp"),
    industry: asset("/images/sol-industry.webp"),
  },

  // Our Work (4 Device Mockup Cards)
  projects: {
    tourism: asset("/images/ourwork-1.webp"),
    ecommerce: asset("/images/ourwork-2.webp"),
    realEstate: asset("/images/ourwork-3.webp"),
    healthcare: asset("/images/ourwork-4.webp"),
  },

  // About Us
  about: asset("/images/about-riverside-campus.webp?v=2"),
  values: {
    innovation: asset("/images/val-innovation.webp"),
    clientFirst: asset("/images/val-client.webp"),
    quality: asset("/images/val-quality.webp"),
    amaravati: asset("/images/val-amaravati.webp"),
  },

  // Why Businesses Choose Us
  whyChooseBg: asset("/images/why-choose-bg.webp"),

  // Contact Us Section
  contact: asset("/images/contact-twilight-skyline.webp"),

  // Testimonials (3 Client Portraits)
  testimonials: {
    client1: asset("/images/testi-ravi.webp"),
    client2: asset("/images/testi-sneha.webp"),
    client3: asset("/images/testi-mahesh.webp"),
  },

  // Footer Heritage Sketch
  footerSketch: asset("/images/footer-heritage-sketch.png"),
  socialPreview: asset("/images/hero-golden-waterfront.webp"),
};

