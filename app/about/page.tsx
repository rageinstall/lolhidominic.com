import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Dominic Pérignon — creator, storyteller, and brand builder based in Los Angeles.",
  openGraph: {
    title: `About | ${site.shortName}`,
    description: "The story behind Dominic Pérignon — creator, storyteller, and brand builder.",
    url: `${site.url}/about`,
    type: "profile",
  },
  alternates: { canonical: "/about" },
};

const feelings = ["Included.", "Powerful.", "Less alone."];

export default function AboutPage() {
  return (
    <div className="bg-bg text-ink">
      <section className="mx-auto max-w-[1320px] px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="eyebrow mb-5">About Dominic</p>
        <h1 className="max-w-6xl font-display text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.88] tracking-[-0.055em]">
          I didn’t start creating because I had something to sell.<br />
          <span className="text-blue">I started because I wanted to see myself.</span>
        </h1>
      </section>

      <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>

      <section className="mx-auto grid max-w-[1320px] gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="eyebrow mb-4">The beginning</p>
          <p className="font-serif text-3xl italic leading-relaxed text-ink-soft">I wanted to meet people like me, have more positive conversations, and build a life that felt genuinely happy.</p>
        </div>
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-muted">
          <p>I started creating because I couldn’t see myself anywhere in the world. I wanted to make the kind of work I needed to see — work that made room for people who often felt like they were watching from the outside.</p>
          <p>At first, that looked like fashion-forward videos, favorite music, and editing styles I couldn’t stop experimenting with. I liked making things. More importantly, I liked what happened when somebody watched them and felt understood.</p>
          <p>In November 2024, I moved to Los Angeles and decided to take creativity seriously. The city gave me room to grow, and the support that followed showed me that there was something worth building here.</p>
          <p>I keep creating because I love telling stories, making videos, and making people feel something. Transmasculine people are still rarely at the forefront of media productions. I want to help close that gap by showing up, making things, and inviting other people into the conversation.</p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-surface">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
          <p className="eyebrow mb-5">Why I keep creating</p>
          <div className="grid gap-10 md:grid-cols-3">
            <div><p className="font-display text-3xl font-black">Tell stories.</p><p className="mt-3 leading-relaxed text-ink-muted">I want to turn lived experience into something people can see, understand, and carry with them.</p></div>
            <div><p className="font-display text-3xl font-black">Make space.</p><p className="mt-3 leading-relaxed text-ink-muted">Visibility matters when you rarely see people like yourself at the center of the frame.</p></div>
            <div><p className="font-display text-3xl font-black">Feel something.</p><p className="mt-3 leading-relaxed text-ink-muted">A good piece of content can make you laugh, think, feel represented, or finally feel less alone.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="eyebrow mb-4">What I want people to feel</p><h2 className="font-display text-5xl font-black leading-none tracking-tight md:text-7xl">When they leave my work, I want them to feel...</h2></div>
          <div className="grid gap-px bg-black/10 sm:grid-cols-3">
            {feelings.map((feeling) => <div key={feeling} className="bg-surface p-8"><p className="font-display text-3xl font-black text-blue">{feeling}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-blue px-6 py-16 text-bg md:px-8 md:py-24">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em]">Today</p><h2 className="max-w-3xl font-display text-4xl font-black leading-none md:text-6xl">Creator. Storyteller. Brand builder.</h2></div>
          <Link href="/work-with-me" className="rounded-full bg-bg px-6 py-3 text-sm font-bold text-ink transition hover:bg-white hover:text-bg">See the work →</Link>
        </div>
      </section>
    </div>
  );
}
