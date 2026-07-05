import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Brand partnerships and sponsorships through T-Time Media LLC. Sponsored content, affiliate integrations, and platform coverage reaching LGBTQ+ audiences.",
  openGraph: {
    title: `Work With Me | ${site.shortName}`,
    description:
      "Sponsored content, affiliate integrations, and LGBTQ+-focused platform coverage through T-Time Media LLC.",
    url: `${site.url}/work-with-me`,
    type: "website",
  },
  alternates: { canonical: "/work-with-me" },
};

const platforms = [
  {
    name: "Facebook",
    handle: "@lolhidominic / @domfactcheck",
    note: "Long-form video, commentary, and link-driving content. Where the older, more engaged side of the audience is.",
  },
  {
    name: "Instagram",
    handle: "@lolhidominic",
    note: "Reels, carousels, and story content. High engagement, visually-led, content-native formats.",
  },
  {
    name: "TikTok",
    handle: "@lolhidominic",
    note: "Short-form video built for discovery. Best for brand awareness and top-of-funnel reach.",
  },
  {
    name: "YouTube",
    handle: "@lolhidominic",
    note: "Long-form explainers and video essays. Integrations here land with the most media-literate, high-intent viewers.",
  },
  {
    name: "lolhidominic.com",
    handle: "Blog + written content",
    note: "Editorial sponsorships, affiliate links, and in-article placements for brands that fit the reader.",
  },
  {
    name: "Link With Pride",
    handle: "linkwithpride.com",
    note: "Dedicated LGBTQ+ travel platform. Best-fit for travel brands, booking platforms, insurance, and safety tools.",
  },
];

export default function WorkWithMePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <header className="max-w-3xl">
        <p className="eyebrow mb-4">T-Time Media LLC</p>
        <h1 className="font-display text-display-lg font-black text-ink dark:text-paper text-balance">
          Real reach, real audience, no filler.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/70 dark:text-paper/70">
          I work with brands that have something to offer LGBTQ+ people, particularly trans folk and
          queer travelers. If your product or service genuinely fits my audience, let&rsquo;s talk.
          If it doesn&rsquo;t, I&rsquo;ll tell you that upfront.
        </p>
      </header>

      <div className="rule mt-14" />

      {/* Audience */}
      <section className="mt-14 grid gap-12 lg:grid-cols-2" aria-labelledby="audience-heading">
        <div>
          <h2 id="audience-heading" className="eyebrow mb-5">The audience</h2>
          <div className="space-y-5 text-ink/80 dark:text-paper/80">
            <p className="text-lg leading-relaxed">
              My audience is primarily LGBTQ+ adults, with significant overlap in trans and
              non-binary communities. They&rsquo;re media-literate, skeptical of corporate
              performance, and pay attention to who a brand actually supports versus who it claims
              to support.
            </p>
            <p className="leading-relaxed">
              They trust recommendations because I&rsquo;ve built that trust over time with
              consistent, honest content. That&rsquo;s the thing you&rsquo;re partnering with, not
              just a follower count.
            </p>
            <p className="leading-relaxed">
              They span the U.S. primarily, with meaningful reach in Canada and Western Europe,
              skewing 25-44. High engagement across all platforms. Decision-makers in their
              households. Spend money intentionally.
            </p>
          </div>
        </div>

        <div className="grid gap-px bg-ink/10 dark:bg-paper/10 self-start">
          {[
            ["Primary audience", "LGBTQ+ adults, trans-inclusive focus"],
            ["Geography", "U.S.-first, Canada, Western Europe"],
            ["Age skew", "25-44"],
            ["Platform mix", "Facebook, Instagram, TikTok, YouTube, Blog"],
            ["Inquiry type", "Sponsorships, affiliates, editorial coverage"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between bg-paper px-5 py-4 dark:bg-night">
              <span className="font-display text-sm font-semibold text-ink/60 dark:text-paper/60">
                {label}
              </span>
              <span className="text-right font-display text-sm font-bold text-ink dark:text-paper">
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="rule mt-14" />

      {/* Platforms */}
      <section className="mt-14" aria-labelledby="platforms-heading">
        <h2 id="platforms-heading" className="eyebrow mb-8">Where the work lives</h2>
        <div className="grid gap-px bg-ink/10 dark:bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p) => (
            <div key={p.name} className="flex flex-col bg-paper p-6 dark:bg-night">
              <span className="font-display text-lg font-extrabold text-ink dark:text-paper">{p.name}</span>
              <span className="mt-1 font-display text-xs font-semibold uppercase tracking-label text-flame">{p.handle}</span>
              <p className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-paper/65">{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule mt-14" />

      {/* What I do and don't do */}
      <section className="mt-14 grid gap-12 lg:grid-cols-2" aria-labelledby="terms-heading">
        <div>
          <h2 id="terms-heading" className="eyebrow mb-5">What I do</h2>
          <ul className="space-y-3 text-ink/80 dark:text-paper/80">
            {[
              "Sponsored content that reads like content, not a press release",
              "Affiliate integrations, clearly disclosed",
              "Dedicated coverage on one or more platforms",
              "Travel and destination features via Link With Pride",
              "Multi-platform campaign packages",
              "Custom deliverables, negotiated case by case",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-flame" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-5">What I don&rsquo;t do</h2>
          <ul className="space-y-3 text-ink/80 dark:text-paper/80">
            {[
              "Coverage of brands whose practices contradict LGBTQ+ interests",
              "Pre-packaged scripts I didn't write",
              "Undisclosed sponsorships of any kind",
              "Pride-month-only partnerships that disappear in July",
              "Products I wouldn't actually use or recommend",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-taupe" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16 border border-ink/15 p-8 dark:border-paper/15 md:p-12">
        <p className="eyebrow mb-3">Ready to talk</p>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink dark:text-paper md:text-4xl">
          Pitch me. I read the emails myself.
        </h2>
        <p className="mt-4 max-w-prose text-ink/70 dark:text-paper/70">
          Tell me who you are, what you&rsquo;re trying to do, and why you think it fits my
          audience. That&rsquo;s all I need to know if there&rsquo;s something worth building.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-block bg-flame px-8 py-4 font-display text-sm font-bold uppercase tracking-label text-paper transition-colors hover:bg-flame-deep"
        >
          Send an inquiry
        </Link>
      </div>
    </div>
  );
}
