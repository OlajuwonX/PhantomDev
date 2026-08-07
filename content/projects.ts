import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "hirelens",
    name: "HireLens",
    category: "AI Product",
    summary:
      "AI-assisted resume analysis and job application workspace for job seekers.",
    description:
      "HireLens helps job seekers optimize their resumes and track applications. Upload a resume, get an ATS score, improvement recommendations, and organize job applications in one dashboard. Built with a focus on responsible AI integration and user privacy.",
    role: "Full-stack developer",
    status: "In active development",
    stack: ["Next.js", "TypeScript", "Puter.js", "Zod", "Tailwind CSS"],
    highlights: [
      "AI-powered resume analysis with actionable feedback",
      "Application tracking and organization dashboard",
      "Responsive interface across mobile and desktop",
    ],
    featured: true,
    kind: "product",
    liveUrl: "https://hire-lens-phi.vercel.app/",
  },
  {
    slug: "xquiseat",
    name: "Xquiseat",
    category: "E-Commerce Platform",
    summary:
      "Full-stack food delivery platform with restaurant management and customer checkout.",
    description:
      "Xquiseat is a complete e-commerce platform for food delivery. Features include restaurant catalogues, product filtering, shopping cart, order checkout, and admin dashboard for restaurant operations. Currently undergoing Next.js migration from React foundation.",
    role: "Full-stack developer",
    status: "Rebuild in progress",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    highlights: [
      "Full e-commerce workflow: catalogue, cart, checkout",
      "Restaurant admin dashboard for order management",
      "Responsive product discovery and filtering",
    ],
    featured: true,
    kind: "product",
    liveUrl: "https://xquiseat.pages.dev/",
  },
  {
    slug: "rabbitmailer",
    name: "RabbitMailer",
    category: "SaaS Platform",
    summary:
      "Multi-tenant bulk email SaaS with SMTP isolation and campaign management.",
    description:
      "RabbitMailer is a multi-tenant email marketing platform designed for security and reliability. Features include isolated SMTP servers per tenant, campaign state management, worker queue architecture, and comprehensive rate limiting. Built as an internal architecture project to explore system design and scalability patterns.",
    role: "Backend architecture & infrastructure",
    status: "Internal architecture project",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Bull Queue"],
    highlights: [
      "Multi-tenant architecture with SMTP isolation per tenant",
      "Worker-based campaign processing with queues",
      "Rate limiting and security-aware system design",
    ],
    featured: true,
    kind: "product",
  },
  {
    slug: "cloudnest",
    name: "CloudNest",
    category: "Mobile Application",
    summary:
      "React Native mobile app for cloud storage and file management built with Expo.",
    description:
      "CloudNest is a React Native application built with Expo for iOS and Android. Demonstrates mobile-first engineering including navigation patterns, authentication flows, API integration, and responsive mobile UI. Designed to explore mobile development approaches and platform-specific considerations.",
    role: "Mobile engineer",
    status: "Mobile product",
    stack: ["React Native", "Expo", "TypeScript", "REST APIs"],
    highlights: [
      "Native mobile navigation and authentication flows",
      "API-driven content and file management",
      "Touch-optimized interface design",
    ],
    featured: true,
    kind: "product",
  },
  {
    slug: "collagecollectives",
    name: "CollageCollectives",
    category: "Photography Portfolio",
    summary: "Visual storytelling and photography portfolio with smooth animations.",
    description:
      "CollageCollectives is a high-performance photography portfolio emphasizing visual storytelling, responsive media handling, and smooth interaction design. Built to showcase photography while maintaining fast load times despite heavy image and video assets.",
    status: "Live",
    stack: ["Next.js", "GSAP", "Image optimization"],
    highlights: [
      "Visual storytelling and photography presentation",
      "Smooth animations with GSAP and reduced-motion support",
      "Optimized media delivery on all devices",
    ],
    featured: true,
    kind: "interface",
    liveUrl: "https://collage-collectives.vercel.app/",
  },
  {
    slug: "investa",
    name: "Investa",
    category: "Investment Landing Page",
    summary: "Clean, polished investment-themed landing page with strong hierarchy.",
    description:
      "Investa is a professional investment landing page demonstrating clean UI design, strong visual hierarchy, fast image loading, and responsive implementation. Showcases polished interaction design and investment-focused messaging.",
    status: "Live",
    stack: ["Next.js", "Tailwind CSS", "Image optimization"],
    highlights: [
      "Investment-focused visual hierarchy and messaging",
      "Fast image loading and responsive media",
      "Polished interface and interaction design",
    ],
    featured: true,
    kind: "interface",
    liveUrl: "https://investa.vercel.app/",
  },
];

export const getFeaturedProducts = () =>
  projects.filter((p) => p.featured && p.kind === "product");

export const getFeaturedInterfaces = () =>
  projects.filter((p) => p.featured && p.kind === "interface");

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getAllSlugs = () => projects.map((p) => p.slug);
