import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { engineeringCapabilities } from "@/content/engineering-profile";

export function EngineeringProfile() {
  return (
    <Section>
      <Container>
        <SectionHeader
          title="Engineering Focus"
          description="What I build and how I approach product development."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {engineeringCapabilities.map((capability) => (
            <article key={capability.title} className="flex flex-col">
              <h3 className="mb-3 font-heading text-xl font-semibold">
                {capability.title}
              </h3>
              <p className="flex-1 text-[var(--muted-foreground)] leading-relaxed">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
