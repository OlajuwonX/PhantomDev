import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { ExternalLink } from "@/components/ui/external-link";
import { getCaseStudySlugs } from "@/content/projects";
import { getProjectDetailBySlug } from "@/content/projects-detailed";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetailBySlug(slug);

  if (!project || project.kind !== "product") {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name,
      description: project.summary,
      type: "article",
      images: project.image
        ? [
            {
              url: project.image.src,
              width: project.image.width,
              height: project.image.height,
              alt: project.image.alt,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectDetailBySlug(slug);

  if (!project || project.kind !== "product") {
    notFound();
  }

  return (
    <main id="main-content" className="main-content">
      <article>
        <section className="bg-[var(--surface-subtle)] py-12 md:py-16">
          <Container className="max-w-3xl overflow-hidden">
            <div className="mb-4 flex flex-wrap items-baseline gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.08em]">
                {project.category}
              </span>
              <span className="text-sm text-[var(--muted-foreground)]">
                {project.status}
              </span>
            </div>
            <h1 className="mb-4 max-w-full overflow-wrap-anywhere font-heading text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              {project.name}
            </h1>
            <p className="body-copy text-[var(--muted-foreground)]">
              {project.summary}
            </p>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container className="max-w-3xl overflow-hidden">
            <div className="space-y-8">
              {project.overview && (
                <div>
                  <h2 className="mb-3 font-heading text-2xl font-semibold">
                    Overview
                  </h2>
                  <p className="leading-relaxed text-[var(--muted-foreground)]">
                    {project.overview}
                  </p>
                </div>
              )}

              {project.problem && (
                <div>
                  <h2 className="mb-3 font-heading text-2xl font-semibold">
                    Problem
                  </h2>
                  <p className="leading-relaxed text-[var(--muted-foreground)]">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h2 className="mb-3 font-heading text-2xl font-semibold">
                    Solution
                  </h2>
                  <p className="leading-relaxed text-[var(--muted-foreground)]">
                    {project.solution}
                  </p>
                </div>
              )}

              {project.keyWorkflows && project.keyWorkflows.length > 0 && (
                <div>
                  <h2 className="mb-3 font-heading text-2xl font-semibold">
                    Key Workflows
                  </h2>
                  <ul className="space-y-2 text-[var(--muted-foreground)]">
                    {project.keyWorkflows.map((workflow) => (
                      <li key={workflow} className="flex gap-3">
                        <span className="text-[var(--accent)]">—</span>
                    <span className="min-w-0">{workflow}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technicalDecisions &&
                project.technicalDecisions.length > 0 && (
                  <div>
                    <h2 className="mb-3 font-heading text-2xl font-semibold">
                      Technical Decisions
                    </h2>
                    <ul className="space-y-2 text-[var(--muted-foreground)]">
                      {project.technicalDecisions.map((decision) => (
                        <li key={decision} className="flex gap-3">
                          <span className="text-[var(--accent)]">—</span>
                          <span className="min-w-0">{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {project.performanceConsiderations && (
                <div>
                  <h2 className="mb-3 font-heading text-2xl font-semibold">
                    Performance
                  </h2>
                  <p className="leading-relaxed text-[var(--muted-foreground)]">
                    {project.performanceConsiderations}
                  </p>
                </div>
              )}

              {project.accessibilityConsiderations && (
                <div>
                  <h2 className="mb-3 font-heading text-2xl font-semibold">
                    Accessibility
                  </h2>
                  <p className="leading-relaxed text-[var(--muted-foreground)]">
                    {project.accessibilityConsiderations}
                  </p>
                </div>
              )}
            </div>

            <hr className="my-12 border-[var(--border)]" />

            <div className="space-y-4">
              <div>
                <h3 className="mb-3 font-heading text-lg font-semibold">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm bg-[var(--surface-subtle)] px-3 py-1 text-sm text-[var(--muted-foreground)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.role && (
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    <span className="font-semibold">Role:</span> {project.role}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-3 pt-6 sm:flex-row">
                {project.liveUrl && (
                  <ExternalLink href={project.liveUrl}>
                    Visit live project ↗
                  </ExternalLink>
                )}
                {project.repositoryUrl && (
                  <ExternalLink href={project.repositoryUrl}>
                    View source code ↗
                  </ExternalLink>
                )}
                <ButtonLink href="/#work" variant="secondary">
                  Back to work
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </article>
    </main>
  );
}
