import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
};

const variants = {
  primary:
    "border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] hover:bg-transparent hover:text-[var(--foreground)]",
  secondary:
    "border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]",
  text: "min-h-0 border-0 px-0 underline decoration-[var(--border)] hover:decoration-[var(--foreground)]",
};

export function ButtonLink({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const isText = variant === "text";

  return (
    <Link
      className={cn(
        "inline-flex min-h-[var(--button-height)] items-center justify-center rounded-none px-5 text-sm font-bold uppercase tracking-[0.1em] transition-colors",
        isText ? "justify-start" : "",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
