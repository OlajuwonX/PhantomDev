import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button-link";

export default function Home() {
  return (
    <main id="main-content" className="main-content">
      <Section>
        <Container className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Portfolio rebuild in progress
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Olajuwon Olasimbo
          </h1>
          <p className="body-copy mt-5 max-w-2xl text-[var(--muted-foreground)]">
            A clean Next.js portfolio foundation is in place. The visual
            system, navigation, and layout shell are ready for the homepage
            sections that follow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#work">View selected work</ButtonLink>
            <ButtonLink href="/documents/OlajuwonCV.pdf" variant="secondary">
              Download resume
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
