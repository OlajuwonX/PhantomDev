import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Frontend Software Engineer
        </p>
        <h1 className="display-heading font-heading font-semibold">
          Building fast, accessible, production&ndash;minded digital products.
        </h1>
        <p className="body-copy mt-6 max-w-2xl text-[var(--muted-foreground)]">
          I focus on creating interfaces that work beautifully across devices,
          perform well, and serve real user needs. Experience with full-stack
          Next.js applications, SaaS platforms, and React Native mobile apps.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#work">View selected work</ButtonLink>
          <ButtonLink href="/#contact" variant="secondary">
            Let&rsquo;s work together
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
