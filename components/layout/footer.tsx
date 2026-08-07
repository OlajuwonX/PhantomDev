import { Container } from "@/components/layout/container";
import { ExternalLink } from "@/components/ui/external-link";

const professionalLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/olasimbo-olajuwon-b986b7230/" },
  { label: "GitHub", href: "https://github.com/OlajuwonX" },
  { label: "Email", href: "mailto:olasimboolajuwon@gmail.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container className="flex flex-col gap-5 text-sm text-[var(--muted-foreground)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading font-semibold text-[var(--foreground)]">
            Olajuwon Olasimbo
          </p>
          <p>Frontend software engineer building clean product interfaces.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {professionalLinks.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
          <a
            href="/documents/OlajuwonCV.pdf"
            className="underline decoration-[var(--border)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
          >
            Resume
          </a>
        </div>
        <p>© {year}</p>
      </Container>
    </footer>
  );
}
