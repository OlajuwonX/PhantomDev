import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]">
      <Container className="flex min-h-[var(--nav-height)] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="min-h-11 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/documents/Olajuwon_Olasimbo_Resume_v4.pdf" variant="secondary">
            Resume
          </ButtonLink>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}
