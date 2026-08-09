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
    company: "PolicyCortex",
    role: "Frontend Software Engineer",
    period: "Nov 2025 – Present",
    description:
      "Own the end-to-end frontend architecture for a multi-cloud FinOps SaaS platform. Partner with backend engineers to design API contracts, dashboards for Azure spend tracking, anomaly detection, and budget forecasting across cloud tenants.",
    highlights: [
      "Migrated chart library to ApexCharts, improving rendering performance by 30%+",
      "Replaced WebSockets with TanStack Query, reducing API calls by 35% and improving data retrieval by 25%+",
      "Established Playwright testing standards with 20+ test suites, reducing regression defects by 40%",
    ],
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "ApexCharts",
      "Playwright",
    ],
  },
  {
    company: "Orvyn Media",
    role: "Frontend Developer",
    period: "Jan 2024 – Oct 2025",
    description:
      "Architected performant React applications across 5+ client projects. Led discovery sessions with founders and stakeholders to translate business requirements into scalable digital products. Optimized Core Web Vitals and improved SEO across all projects.",
    highlights: [
      "Consistently achieved sub-2-second load times through lazy loading and code splitting",
      "Improved Core Web Vitals and Lighthouse scores through bundle optimization and image delivery",
      "Integrated Paystack payment APIs, reducing failed transactions through robust error handling",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    company: "Techinnators",
    role: "Frontend Developer Intern",
    period: "Dec 2022 – Nov 2023",
    description:
      "Developed responsive, accessible UIs for production applications in a startup environment. Collaborated with senior engineers, designers, and product managers throughout Agile cycles, contributing to feature builds, testing, and releases.",
    highlights: [
      "Built production UIs using React, TypeScript, and Tailwind CSS",
      "Participated in code reviews, sprint planning, and QA processes",
      "Strengthened engineering best practices across releases",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
];
