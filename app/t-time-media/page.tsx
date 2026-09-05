import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "T-Time Media",
  description: "T-Time Media LLC is the creative studio behind Dominic Pérignon, focused on storytelling, video, experiences, and brand building.",
  openGraph: {
    title: `T-Time Media | ${site.shortName}`,
    description: "The studio behind the creator — video, brand building, and experiences.",
    url: `${site.url}/t-time-media`,
    type: "website",
  },
  alternates: { canonical: "/t-time-media" },
};

const services = [
  { number: "01", title: "Video & Content", text: "Short-form, UGC, social storytelling, and creative concepts built to earn attention rather than interrupt it." },
  { number: "02", title: "Brand Building", text: "Ideas, positioning, creative direction, and content systems for brands that want a point of view." },
  { number: "03", title: "Experiences", text: "Community-driven activations and moments that give people something worth remembering and sharing." },
];

const process = [
  { number: "01", title: "Concept", text: "Find the idea worth making — the one that actually fits the story, the platform, and the audience." },
  { number: "02", title: "Create", text: "Write, shoot, edit, and build. Small team, direct process, no layers between the idea and the work." },
  { number: "03", title: "Launch", text: "Ship it where the audience already is, timed and framed to actually land." },
  { number: "04", title: "Grow", text: "Watch what works, learn from what doesn't, and carry it into the next thing." },
];

export default function TTimeMediaPage() {
  return (
    <div className="bg-bg text-ink">
      <header className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <p className="eyebrow mb-5">T-Time Media LLC</p>
        <h1 className="max-w-5xl font-display text-[clamp(3.5rem,9vw,7rem)] font-black leading-[0.9] tracking-[-0.05em] text-white">
          T-Time Media.
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-2xl italic leading-relaxed text-white/85 md:text-3xl">
          The studio behind the creator.
        </p>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
          T-Time Media is the creative studio behind Dominic&rsquo;s work — and the home for the
          brands, platforms, campaigns, and ideas that grow out of it. One person, one creative
          ecosystem, multiple things being built.
        </p>
      </header>

      <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>

      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28" aria-labelledby="services-heading">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 id="services-heading" className="eyebrow">What we do</h2>
          <span className="hidden font-mono text-xs text-ink-faint md:block">STUDIO</span>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="bg-bg p-7 transition hover:bg-surface md:p-9">
              <p className="font-mono text-xs text-flame">{service.number}</p>
              <h3 className="mt-10 font-display text-2xl font-black text-white">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-muted">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface" aria-labelledby="process-heading">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
          <h2 id="process-heading" className="eyebrow mb-10">How we work</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.number}>
                <p className="font-mono text-xs text-flame">{step.number}</p>
                <p className="mt-4 font-display text-2xl font-black text-white">{step.title}</p>
                <p className="mt-3 leading-relaxed text-ink-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">The philosophy</p>
          </div>
          <div className="lg:col-span-8">
            <p className="font-serif text-3xl italic leading-tight text-white/85 md:text-4xl">
              Good creative doesn&rsquo;t feel like advertising. It feels like someone made
              something worth showing you.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 pb-20 md:px-8 md:pb-28">
        <div className="rounded-[28px] border border-white/10 bg-surface p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow mb-4">Work with the studio</p>
              <h2 className="font-display text-4xl font-black tracking-tight text-white md:text-6xl">Have an idea?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
                Bring the brief, the weird idea, or the half-finished thought. We can figure out the rest.
              </p>
            </div>
            <Link href="/contact" className="inline-flex w-fit rounded-full bg-flame px-7 py-4 text-sm font-bold text-white transition hover:bg-flame-deep">
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
