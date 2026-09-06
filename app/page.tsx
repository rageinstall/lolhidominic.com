import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Creator · Storyteller · Brand Builder",
  description: site.description,
  openGraph: { title: `${site.name} — Creator · Storyteller · Brand Builder`, description: site.description, url: site.url, type: "website" },
  alternates: { canonical: "/" },
};

const stats = [
  ["175K+", "Instagram followers"],
  ["100K+", "TikTok followers"],
  ["54K", "Facebook followers"],
  ["1.8K", "YouTube subscribers"],
];

const featured = [
  { title: "DC Pride → WorldPride DC", type: "Cultural campaign · 2024 → 2025", body: "Two years. One evolving story. A personal point of view carried from DC Pride into WorldPride.", href: "/work/dc-pride-worldpride", tone: "bg-pink" },
  { title: "Fossil — Made For This", type: "Brand campaign", body: "A creator-led campaign built around identity, creativity, presence, and the question of what we are made for.", href: "/work/fossil-made-for-this", tone: "bg-blue text-white" },
  { title: "Portland Pride 2024", type: "Destination campaign", body: "A Pride trip turned into a city story about queer community, local culture, and lived experience.", href: "/work/portland-pride", tone: "bg-lime" },
];

export default function HomePage() {
  return (
    <div className="bg-bg text-ink">
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="eyebrow mb-6">Creator · Storyteller · Brand Builder</p>
            <h1 className="max-w-6xl font-display text-[clamp(5rem,14vw,12rem)] font-black leading-[.76] tracking-[-.075em]">hi, i’m<br /><span className="text-blue">dominic.</span></h1>
          </div>
          <div className="max-w-xl pb-2 lg:pb-4">
            <p className="text-xl leading-relaxed md:text-2xl">I make videos, build brands, and tell stories that make people feel less alone.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="btn-primary">Work with me ↗</Link><Link href="/about" className="btn-ghost">My story</Link></div>
          </div>
        </div>
      </section>

      <div className="marquee"><div className="marquee-track">{[1,2].map((copy) => <div className="flex" key={copy}><span className="marquee-item">video</span><span className="marquee-item">storytelling</span><span className="marquee-item">transmasculine representation</span><span className="marquee-item">brand building</span><span className="marquee-item">community</span><span className="marquee-item">los angeles</span></div>)}</div></div>

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow mb-5">01 · Why I create</p><div className="section-number">01</div></div>
          <div className="max-w-4xl"><h2 className="font-display text-4xl font-black leading-[.95] md:text-7xl">I couldn’t see myself anywhere in the world. So I started creating.</h2><div className="mt-8 grid gap-6 text-lg leading-relaxed md:grid-cols-2"><p>I wanted to meet people like me, have more positive conversations, and build a life that felt happy. At first, that meant fashion-forward videos, favorite music, and experimenting with edits.</p><p>Then I moved to Los Angeles in November 2024. My creativity opened up, the support got louder, and creating stopped feeling like something I was trying — it became something I was building.</p></div><Link href="/about" className="mt-8 inline-flex font-bold text-blue hover:underline">Read my story →</Link></div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-surface"><div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">{stats.map(([value, label], i) => <div key={label} className={`px-5 py-9 ${i < 3 ? "border-r border-black/15" : ""} md:px-8 md:py-12`}><p className="font-display text-4xl font-black tracking-[-.05em] md:text-6xl">{value}</p><p className="mt-2 max-w-[170px] text-xs font-bold uppercase tracking-[.12em] text-ink-muted">{label}</p></div>)}</div></section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6"><div><p className="eyebrow mb-5">02 · Selected work</p><h2 className="font-display text-5xl font-black tracking-[-.055em] md:text-8xl">Stories I’ve made.</h2></div><Link href="/work-with-me" className="hidden font-bold text-blue md:block">See all work →</Link></div>
        <div className="grid gap-5 lg:grid-cols-3">{featured.map((item, i) => <Link href={item.href as any} key={item.title} className={`work-card ${item.tone} ${i === 1 ? "lg:mt-16" : i === 2 ? "lg:mt-8" : ""} p-7 md:p-9`}><div className="flex items-start justify-between gap-4"><span className="text-[10px] font-extrabold uppercase tracking-[.16em] opacity-70">{item.type}</span><span className="arrow text-2xl">↗</span></div><div className="mt-28 md:mt-40"><h3 className="font-display text-3xl font-black leading-[.95] md:text-4xl">{item.title}</h3><p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">{item.body}</p></div></Link>)}</div>
      </section>

      <section className="bg-red px-5 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-[1440px]"><p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.16em]">03 · The bigger picture</p><div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end"><h2 className="font-display text-5xl font-black leading-[.86] tracking-[-.06em] md:text-8xl">I want trans men to see themselves — and share more of our own stories.</h2><div><p className="text-lg leading-relaxed">Transmasculine people are rarely at the forefront of media productions. I’m interested in closing that gap through videos, collaborations, experiences, and brands that make people feel included and powerful.</p><Link href="/t-time-media" className="btn-ghost mt-8 bg-bg">See T-Time Media →</Link></div></div></div></section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28"><div className="card grid gap-8 bg-pink p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12"><div><p className="eyebrow mb-5 text-ink">Have an idea?</p><h2 className="max-w-4xl font-display text-5xl font-black leading-[.9] md:text-7xl">Let’s make people feel something.</h2></div><Link href="/contact" className="btn-primary bg-ink">Start a conversation ↗</Link></div></section>
    </div>
  );
}
