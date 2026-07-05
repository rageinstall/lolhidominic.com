import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Link With Pride",
  description:
    "LGBTQ+ travel, safety, and culture. Know before you go. Link With Pride is the platform built for queer travelers who need honest, current, country-by-country information.",
  openGraph: {
    title: `Link With Pride | ${site.shortName}`,
    description:
      "LGBTQ+ travel, safety, and culture. Know where you can actually go, and how to read a place before you land.",
    url: `${site.url}/link-with-pride`,
    type: "website",
  },
  alternates: { canonical: "/link-with-pride" },
};

const pillars = [
  {
    kicker: "Safety first",
    title: "Country-by-country reality checks",
    body: "Not the vibe. The law. The enforcement record. The on-the-ground reality that a tourism board won't tell you. What's actually safe, what requires planning, and what to skip until things change.",
  },
  {
    kicker: "Travel smart",
    title: "Practical guides that don't assume anything",
    body: "Visa situations, disclosure considerations, documentation for trans travelers, insurance that covers the things other policies skip. The logistics most travel content ignores.",
  },
  {
    kicker: "Culture read",
    title: "Understanding a place beyond the headline",
    body: "A country can be technically legal and still hostile. A city can have a thriving scene and a government that's working to end it. Link With Pride reads the full picture.",
  },
];

export default function LinkWithPridePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow mb-6 text-flame">A T-Time Media platform</p>
          <h1 className="max-w-[18ch] font-display text-display-xl font-black text-balance">
            Know before you go. Actually know.
          </h1>
          <p className="mt-8 max-w-prose text-xl leading-relaxed text-paper/80">
            Link With Pride is the LGBTQ+ travel platform I built because the existing options
            weren&rsquo;t honest enough. It&rsquo;s not a list of &ldquo;gay-friendly&rdquo; spots.
            It&rsquo;s a real read on what LGBTQ+ people, especially trans travelers, actually need
            to know before they land somewhere.
          </p>
          <a
            href="https://linkwithpride.com"
            className="mt-10 inline-block bg-flame px-8 py-4 font-display text-sm font-bold uppercase tracking-label text-paper transition-colors hover:bg-flame-deep"
          >
            Go to Link With Pride &rarr;
          </a>
        </div>
      </section>

      {/* What it covers */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading" className="sr-only">What Link With Pride covers</h2>
        <div className="grid gap-px bg-ink/10 dark:bg-paper/10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col bg-paper p-8 dark:bg-night">
              <p className="eyebrow mb-3">{p.kicker}</p>
              <h3 className="font-display text-xl font-extrabold tracking-tight text-ink dark:text-paper">
                {p.title}
              </h3>
              <p className="mt-4 text-ink/70 dark:text-paper/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why it exists */}
      <section className="border-y border-ink/10 dark:border-paper/10">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow mb-5">Why it exists</p>
          <div className="space-y-7 text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            <p>
              Here&rsquo;s what&rsquo;s really happening with LGBTQ+ travel content: most of it is
              optimized for the person who&rsquo;s never had to worry. Lists of cute bars, &ldquo;welcoming&rdquo; resorts, and cities described as
              &ldquo;vibrant.&rdquo; Useful if the hardest part of your trip is choosing a brunch spot.
            </p>
            <p>
              For trans travelers especially, the picture is more complicated. Documentation,
              healthcare access in an emergency, what happens at border control, which
              &ldquo;legal&rdquo; countries enforce protections and which look the other way. That&rsquo;s
              the information that actually matters, and almost no one was doing it right.
            </p>
            <p>
              Link With Pride is the answer to that gap. Built to be honest about the places that
              are great, cautious about the places that require planning, and clear about the places
              where real risk exists. No glossing, no false reassurance.
            </p>
          </div>

          <a
            href="https://linkwithpride.com"
            className="mt-10 inline-block border border-ink px-8 py-4 font-display text-sm font-bold uppercase tracking-label text-ink transition-colors hover:bg-ink hover:text-paper dark:border-paper dark:text-paper dark:hover:bg-paper dark:hover:text-ink"
          >
            Visit the platform
          </a>
        </div>
      </section>

      {/* For brands */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="brands-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 id="brands-heading" className="font-display text-display-md font-extrabold text-ink dark:text-paper text-balance">
              Travel brands, this one&rsquo;s for you.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70 dark:text-paper/70">
              Link With Pride is the right placement for travel companies, booking platforms, travel
              insurance, and safety-adjacent products that serve LGBTQ+ travelers. The audience
              is engaged, specific, and actively planning.
            </p>
            <a
              href="/work-with-me"
              className="mt-7 inline-block font-display text-sm font-semibold text-flame hover:underline"
            >
              See partnership options &rarr;
            </a>
          </div>
          <div className="grid gap-px bg-ink/10 dark:bg-paper/10">
            {[
              ["Best fit", "Travel, booking, insurance, gear, safety tools"],
              ["Audience", "LGBTQ+ adults actively planning travel"],
              ["Formats", "Editorial coverage, affiliate, sponsored guides"],
              ["Platform", "linkwithpride.com + cross-posting to social"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col bg-paper px-6 py-4 dark:bg-night sm:flex-row sm:justify-between">
                <span className="font-display text-sm font-semibold text-ink/60 dark:text-paper/60">{label}</span>
                <span className="font-display text-sm font-bold text-ink dark:text-paper">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
