"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ExternalLink } from "@/components/ui/external-link";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");

    const formData = new FormData(e.currentTarget);
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

      if (response.ok) {
        setFormState("success");
        setFormMessage("Message sent successfully. I'll get back to you soon!");
        e.currentTarget.reset();
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        const data = await response.json();
        setFormState("error");
        setFormMessage(data.message || "Unable to send message. Please check your input and try again.");
      }
    } catch {
      setFormState("error");
      setFormMessage("Failed to send message. Please try again.");
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
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={formState === "loading"}
                className="w-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={formState === "loading"}
                className="w-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                disabled={formState === "loading"}
                className="w-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
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
              className="inline-flex min-h-[var(--button-height)] items-center justify-center border border-[var(--foreground)] bg-[var(--foreground)] px-5 text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors disabled:opacity-50 hover:bg-transparent hover:text-[var(--foreground)]"
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
                ✗ {formMessage}
              </p>
            )}
          </form>
        </div>
      </Container>
    </Section>
  );
}
