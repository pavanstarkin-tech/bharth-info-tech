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

  // Solutions (5 Cropped Parts from Bharat IntelliTech Digital Solutions Showcase)
  solutions: {
    part1: asset("/images/solution-showcase-1.webp?v=1"),
    part2: asset("/images/solution-showcase-2.webp?v=1"),
    part3: asset("/images/solution-showcase-3.webp?v=1"),
    part4: asset("/images/solution-showcase-4.webp?v=1"),
    part5: asset("/images/solution-showcase-5.webp?v=1"),
    ecommerce: asset("/images/solution-showcase-1.webp?v=1"),
    enterprise: asset("/images/solution-showcase-2.webp?v=1"),
    industry: asset("/images/solution-showcase-3.webp?v=1"),
    startup: asset("/images/solution-showcase-4.webp?v=1"),
    mobile: asset("/images/solution-showcase-5.webp?v=1"),
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

