import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
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
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description:
    "Frontend software engineer portfolio focused on production-minded web applications, Next.js products, and accessible responsive interfaces.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans`}>
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
