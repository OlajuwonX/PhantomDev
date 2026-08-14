import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ButtonLink } from "@/components/ui/button-link";
import { getFeaturedInterfaces } from "@/content/projects";

export function SelectedInterfaces() {
  const interfaces = getFeaturedInterfaces();

  return (
    <Section>
      <Container>
        <SectionHeader
          title="Selected Interfaces"
          description="Visual projects showcasing interface design and responsive implementation."
        />
        <div className="mt-12 space-y-16">
          {interfaces.map((project, index) => (
            <article
              key={project.slug}
              className={`flex flex-col gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex-shrink-0 md:w-1/2">
                {project.image ? (
                  <div className="relative flex aspect-[4/3] max-h-[28rem] min-h-[16rem] w-full items-center justify-center overflow-hidden border border-[var(--border)] bg-[var(--surface-subtle)] p-3 sm:aspect-[16/10] sm:p-4 md:min-h-[22rem]">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-contain p-3 sm:p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] min-h-[16rem] items-center justify-center border border-[var(--border)] bg-[var(--surface-subtle)] sm:aspect-[16/10] md:min-h-[22rem]">
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Image pending
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center md:w-1/2">
                <h3 className="mb-2 font-heading text-2xl font-semibold">
                  {project.name}
                </h3>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                  {project.category}
                </p>
                <p className="mb-4 text-[var(--muted-foreground)] leading-relaxed">
                  {project.summary}
                </p>

                <div className="mb-6 flex flex-wrap gap-1">
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

                {project.liveUrl && (
                  <ButtonLink href={project.liveUrl}>Live site ↗</ButtonLink>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
