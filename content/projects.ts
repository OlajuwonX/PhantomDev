import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "hirelens",
    name: "HireLens",
    category: "AI Career Platform",
    summary:
      "Production-oriented AI career platform for resume analysis, job evaluation, application management, and document generation.",
    description:
      "HireLens is an AI-powered job-search platform that helps users analyze and improve resumes, evaluate jobs, manage applications, and generate career documents. Built with Next.js, TypeScript, PostgreSQL, and Gemini, featuring production-focused authentication, validation, observability, performance optimization, and an internal admin system.",
    role: "Full-stack developer",
    status: "Production",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Gemini",
      "Sentry",
      "Auth.js",
      "Zod",
      "Tailwind CSS",
    ],
    highlights: [
      "Gemini-powered resume and career analysis",
      "AI-generated career documents and templates",
      "Job saving and application tracking dashboard",
      "Authentication and role-based admin access",
      "Sentry error monitoring with user bug reporting",
      "Route-based skeleton loading and performance optimization",
    ],
    featured: true,
    kind: "product",
    liveUrl: "https://hirelens-dev.vercel.app/",
  },
  {
    slug: "xquiseat",
    name: "ShopVerse",
    category: "Multi-Category E-Commerce",
    summary:
      "Production-grade multi-category ecommerce platform with server-authoritative purchase pipeline and full RBAC backoffice, built on free tiers.",
    description:
      "ShopVerse is a multi-category ecommerce platform (electronics, fashion, furniture, beauty, gaming) built with Next.js 16, React 19, and Drizzle ORM. Features guest checkout with server-owned pricing, inventory transactions, payment idempotency, admin-managed catalogue, and granular RBAC. Deployed on Vercel with only 8 runtime dependencies.",
    role: "Full-stack developer",
    status: "In progress",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL/Neon",
      "Drizzle ORM",
      "TanStack Query",
      "Paystack",
      "Cloudinary",
      "Tailwind CSS v4",
    ],
    highlights: [
      "Guest checkout with server-owned pricing and inventory reservations",
      "Multi-layer idempotency: checkout → payment reference → provider transaction → fulfillment",
      "Admin-managed categories, collections, and homepage section engine",
      "~30 granular permissions, 6 roles, database-backed RBAC",
      "Composable filters with URL state, cursor-paginated infinite discovery",
      "Append-only audit log on every sensitive mutation",
    ],
    featured: true,
    kind: "product",
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
    summary:
      "Visual storytelling and photography portfolio with smooth animations.",
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
    liveUrl: "https://collagecollectives.vercel.app/",
    image: {
      src: "/collagecollectives/collagecollectives-1.png",
      alt: "CollageCollectives photography portfolio homepage",
      width: 1440,
      height: 900,
    },
  },
  {
    slug: "investa",
    name: "Investa",
    category: "Investment Landing Page",
    summary:
      "Clean, polished investment-themed landing page with strong hierarchy.",
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
    liveUrl: "https://inve-sta.vercel.app/",
    image: {
      src: "/investa/Screenshot 2026-08-07 054825.png",
      alt: "Investa investment landing page interface",
      width: 1440,
      height: 900,
    },
  },
];

export const getFeaturedProducts = () =>
  projects.filter((p) => p.featured && p.kind === "product");

export const getFeaturedInterfaces = () =>
  projects.filter((p) => p.featured && p.kind === "interface");

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getCaseStudySlugs = () =>
  projects.filter((p) => p.kind === "product").map((p) => p.slug);

export const getAllSlugs = getCaseStudySlugs;
