export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  deliveryTime: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  benefits: string[];
  industry: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category?: 'web' | 'mobile' | 'enterprise';
  categoryLabel: string;
  filterCategories?: string[];
  tagline?: string;
  client?: string;
  location?: string;
  image: string;
  imageAlt?: string;
  isConcept?: boolean;
  conceptBadge?: string;
  summary: string;
  challenge: string;
  solution: string;
  keyFeatures?: string[];
  results?: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
