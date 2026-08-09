import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-copy",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Olajuwon Olasimbo — Frontend Software Engineer",
    template: "%s | Olajuwon Olasimbo",
  },
  description:
    "Frontend software engineer building production-minded web applications, full-stack Next.js products, and accessible responsive interfaces. 4+ years of experience with React, TypeScript, and cloud-native SaaS.",
  keywords: [
    "frontend engineer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "web development",
    "SaaS",
    "product engineering",
  ],
  metadataBase: new URL("https://olajuwon.dev"),
  alternates: {
    canonical: "https://olajuwon.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://olajuwon.dev",
    siteName: "Olajuwon Olasimbo",
    title: "Olajuwon Olasimbo — Frontend Software Engineer",
    description:
      "Frontend software engineer building production-minded web applications, full-stack Next.js products, and accessible responsive interfaces.",
    images: [
      {
        url: "https://olajuwon.dev/brand/pdlogo1.png",
        width: 512,
        height: 512,
        alt: "Olajuwon Olasimbo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olajuwon Olasimbo — Frontend Software Engineer",
    description:
      "Frontend software engineer building production-minded web applications, full-stack Next.js products, and accessible responsive interfaces.",
    creator: "@PhantomXDev",
    images: ["https://olajuwon.dev/brand/pdlogo1.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/brand/pdlogo1.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  authors: [
    {
      name: "Olajuwon Olasimbo",
      url: "https://olajuwon.dev",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} font-sans`}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="page-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
