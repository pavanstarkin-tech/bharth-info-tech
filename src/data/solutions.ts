import { assets } from "./assets";

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  formServiceValue: string;
}

export const solutionsData: SolutionItem[] = [
  {
    id: "ecommerce-solutions",
    title: "eCommerce",
    description: "Scalable online stores & retail experiences for modern businesses.",
    image: assets.solutions.ecommerce,
    imageAlt: "eCommerce solutions on laptop",
    ctaText: "Discuss This Solution",
    formServiceValue: "E-commerce Solutions",
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise",
    description: "Robust cloud systems & business automation for large organizations.",
    image: assets.solutions.enterprise,
    imageAlt: "Enterprise cloud network analytics",
    ctaText: "Discuss This Solution",
    formServiceValue: "Enterprise Solutions",
  },
  {
    id: "industry-solutions",
    title: "Industries",
    description: "Customized digital workflows & platforms for diverse industries.",
    image: assets.solutions.industry,
    imageAlt: "Modern smart city and urban technology",
    ctaText: "Discuss This Solution",
    formServiceValue: "Industry-Specific Solutions",
  },
  {
    id: "startup-solutions",
    title: "Startups",
    description: "Turn visionary ideas into market-ready MVPs with rapid iteration.",
    image: assets.solutions.startup,
    imageAlt: "Startup team reviewing product prototype",
    ctaText: "Discuss This Solution",
    formServiceValue: "Startup MVP Development",
  },
  {
    id: "mobile-solutions",
    title: "Mobile & Web",
    description: "High-performance iOS, Android and web platforms built for scale.",
    image: assets.services.mobileApp,
    imageAlt: "Mobile and web application development",
    ctaText: "Discuss This Solution",
    formServiceValue: "Mobile App Development",
  },
];

