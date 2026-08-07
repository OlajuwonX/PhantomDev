import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement>;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-[var(--section-spacing)]", className)}
      {...props}
    />
  );
}
