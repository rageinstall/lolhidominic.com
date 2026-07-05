"use client";

import { useState } from "react";

const subjects = [
  { value: "press", label: "Press or interview" },
  { value: "brand", label: "Brand inquiry" },
  { value: "general", label: "Something else" },
];

const fieldBase =
  "w-full border border-ink/20 bg-transparent px-4 py-3 font-sans text-ink placeholder:text-ink/40 focus:border-flame dark:border-paper/20 dark:text-paper dark:placeholder:text-paper/40";

const labelBase = "block font-display text-sm font-semibold tracking-tight text-ink dark:text-paper";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  // No backend wired yet. Swap this for a real endpoint or form service.
  // For now it confirms locally so the UI is complete and testable.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-ink/15 p-8 dark:border-paper/15" role="status" aria-live="polite">
        <p className="eyebrow mb-3">Got it</p>
        <p className="font-display text-2xl font-bold tracking-tight text-ink dark:text-paper">
          Message landed. I read everything myself.
        </p>
        <p className="mt-3 text-ink/70 dark:text-paper/70">
          If it needs a reply, you&rsquo;ll hear back from me, not an autoresponder. Give it a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className={labelBase}>
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldBase} />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldBase} />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className={labelBase}>
          What&rsquo;s this about
        </label>
        <select id="subject" name="subject" required defaultValue="" className={fieldBase}>
          <option value="" disabled>
            Pick one
          </option>
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelBase}>
          Message
        </label>
        <textarea id="message" name="message" required rows={6} className={`${fieldBase} resize-y`} />
      </div>

      <button
        type="submit"
        className="bg-flame px-7 py-3.5 font-display text-sm font-bold uppercase tracking-label text-paper transition-colors hover:bg-flame-deep"
      >
        Send it
      </button>
    </form>
  );
}
