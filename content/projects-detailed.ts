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
    overview:
      "HireLens addresses a critical gap in the job search process: ATS (Applicant Tracking System) rejection. Many qualified candidates never get human review because their resumes fail ATS screening. HireLens solves this by analyzing resumes against job descriptions before submission, surfacing keyword gaps and formatting issues that would cause rejection.",
    problem:
      "Job seekers face high rejection rates due to ATS systems that filter out naturally-written resumes. Without feedback, candidates don't know why they're rejected or how to improve their approach.",
    solution:
      "Built a real-time resume scoring engine that evaluates CVs against job descriptions, provides gap analysis, and generates actionable recommendations. The system integrates with AI APIs to understand job requirements and surface critical mismatches before submission.",
    keyWorkflows: [
      "Resume upload and parsing",
      "Job description analysis via AI",
      "Real-time ATS compatibility scoring",
      "Gap analysis and recommendations",
      "Application tracking dashboard",
    ],
    technicalDecisions: [
      "Used Puter.js for sandboxed code execution instead of server-side processing to reduce backend load",
      "Implemented Zod validation on both client and server for form and API security",
      "Chose streaming response architecture to provide real-time feedback during analysis",
    ],
    performanceConsiderations:
      "Optimized large file processing by streaming analysis results instead of waiting for complete processing. Implemented debouncing on input fields to prevent excessive API calls. Lazy-loaded heavy dependencies only when needed.",
    accessibilityConsiderations:
      "Ensured form labels are properly connected to inputs. Implemented ARIA live regions for real-time analysis feedback. Provided clear error messages and validation states. Tested keyboard navigation throughout the application.",
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
    overview:
      "Xquiseat demonstrates a complete e-commerce system designed for the food delivery domain. The platform enables restaurants to list products, manage inventory, process orders, and track fulfillment—while providing customers with a seamless discovery, cart, and checkout experience.",
    problem:
      "Small and medium restaurants lack affordable digital ordering solutions. Existing platforms charge prohibitive commissions, limiting adoption. A modern, affordable platform was needed that prioritizes restaurant control and customer experience.",
    solution:
      "Built a full-stack food delivery platform with independent restaurant management, flexible product cataloguing, and secure payment processing. The architecture separates customer experience from restaurant administration, enabling independent scaling.",
    keyWorkflows: [
      "Product catalogue management with filtering and search",
      "Shopping cart with quantity management",
      "Secure checkout and payment processing",
      "Order tracking and fulfillment",
      "Restaurant admin dashboard for analytics",
    ],
    technicalDecisions: [
      "Chose PostgreSQL for relational data (restaurants, orders, products) with transactional integrity",
      "Integrated Stripe for payment processing with proper webhook handling for order confirmation",
      "Implemented server-side rendering for initial page load to improve search visibility",
      "Used Next.js middleware for role-based access control between customer and admin interfaces",
    ],
    performanceConsiderations:
      "Optimized product catalogue queries with pagination and caching. Reduced checkout friction by pre-loading payment form. Implemented lazy-loading for restaurant images to speed up initial page load.",
    accessibilityConsiderations:
      "Ensured form accessibility with proper labels and error announcements. Implemented keyboard navigation for product filtering and cart operations. Maintained sufficient color contrast for product pricing and status information.",
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
