import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fossil — Made For This",
  description: "A Fossil Made For This creator campaign centered on Dominic's story, creativity, and the things he was made for.",
  openGraph: { title: `Fossil — Made For This | ${site.shortName}`, description: "Creator campaign case study for Fossil's Made For This campaign.", url: `${site.url}/work/fossil-made-for-this`, type: "website" },
  alternates: { canonical: "/work/fossil-made-for-this" },
};

const beats = [
  ["01", "Find your place", "The film opens on a quiet, intimate moment before Dominic's story begins: a journey toward a place where he could finally speak his truth."],
  ["02", "Right here, right now", "The watch is integrated into the story rather than isolated as a product shot. The language and pacing make the present moment part of the campaign idea."],
  ["03", "Share the journey", "The film connects Dominic's creator work through T-Time with a larger purpose: sharing pieces of his journey, creating more, and inspiring others."],
  ["04", "Made for this", "The final question turns the campaign outward: “What were you made for?” The answer is left with the viewer."],
];

export default function FossilMadeForThisPage() {
  return (
    <div className="bg-bg text-ink">
      <section className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <Link href="/work-with-me" className="eyebrow inline-block text-ink-muted transition hover:text-blue">← Back to work</Link>
        <p className="eyebrow mb-5 mt-12 text-blue">Brand campaign · Fossil</p>
        <h1 className="max-w-6xl font-display text-[clamp(3.7rem,10vw,9rem)] font-black leading-[0.84] tracking-[-0.06em]">Made<br /><span className="text-blue">For This.</span></h1>
        <p className="mt-8 max-w-3xl font-display text-2xl font-semibold leading-tight md:text-4xl">A personal creator story built around purpose, presence, and the question of what we were made for.</p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">The supplied campaign material identifies the work as Fossil's “Made For This” campaign. The accompanying film follows Dominic through intimate, cinematic moments of work, friendship, creativity, and reflection.</p>
      </section>
      <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>
      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow mb-4">The campaign</p><h2 className="font-display text-4xl font-black tracking-tight md:text-6xl">Make the product part of the story.</h2></div><div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-muted"><p>Rather than presenting the watch as a standalone object, the film places it inside Dominic's actual world: sitting with a laptop, moving through the city, driving, working with a camera, talking with another person, and creating.</p><p>The visual language stays cinematic and understated. Warm interiors give way to darker blue-toned scenes, while close-ups of the watch appear naturally inside the movement of the story.</p><p>That approach makes the campaign feel less like a product demonstration and more like a portrait of a creator in motion.</p></div></div></section>
      <section className="border-y border-black/10 bg-surface"><div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28"><p className="eyebrow mb-8 text-blue">The story arc</p><div className="grid gap-px bg-black/10 md:grid-cols-2">{beats.map(([number,title,body])=><article key={number} className="bg-bg p-8 md:p-10"><span className="font-mono text-xs text-blue">{number}</span><h3 className="mt-10 font-display text-3xl font-black">{title}</h3><p className="mt-4 leading-relaxed text-ink-muted">{body}</p></article>)}</div></div></section>
      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow mb-4">The film</p><h2 className="font-display text-5xl font-black md:text-7xl">A watch inside a life.</h2></div><div className="space-y-6 text-lg leading-relaxed text-ink-muted"><p>The supplied video moves between everyday environments and intimate creator moments: a table, a laptop, a car, a camera setup, time spent with a friend, and late-night editing.</p><p>On-screen lines such as “Mine led me to a place where I could finally speak my truth,” “Right here, right now,” and “I share pieces of my journey” make the creative idea personal without turning the film into a conventional product pitch.</p><p>The closing message — “We were made for this” — resolves into the campaign question: “What were you made for?”</p></div></div></section>
      <section className="border-y border-black/10 bg-surface"><div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28"><p className="eyebrow mb-5 text-blue">Why it works</p><h2 className="max-w-5xl font-display text-5xl font-black leading-none md:text-7xl">The product is present. The person is the point.</h2><div className="mt-12 grid gap-6 md:grid-cols-3"><StoryCard title="Personal" body="The campaign is grounded in Dominic's own journey and the meaning he attaches to creating and sharing his life."/><StoryCard title="Cinematic" body="Low-light interiors, warm practicals, driving shots, close-ups, and quiet editing-room moments create a distinct visual world."/><StoryCard title="Purposeful" body="The film connects creativity with a larger idea: finding the thing that gives you a reason to create, speak, and inspire."/></div></div></section>
      <section className="bg-blue px-6 py-20 text-bg md:px-8 md:py-28"><div className="mx-auto max-w-[1320px]"><p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em]">More work</p><h2 className="max-w-4xl font-display text-5xl font-black leading-none md:text-7xl">Let’s make something people actually want to watch.</h2><Link href="/contact" className="mt-8 inline-flex rounded-full bg-bg px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-bg">Work with Dominic →</Link></div></section>
    </div>
  );
}
function StoryCard({ title, body }: { title: string; body: string }) { return <div className="border border-black/10 bg-bg p-7 md:p-8"><h3 className="font-display text-2xl font-black">{title}</h3><p className="mt-4 leading-relaxed text-ink-muted">{body}</p></div>; }
