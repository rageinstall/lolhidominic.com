import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "For journalists, podcasters, and producers. Dominic covers media literacy, internet culture, trans life, and LGBTQ+ travel. Available for interviews and expert commentary.",
  openGraph: {
    title: `Press & Media | ${site.shortName}`,
    description:
      "For journalists, podcasters, and producers. Book Dominic for interviews and expert commentary.",
    url: `${site.url}/press`,
    type: "website",
  },
  alternates: { canonical: "/press" },
};

const coverageAreas = [
  {
    topic: "Media literacy & misinformation",
    detail:
      "How stories targeting LGBTQ+ people get manufactured, spread, and what to actually do with them. Regular breakdowns via @domfactcheck.",
  },
  {
    topic: "Trans life and lived experience",
    detail:
      "First-person perspective on navigating healthcare, documentation, public space, and the policy environment, without the abstract framing.",
  },
  {
    topic: "Internet culture and algorithms",
    detail:
      "How platforms shape what stories reach queer audiences, what gets amplified, and what gets suppressed, from someone who studies the feed.",
  },
  {
    topic: "Representation in media and entertainment",
    detail:
      "What's actually changing, what's performance, and what the gap between them costs real people.",
  },
  {
    topic: "LGBTQ+ travel and safety",
    detail:
      "Country-by-country context for queer travelers, with specific focus on trans travelers. Based on research and lived experience via Link With Pride.",
  },
];

export default function PressPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <header className="max-w-3xl">
        <p className="eyebrow mb-4">Press &amp; media</p>
        <h1 className="font-display text-display-lg font-black text-ink dark:text-paper text-balance">
          Covering LGBTQ+ culture from inside it.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/70 dark:text-paper/70">
          Dominic is a creator-journalist and cultural translator available for expert commentary,
          interviews, and commentary. He covers media literacy, trans life, internet culture, and
          LGBTQ+ travel. He speaks plainly, cites his sources, and doesn&rsquo;t need a briefing
          doc to sound credible.
        </p>
      </header>

      <div className="rule mt-14" />

      {/* What he covers */}
      <section className="mt-14" aria-labelledby="coverage-heading">
        <h2 id="coverage-heading" className="eyebrow mb-8">Coverage areas</h2>
        <div className="grid gap-px bg-ink/10 dark:bg-paper/10 md:grid-cols-2">
          {coverageAreas.map((c) => (
            <div key={c.topic} className="bg-paper p-6 dark:bg-night">
              <h3 className="font-display text-lg font-extrabold text-ink dark:text-paper">{c.topic}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-paper/65">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule mt-14" />

      {/* Notable coverage placeholder */}
      <section className="mt-14 grid gap-12 lg:grid-cols-2" aria-labelledby="coverage-past-heading">
        <div>
          <h2 id="coverage-past-heading" className="eyebrow mb-6">Appearances &amp; coverage</h2>
          <div className="space-y-5 text-ink/80 dark:text-paper/80">
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
        <div className="space-y-0 border border-ink/15 dark:border-paper/15">
          <div className="border-b border-ink/10 px-6 py-4 dark:border-paper/10">
            <p className="eyebrow text-xs">Quick facts</p>
          </div>
          {[
            ["Location", "Available for remote and select in-person"],
            ["Format", "Audio, video, print, written Q&A"],
            ["Languages", "English"],
            ["Lead time", "Minimum 3 business days preferred"],
            ["Contact", site.email],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between border-b border-ink/10 px-6 py-3.5 last:border-0 dark:border-paper/10">
              <span className="font-display text-sm font-semibold text-ink/60 dark:text-paper/60">{label}</span>
              <span className="text-right font-display text-sm font-bold text-ink dark:text-paper">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16 border border-ink/15 p-8 dark:border-paper/15 md:p-12">
        <p className="eyebrow mb-3">Book or inquire</p>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink dark:text-paper">
          Send me the details.
        </h2>
        <p className="mt-4 max-w-prose text-ink/70 dark:text-paper/70">
          Tell me what you&rsquo;re working on, your outlet, and your timeline. I read press
          requests myself and respond to everything that fits.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-block bg-flame px-8 py-4 font-display text-sm font-bold uppercase tracking-label text-paper transition-colors hover:bg-flame-deep"
        >
          Send a press inquiry
        </Link>
      </div>
    </div>
  );
}
