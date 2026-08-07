import { Container } from "@/components/layout/container";
import { ExternalLink } from "@/components/ui/external-link";

const professionalLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olasimbo-olajuwon-b986b7230/",
  },
  { label: "GitHub", href: "https://github.com/OlajuwonX" },
  { label: "Email", href: "mailto:olasimbo15@yahoo.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="mb-1 font-heading font-semibold text-[var(--foreground)]">
              Olajuwon Olasimbo
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Frontend software engineer building production-minded web
              applications and SaaS products.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--foreground)]">
              Professional
            </p>
            <div className="flex flex-col gap-2">
              {professionalLinks.map((link) => (
                <ExternalLink key={link.href} href={link.href}>
                  {link.label} ↗
                </ExternalLink>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--foreground)]">
              Resources
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="/documents/OlajuwonCV.pdf"
                className="text-sm underline decoration-[var(--border)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                Download Resume ↗
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-[var(--border)]" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[var(--muted-foreground)] md:flex-row">
          <p>© {year} Olajuwon Olasimbo. All rights reserved.</p>
          <p>Frontend Software Engineer</p>
        </div>
      </Container>
    </footer>
  );
}
