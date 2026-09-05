import type { Metadata } from "next";
import Link from "next/link";
import { site, stats, audienceNote } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work With Me",
  description: "Sponsored content, UGC, campaigns, experiences, and creative consulting with Dominic Pérignon through T-Time Media LLC.",
  openGraph: {
    title: `Work With Me | ${site.shortName}`,
    description: "Sponsored content, UGC, campaigns, experiences, and creative consulting with Dominic Pérignon.",
    url: `${site.url}/work-with-me`,
    type: "website",
  },
  alternates: { canonical: "/work-with-me" },
};

const offers = [
  ["Sponsored Content", "Platform-native video that feels like something people actually want to watch."],
  ["UGC & Creative", "Concepts, scripts, shoots, and edits built for brands that need a human voice."],
  ["Campaigns", "Multi-platform creative systems that turn one idea into a complete campaign."],
  ["Experiences", "Events, activations, and collaborations designed around story and participation."],
  ["Creative Consulting", "Strategy, positioning, and creative direction for teams that want an outside eye."],
];

export default function WorkWithMePage() {
  return (
    <div className="bg-bg text-ink">
      <section className="mx-auto max-w-[1320px] px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="eyebrow mb-5">Work with me · T-Time Media LLC</p>
        <h1 className="max-w-4xl font-display text-[clamp(3.5rem,9vw,7.5rem)] font-black leading-[0.9] tracking-[-0.055em] text-white">Let&rsquo;s make something worth watching.</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-muted md:text-2xl">
          I work with brands through T-Time Media on sponsored content, UGC, campaigns,
          experiences, and creative consulting — built around an audience that shows up.
        </p>
      </section>

      <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>

      {/* Offerings */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <p className="eyebrow mb-8">What I offer</p>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {offers.map(([title, body], i) => (
            <div key={title} className="bg-bg p-8 md:p-10">
              <span className="font-mono text-xs text-flame">0{i + 1}</span>
              <h3 className="mt-10 font-display text-3xl font-black text-white">{title}</h3>
              <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="border-y border-white/10 bg-surface">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
          <p className="eyebrow mb-8">The audience</p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface px-5 py-8 md:px-8 md:py-10">
                <p className="font-display text-3xl font-black tracking-tight text-white md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-faint">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">{audienceNote} · figures current as of publishing, not guaranteed</p>
        </div>
      </section>

      <section className="bg-flame px-6 py-20 text-bg md:px-8 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em]">Let&rsquo;s work</p>
          <h2 className="max-w-4xl font-display text-5xl font-black leading-none md:text-7xl">I like making things that didn&rsquo;t exist before.</h2>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-bg px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-bg">Start a conversation →</Link>
        </div>
      </section>
    </div>
  );
}
