import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Not found
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          This page is not available.
        </h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          The portfolio is being rebuilt, and this route is not part of the new
          foundation.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center border border-[var(--foreground)] px-5 text-sm font-semibold uppercase tracking-[0.12em]"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
