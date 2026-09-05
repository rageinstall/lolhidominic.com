import type { Metadata } from "next";
import Link from "next/link";
import { site, stats, audienceNote, primaryCta } from "@/lib/site";
import { projects } from "@/lib/projects";
import CampaignShowcase from "@/components/CampaignShowcase";

export const metadata: Metadata = {
  title: "Creator · Storyteller · Entrepreneur",
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    type: "website",
  },
  alternates: { canonical: "/" },
};

const whatIDo = [
  {
    title: "Video & Content",
    body: "Brand campaigns, social-first storytelling, UGC, creative concepts, short-form video, and visual storytelling.",
  },
  {
    title: "Brand Building",
    body: "Developing brands, platforms, digital identities, concepts, and creative ecosystems from the ground up.",
  },
  {
    title: "Experiences",
    body: "Creating experiences, community-driven projects, collaborations, events, and ideas that give people something to participate in.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-bg text-ink">
      {/* Hero */}
      <section className="mx-auto max-w-[1320px] px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">Dominic Pérignon</p>
            <h1 className="max-w-5xl font-display text-[clamp(4rem,11vw,9rem)] font-black leading-[0.86] tracking-[-0.06em] text-white">hi, i’m<br /><span className="text-flame">dominic.</span></h1>
            <p className="mt-8 max-w-2xl font-sans text-xl leading-relaxed text-ink-muted md:text-2xl">I make videos, build brands, and tell stories that make people feel less alone.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={primaryCta.href as any} className="rounded-full bg-white px-6 py-3 text-sm font-bold text-bg transition hover:bg-flame hover:text-white">Work with me →</Link>
              <Link href="/work" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-flame hover:text-flame">See my work</Link>
            </div>
          </div>
          <div className="border-l border-white/10 pl-6 lg:pl-10"><p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint">Based in Los Angeles</p><p className="mt-5 font-serif text-2xl italic leading-relaxed text-white/85 md:text-3xl">“I started creating because I couldn’t see myself anywhere in the world. I wanted to meet people like me — and make something better to look at.”</p></div>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>

      {/* Story */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow mb-4">The story</p>
            <h2 className="max-w-md font-display text-4xl font-black tracking-tight text-white md:text-6xl">I make things that make people feel something.</h2>
          </div>
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-muted">
            <p className="font-serif text-2xl italic text-white/85">I started creating because I couldn’t see myself anywhere.</p>
            <p>I wanted to meet people like me. I wanted more positive conversations. I wanted to build a life that felt happy, creative, and honest.</p>
            <p>At first, that meant making fashion-forward videos with music I loved and editing styles I was obsessed with.</p>
            <p>Then I moved to Los Angeles in November 2024 and decided to take creativity seriously. Something clicked. I found more freedom in the work, more people who supported it, and more reasons to keep going.</p>
            <p>Today, I create because I love telling stories. I love making videos. I love sharing experiences. And I love making people feel something.</p>
            <p>Transmasculine people are still rarely at the forefront of media productions. I want to help close that gap.</p>
            <Link href="/about" className="inline-flex font-semibold text-flame hover:underline">Read the full story →</Link>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="border-y border-white/10 bg-surface">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
          <p className="eyebrow mb-10">What I do</p>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {whatIDo.map((item) => (
              <div key={item.title} className="bg-bg p-8 md:p-10">
                <h3 className="font-display text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* T-Time Media */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">The studio behind the creator</p>
            <h2 className="font-display text-4xl font-black tracking-tight text-white md:text-6xl">T-Time Media LLC</h2>
          </div>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed text-ink-muted">
              T-Time Media LLC is the creative studio behind Dominic’s work — and the home for
              the brands, platforms, campaigns, and ideas that grow out of it.
            </p>
            <p className="font-display text-2xl font-bold text-white md:text-3xl">
              Video. Content. Brands. Experiences.
            </p>
            <Link href="/t-time-media" className="inline-flex font-semibold text-flame hover:underline">Explore T-Time Media →</Link>
          </div>
        </div>
      </section>

      {/* Things I've built */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6"><div><p className="eyebrow mb-4">Selected work</p><h2 className="font-display text-4xl font-black tracking-tight text-white md:text-6xl">Things I’ve built.</h2></div><Link href="/work" className="hidden text-sm font-semibold text-flame hover:underline md:block">See all work →</Link></div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">{projects.map((item) => { const className = "group bg-bg p-7 transition hover:bg-surface md:p-9"; return item.external ? <a key={item.title} href={item.href} className={className}><WorkContent {...item} /></a> : <Link key={item.title} href={item.href as any} className={className}><WorkContent {...item} /></Link>; })}</div>
      </section>

      {/* Brand partnerships / audience */}
      <section className="bg-flame px-6 py-20 text-bg md:px-8 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div><p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em]">Brand partnerships</p><h2 className="max-w-4xl font-display text-5xl font-black leading-none tracking-tight md:text-7xl">Let’s make something people actually want to watch.</h2></div>
            <div><p className="text-lg leading-relaxed">Sponsored content, UGC, campaigns, and experiences — built around an audience that values honesty, humor, and representation.</p><Link href={primaryCta.href as any} className="mt-7 inline-flex rounded-full bg-bg px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-bg">Work with me →</Link></div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bg/15 bg-bg/15 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-flame px-5 py-8 md:px-8 md:py-10">
                <p className="font-display text-3xl font-black tracking-tight md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em]">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em]">{audienceNote} · figures current as of publishing, not guaranteed</p>
        </div>
      </section>

      {/* Campaign work */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <p className="eyebrow mb-4">Campaign work</p>
        <h2 className="mb-10 font-display text-4xl font-black tracking-tight text-white md:text-6xl">Brands I’ve created with.</h2>
        <CampaignShowcase />
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28"><div className="rounded-[28px] border border-white/10 bg-surface p-8 md:p-12"><div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow mb-4">Have something in mind?</p><h2 className="font-display text-4xl font-black tracking-tight text-white md:text-6xl">Let’s make it real.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">For brand partnerships, creative projects, collaborations, or just saying hi.</p></div><a href={`mailto:${site.email}`} className="inline-flex w-fit rounded-full bg-white px-7 py-4 text-sm font-bold text-bg transition hover:bg-flame hover:text-white">{site.email} →</a></div></div></section>
    </div>
  );
}

function WorkContent({ title, type, body }: { title: string; type: string; body: string }) {
  return <><div className="flex items-center justify-between gap-4"><span className="font-mono text-[10px] uppercase tracking-[0.24em] text-flame">{type}</span><span className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-flame">↗</span></div><h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">{title}</h3><p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">{body}</p></>;
}
