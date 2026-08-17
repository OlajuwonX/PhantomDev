"use client";

import { Logo } from "@/components/layout/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--foreground)]"
      >
        {open ? (
          <X aria-hidden="true" size={20} />
        ) : (
          <Menu aria-hidden="true" size={20} />
        )}
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 bg-[var(--background)] px-[var(--page-gutter)] py-5"
        >
          <div className="flex items-center justify-between">
            <div onClick={closeMenu}>
              <Logo />
            </div>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close navigation menu"
              onClick={() => {
                closeMenu();
                buttonRef.current?.focus();
              }}
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--foreground)]"
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="mt-14">
            <ul className="space-y-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="font-heading block min-h-11 text-4xl font-semibold leading-tight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12">
            <ButtonLink
              href="/documents/Olajuwon_Olasimbo_Frontend_Software_Engineer_v5.pdf"
              variant="secondary"
              onClick={closeMenu}
            >
              Download resume
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
