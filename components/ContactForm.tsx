"use client";

import { useState } from "react";

const subjects = [
  { value: "press",   label: "Press or interview" },
  { value: "brand",   label: "Brand inquiry" },
  { value: "general", label: "Something else" },
];

const fieldBase =
  "w-full rounded-[10px] border border-rule bg-surface px-4 py-3 font-sans text-[0.9rem] text-ink placeholder:text-ink-faint outline-none transition-all focus:border-blue focus:ring-2 focus:ring-blue/20";

const labelBase =
  "block font-mono text-[10.5px] font-medium uppercase tracking-label text-ink-faint mb-2";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-card border border-rule bg-surface p-8"
        role="status"
        aria-live="polite"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-pill border border-blue/30 bg-blue/10 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-blue shadow-[0_0_6px_#5BCEFA]" />
          <span className="font-mono text-[10.5px] font-medium uppercase tracking-label text-blue">Got it</span>
        </div>
        <p className="font-display text-2xl font-semibold text-ink" style={{ letterSpacing: "-0.015em" }}>
          Message landed. I read everything myself.
        </p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted">
          If it needs a reply, you&rsquo;ll hear back from me, not an autoresponder. Give it a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>Name</label>
          <input
            id="name" name="name" type="text"
            required autoComplete="name"
            className={fieldBase}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>Email</label>
          <input
            id="email" name="email" type="email"
            required autoComplete="email"
            className={fieldBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelBase}>What&rsquo;s this about</label>
        <select id="subject" name="subject" required defaultValue="" className={fieldBase}>
          <option value="" disabled>Pick one</option>
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>Message</label>
        <textarea
          id="message" name="message" required rows={6}
          className={`${fieldBase} resize-y`}
        />
      </div>

      <button type="submit" className="btn-primary">
        Send it →
      </button>
    </form>
  );
}
