# Olajuwon Olasimbo — Portfolio

A production-ready portfolio built with Next.js 15, showcasing frontend software engineering expertise through project case studies, experience highlights, and professional accomplishments.

## Stack

- **Framework:** Next.js 15.5 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Icons:** Lucide React
- **Package Manager:** npm

## Features

- **Dynamic Case Studies:** 6 featured projects with full case study pages (`/work/[slug]`)
- **Responsive Design:** Mobile-first, tested at 8 breakpoints (320px–1440px)
- **SEO Optimized:** Metadata, sitemap, robots.txt, Open Graph, Twitter cards
- **Accessibility:** WCAG compliance, keyboard navigation, screen reader support, reduced motion
- **Contact Form:** Server-side validation, honeypot spam protection, Resend email integration
- **Performance:** Server-rendered content, minimal client-side JavaScript, optimized images
- **Type Safe:** Full TypeScript coverage with strict mode

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values
```

### Environment Variables

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_destination_email@example.com
NEXT_PUBLIC_SITE_URL=https://olajuwon.dev
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Homepage (all sections)
├── globals.css             # Global styles and design tokens
├── robots.ts               # SEO robots.txt
├── sitemap.ts              # Dynamic sitemap generation
├── not-found.tsx           # 404 page
├── api/
│   └── contact/
│       └── route.ts        # Contact form API endpoint
└── work/
    └── [slug]/
        └── page.tsx        # Dynamic case study pages

components/
├── layout/                 # Header, footer, navigation
├── sections/              # Page sections (hero, about, etc)
└── ui/                    # Reusable UI components

content/                   # Project and experience data
lib/                       # Utilities
types/                     # TypeScript types
public/                    # Static assets
```

## Content Structure

### Projects

Edit `content/projects.ts` and `content/projects-detailed.ts` to update projects. Add images to `public/images/projects/`.

### Experience

Edit `content/experience.ts` to update work history.

### About & Engineering Profile

Edit `content/about.ts` and `content/engineering-profile.ts`.

## Deployment

Deploy to Vercel:

```bash
vercel deploy
```

Set environment variables in your hosting platform.

## License

Personal portfolio — all rights reserved.

## Contact

- Email: olasimbo15@yahoo.com
- GitHub: [OlajuwonX](https://github.com/OlajuwonX)
- LinkedIn: [Olajuwon Olasimbo](https://www.linkedin.com/in/olasimbo-olajuwon-b986b7230/)
