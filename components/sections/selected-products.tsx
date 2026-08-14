import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ButtonLink } from "@/components/ui/button-link";
import { getFeaturedProducts } from "@/content/projects";

export function SelectedProducts() {
  const products = getFeaturedProducts();

  return (
    <Section id="work">
      <Container>
        <SectionHeader
          title="Selected Products"
          description="Engineering projects that demonstrate problem-solving and product thinking."
        />
        <div className="mt-12 space-y-12">
          {products.map((project, index) => (
            <article
              key={project.slug}
              className={
                index !== products.length - 1
                  ? "border-b border-[var(--border)] pb-12"
                  : ""
              }
            >
              <div className="mb-3 flex items-baseline gap-2">
                <span className="font-heading text-sm font-bold tracking-[0.08em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                  {project.category}
                </span>
              </div>

              <h3 className="mb-2 font-heading text-2xl font-semibold">
                {project.name}
              </h3>

              <p className="mb-4 text-[var(--muted-foreground)] leading-relaxed">
                {project.summary}
              </p>

              <div className="mb-4 flex flex-wrap gap-1">
                {project.stack.map((tech, i) => (
                  <span
                    key={tech}
                    className="text-sm text-[var(--muted-foreground)]"
                  >
                    {tech}
                    {i < project.stack.length - 1 && (
                      <span className="mx-1">·</span>
                    )}
                  </span>
                ))}
              </div>

              <ul className="mb-4 space-y-2 text-sm text-[var(--muted-foreground)]">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="text-[var(--accent)]">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted-foreground)]">
                {project.status}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`/work/${project.slug}`}>
                  View case study
                </ButtonLink>
                {project.liveUrl && (
                  <ButtonLink href={project.liveUrl} variant="secondary">
                    Live site ↗
                  </ButtonLink>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
