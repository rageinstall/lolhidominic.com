import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "The platforms, brands, campaigns, and creative work built by Dominic Pérignon through T-Time Media LLC.",
  openGraph: { title: `Work | ${site.shortName}`, description: "The platforms, brands, campaigns, and creative work built by Dominic Pérignon.", url: `${site.url}/work-with-me`, type: "website" },
  alternates: { canonical: "/work-with-me" },
};

const formats = [
  ["Sponsored Content", "Platform-native video that feels like something people actually want to watch."],
  ["UGC & Creative", "Concepts, scripts, shoots, and edits built for brands that need a human voice."],
  ["Campaigns", "Multi-platform creative systems that turn one idea into a complete campaign."],
  ["Experiences", "Events, activations, and collaborations designed around story and participation."],
];

export default function WorkWithMePage() {
  return <div className="bg-bg text-ink">
    <section className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
      <p className="eyebrow mb-5">Work · T-Time Media LLC</p>
      <h1 className="max-w-5xl font-display text-[clamp(4rem,10vw,8.5rem)] font-black leading-[0.86] tracking-[-0.06em] text-white">Things I’ve built.<br /><span className="text-blue">Things we can build.</span></h1>
      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-muted md:text-2xl">A clearer look at what I own, what I’ve built, and what I create with brands.</p>
      <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.18em]">
        <a href="#studio" className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-blue hover:text-blue">T-Time Media</a>
        <a href="#platforms" className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-blue hover:text-blue">My Platforms</a>
        <a href="#partnerships" className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-blue hover:text-blue">Brand Partnerships</a>
      </div>
    </section>

    <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>

    <section id="studio" className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div><p className="eyebrow mb-4">01 · The studio</p><h2 className="font-display text-4xl font-black tracking-tight text-white md:text-6xl">T-Time Media LLC</h2></div>
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-muted"><p>T-Time Media is the studio behind Dominic’s creator work. It is the business layer that connects storytelling, video, brands, platforms, and experiences.</p><p>The work can start with a video, a campaign, a platform, an experience, or an idea that doesn’t have a category yet. The goal is the same: make something people actually care about.</p></div>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
        {formats.map(([title, body], i) => <div key={title} className="bg-surface p-8 md:p-10"><span className="font-mono text-xs text-blue">0{i + 1}</span><h3 className="mt-8 font-display text-3xl font-black text-white">{title}</h3><p className="mt-4 max-w-lg leading-relaxed text-ink-muted">{body}</p></div>)}
      </div>
    </section>

    <section id="platforms" className="border-y border-white/10 bg-surface">
      <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="mb-12 max-w-3xl"><p className="eyebrow mb-5">02 · Built by me</p><h2 className="font-display text-5xl font-black tracking-tight text-white md:text-7xl">My platforms & brands.</h2><p className="mt-5 text-lg leading-relaxed text-ink-muted">These are the properties, platforms, and creator brands that belong in the same family — separate from client and campaign work.</p></div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          <Project title="LolHiDominic" type="Creator brand" body="The personal creator platform: video, culture, travel, trans life, humor, and the stories that matter." href="https://instagram.com/lolhidominic" external />
          <Project title="Link With Pride" type="Platform" body="An LGBTQ+ travel platform built around better-informed, more confident travel decisions." href="/link-with-pride" />
          <Project title="@domfactcheck" type="Media project" body="A context-driven media project extending Dominic’s storytelling into fact-checking and information literacy." href="https://instagram.com/domfactcheck" external />
          <Project title="T-Time Media" type="Creative studio" body="The LLC and studio connecting Dominic’s creator work, independent projects, and brand collaborations." href="/t-time-media" />
        </div>
      </div>
    </section>

    <section id="partnerships" className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
      <div className="mb-12 max-w-3xl"><p className="eyebrow mb-5">03 · With brands</p><h2 className="font-display text-5xl font-black tracking-tight text-white md:text-7xl">Brand partnerships.</h2><p className="mt-5 text-lg leading-relaxed text-ink-muted">Campaigns and collaborations I’ve created with brands, destinations, and organizations. Each case study shows the idea, the execution, and the documented results we can verify.</p></div>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
        <Project title="Fossil — Made For This" type="Brand campaign" body="A cinematic creator film built around Dominic’s story, creativity, presence, and the question of what we were made for." href="/work/fossil-made-for-this" />
        <Project title="POIZON" type="Brand campaign" body="Sneaker, fashion, and giveaway content built around personal style and audience participation, with 335K+ documented views across featured assets." href="/work/poizon" />
        <Project title="ThreadBeast" type="Brand partnership" body="A long-running fashion creator partnership spanning 2022–2025, with 272K+ documented views across featured assets." href="/work/threadbeast" />
        <Project title="Portland Pride 2024" type="Destination campaign" body="A creator-led Pride trip turned into a city story about queer community, local culture, and lived experience — including a documented 1M+ view feature." href="/work/portland-pride" />
        <Project title="DC Pride → WorldPride DC" type="Cultural campaign · 2024 → 2025" body="A two-year Pride storytelling case study — from a first DC Pride experience to WorldPride DC, with documented social performance and an evolving personal point of view." href="/work/dc-pride-worldpride" />
      </div>
    </section>

    <section className="bg-blue px-6 py-20 text-bg md:px-8 md:py-28"><div className="mx-auto max-w-[1320px]"><p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em]">Let’s work</p><h2 className="max-w-4xl font-display text-5xl font-black leading-none md:text-7xl">I like making things that didn’t exist before.</h2><Link href="/contact" className="mt-8 inline-flex rounded-full bg-bg px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-bg">Start a conversation →</Link></div></section>
  </div>;
}

function Project({ title, type, body, href, external = false }: { title: string; type: string; body: string; href: string; external?: boolean }) {
  const content = <><span className="font-mono text-[10px] uppercase tracking-[0.24em] text-blue">{type}</span><h3 className="mt-8 font-display text-3xl font-black text-white">{title}</h3><p className="mt-4 leading-relaxed text-ink-muted">{body}</p><span className="mt-8 inline-block text-sm font-semibold text-blue">View project →</span></>;
  return external ? <a href={href} target="_blank" rel="noreferrer" className="group bg-bg p-8 transition hover:bg-surface md:p-10">{content}</a> : <Link href={href as any} className="group bg-bg p-8 transition hover:bg-surface md:p-10">{content}</Link>;
}
