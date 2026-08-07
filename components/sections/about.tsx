import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { aboutSections } from "@/content/about";

export function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader
          title="About"
          description="My background and approach to software engineering."
        />
        <div className="mt-12 max-w-3xl space-y-5">
          {aboutSections.map((paragraph, index) => (
            <p
              key={index}
              className="body-copy leading-relaxed text-[var(--muted-foreground)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
