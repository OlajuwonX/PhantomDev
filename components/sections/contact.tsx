"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ExternalLink } from "@/components/ui/external-link";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formMessage, setFormMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setFormMessage("");
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honeypot: formData.get("honeypot"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setFormState("success");
        setFormMessage("Message sent");
        form.reset();
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setFormMessage(
          result?.message || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setFormState("error");
      setFormMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <Section id="contact">
      <Container>
        <SectionHeader
          title="Get In Touch"
          description="Let's talk about your next project or opportunity."
        />

        <div className="mt-12 max-w-3xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <ExternalLink href="https://www.linkedin.com/in/olasimbo-olajuwon-b986b7230/">
              LinkedIn ↗
            </ExternalLink>
            <ExternalLink href="https://github.com/OlajuwonX">
              GitHub ↗
            </ExternalLink>
            <ExternalLink href="mailto:olasimbo15@yahoo.com">
              Email ↗
            </ExternalLink>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={formState === "loading"}
                className="min-h-11 w-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 font-sans text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={formState === "loading"}
                className="min-h-11 w-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 font-sans text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                disabled={formState === "loading"}
                className="w-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 font-sans text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              />
            </div>

            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={formState === "loading"}
              className="button button-primary"
            >
              {formState === "loading" ? "Sending..." : "Send message"}
            </button>

            {formState === "success" && (
              <p
                role="status"
                className="text-sm font-medium text-[var(--accent)]"
              >
                ✓ {formMessage}
              </p>
            )}

            {formState === "error" && (
              <p
                role="alert"
                className="text-sm font-medium text-[var(--muted-foreground)]"
              >
                {formMessage}
              </p>
            )}
          </form>
        </div>
      </Container>
    </Section>
  );
}
