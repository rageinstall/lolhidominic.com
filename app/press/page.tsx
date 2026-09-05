import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Book Dominic Anthony Pérignon for expert commentary and interviews. LolHiDominic brings clear perspective, sourced analysis, and a direct voice.",
  openGraph: {
    title: `Press & Media | ${site.shortName}`,
    description:
      "Book Dominic for expert commentary and interviews. LolHiDominic brings clear perspective and direct storytelling.",
    url: `${site.url}/press`,
    type: "website",
  },
  alternates: { canonical: "/press" },
};

const coverageAreas = [
  {
    topic: "Media literacy & misinformation",
    detail:
      "How stories get built, how they spread, and what reporters should actually ask about them. Regular breakdowns via @domfactcheck.",
  },
  {
    topic: "Trans life and lived experience",
    detail:
      "A first-person perspective on healthcare, documentation, public space, and policy, delivered without the usual abstract framing.",
  },
  {
    topic: "Internet culture and platforms",
    detail:
      "How the feed, the algorithm, and the viral moment work together, explained by someone who watches them closely.",
  },
  {
    topic: "Representation in media",
    detail:
      "What actually changes, what is performative, and why the gap matters for the people in the story.",
  },
  {
    topic: "Travel and safety",
    detail:
      "Practical country context for queer travelers, with a sharp focus on what matters in the real world.",
  },
];

export default function PressPage() {
  return (
    <div className="bg-bg text-ink">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:px-8 md:py-24">
        <header className="max-w-3xl">
          <p className="eyebrow mb-4">Press &amp; media</p>
          <h1 className="font-display text-[clamp(2.8rem,6vw,5rem)] font-black text-white text-balance">
            Book Dominic for commentary that cuts through the noise.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
            Dominic is the creator behind LolHiDominic. He offers expert interviews, analysis, and
            booked commentary with a direct, grounded voice. The work is sourced, clear, and built
            for journalists, producers, and podcasters who need real perspective.
          </p>
        </header>

        <div className="rule mt-14" />

        {/* What he covers */}
        <section className="mt-14" aria-labelledby="coverage-heading">
          <h2 id="coverage-heading" className="eyebrow mb-8">Coverage areas</h2>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {coverageAreas.map((c) => (
              <div key={c.topic} className="bg-bg p-6">
                <h3 className="font-display text-lg font-extrabold text-white">{c.topic}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rule mt-14" />

        {/* Notable coverage placeholder */}
        <section className="mt-14 grid gap-12 lg:grid-cols-2" aria-labelledby="coverage-past-heading">
          <div>
            <h2 id="coverage-past-heading" className="eyebrow mb-6">Appearances &amp; coverage</h2>
            <div className="space-y-5 text-ink-muted">
              <p className="leading-relaxed">
                Dominic has appeared in or been cited by outlets covering LGBTQ+ culture, digital media,
                trans policy, and travel. He brings cultural context, not talking points, and is
                practiced at making complicated media dynamics legible for general audiences.
              </p>
              <p className="leading-relaxed">
                For a current appearances list or to request a press kit, use the contact form below.
              </p>
            </div>
          </div>

          {/* Quick facts for bookers */}
          <div className="rounded-2xl border border-white/10 bg-surface">
            <div className="border-b border-white/10 px-6 py-4">
              <p className="eyebrow text-xs">Quick facts</p>
            </div>
            {[
              ["Location", "Available for remote and select in-person"],
              ["Format", "Audio, video, print, written Q&A"],
              ["Languages", "English"],
              ["Lead time", "Minimum 3 business days preferred"],
              ["Contact", site.email],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-white/10 px-6 py-3.5 last:border-0">
                <span className="font-display text-sm font-semibold text-ink-faint">{label}</span>
                <span className="text-right font-display text-sm font-bold text-white">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <p className="eyebrow mb-3">Book or inquire</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
            Send me the details.
          </h2>
          <p className="mt-4 max-w-prose text-ink-muted">
            Tell me what you&rsquo;re working on, your outlet, and your timeline. I read press
            requests myself and respond to everything that fits.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-flame px-8 py-4 font-display text-sm font-bold uppercase tracking-label text-white transition-colors hover:bg-flame-deep"
          >
            Send a press inquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
