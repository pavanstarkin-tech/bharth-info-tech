import { assets } from "./assets";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  portrait: string;
  portraitAlt: string;
  quote: string;
  stars: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-ravi",
    name: "Ravi Teja",
    role: "Business Owner, Vijayawada",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format&q=80",
    portraitAlt: "Ravi Teja portrait",
    quote: "Bharat Intelli Tech Systems delivered an amazing website for our business. Professional, creative, and always supportive!",
    stars: 5,
  },
  {
    id: "testimonial-sneha",
    name: "Sneha Reddy",
    role: "Startup Founder, Amaravati",
    portrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&auto=format&q=80",
    portraitAlt: "Sneha Reddy portrait",
    quote: "Our mobile app idea became a reality with their expert team. They truly understand business needs.",
    stars: 5,
  },
  {
    id: "testimonial-mahesh",
    name: "Mahesh Kumar",
    role: "Managing Director, Guntur",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&auto=format&q=80",
    portraitAlt: "Mahesh Kumar portrait",
    quote: "Excellent team and great support. Our custom software solution has improved our operational efficiency significantly.",
    stars: 5,
  },
];
