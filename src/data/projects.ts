import { assets } from "./assets";

export interface ProjectItem {
  id: string;
  title: string;
  categoryLabel: string;
  filterCategories: string[];
  summary: string;
  image: string;
  imageAlt: string;
  isConcept: boolean;
  conceptBadge: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "tourism-travel-portal",
    title: "Tourism & Travel Portal",
    categoryLabel: "Website • Mobile App",
    filterCategories: ["Websites", "Mobile Apps"],
    summary: "A responsive tourism and travel destination platform featuring rich interactive maps, booking inquiries, and localized travel guides.",
    image: assets.projects.tourism,
    imageAlt: "Tourism and travel platform mockup on desktop and mobile",
    isConcept: true,
    conceptBadge: "REPRESENTATIVE PROJECT CONCEPT",
    challenge: "Travelers exploring regional heritage need an intuitive, fast portal with seamless mobile reservation workflows and responsive itineraries.",
    solution: "A unified responsive web and mobile application with destination discoverability, high-performance image optimization, and instant inquiry messaging.",
    keyFeatures: [
      "Dynamic destination search and filtering",
      "Interactive map overlays and route guides",
      "Direct inquiry and scheduling module",
      "Optimized offline-first progressive views",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "MapLibre GL", "Node.js"],
  },
  {
    id: "ecommerce-platform",
    title: "eCommerce Platform",
    categoryLabel: "Website • Mobile App",
    filterCategories: ["Websites", "Business Solutions"],
    summary: "Modern online retail platform featuring intuitive product discovery, shopping cart, secure payments, and back-office order tracking.",
    image: assets.projects.ecommerce,
    imageAlt: "eCommerce platform mockup on desktop and mobile",
    isConcept: true,
    conceptBadge: "REPRESENTATIVE PROJECT CONCEPT",
    challenge: "Fast-growing retail businesses need an agile digital storefront that handles flash inventory spikes and multi-provider checkout without friction.",
    solution: "A modern headless commerce architecture with ultra-fast search indexing, secure multi-channel checkout, and an integrated merchant dashboard.",
    keyFeatures: [
      "Faceted product discovery & live search",
      "Instant checkout with UPI, Card & NetBanking",
      "Automated stock & order status notifications",
      "Customer account hub with saved wishlists",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Razorpay / Stripe API"],
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    categoryLabel: "Website • Mobile App",
    filterCategories: ["Websites", "Business Solutions"],
    summary: "Property discovery and inquiry platform helping buyers and investors explore verified listings, virtual blueprints, and agent consultations.",
    image: assets.projects.realEstate,
    imageAlt: "Real estate property platform mockup on desktop and mobile",
    isConcept: true,
    conceptBadge: "REPRESENTATIVE PROJECT CONCEPT",
    challenge: "Property buyers and agents in developing capital regions face fragmented listings, inconsistent property specs, and clumsy inquiry tracking.",
    solution: "A verified real estate portal with interactive floor plans, neighborhood amenity cards, agent direct routing, and high-res photo showcases.",
    keyFeatures: [
      "Location and price range parametric filter",
      "Interactive floor plan and amenity cards",
      "Scheduled property visit coordinator",
      "Direct agent WhatsApp & phone routing",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Images", "REST API"],
  },
  {
    id: "healthcare-solution",
    title: "Healthcare Solution",
    categoryLabel: "Web Application • Mobile App",
    filterCategories: ["Mobile Apps", "Business Solutions"],
    summary: "Patient-centric medical platform focused on verified doctor appointment booking, teleconsultations, and digital prescription tracking.",
    image: assets.projects.healthcare,
    imageAlt: "Healthcare solution mockup on desktop and mobile",
    isConcept: true,
    conceptBadge: "REPRESENTATIVE PROJECT CONCEPT",
    challenge: "Clinics and patient communities experience high call center loads, missed appointments, and cumbersome record access for follow-up consultations.",
    solution: "A cross-platform mobile and web application allowing patients to search verified specialists, reserve timed appointment slots, and access digital prescriptions securely.",
    keyFeatures: [
      "Real-time specialist calendar availability",
      "SMS & push reminder notification triggers",
      "Digital consultation summary & uploads",
      "Teleconsultation video link generation",
    ],
    techStack: ["React Native", "React", "TypeScript", "Tailwind CSS", "Node.js", "WebRTC"],
  },
];
