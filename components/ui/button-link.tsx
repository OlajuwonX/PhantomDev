import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
};

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  text: "button-text",
};

export function ButtonLink({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const href = String(props.href);
  const isExternal = href.startsWith("http");

  return (
    <Link
      {...props}
      className={cn("button", variants[variant], className)}
      target={isExternal ? "_blank" : props.target}
      rel={isExternal ? "noopener noreferrer" : props.rel}
    >
      {children}
    </Link>
  );
}
