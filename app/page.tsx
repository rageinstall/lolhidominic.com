import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getFeaturedPost, formatDate } from "@/lib/posts";
import type { PostMeta } from "@/lib/posts";
import { site } from "@/lib/site";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Dominic Anthony Pérignon",
  description:
    "Dominic shares travel notes, weed thoughts, cooking experiments, movie reactions, and gaming plans. This is the site for the real life behind LolHiDominic.",
  openGraph: {
    title: `${site.name} | ${site.shortName}`,
    description:
      "Dominic shares travel notes, weed thoughts, cooking experiments, movie reactions, and gaming plans.",
    url: site.url,
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const allPosts = getAllPosts();
  const featured = getFeaturedPost();
  const recent = allPosts.filter((p) => p.slug !== featured?.slug).slice(0, 3);

  const channels = [
    {
      label: "Weed",
      slug: "weed",
      accent: "matcha",
      description: "Strain notes, smoke sessions, and high-lifestyle moments.",
      detail: "This lane is about the ritual, the highs, and the culture behind every smoke session.",
      categories: ["Media Literacy", "Internet Culture"],
    },
    {
      label: "Travel",
      slug: "travel",
      accent: "amber",
      description: "City edits, late-night corners, and travel notes.",
      detail: "A travel lane for the places I land, the risks I take, and the city stories I collect.",
      categories: ["Travel & Safety"],
    },
    {
      label: "Cooking",
      slug: "cooking",
      accent: "matcha",
      description: "Kitchen experiments, recipes, and food moods.",
      detail: "Kitchen experiments that taste like home and nights spent cooking with a little chaos.",
      categories: ["Representation", "Internet Culture"],
    },
    {
      label: "Movies",
      slug: "movies",
      accent: "amber",
      description: "Film reactions, TV calls, and the stories that stick.",
      detail: "Movie and TV takes from the couch, the theater, and wherever I’m watching next.",
      categories: ["Internet Culture", "Representation"],
    },
    {
      label: "Games",
      slug: "games",
      accent: "cyber",
      description: "Stream plans, what I&rsquo;m playing, and gear thoughts.",
      detail: "Game sessions, stream notes, and what I’m obsessed with when the world is quiet.",
      categories: ["Internet Culture"],
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden rounded-[32px] bg-surface px-4 pb-16 pt-20 text-paper shadow-[0_40px_120px_-40px_rgba(0,0,0,0.55)] md:px-8 md:pb-28 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,255,141,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(140,77,255,0.14),transparent_30%),linear-gradient(180deg,rgba(8,12,20,0.95),rgba(8,12,20,0.85))]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050608] to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-12 h-96 w-96 rounded-full bg-[#3CFB9F]/10 blur-3xl" />
          <div className="absolute right-[-8rem] top-28 h-80 w-80 rounded-full bg-[#A96AFF]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-ink-soft shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint">Current Vibe</span>
            <div className="flex flex-wrap gap-4 text-xs text-ink-soft sm:items-center">
              <span>📍 Currently In: Tokyo</span>
              <span>🎮 Playing: Cyberpunk</span>
              <span>💨 Strain of the Week: Blue Dream</span>
            </div>
          </div>

          <p className="eyebrow mb-3 text-ink-soft">Curated Chaos</p>
          <h1 className="max-w-[18ch] font-display text-display-xl font-black tracking-tight text-paper md:max-w-[24ch]">
            Curated chaos. Chasing stories, flavors, and framerates.
          </h1>

          <div className="mt-6 max-w-2xl space-y-5 text-xl leading-relaxed text-ink-soft">
            <p>
              I&rsquo;m Dominic. I smoke weed, cook, travel, watch movies, and play games — and I
              share the messy, cinematic moments that come with living out loud.
            </p>
            <p className="text-sm text-ink-muted">
              This is a personal channel guide for the things I actually care about: late-night
              travel edits, kitchen experiments, strain vibes, stream plans, and movie takes.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition hover:border-amber hover:text-amber"
            >
              Explore the feed
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition hover:border-matcha hover:text-matcha"
            >
              Meet Dominic
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3">Channel Selector</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-ink dark:text-paper">
              Pick a lane or orbit them all.
            </h2>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-5">
          {channels.map((channel) => (
            <Link
              key={channel.slug}
              href={`#${channel.slug}`}
              className={`group rounded-[28px] border border-white/10 bg-surface p-5 text-sm text-ink-soft transition duration-300 hover:-translate-y-1 hover:border-opacity-40 hover:bg-[#0F1320] ${
                channel.accent === "matcha"
                  ? "shadow-[0_0_60px_-30px_rgba(76,255,141,0.35)]"
                  : channel.accent === "cyber"
                  ? "shadow-[0_0_60px_-30px_rgba(140,77,255,0.35)]"
                  : "shadow-[0_0_60px_-30px_rgba(255,178,92,0.35)]"
              }`}
            >
              <span className="mb-4 inline-flex rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-ink-faint">
                {channel.label}
              </span>
              <h3 className="font-display text-lg font-semibold text-paper">{channel.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{channel.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-ink-faint">
                <span>Open channel</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-4">
          {channels.map((channel) => {
            const previewPosts = allPosts
              .filter((post) => channel.categories.includes(post.category))
              .slice(0, 2);

            return (
              <article
                id={channel.slug}
                key={channel.slug}
                className={`rounded-[28px] border border-white/10 bg-surface p-6 text-sm text-ink-soft shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-colors duration-300 ${
                  channel.accent === "matcha"
                    ? "hover:border-matcha/40"
                    : channel.accent === "cyber"
                    ? "hover:border-cyber/40"
                    : "hover:border-amber/40"
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <span className="eyebrow mb-2 block text-ink-soft">{channel.label}</span>
                    <h3 className="font-display text-2xl font-black text-paper">{channel.label} lane</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.26em] text-ink-faint">
                    {previewPosts.length > 0 ? "Featured writing" : "Fresh lane"}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{channel.detail}</p>

                {previewPosts.length > 0 ? (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {previewPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="rounded-[20px] border border-white/10 bg-[#090d14] p-5 transition hover:border-current"
                      >
                        <p className="font-display text-xs uppercase tracking-[0.28em] text-ink-faint">{post.category}</p>
                        <h4 className="mt-3 font-display text-lg font-semibold text-paper">{post.title}</h4>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="mt-8 rounded-[20px] border border-white/10 bg-[#090d14] p-6 text-sm text-ink-muted">
                    Nothing published in this lane yet. Browse the writing feed for the latest updates.
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/blog"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-paper transition hover:border-matcha hover:text-matcha"
                  >
                    Explore writing
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-paper transition hover:border-amber hover:text-amber"
                  >
                    All posts
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rule" />
      </div>

      {/* Featured + recent */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="writing-heading">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Latest</p>
            <h2 id="writing-heading" className="font-display text-display-md font-extrabold text-ink dark:text-paper">
              What I&rsquo;ve been getting into
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden shrink-0 font-display text-sm font-semibold text-flame hover:underline md:block"
          >
            All writing &rarr;
          </Link>
        </div>

        {featured ? (
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            <BlogCard post={featured} feature priority />
            <div className="grid gap-8">
              {recent.map((post) => (
                <CompactRow key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <p className="font-serif text-2xl italic text-ink/50 dark:text-paper/50">
            First pieces are being written. Worth the wait.
          </p>
        )}

        <Link href="/blog" className="mt-12 inline-block font-display text-sm font-semibold text-flame hover:underline md:hidden">
          All writing &rarr;
        </Link>
      </section>

      {/* Platforms */}
      <section className="bg-ink text-paper dark:bg-night-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow mb-3">Where else I am</p>
          <h2 className="max-w-[20ch] font-display text-display-md font-extrabold text-balance">
            The blog is home base. The work lives everywhere you do.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-paper/15 sm:grid-cols-2">
            <PlatformCard
              href="https://linkwithpride.com"
              kicker="Travel, safety, culture"
              title="Link With Pride"
              body="The LGBTQ+ travel platform I built for figuring out where you can actually go, and how to read a place before you land."
            />
            <PlatformCard
              href="https://instagram.com/domfactcheck"
              kicker="Media literacy in real time"
              title="@domfactcheck"
              body="The receipts account. When a story breaks and the takes get loud, this is where I sort what's real from what's bait."
            />
            <PlatformCard
              href="https://instagram.com/lolhidominic"
              kicker="Instagram, TikTok, YouTube"
              title="@lolhidominic"
              body="The day-to-day. Weed life, travel notes, cooking experiments, movie takes, and gaming plans."
            />
            <PlatformCard
              href="/work-with-me"
              kicker="For brands and partners"
              title="Work with me"
              body="Sponsorships, affiliate work, and coverage across platforms, run through T-Time Media LLC."
              internal
            />
          </div>
        </div>
      </section>
    </>
  );
}

function CompactRow({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block border-t border-ink/10 pt-6 dark:border-paper/10">
      <div className="flex items-center gap-3 text-xs text-ink/50 dark:text-paper/50">
        <span className="font-display font-semibold uppercase tracking-label text-flame">{post.category}</span>
        <span aria-hidden="true">&middot;</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ink decoration-flame decoration-2 underline-offset-4 group-hover:underline dark:text-paper md:text-2xl text-balance">
        {post.title}
      </h3>
    </Link>
  );
}

function PlatformCard({
  href,
  kicker,
  title,
  body,
  internal = false,
}: {
  href: string;
  kicker: string;
  title: string;
  body: string;
  internal?: boolean;
}) {
  const inner = (
    <div className="group flex h-full flex-col bg-ink p-8 transition-colors hover:bg-night-soft dark:bg-night dark:hover:bg-night-soft">
      <p className="font-display text-xs font-semibold uppercase tracking-label text-flame">{kicker}</p>
      <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-paper">{title}</h3>
      <p className="mt-3 flex-1 text-paper/65">{body}</p>
      <span className="mt-6 font-display text-sm font-semibold text-paper/80 transition-transform group-hover:translate-x-1">
        {internal ? "See the details" : "Go there"} &rarr;
      </span>
    </div>
  );

  return internal ? (
    <Link href={href as never}>{inner}</Link>
  ) : (
    <a href={href}>{inner}</a>
  );
}
