export const legacyNavigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
] as const;

export const legacyServices = [
  {
    name: "Landing Pages",
    description:
      "I craft beautiful, conversion-focused landing pages tailored to match each brand's identity and the client's goals. A landing page is designed to capture attention, deliver value quickly, and drive action.",
    listHeader: "What it does for a brand:",
    list: [
      "Establishes a strong first impression.",
      "Showcases your brand's unique value.",
      "Builds trust through clarity and design.",
      "Increases conversions and engagement.",
    ],
  },
  {
    name: "Full Websites/WebApps",
    description:
      "I build complete, multi-page websites tailored to your brand and audience, ensuring every page is aligned with your goals. From design to functionality, each feature is crafted to suit your specific needs, whether it's selling products, sharing content, or managing users.",
    listHeader: "What It Includes:",
    list: [
      "E-Commerce Stores - product catalogs, shopping carts, payment integration.",
      "Blogs & Content Platforms - articles, categories, tags, comments",
      "Business Websites - services, portfolios, testimonials, contact forms.",
      "Analytics, SEO optimization, and integrations with third-party tools.",
      "Admin panel for managing content, products, or users.",
    ],
  },
  {
    name: "Portfolio Websites",
    description:
      "Showcase your work, achievements, and skills in a sleek and professional way. Perfect for creatives, freelancers, and businesses that want to make an impression online.",
    listHeader: "What It Includes:",
    list: [
      "Custom design tailored to your personal or business brand.",
      "Project galleries with images, videos, or case studies.",
      "About sections, services, testimonials, and contact forms.",
      "SEO-friendly setup for visibility.",
      "Integration with LinkedIn, Behance, GitHub, or other platforms.",
    ],
  },
  {
    name: "Maintenance & Support",
    description:
      "I provide ongoing support to keep your site fast, secure, and up-to-date. This ensures your online presence stays relevant and functional.",
    listHeader: "What It Covers:",
    list: [
      "Bug fixes and troubleshooting.",
      "Content and product updates.",
      "Regular backups and security patches.",
      "Performance optimization (speed & SEO).",
      "Integration of new features when needed.",
    ],
  },
] as const;

export const legacyTestimonials = [
  {
    quote:
      "His growth has been remarkably sharp, fast, and focused. He has a strong grasp of modern development practices, and I'd be excited to collaborate with him on deployment and CI/CD processes.",
    name: "Olayinka Olasimbo",
    title: "Senior DevOps Engineer at Citi-Bank",
  },
  {
    quote:
      "Building Orvyn Media was seamless, he made communication smooth, transparent, and efficient. His professionalism and creativity are why we retained him as our contract web developer",
    name: "Mr Dami",
    title: "Founder Orvyn Media",
  },
  {
    quote:
      "His intuitive frontend logic and eye for detail made our project seamless. Working with him is inspiring, and I look forward to building more products together.",
    name: "Chidera Obinna",
    title: "Full Stack Developer at DevFolio",
  },
  {
    quote:
      "I came across his gym landing page and was immediately impressed. The visual storytelling, fluid design, and responsiveness felt premium. After reviewing the code, I knew I had to reach out.",
    name: "Daniel Ogunleye",
    title: "Backend Developer at CoreStack Systems",
  },
] as const;

export const legacyAbout = [
  "I'm Olajuwon, a software developer with 3+ years of building everything from sleek landing pages to functional e-commerce platforms. Coding is where I feel at home. I enjoy creating smooth user interfaces, connecting APIs, and making sure products don't just exist but actually work well for people.",
  "My background in Quantity Surveying shaped the way I work, it taught me discipline, attention to detail, and the importance of seeing every project from start to finish. I learned to approach problems with structure, to think in terms of both the small details and the bigger picture, and to stay focused on delivering results that actually work in practice. These lessons have carried over into my journey as a developer, where I apply the same mindset to writing clean code, designing user-friendly interfaces, and building products that people can trust.",
  "I'm always curious to learn new tools and technologies, and I enjoy working with people who share the same excitement for building things. I believe the best work happens when ideas are shared and turned into something real. Weakness? I can be a perfectionist with design details, if something feels off, I'll keep at it until it's right. The good side of that is I rarely put out unfinished work.",
] as const;

export const legacyProjects = [
  {
    name: "HireLens",
    description:
      "HireLens makes your resume work smarter. Upload your CV, get an ATS score, a summary, and tailored recommendations to improve it-all in minutes. It is perfect for job seekers aiming to stand out.",
    link: "https://hire-lens-phi.vercel.app/",
    images: ["/hl1.png", "/hl2.png", "/hl3.png"],
  },
  {
    name: "Orvyn Media",
    description:
      "I built Orvyn Media, a sleek portfolio website for a social media manager. It features multiple pages to showcase services and pricing, clean modern UI design, and a contact page that collects client inquiries.",
    link: "https://www.orvynmedia.com/",
    images: ["/orvyn1.png", "/orvyn2.png", "/orvyn3.png", "/orvyn4.png"],
  },
  {
    name: "XquisEat",
    description:
      "XquisEat is a food delivery web app built with e-commerce functionality for restaurants and customers. It includes filtering, cart quantity controls, order summary, and checkout flow.",
    link: "https://xquiseat.pages.dev/",
    images: [
      "/xquis1.png",
      "/xquis2.png",
      "/xquis3.png",
      "/xquis4.png",
      "/xquis5.png",
      "/xquis6.png",
    ],
  },
  {
    name: "Linka",
    description:
      "Linka is a real-time messaging project with websocket/socket.io experiments, image sending, profile image upload, online indicators, and authentication.",
    link: "https://chatapp-84n6.onrender.com/",
    images: [
      "/chat1.png",
      "/chat2.png",
      "/chat3.png",
      "/chat4.png",
      "/chat5.png",
    ],
  },
  {
    name: "Xpay",
    description:
      "Xpay is an e-commerce demo project with theme toggle, product detail modal, cart page, and route-based shopping flow.",
    link: "https://xpay-1ug.pages.dev/",
    images: [
      "/xpay1.png",
      "/xpay2.png",
      "/xpay3.png",
      "/xpay4.png",
      "/xpay5.png",
    ],
  },
] as const;

export const legacySocialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olasimbo-olajuwon-b986b7230/",
  },
  { label: "X", href: "https://x.com/PhantomXDev" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yung_in?igsh=cXNjZGFueGUzaDBk&utm_source=qr",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@olajuwonx15?_t=ZS-8zqvw3thoy8&_r=1",
  },
  { label: "GitHub", href: "https://github.com/OlajuwonX" },
] as const;

export const preservedAssetMap = {
  resume: "/documents/OlajuwonCV.pdf",
  brandLogo: "/brand/pdlogo1.png",
  projectImages: {
    hireLens: [
      "/images/projects/hirelens/hl1.png",
      "/images/projects/hirelens/hl2.png",
      "/images/projects/hirelens/hl3.png",
    ],
    orvynMedia: [
      "/images/projects/orvyn-media/orvyn1.png",
      "/images/projects/orvyn-media/orvyn2.png",
      "/images/projects/orvyn-media/orvyn3.png",
      "/images/projects/orvyn-media/orvyn4.png",
    ],
    xquisEat: [
      "/images/projects/xquiseat/xquis1.png",
      "/images/projects/xquiseat/xquis2.png",
      "/images/projects/xquiseat/xquis3.png",
      "/images/projects/xquiseat/xquis4.png",
      "/images/projects/xquiseat/xquis5.png",
      "/images/projects/xquiseat/xquis6.png",
    ],
    linka: [
      "/images/projects/linka/chat1.png",
      "/images/projects/linka/chat2.png",
      "/images/projects/linka/chat3.png",
      "/images/projects/linka/chat4.png",
      "/images/projects/linka/chat5.png",
    ],
    xpay: [
      "/images/projects/xpay/xpay1.png",
      "/images/projects/xpay/xpay2.png",
      "/images/projects/xpay/xpay3.png",
      "/images/projects/xpay/xpay4.png",
      "/images/projects/xpay/xpay5.png",
    ],
  },
} as const;
