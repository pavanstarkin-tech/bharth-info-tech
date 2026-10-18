import { assets } from "./assets";

export interface CompanyConfig {
  name: string;
  tagline: string;
  supportingStatement: string;
  location: string;
  locationMapUrl: string;
  phone: string;
  email: string;
  logo: string;
  logoWhite: string;
  stats: {
    projects: string;
    clients: string;
    solutions: string;
    experience: string;
  };
  socials: {
    linkedin: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
  hasValidPhone: boolean;
  hasValidEmail: boolean;
}

export const company: CompanyConfig = {
  name: "Bharat Intelli Tech Systems",
  tagline: "Building Mobile Applications for a Smarter Tomorrow",
  supportingStatement: "Websites | Mobile Apps | Custom Business Solutions",
  location: "Amaravati, Andhra Pradesh, India",
  locationMapUrl: "https://www.google.com/maps/search/?api=1&query=Amaravati,+Andhra+Pradesh,+India",
  phone: "+91 98765 43210",
  email: "info@bharatintellitech.com",
  logo: assets.logo,
  logoWhite: assets.logoWhite,
  stats: {
    projects: "200+",
    clients: "100+",
    solutions: "50+",
    experience: "5+",
  },
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  hasValidPhone: true,
  hasValidEmail: true,
};
