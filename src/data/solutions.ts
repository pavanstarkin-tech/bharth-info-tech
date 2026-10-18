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
    id: "solution-showcase-1",
    title: "eCommerce",
    description: "Scalable online stores & retail experiences for modern businesses.",
    image: assets.solutions.part1,
    imageAlt: "Digital solutions showcase part 1",
    ctaText: "Discuss This Solution",
    formServiceValue: "E-commerce Solutions",
  },
  {
    id: "solution-showcase-2",
    title: "Enterprise",
    description: "Robust cloud systems & business automation for large organizations.",
    image: assets.solutions.part2,
    imageAlt: "Digital solutions showcase part 2",
    ctaText: "Discuss This Solution",
    formServiceValue: "Enterprise Solutions",
  },
  {
    id: "solution-showcase-3",
    title: "Industries",
    description: "Customized digital workflows & platforms for diverse industries.",
    image: assets.solutions.part3,
    imageAlt: "Digital solutions showcase part 3",
    ctaText: "Discuss This Solution",
    formServiceValue: "Industry-Specific Solutions",
  },
  {
    id: "solution-showcase-4",
    title: "Startups",
    description: "Turn visionary ideas into market-ready MVPs with rapid iteration.",
    image: assets.solutions.part4,
    imageAlt: "Digital solutions showcase part 4",
    ctaText: "Discuss This Solution",
    formServiceValue: "Startup MVP Development",
  },
  {
    id: "solution-showcase-5",
    title: "Mobile & Web",
    description: "High-performance iOS, Android and web platforms built for scale.",
    image: assets.solutions.part5,
    imageAlt: "Digital solutions showcase part 5",
    ctaText: "Discuss This Solution",
    formServiceValue: "Mobile App Development",
  },
];

