import { assets } from "./assets";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  ctaText: string;
  formServiceValue: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    title: "Website Development",
    description: "Modern, responsive and high-performance websites to grow your business online.",
    image: assets.services.website,
    imageAlt: "Website development in modern workspace",
    features: [
      "Corporate websites",
      "Landing pages",
      "E-commerce websites",
      "Web applications",
    ],
    ctaText: "Explore Website Development",
    formServiceValue: "Website Development",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Feature-rich Android & iOS apps built for real impact and user engagement.",
    image: assets.services.mobileApp,
    imageAlt: "Mobile app interface on smartphone",
    features: [
      "Android applications",
      "iOS applications",
      "Cross-platform apps",
      "API integration",
    ],
    ctaText: "Explore Mobile Apps",
    formServiceValue: "Mobile App Development",
  },
  {
    id: "custom-business-solutions",
    title: "Custom Business Solutions",
    description: "Tailored software solutions to solve your unique business challenges.",
    image: assets.services.customSoftware,
    imageAlt: "Custom software architecture collaboration",
    features: [
      "Business automation",
      "Admin dashboards",
      "CRM integrations",
      "Reporting systems",
    ],
    ctaText: "Discuss Your Requirements",
    formServiceValue: "Custom Business Solutions",
  },
];
