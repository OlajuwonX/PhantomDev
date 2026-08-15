import type { Project } from "@/types/project";

export type ProjectDetail = Project & {
  overview?: string;
  problem?: string;
  solution?: string;
  keyWorkflows?: string[];
  technicalDecisions?: string[];
  performanceConsiderations?: string;
  accessibilityConsiderations?: string;
};

export const projectsDetailed: ProjectDetail[] = [
  {
    slug: "hirelens",
    name: "HireLens",
    category: "AI Product",
    summary:
      "AI-assisted resume analysis and job application workspace for job seekers.",
    description:
      "HireLens helps job seekers optimize their resumes and track applications. Upload a resume, get an ATS score, improvement recommendations, and organize job applications in one dashboard. Built with a focus on responsible AI integration and user privacy.",
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
    image: {
      src: "/hirelens/HireLens.png",
      alt: "HireLens production dashboard with resume analysis, job tracking, and application management",
      width: 1200,
      height: 800,
    },
    overview:
      "HireLens is a production-oriented AI career platform designed to solve the complete job search workflow. Beyond resume analysis, it helps users evaluate job opportunities, manage applications systematically, and generate professional career documents. The platform combines Gemini AI capabilities with structured data management to provide actionable insights throughout the job search process.",
    problem:
      "Job seekers lack a comprehensive platform that combines AI intelligence with practical job search tools. Existing solutions focus narrowly on single aspects (resume review, application tracking) without integrating insights, automation, and role-based access for managing complex workflows at scale.",
    solution:
      "Built a full-featured AI career platform with Gemini-powered analysis, PostgreSQL-backed application tracking, secure authentication, performance optimization with skeleton loading, and comprehensive monitoring with Sentry. Added an internal admin console for operations management and user support.",
    keyWorkflows: [
      "Resume upload and Gemini-powered analysis with detailed feedback",
      "AI-generated career documents (cover letters, profiles, etc.)",
      "Job opportunity evaluation and comparison",
      "Application tracking and status management",
      "User authentication and role-based admin access",
      "Error monitoring and user bug reporting",
    ],
    technicalDecisions: [
      "Used Gemini API for high-quality, production-grade AI analysis instead of building custom models",
      "Chose PostgreSQL with Neon for reliable data persistence and complex queries",
      "Implemented Auth.js for secure, standards-based authentication",
      "Added Sentry for production observability and error tracking",
      "Built route-based skeleton loading to optimize perceived performance",
      "Created internal admin dashboard for operational visibility and support",
    ],
    performanceConsiderations:
      "Implemented route-based skeleton loading to improve perceived performance and perceived navigation speed. Used optimized data fetching with proper caching strategies. Monitored Core Web Vitals and performance metrics through Sentry. Minimized JavaScript bundle size while maintaining feature completeness.",
    accessibilityConsiderations:
      "Ensured proper form labels and error messaging for screen readers. Implemented keyboard navigation throughout the application. Maintained sufficient color contrast for text and interactive elements. Provided clear status updates for AI analysis operations. Tested with multiple assistive technologies.",
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
    overview:
      "ShopVerse demonstrates production-grade ecommerce architecture with a focus on correctness, concurrency, and permission boundaries. The platform separates guest browsing from staff management, with every price and stock decision owned by the server. Payment idempotency handles the webhook/callback race, inventory uses transactional operations, and the audit log captures every sensitive mutation.",
    problem:
      "Most portfolio ecommerce projects skip the hard parts: payment idempotency, inventory concurrency under load, server-owned pricing, and RBAC enforcement. Free-tier deployments face budget constraints. A realistic example was needed that demonstrates these production concerns.",
    solution:
      "Built ShopVerse with transactional inventory operations (no read-then-subtract races), multi-layer idempotency across checkout/payment/provider transaction/fulfillment, and Paystack webhook + browser callback + background reconciliation all converging on one finalization service. Inventory management includes full stock-movement history. Admin RBAC has ~30 granular permissions enforced server-side. Order line-item snapshots preserve historical correctness.",
    keyWorkflows: [
      "Hierarchical, admin-managed categories and collections (manual and rule-based)",
      "Admin-composed homepage with section engine (rails, grids, campaigns, scheduling)",
      "Composable filters with URL state (shareable, back-button-safe, live counts)",
      "Cursor-paginated infinite discovery with IntersectionObserver prefetch",
      "Guest cart with client-only intent (productId, variantId, quantity) → server calculates totals",
      "Inventory reservations with transactional, conditional stock operations",
      "Multi-layer idempotency: checkout → payment ref → provider transaction → fulfillment",
      "Payment and order state machines (never a paid = true boolean)",
      "Webhook + browser callback + background reconciliation on one finalization service",
      "Non-enumerable public order references (SV-A7K92M4P) separate from internal UUIDs",
      "Order line-item snapshots for historical invoice correctness",
      "Backoffice: product editor, inventory with stock-movement history, payments dashboard with reconciliation queue",
      "Staff invitations with hashed, single-use, expiring tokens",
      "Append-only audit log on every sensitive mutation",
      "Analytics: revenue, AOV, conversion funnel, top products, zero-result searches",
    ],
    technicalDecisions: [
      "Used Drizzle ORM with typed schema and migrations for database safety and versioning",
      "Chose Neon PostgreSQL for transactional integrity and concurrent stock operations",
      "Paystack for payments with server-side init and HMAC-SHA512 webhook verification",
      "TanStack Query for client state (infinite queries, polling, optimistic updates)",
      "Cloudinary for media with metadata in Postgres, binaries never in DB",
      "Tag-based cache invalidation (product:{id}, homepage, offers) with hard public/private boundary",
      "HTTP-only session cookies, honeypots, rate limiting, CSP and security headers",
      "Database-backed RBAC: ~30 granular permissions, 6 roles, enforced server-side",
      "Intentionally lean: 8 runtime dependencies total",
    ],
    performanceConsiderations:
      "Layout-matching skeletons and empty states throughout for perceived performance. Cursor pagination with IntersectionObserver prefetch for infinite discovery. Tag-based cache invalidation for immediate consistency without stale data. Cloudinary for responsive image delivery. Debounced global search with suggestions and recent searches.",
    accessibilityConsiderations:
      "WCAG 2.2 AA target throughout. Structured data for SEO (Product schema, BreadcrumbList). Semantic HTML with proper heading hierarchy. Keyboard navigation for filters, cart, and checkout. Sufficient color contrast on all interactive elements. Error boundaries and empty states with clear messaging.",
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
    overview:
      "RabbitMailer is a system design exploration into multi-tenant SaaS architecture. It demonstrates how to build a secure, scalable email platform where each customer's SMTP infrastructure is isolated, data is partitioned safely, and campaign processing scales horizontally.",
    problem:
      "Building multi-tenant systems introduces security challenges: data isolation, resource fairness, and infrastructure scaling. Email delivery adds complexity with rate limiting, retry logic, and failure handling at scale.",
    solution:
      "Implemented a multi-tenant architecture where each tenant has isolated SMTP credentials and database partitioning. Used Bull Queue with Redis for reliable, distributable campaign processing. Built comprehensive rate limiting to prevent system abuse while allowing legitimate volume.",
    keyWorkflows: [
      "Tenant provisioning with SMTP credential generation",
      "Campaign scheduling and queue management",
      "Email delivery with retry logic and dead-letter handling",
      "Delivery metrics and analytics per tenant",
      "Rate limit enforcement across concurrent campaigns",
    ],
    technicalDecisions: [
      "Used Bull Queue instead of raw Redis for reliable job processing with backpressure and retry mechanisms",
      "Implemented database row-level security (RLS) for multi-tenant data isolation at the database level",
      "Chose isolated SMTP per tenant over shared SMTP to avoid single point of failure and ensure deliverability",
      "Built custom rate limiting using Redis sliding window counters for low-latency enforcement",
    ],
    performanceConsiderations:
      "Designed for horizontal scaling by making workers stateless. Used connection pooling for database and Redis to handle thousands of concurrent campaigns. Implemented batch operations to reduce database round trips.",
    accessibilityConsiderations:
      "Accessibility was less relevant for this backend-focused project, but the API is well-documented and follows RESTful conventions for clarity. Error responses provide actionable feedback for integration.",
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
    overview:
      "CloudNest demonstrates mobile-first engineering for iOS and Android using React Native. It showcases how to build a professional mobile application with proper navigation, secure authentication, and responsive design that feels native to each platform.",
    problem:
      "Mobile users need seamless file access across devices. Existing solutions either sacrifice UI quality for cross-platform compatibility or require separate iOS and Android development. React Native offers a middle ground if implemented with platform-specific considerations.",
    solution:
      "Built a cloud storage interface using React Native with Expo. Implemented platform-aware navigation (native stack on iOS, bottom tabs on Android). Designed touch-optimized interactions and file management workflows that feel native to mobile users.",
    keyWorkflows: [
      "User authentication with secure token storage",
      "File upload from device storage",
      "File browsing and organization",
      "Download and file preview",
      "Real-time sync across devices",
    ],
    technicalDecisions: [
      "Used Expo for rapid development without needing native code. Avoided ejecting from Expo to maintain simplicity.",
      "Implemented platform-specific navigation: native stack navigator for iOS, bottom tab navigator for Android",
      "Used secure storage (Expo.SecureStore) for authentication tokens instead of AsyncStorage",
      "Built file management with async/await for readable error handling and proper loading states",
    ],
    performanceConsiderations:
      "Optimized image rendering with proper dimensions for mobile screens. Implemented lazy loading for file lists to prevent memory issues. Used platform-specific storage APIs for efficient file handling.",
    accessibilityConsiderations:
      "Ensured touch targets meet 44pt minimum. Implemented proper accessibility labels for all interactive elements. Tested with screen readers to ensure navigation is understandable. Provided haptic feedback for important actions on supporting devices.",
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
      alt: "CollageCollectives photography portfolio with visual storytelling design",
      width: 1200,
      height: 800,
    },
    overview:
      "CollageCollectives demonstrates how to build a high-performance photography portfolio despite heavy media assets. The site showcases photography as a primary medium while maintaining fast load times and smooth interactions through careful optimization and animation.",
    problem:
      "Photography portfolios often sacrifice performance for visual impact. Large image files, heavy animations, and complex layouts create slow, unresponsive experiences. The challenge was maintaining visual quality while keeping the site fast.",
    solution:
      "Implemented Next.js Image optimization with responsive sizing, modern formats (WebP/AVIF), and lazy loading. Used GSAP for hardware-accelerated animations that respect reduced-motion preferences. Designed layouts that showcase photos without unnecessary decoration.",
    technicalDecisions: [
      "Used Next.js Image component with dynamic sizing for responsive delivery",
      "Implemented GSAP scroll triggers with performance monitoring to ensure 60fps animations",
      "Built image gallery with lazy loading to prevent loading all photos upfront",
      "Used CSS grid for flexible layouts that adapt to different image aspect ratios",
    ],
    performanceConsiderations:
      "Critical: Optimized images with WebP and AVIF formats. Used aggressive caching headers for photos. Implemented intersection observer for true lazy loading. Minimized JavaScript bundle by using CSS animations where possible.",
    accessibilityConsiderations:
      "Ensured all images have meaningful alt text. Implemented keyboard navigation for image galleries. Disabled animations for users with prefers-reduced-motion. Maintained sufficient color contrast for captions.",
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
      alt: "Investa investment landing page with professional design and hierarchy",
      width: 1200,
      height: 800,
    },
    overview:
      "Investa demonstrates professional landing page design for the investment domain. Clear messaging hierarchy, high-quality images, and responsive layout guide visitors toward conversion while maintaining brand trust and credibility.",
    problem:
      "Investment-focused landing pages must balance trustworthiness with engagement. Poor design choices erode credibility. The challenge was creating a polished, professional interface that clearly communicates value and guides toward action.",
    solution:
      "Built a clean landing page with strong visual hierarchy, strategic image placement, and clear CTAs. Optimized all images for fast loading. Used responsive design to maintain professionalism across all screen sizes.",
    keyWorkflows: [
      "Clear value proposition messaging",
      "Feature showcase with supporting imagery",
      "Social proof and testimonials",
      "Call-to-action for investment inquiries",
      "Contact form or appointment scheduling",
    ],
    technicalDecisions: [
      "Used Tailwind CSS for consistent, scalable styling without custom CSS",
      "Optimized hero image with responsive sizes to avoid oversized downloads on mobile",
      "Implemented lazy loading for below-fold images and testimonials",
      "Used semantic HTML for accessibility and SEO benefits",
    ],
    performanceConsiderations:
      "Prioritized hero image as a critical metric. Lazy-loaded testimonial images. Minimized CSS bundle using Tailwind purging. Used lightweight third-party scripts.",
    accessibilityConsiderations:
      "Ensured proper heading hierarchy for screen readers. Implemented keyboard navigation for all interactive elements. Maintained sufficient color contrast for text on backgrounds. Tested with multiple screen readers.",
  },
];

export const getProjectDetailBySlug = (slug: string) =>
  projectsDetailed.find((p) => p.slug === slug);
