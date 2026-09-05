import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Creative work, brand partnerships, and projects by Dominic Pérignon through T-Time Media LLC.",
  openGraph: {
    title: `Work | ${site.shortName}`,
    description: "Creative work, brand partnerships, and projects by Dominic Pérignon.",
    url: `${site.url}/work-with-me`,
    type: "website",
  },
  alternates: { canonical: "/work-with-me" },
};

const formats = [
  ["Sponsored Content", "Platform-native video that feels like something people actually want to watch."],
  ["UGC & Creative", "Concepts, scripts, shoots, and edits built for brands that need a human voice."],
  ["Campaigns", "Multi-platform creative systems that turn one idea into a complete campaign."],
  ["Experiences", "Events, activations, and collaborations designed around story and participation."],
];

export default function WorkWithMePage() {
  return (
    <div className="bg-bg text-ink">
      <section className="mx-auto max-w-[1320px] px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="eyebrow mb-5">Work · T-Time Media LLC</p>
        <h1 className="max-w-5xl font-display text-[clamp(4rem,10vw,8.5rem)] font-black leading-[0.86] tracking-[-0.06em] text-white">Things I’ve built.<br /><span className="text-blue">Things we can build.</span></h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-muted md:text-2xl">T-Time Media is the studio behind Dominic’s creator work — connecting storytelling, video, brands, platforms, and experiences.</p>
      </section>

      <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>

      <section id="t-time-media" className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="eyebrow mb-4">The studio</p><h2 className="font-display text-4xl font-black tracking-tight text-white md:text-6xl">T-Time Media LLC</h2></div>
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-muted"><p>T-Time Media is the creative studio around Dominic’s work. It gives the creator, the brands, and the independent projects one place to build from.</p><p>The work can start with a video, a campaign, a platform, an experience, or an idea that doesn’t have a category yet. The goal is the same: make something people actually care about.</p></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
          <p className="eyebrow mb-8">What I make</p>
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {formats.map(([title, body], i) => <div key={title} className="bg-surface p-8 md:p-10"><span className="font-mono text-xs text-blue">0{i + 1}</span><h3 className="mt-10 font-display text-3xl font-black text-white">{title}</h3><p className="mt-4 max-w-lg leading-relaxed text-ink-muted">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <p className="eyebrow mb-5">Selected work</p>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          <Project title="Link With Pride" type="Platform" body="An LGBTQ+ travel platform built from zero around better-informed, more confident travel decisions." href="/link-with-pride" />
          <Project title="@domfactcheck" type="Media" body="A context-driven media project extending Dominic’s storytelling into fact-checking and information literacy." href="https://instagram.com/domfactcheck" external />
          <Project title="LolHiDominic" type="Creator" body="The personal creator brand: video, culture, travel, trans life, humor, and the stories that matter." href="https://instagram.com/lolhidominic" external />
          <Project title="Brand partnerships" type="Campaigns" body="Sponsored content and creative collaborations designed to feel native to the audience rather than bolted onto it." href="/contact" />
        </div>
      </section>

      <section className="bg-blue px-6 py-20 text-bg md:px-8 md:py-28">
        <div className="mx-auto max-w-[1320px]"><p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em]">Let’s work</p><h2 className="max-w-4xl font-display text-5xl font-black leading-none md:text-7xl">I like making things that didn’t exist before.</h2><Link href="/contact" className="mt-8 inline-flex rounded-full bg-bg px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-bg">Start a conversation →</Link></div>
      </section>
    </div>
  );
}

function Project({ title, type, body, href, external = false }: { title: string; type: string; body: string; href: string; external?: boolean }) {
  const content = <><span className="font-mono text-[10px] uppercase tracking-[0.24em] text-blue">{type}</span><h3 className="mt-8 font-display text-3xl font-black text-white">{title}</h3><p className="mt-4 leading-relaxed text-ink-muted">{body}</p><span className="mt-8 inline-block text-sm font-semibold text-blue">View project →</span></>;
  return external ? <a href={href} className="group bg-bg p-8 transition hover:bg-surface md:p-10">{content}</a> : <Link href={href} className="group bg-bg p-8 transition hover:bg-surface md:p-10">{content}</Link>;
}
