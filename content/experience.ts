export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies?: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Orvyn Media",
    role: "Contract Web Developer",
    period: "2023 – 2024",
    description:
      "Built a professional portfolio website for a social media manager. Multi-page site showcasing services, pricing, and client inquiries with a custom contact flow.",
    highlights: [
      "Designed and developed a multi-page responsive website",
      "Implemented contact form with client inquiry tracking",
      "Optimized for conversion and client acquisition",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "PolicyCortex",
    role: "Frontend Engineer",
    period: "2023",
    description:
      "Contributed to insurance policy management platform focusing on user interface and frontend architecture.",
    highlights: [
      "Built responsive UI components for policy management",
      "Improved application performance and load times",
      "Implemented accessible form flows and validation",
    ],
    technologies: ["React", "TypeScript", "REST APIs"],
  },
  {
    company: "Self-Employed / Projects",
    role: "Full-Stack Developer",
    period: "2022 – Present",
    description:
      "Built multiple SaaS products and web applications. Working across frontend, backend, and deployment.",
    highlights: [
      "HireLens: AI-assisted resume analysis platform",
      "XquisEat: E-commerce food delivery application",
      "RabbitMailer: Multi-tenant email SaaS platform",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "React Native"],
  },
];
