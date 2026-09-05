import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import CampaignShowcase from "@/components/CampaignShowcase";

export const metadata: Metadata = {
  title: "Work",
  description: "Creative work and independent projects by Dominic Pérignon through T-Time Media LLC.",
  openGraph: {
    title: `Work | ${site.shortName}`,
    description: "Creative work and independent projects by Dominic Pérignon.",
    url: `${site.url}/work`,
    type: "website",
  },
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="bg-bg text-ink">
      <section className="mx-auto max-w-[1320px] px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="eyebrow mb-5">Work · T-Time Media LLC</p>
        <h1 className="max-w-4xl font-display text-[clamp(4rem,11vw,9rem)] font-black leading-[0.86] tracking-[-0.06em] text-white">Work.</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-muted md:text-2xl">I like making things that didn&rsquo;t exist before.</p>
      </section>

      <div className="mx-auto max-w-[1320px] px-6 md:px-8"><div className="rule" /></div>

      {/* Featured work */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="eyebrow mb-10">Featured work</h2>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {projects.map((item) => {
            const className = "group bg-bg p-7 transition hover:bg-surface md:p-9";
            const content = (
              <>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-flame">{item.type}</span>
                  <span className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-flame">↗</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">{item.body}</p>
              </>
            );
            return item.external ? (
              <a key={item.slug} href={item.href} className={className}>{content}</a>
            ) : (
              <Link key={item.slug} href={item.href as any} className={className}>{content}</Link>
            );
          })}
        </div>
      </section>

      {/* Collaborations */}
      <section className="border-y border-white/10 bg-surface" aria-labelledby="collabs-heading">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28">
          <h2 id="collabs-heading" className="eyebrow mb-4">Collaborations</h2>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Brand partnerships and campaign work, structured for real case studies as they&rsquo;re
            ready to publish.
          </p>
          <CampaignShowcase />
        </div>
      </section>

      {/* Independent projects */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-8 md:py-28" aria-labelledby="independent-heading">
        <h2 id="independent-heading" className="eyebrow mb-10">Independent projects</h2>
        <div className="space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {projects.map((item) => {
            const content = (
              <>
                <div>
                  <p className="font-display text-xl font-bold text-white md:text-2xl">{item.title}</p>
                  <p className="mt-2 max-w-xl leading-relaxed text-ink-muted">{item.body}</p>
                </div>
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.24em] text-flame">{item.type} ↗</span>
              </>
            );
            const className = "group flex flex-col gap-4 bg-bg p-6 transition hover:bg-surface sm:flex-row sm:items-center sm:justify-between md:p-8";
            return item.external ? (
              <a key={item.slug} href={item.href} className={className}>{content}</a>
            ) : (
              <Link key={item.slug} href={item.href as any} className={className}>{content}</Link>
            );
          })}
        </div>
      </section>

      <section className="bg-flame px-6 py-20 text-bg md:px-8 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em]">Let&rsquo;s work</p>
          <h2 className="max-w-4xl font-display text-5xl font-black leading-none md:text-7xl">I like making things that didn&rsquo;t exist before.</h2>
          <Link href="/work-with-me" className="mt-8 inline-flex rounded-full bg-bg px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-bg">Work with me →</Link>
        </div>
      </section>
    </div>
  );
}
