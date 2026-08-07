import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function ExternalLink({
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={cn(
        "underline decoration-[var(--border)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
