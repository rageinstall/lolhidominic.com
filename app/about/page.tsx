import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "I&rsquo;m Dominic. I smoke weed, travel, cook, watch movies, play games, and share what I&rsquo;m into. This is the real-life site behind LolHiDominic.",
  openGraph: {
    title: `About | ${site.shortName}`,
    description:
      "I&rsquo;m Dominic. I smoke weed, travel, cook, watch movies, play games, and share what I&rsquo;m into.",
    url: `${site.url}/about`,
    type: "profile",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-16 lg:grid-cols-12">
        {/* Main copy */}
        <div className="lg:col-span-7">
          <p className="eyebrow mb-5">Who I am</p>
          <h1 className="font-display text-display-lg font-black text-ink dark:text-paper text-balance">
            I&rsquo;m Dominic. I explain things that need explaining.
          </h1>

          <div className="mt-10 space-y-7 text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            <p>
              LolHiDominic is the place I share what I actually care about. I smoke weed, cook
              things, travel when I can, watch movies, play games, and post about the weird, honest
              life that comes with all of it. I make content from how I live, not from a checklist.
            </p>
            <p>
              I&rsquo;m Dominic. I like being visible online and building in public. This site is
              where I put down the stuff that feels real — notes from trips, recipes I&rsquo;m
              trying, movie reactions, gaming takes, stream ideas, and the thoughts that come with it
              all.
            </p>
            <p>
              I&rsquo;m a trans guy. That&rsquo;s part of my story, but it doesn&rsquo;t define every
              piece of content here. The things I share are built from my life, my tastes, and my
              point of view — honest, sometimes messy, and always personal.
            </p>

            <blockquote className="border-l-2 border-flame pl-6 font-serif text-2xl italic leading-snug text-ink dark:text-paper">
              This is not a brand play. It&rsquo;s just Dominic being Dominic.
            </blockquote>

            <p>
              I run T-Time Media LLC as the umbrella for the work, but this space is really about
              LolHiDominic. If you&rsquo;re here for travel notes, cooking experiments, weed life,
              movie chats, gaming, or future streams, you&rsquo;re in the right place.
            </p>

            <p>
              If something here makes you nod, laugh, or want to reach out, that means it landed.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/work-with-me"
              className="bg-flame px-7 py-3.5 font-display text-sm font-bold uppercase tracking-label text-paper transition-colors hover:bg-flame-deep"
            >
              Work with me
            </Link>
            <Link
              href="/contact"
              className="border border-ink/25 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-label text-ink hover:border-ink dark:border-paper/25 dark:text-paper dark:hover:border-paper"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Sidebar: focus areas + platforms */}
        <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
          <div>
            <h2 className="eyebrow mb-5">What I cover</h2>
            <ul className="space-y-3">
              {[
                ["Media Literacy", "How stories get framed, what matters, and what a smart reader should notice."],
                ["Trans Life", "A first-person perspective that brings context without over-explaining."],
                ["Internet Culture", "What the feed and the platform make visible, and what they hide."],
                ["Travel & Safety", "Practical guidance on trips that matter to real people, not generic ratings."],
                ["Representation", "Who shows up in stories, who gets left out, and why that matters."],
              ].map(([topic, desc]) => (
                <li key={topic} className="border-t border-ink/10 pt-3 dark:border-paper/10">
                  <p className="font-display text-sm font-bold text-ink dark:text-paper">{topic}</p>
                  <p
                    className="mt-1 text-sm text-ink/60 dark:text-paper/60"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-5">Platforms</h2>
            <ul className="space-y-2">
              {[
                { name: "Link With Pride", handle: "linkwithpride.com", href: "https://linkwithpride.com" },
                { name: "Instagram", handle: "@lolhidominic", href: "https://instagram.com/lolhidominic" },
                { name: "TikTok", handle: "@lolhidominic", href: "https://tiktok.com/@lolhidominic" },
                { name: "YouTube", handle: "@lolhidominic", href: "https://youtube.com/@lolhidominic" },
                { name: "Facebook", handle: "@domfactcheck", href: "https://facebook.com/domfactcheck" },
              ].map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    className="group flex items-center justify-between border-t border-ink/10 py-2 dark:border-paper/10"
                  >
                    <span className="font-display text-sm font-semibold text-ink group-hover:text-flame dark:text-paper">
                      {p.name}
                    </span>
                    <span className="text-xs text-ink/50 dark:text-paper/50">{p.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
