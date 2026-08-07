import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading section-heading font-semibold">{title}</h2>
      {description ? (
        <p className="body-copy mt-5 text-[var(--muted-foreground)]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
