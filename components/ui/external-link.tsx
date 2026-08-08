import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ReactNode } from "react";

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
        "underline decoration-[var(--border)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:gray-200",
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
