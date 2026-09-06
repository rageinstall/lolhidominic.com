import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "A clear view of Dominic Pérignon's studio, owned platforms, and brand partnerships.",
  openGraph: { title: `Work | ${site.shortName}`, description: "Studio, platforms, brands, and campaigns by Dominic Pérignon.", url: `${site.url}/work-with-me`, type: "website" },
  alternates: { canonical: "/work-with-me" },
};

const studioServices = [
  ["Sponsored content", "Platform-native video that feels like something people actually want to watch."],
  ["UGC + creative", "Concepts, scripts, shoots, and edits built around a human point of view."],
  ["Campaigns", "Creator-led ideas that can grow from one video into a larger story."],
  ["Experiences", "Events, activations, trips, and collaborations built around participation."],
];

const platforms = [
  { title: "LolHiDominic", type: "Creator platform", body: "My personal media platform: video, culture, travel, trans life, humor, and stories that matter.", href: "https://instagram.com/lolhidominic", external: true },
  { title: "Link With Pride", type: "Travel platform", body: "An LGBTQ+ travel platform built to help people make better-informed decisions about where they go.", href: "/link-with-pride" },
  { title: "T-Time", type: "Community", body: "A transgender and allies community built around connection, education, kindness, privacy, and safety.", href: "/t-time-media" },
  { title: "@dominicsview", type: "Media project", body: "A fact-checking and context-driven extension of my storytelling work.", href: "https://instagram.com/dominicsview", external: true },
];

const partnerships = [
  { title: "DC Pride → WorldPride DC", type: "Cultural campaign · 2024 → 2025", body: "Two years. One evolving story. A personal point of view carried from DC Pride into WorldPride.", href: "/work/dc-pride-worldpride", featured: true },
  { title: "Fossil — Made For This", type: "Brand campaign", body: "A creator-led campaign built around identity, creativity, presence, and the question of what we are made for.", href: "/work/fossil-made-for-this" },
  { title: "Portland Pride 2024", type: "Destination campaign", body: "A Pride trip turned into a city story about queer community, local culture, and lived experience.", href: "/work/portland-pride" },
  { title: "POIZON", type: "Brand campaign", body: "Fashion, sneaker, and giveaway content built around personal style and audience participation.", href: "/work/poizon" },
  { title: "ThreadBeast", type: "Brand partnership", body: "A fashion creator partnership spanning multiple campaigns and years of content.", href: "/work/threadbeast" },
];

export default function WorkWithMePage() {
  return (
    <div className="bg-bg text-ink">
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
        <p className="eyebrow mb-6">Work · a map of the ecosystem</p>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <h1 className="font-display text-[clamp(4.8rem,12vw,10.5rem)] font-black leading-[.77] tracking-[-.075em]">What I’ve<br /><span className="text-blue">built.</span></h1>
          <div className="max-w-xl"><p className="text-xl leading-relaxed md:text-2xl">Not everything here is a partnership. Some things I own. Some things I build. Some things I make with brands.</p><div className="mt-8 flex flex-wrap gap-2"><a href="#studio" className="tag">T-Time Media LLC</a><a href="#platforms" className="tag">My platforms</a><a href="#partnerships" className="tag">Partnerships</a></div></div>
        </div>
      </section>

      <div className="marquee"><div className="marquee-track"><div className="flex">{["owned","built","created","collaborated","storytelling","community","owned","built","created","collaborated","storytelling","community"].map((item, i) => <span className="marquee-item" key={`${item}-${i}`}>{item}</span>)}</div></div></div>

      <section id="studio" className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div><p className="eyebrow mb-4">01 · Umbrella</p><div className="section-number">01</div><p className="mt-5 max-w-xs text-sm font-bold uppercase tracking-[.08em] text-ink-muted">The business behind the work</p></div>
          <div>
            <div className="flex flex-wrap items-baseline gap-4"><h2 className="font-display text-5xl font-black tracking-[-.055em] md:text-8xl">T-Time Media LLC</h2><span className="tag bg-pink">studio</span></div>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed">T-Time Media LLC is the umbrella for my creative work. It connects the creator platform, independent projects, experiences, and brand collaborations without pretending they are the same thing.</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {studioServices.map(([title, body], i) => <div key={title} className="card p-6"><span className="font-display text-4xl font-black text-blue">0{i + 1}</span><h3 className="mt-7 font-display text-2xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="platforms" className="border-y border-black/15 bg-blue px-5 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div><p className="mb-4 text-[10px] font-extrabold uppercase tracking-[.16em] text-white/70">02 · Owned</p><div className="font-display text-[clamp(5rem,10vw,9rem)] font-black leading-[.75] tracking-[-.07em]">02</div></div>
            <div><h2 className="font-display text-5xl font-black tracking-[-.055em] md:text-8xl">My platforms.</h2><p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">These are mine. They belong to the T-Time Media ecosystem and should never be confused with the brands I collaborate with.</p></div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {platforms.map((item) => <Project key={item.title} {...item} dark />)}
          </div>
        </div>
      </section>

      <section id="partnerships" className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div><p className="eyebrow mb-4">03 · Collaborations</p><div className="section-number">03</div><p className="mt-5 max-w-xs text-sm font-bold uppercase tracking-[.08em] text-ink-muted">Work made with other people</p></div>
          <div>
            <h2 className="font-display text-5xl font-black tracking-[-.055em] md:text-8xl">Brand partnerships.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">Campaigns, destinations, organizations, and collaborations. These are external partnerships — separate from the platforms I own.</p>
            <div className="mt-12 grid gap-4">
              {partnerships.map((item) => <Link key={item.title} href={item.href as any} className={`work-card group block p-7 md:p-9 ${item.featured ? "bg-pink" : ""}`}><div className="flex items-start justify-between gap-6"><span className="text-[10px] font-extrabold uppercase tracking-[.16em] opacity-65">{item.type}</span><span className="arrow text-2xl">↗</span></div><div className="mt-16 md:flex md:items-end md:justify-between md:gap-10"><h3 className="max-w-2xl font-display text-3xl font-black leading-[.94] md:text-5xl">{item.title}</h3><p className="mt-4 max-w-lg text-sm leading-relaxed opacity-75 md:mt-0">{item.body}</p></div><span className="mt-8 inline-block text-sm font-bold">View case study →</span></Link>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lime px-5 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-[1440px] grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow mb-5">04 · Let’s make something</p><h2 className="max-w-5xl font-display text-5xl font-black leading-[.86] tracking-[-.06em] md:text-8xl">Bring me the idea. I’ll bring the story.</h2></div><Link href="/contact" className="btn-primary">Start a conversation ↗</Link></div></section>
    </div>
  );
}

function Project({ title, type, body, href, external = false, dark = false }: { title: string; type: string; body: string; href: string; external?: boolean; dark?: boolean }) {
  const content = <><div className="flex items-start justify-between gap-4"><span className={`text-[10px] font-extrabold uppercase tracking-[.16em] ${dark ? "text-white/60" : "text-blue"}`}>{type}</span><span className="arrow text-2xl">↗</span></div><h3 className="mt-12 font-display text-3xl font-black tracking-[-.04em] md:text-4xl">{title}</h3><p className={`mt-4 max-w-xl text-sm leading-relaxed ${dark ? "text-white/75" : "text-ink-muted"}`}>{body}</p><span className={`mt-7 inline-block text-sm font-bold ${dark ? "text-white" : "text-blue"}`}>Visit project →</span></>;
  const classes = `work-card ${dark ? "border-white/40 bg-white/10 text-white hover:bg-white/15" : ""} rounded-[20px] p-7 md:p-9`;
  return external ? <a href={href} target="_blank" rel="noreferrer" className={classes}>{content}</a> : <Link href={href as any} className={classes}>{content}</Link>;
}
