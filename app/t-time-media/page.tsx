import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "T-Time Media",
  description: "T-Time Media LLC is the creative studio behind Dominic Pérignon, focused on storytelling, video, experiences, and brand building.",
  alternates: { canonical: "/t-time-media" },
};

const services = [
  { number: "01", title: "Video & Content", text: "Short-form, UGC, social storytelling, and creative concepts built to earn attention rather than interrupt it." },
  { number: "02", title: "Brand Building", text: "Ideas, positioning, creative direction, and content systems for brands that want a point of view." },
  { number: "03", title: "Experiences", text: "Community-driven activations and moments that give people something worth remembering and sharing." },
];

export default function TTimeMediaPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <header className="max-w-5xl">
        <p className="eyebrow mb-5">T-Time Media LLC</p>
        <h1 className="font-display text-display-lg font-black tracking-tight text-ink dark:text-paper text-balance">
          The studio behind the creator.
        </h1>
        <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink/70 dark:text-paper/70">
          T-Time Media is the creative studio behind Dominic Pérignon — built to turn stories, ideas, and brands into work people actually want to spend time with.
        </p>
      </header>

      <div className="rule mt-16" />

      <section className="mt-16" aria-labelledby="services-heading">
        <div className="flex items-end justify-between gap-8">
          <h2 id="services-heading" className="eyebrow">What we make</h2>
          <span className="hidden font-mono text-xs text-ink-faint md:block">STUDIO / 2026</span>
        </div>
        <div className="mt-8 grid gap-px bg-ink/10 dark:bg-paper/10 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="bg-paper p-7 dark:bg-night md:p-9">
              <p className="font-mono text-xs text-blue">{service.number}</p>
              <h3 className="mt-10 font-display text-2xl font-extrabold text-ink dark:text-paper">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-ink/65 dark:text-paper/65">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 border-y border-ink/10 py-14 dark:border-paper/10 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="eyebrow">The philosophy</p>
        </div>
        <div className="md:col-span-8">
          <p className="font-serif text-3xl leading-tight text-ink dark:text-paper md:text-4xl">
            Good creative doesn&rsquo;t feel like advertising. It feels like someone made something worth showing you.
          </p>
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-7 border border-ink/10 p-8 dark:border-paper/10 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <p className="eyebrow mb-3">Work with the studio</p>
          <h2 className="font-display text-3xl font-extrabold text-ink dark:text-paper">Have an idea?</h2>
          <p className="mt-3 max-w-xl text-ink/65 dark:text-paper/65">Bring the brief, the weird idea, or the half-finished thought. We can figure out the rest.</p>
        </div>
        <Link href="/contact" className="studio-cta inline-flex shrink-0 items-center justify-center bg-pink px-7 py-4 font-display text-sm font-bold uppercase tracking-label text-ink transition-colors hover:bg-blue hover:text-white">
          Start a conversation ↗
        </Link>
      </section>
    </div>
  );
}
