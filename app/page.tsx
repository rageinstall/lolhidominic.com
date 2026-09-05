import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Creator · Storyteller · Brand Builder",
  description: site.description,
  openGraph: {
    title: `${site.name} — Creator · Storyteller · Brand Builder`,
    description: site.description,
    url: site.url,
    type: "website",
  },
  alternates: { canonical: "/" },
};

const stats = [
  { value: "175K+", label: "Instagram followers" },
  { value: "100K+", label: "TikTok followers" },
  { value: "278K+", label: "across Instagram, TikTok & YouTube" },
  { value: "1.2M+", label: "TikTok views · last 28 days" },
];

const work = [
  { title: "DC Pride → WorldPride DC", type: "Case study · 2024 → 2025", body: "A two-year Pride storytelling case study showing how a personal point of view evolved as the scale grew.", href: "/work/dc-pride-worldpride" },
  { title: "T-Time Media LLC", type: "Studio", body: "The creative studio behind Dominic’s work — video, brand building, sponsored campaigns, and experiences.", href: "/work-with-me#t-time-media" },
  { title: "Link With Pride", type: "Platform", body: "A travel platform built to help LGBTQ+ travelers make better-informed decisions about where they go.", href: "/link-with-pride" },
  { title: "@domfactcheck", type: "Media", body: "A fact-checking and context-driven extension of Dominic’s storytelling work.", href: "https://instagram.com/domfactcheck" },
  { title: "LolHiDominic", type: "Creator", body: "The personal feed: video, culture, travel, trans life, humor, and the stories that matter to me.", href: "https://instagram.com/lolhidominic" },
];

export default function HomePage() {
  return (
    <div className="bg-bg text-ink">
      <section className="mx-auto max-w-[1320px] px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">Creator · Storyteller · Brand Builder</p>
            <h1 className="max-w-5xl font-display text-[clamp(4rem,11vw,9rem)] font-black leading-[0.86] tracking-[-0.06em] text-white">hi, i’m<br /><span className="text-blue">dominic.</span></h1>
            <p className="mt-8 max-w-2xl font-sans text-xl leading-relaxed text-ink-muted md:text-2xl">I make videos, build brands, and tell stories that make people feel less alone.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/work-with-me" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-bg transition hover:bg-blue">Work with me →</Link><Link href="/about" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue hover:text-blue">My story</Link></div>
          </div>
          <div className="border-l border-white/10 pl-6 lg:pl-10"><p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint">Based in Los Angeles</p><p className="mt-5 font-serif text-2xl italic leading-relaxed text-white/85 md:text-3xl">“I started creating because I couldn’t see myself anywhere in the world. I wanted to meet people like me — and make something better to look at.”</p></div>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>

      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow mb-4">The story</p><h2 className="max-w-md font-display text-4xl font-black tracking-tight text-white md:text-6xl">I make things that make people feel something.</h2></div><div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-muted"><p>I started creating because I wanted to see myself. I wanted more positive conversations, more people who understood, and a life that felt genuinely happy.</p><p>At first, that meant fashion-forward videos, music I loved, and editing styles I couldn’t stop experimenting with. In November 2024, I moved to Los Angeles and decided to take creativity seriously. The city gave me room to grow — and an audience started growing with me.</p><p>I keep creating because I love telling stories, making videos, and making people feel something. Transmasculine people are still rarely at the forefront of media productions. I want to help close that gap.</p><Link href="/about" className="inline-flex font-semibold text-blue hover:underline">Read the full story →</Link></div></div>
      </section>

      <section className="border-y border-white/10 bg-surface"><div className="mx-auto grid max-w-[1320px] grid-cols-2 md:grid-cols-4">{stats.map((stat) => <div key={stat.label} className="border-r border-white/10 px-5 py-8 last:border-r-0 md:px-8 md:py-10"><p className="font-display text-3xl font-black tracking-tight text-white md:text-5xl">{stat.value}</p><p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-faint">{stat.label}</p></div>)}</div></section>

      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6"><div><p className="eyebrow mb-4">Selected work</p><h2 className="font-display text-4xl font-black tracking-tight text-white md:text-6xl">Things I’ve built.</h2></div><Link href="/work-with-me" className="hidden text-sm font-semibold text-blue hover:underline md:block">See all work →</Link></div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">{work.map((item) => { const external = item.href.startsWith("http"); const className = "group bg-bg p-7 transition hover:bg-surface md:p-9"; return external ? <a key={item.title} href={item.href} className={className}><WorkContent {...item} /></a> : <Link key={item.title} href={item.href as any} className={className}><WorkContent {...item} /></Link>; })}</div>
      </section>

      <section className="bg-blue px-6 py-20 text-bg md:px-8 md:py-28"><div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em]">Brand partnerships</p><h2 className="max-w-4xl font-display text-5xl font-black leading-none tracking-tight md:text-7xl">Let’s make something people actually want to watch.</h2></div><div><p className="text-lg leading-relaxed">Sponsored content, UGC, campaigns, creative direction, and experiences — built around an audience that values honesty, humor, representation, and a good story.</p><Link href="/work-with-me" className="mt-7 inline-flex rounded-full bg-bg px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-bg">Work with me →</Link></div></div></section>

      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28"><div className="rounded-[28px] border border-white/10 bg-surface p-8 md:p-12"><div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow mb-4">Have something in mind?</p><h2 className="font-display text-4xl font-black tracking-tight text-white md:text-6xl">Let’s make it real.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">For brand partnerships, creative projects, collaborations, or just saying hi.</p></div><a href={`mailto:${site.email}`} className="inline-flex w-fit rounded-full bg-white px-7 py-4 text-sm font-bold text-bg transition hover:bg-blue">{site.email} →</a></div></div></section>
    </div>
  );
}

function WorkContent({ title, type, body }: { title: string; type: string; body: string }) {
  return <><div className="flex items-center justify-between gap-4"><span className="font-mono text-[10px] uppercase tracking-[0.24em] text-blue">{type}</span><span className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-blue">↗</span></div><h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">{title}</h3><p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">{body}</p></>;
}
