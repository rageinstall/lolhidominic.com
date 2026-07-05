import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Dominic. Creator-journalist, cultural translator, trans person. Here's what I cover, why I cover it, and why it matters.",
  openGraph: {
    title: `About | ${site.shortName}`,
    description: "Who I am, what I cover, and why I cover it.",
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
              Okay so, here&rsquo;s the thing. A lot of media that covers LGBTQ+ people is either
              written for a straight audience explaining us, or it&rsquo;s advocacy content speaking
              at us. Very little of it is just... talking to us. Like a smart friend who did the
              reading and can break it down without the condescension.
            </p>
            <p>
              That&rsquo;s the gap I work in. I&rsquo;m a creator-journalist and cultural
              translator. What that means practically is I take the stories, the discourse, the
              algorithmic weirdness, the travel safety questions, the &ldquo;wait, what is actually
              happening with representation right now&rdquo; questions, and I answer them clearly, in
              plain language, for people who don&rsquo;t have time to wade through seventeen think
              pieces to figure out what&rsquo;s real.
            </p>
            <p>
              I&rsquo;m trans. That&rsquo;s not a disclaimer, it&rsquo;s context. My perspective
              comes from inside the experience, not from covering it at arm&rsquo;s length. I cover
              trans life because I live it. I cover internet culture and media literacy because I
              watch the machine work and I think more of us should understand how it works, not just
              what it produces.
            </p>

            <blockquote className="border-l-2 border-flame pl-6 font-serif text-2xl italic leading-snug text-ink dark:text-paper">
              Real talk: the goal has always been to help people read the world more clearly, move
              through it more confidently, and feel less alone while doing it.
            </blockquote>

            <p>
              I run T-Time Media LLC, which is the umbrella for everything. The writing lives here
              at lolhidominic.com. Travel and safety content lives at{" "}
              <a href="https://linkwithpride.com" className="text-flame hover:underline">
                Link With Pride
              </a>
              . Media literacy and fact-checking drops on{" "}
              <a href="https://instagram.com/domfactcheck" className="text-flame hover:underline">
                @domfactcheck
              </a>
              . The rest of the work lives across{" "}
              <a href="https://instagram.com/lolhidominic" className="text-flame hover:underline">
                Instagram
              </a>
              , TikTok, YouTube, and Facebook under{" "}
              <span className="font-semibold text-ink dark:text-paper">@lolhidominic</span>.
            </p>

            <p>
              If my work helped you understand something, or feel more prepared for something, or
              just feel less alone in something, then it did its job.
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
                ["Media Literacy", "How stories get framed, who controls the frame, and what to do about it."],
                ["Trans Life", "Lived experience, not explained to outsiders."],
                ["Internet Culture", "The discourse, the algorithms, the viral moments that matter."],
                ["Travel & Safety", "LGBTQ+ travel, country by country, done honestly."],
                ["Representation", "Who&rsquo;s in the story, who&rsquo;s missing, and why it matters."],
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
