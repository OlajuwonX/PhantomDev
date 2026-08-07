import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { experienceEntries } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader
          title="Experience"
          description="Companies and projects I've contributed to."
        />
        <div className="mt-12 space-y-10">
          {experienceEntries.map((entry, index) => (
            <article
              key={entry.company}
              className={
                index !== experienceEntries.length - 1
                  ? "border-b border-[var(--border)] pb-10"
                  : ""
              }
            >
              <div className="mb-3 flex flex-col gap-1">
                <h3 className="font-heading text-lg font-semibold">
                  {entry.role}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--muted-foreground)]">
                  {entry.company} • {entry.period}
                </p>
              </div>
              <p className="mb-4 text-[var(--muted-foreground)] leading-relaxed">
                {entry.description}
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="text-[var(--accent)]">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
