"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      event.currentTarget.reset();
    } catch (e: unknown) {
      const err = e as { message?: string };
      setError(err?.message || "Something went wrong");
      setStatus("error");
    }
  }
  return (
    <section className="section-y" id="contact">
      <div className="container-px mx-auto max-w-content">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="eyebrow">Contact us</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
              We&apos;d love to hear from you
            </h2>
            <p className="mt-3 text-muted max-w-[58ch]">
              Tell us a bit about your practice and goals. Our team will reach out within one business day.
            </p>
          </div>
          <form
            className="p-6 rounded-lg border border-black/5 dark:border-white/10 bg-surface grid gap-4"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1">
                <label htmlFor="name" className="text-sm font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="h-11 rounded-md px-3 border border-black/10 dark:border-white/15 bg-background"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="email" className="text-sm font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="h-11 rounded-md px-3 border border-black/10 dark:border-white/15 bg-background"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1">
                <label htmlFor="company" className="text-sm font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>Organization</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="h-11 rounded-md px-3 border border-black/10 dark:border-white/15 bg-background"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="phone" className="text-sm font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>Phone (optional)</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="h-11 rounded-md px-3 border border-black/10 dark:border-white/15 bg-background"
                />
              </div>
            </div>
            <div className="grid gap-1">
              <label htmlFor="message" className="text-sm font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-md px-3 py-2 border border-black/10 dark:border-white/15 bg-background resize-vertical"
              />
            </div>
            <div className="flex items-start gap-3">
              <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4" />
              <label htmlFor="consent" className="text-xs text-muted">
                I agree to be contacted and to the processing of my information as described in the privacy policy.
              </label>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#017399] text-white font-semibold hover:bg-[#017399]/90 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : status === "success" ? "Sent!" : "Send message"}
              </button>
              {status === "error" && (
                <p className="mt-2 text-xs text-red-600">{error}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


