import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Olajuwon Olasimbo home"
      className="font-heading inline-flex min-h-11 items-center text-lg font-semibold uppercase tracking-[0.08em]"
    >
      OO
    </Link>
  );
}
