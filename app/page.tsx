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
  const latestPosts = allPosts.filter((post) => post.slug !== featured?.slug).slice(0, 6);

  const channels = [
    {
      label: "Weed",
      slug: "weed",
      accent: "matcha",
      promise: "Smoke sessions, strain notes, and late-night rituals.",
      description: "The lane for ritual, mood, and the culture behind every session.",
      categories: ["Media Literacy", "Internet Culture"],
      anchor: "smoke-sessions",
      badge: "Smoke",
    },
    {
      label: "Travel",
      slug: "travel",
      accent: "amber",
      promise: "City edits, corners, and the feeling of arriving somewhere new.",
      description: "The lane for the places I land, the risks I take, and the stories I collect.",
      categories: ["Travel & Safety"],
      anchor: "late-night-travel-edits",
      badge: "Travel",
    },
    {
      label: "Cooking",
      slug: "cooking",
      accent: "matcha",
      promise: "Kitchen experiments that taste like late-night comfort.",
      description: "The lane for recipes, experiments, and meals made with chaos and care.",
      categories: ["Representation", "Internet Culture"],
      anchor: "kitchen-experiments",
      badge: "Kitchen",
    },
    {
      label: "Movies",
      slug: "movies",
      accent: "amber",
      promise: "Film takes, TV reactions, and the stories that linger.",
      description: "The lane for couch watches, theater runs, and the movies that stay with me.",
      categories: ["Internet Culture", "Representation"],
      anchor: "movie-takes",
      badge: "Screen",
    },
    {
      label: "Games",
      slug: "games",
      accent: "cyber",
      promise: "Stream plans, gear notes, and what I’m playing now.",
      description: "The lane for game sessions, lore obsessions, and the plans that keep me going.",
      categories: ["Internet Culture"],
      anchor: "game-plans",
      badge: "Play",
    },
  ];

  const nowItems = [
    { title: "Currently In", value: "Los Angeles 📍" },
    { title: "Playing", value: "Cyberpunk 🎮" },
    { title: "Strain of the Week", value: "Blue Dream 💨" },
    { title: "Mood", value: "Curated chaos" },
  ];

  const followRoutes = [
    {
      title: "Want the daily chaos?",
      label: "@lolhidominic",
      body: "The daily feed for smoke sessions, travel notes, kitchen experiments, movies, and games.",
      href: "https://instagram.com/lolhidominic",
      accent: "matcha",
    },
    {
      title: "Want receipts and facts energy?",
      label: "@domfactcheck",
      body: "The reality check lane for breaking stories, context, and the signal through the noise.",
      href: "https://instagram.com/domfactcheck",
      accent: "cyber",
    },
    {
      title: "Want travel planning that makes sense?",
      label: "Link With Pride",
      body: "The travel platform built for real-world routes, safety context, and better decision-making.",
      href: "https://linkwithpride.com",
      accent: "amber",
    },
    {
      title: "Want to work together?",
      label: "Work with me",
      body: "Partnerships, sponsorships, and content coverage through T-Time Media LLC.",
      href: "/work-with-me",
      accent: "matcha",
      internal: true,
    },
  ];

  const upcomingDrops = [
    {
      title: "Next drop",
      label: "Los Angeles corner edit",
      body: "A travel edit built around the city, the corners, and the late-night feel.",
    },
    {
      title: "Next session",
      label: "Blue Dream notes",
      body: "A smoke-session write-up with the vibe, the strain, and the aftermath.",
    },
    {
      title: "Next experiment",
      label: "Kitchen test #1",
      body: "A new recipe experiment with a little chaos and a lot of flavor.",
    },
    {
      title: "Next vibe",
      label: "Cyberpunk night",
      body: "A game-night note with settings, screenshots, and the mood I’m chasing.",
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

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="mb-8 flex flex-col gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-ink-soft shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint">Current Vibe</span>
              <div className="flex flex-wrap gap-4 text-xs text-ink-soft sm:items-center">
                <span>📍 Los Angeles</span>
                <span>🎮 Cyberpunk</span>
                <span>💨 Blue Dream</span>
                <span>🌙 Curated chaos</span>
              </div>
            </div>

            <p className="eyebrow mb-3 text-ink-soft">Now</p>
            <h1 className="max-w-[16ch] font-display text-display-xl font-black tracking-tight text-paper md:max-w-[20ch]">
              I’m Dominic. Los Angeles nights, kitchen chaos, movie takes, and game plans.
            </h1>

            <div className="mt-6 max-w-2xl space-y-5 text-xl leading-relaxed text-ink-soft">
              <p>
                I write from the middle of the mess: a smoke session, a late-night travel edit, a recipe
                that worked better than expected, or a game I can’t stop thinking about.
              </p>
              <p className="text-sm text-ink-muted">
                This is the home for the parts of life that feel cinematic, real, and worth sharing.
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
                href="#lanes"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition hover:border-matcha hover:text-matcha"
              >
                Pick a lane
              </Link>
              <Link
                href="#routes"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition hover:border-cyber hover:text-cyber"
              >
                Follow routes
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {nowItems.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="eyebrow text-ink-faint">{item.title}</p>
                <p className="mt-2 font-display text-xl font-semibold text-paper">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lanes" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Choose your route</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-ink dark:text-paper">
              Pick a lane or orbit them all.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-surface/70 p-2">
            <div className="rounded-full border border-matcha/30 bg-matcha/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-matcha">
              Pick a lane
            </div>
            <div className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ink-muted">
              Orbit them all
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {channels.map((channel) => {
            const previewPosts = allPosts.filter((post) => channel.categories.includes(post.category)).slice(0, 1);
            const previewPost = previewPosts[0] || allPosts[0] || null;

            return (
              <article
                key={channel.slug}
                id={channel.anchor}
                className={`group rounded-[32px] border border-white/10 bg-gradient-to-br p-6 text-sm text-ink-soft transition duration-300 hover:-translate-y-1 hover:border-opacity-40 ${
                  channel.accent === "matcha"
                    ? "from-matcha/15 via-matcha/8 to-[#07110a]"
                    : channel.accent === "cyber"
                    ? "from-cyber/15 via-cyber/8 to-[#0b061f]"
                    : "from-amber/15 via-amber/8 to-[#160b06]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-ink-faint">
                    {channel.badge}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-ink-faint">Portal</span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-paper">{channel.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{channel.promise}</p>

                <div className="mt-6 rounded-[20px] border border-white/10 bg-black/20 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">Latest in this lane</p>
                  {previewPost ? (
                    <>
                      <h4 className="mt-3 font-display text-lg font-semibold text-paper">{previewPost.title}</h4>
                      <p className="mt-2 text-sm text-ink-muted">{previewPost.excerpt}</p>
                    </>
                  ) : (
                    <p className="mt-3 text-sm text-ink-muted">Fresh lane. The first piece is on the way.</p>
                  )}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-ink-muted">{channel.description}</p>

                <Link
                  href={`/blog${previewPost ? `/${previewPost.slug}` : ""}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-paper transition group-hover:translate-x-1"
                >
                  Enter {channel.label} <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rule" />
      </div>

      <section id="latest" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="writing-heading">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Latest</p>
            <h2 id="writing-heading" className="font-display text-display-md font-extrabold text-ink dark:text-paper">
              Latest in your orbit.
            </h2>
          </div>
          <Link href="/blog" className="font-display text-sm font-semibold text-flame hover:underline">
            All writing &rarr;
          </Link>
        </div>

        {featured ? (
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-white/10 bg-surface p-4">
              <BlogCard post={featured} feature priority />
            </div>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <CompactRow key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <p className="font-serif text-2xl italic text-ink/50 dark:text-paper/50">
            First pieces are being written. Worth the wait.
          </p>
        )}
      </section>

      <section id="coming-up" className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-8">
          <p className="eyebrow mb-3">What’s to come</p>
          <h2 className="font-display text-display-md font-extrabold text-ink dark:text-paper">
            Coming up soon.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {upcomingDrops.map((item) => (
            <div key={item.label} className="rounded-[24px] border border-white/10 bg-surface p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">{item.title}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-paper">{item.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-6 rounded-[32px] border border-white/10 bg-surface p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="eyebrow mb-3">About Dominic</p>
            <h2 className="font-display text-display-md font-extrabold text-ink dark:text-paper">
              Smoke sessions, kitchen experiments, and late-night travel edits.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              The bio is the map. Follow the routes that fit your mood and you’ll find the right lane for the next thing I’m making.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#smoke-sessions" className="rounded-full border border-matcha/20 bg-matcha/10 px-4 py-2 text-sm font-semibold text-matcha">
                Smoke sessions
              </Link>
              <Link href="#kitchen-experiments" className="rounded-full border border-amber/20 bg-amber/10 px-4 py-2 text-sm font-semibold text-amber">
                Kitchen experiments
              </Link>
              <Link href="#late-night-travel-edits" className="rounded-full border border-cyber/20 bg-cyber/10 px-4 py-2 text-sm font-semibold text-cyber">
                Late-night travel edits
              </Link>
            </div>
          </div>

          <div id="routes" className="grid gap-4 sm:grid-cols-2">
            {followRoutes.map((route) => (
              <RouteCard key={route.label} {...route} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CompactRow({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block rounded-[24px] border border-white/10 bg-surface/80 p-5 transition hover:-translate-y-0.5 hover:border-white/20">
      <div className="flex flex-wrap items-center gap-2 text-xs text-ink/50 dark:text-paper/50">
        <span className="font-display font-semibold uppercase tracking-label text-flame">{post.category}</span>
        <span aria-hidden="true">&middot;</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink decoration-flame decoration-2 underline-offset-4 group-hover:underline dark:text-paper md:text-[1.25rem] text-balance">
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
    </Link>
  );
}

function RouteCard({
  title,
  label,
  body,
  href,
  accent,
  internal = false,
}: {
  title: string;
  label: string;
  body: string;
  href: string;
  accent: string;
  internal?: boolean;
}) {
  const accentClasses =
    accent === "cyber"
      ? "border-cyber/20 bg-cyber/10 text-cyber"
      : accent === "amber"
      ? "border-amber/20 bg-amber/10 text-amber"
      : "border-matcha/20 bg-matcha/10 text-matcha";

  const inner = (
    <div className="group flex h-full flex-col rounded-[24px] border border-white/10 bg-[#090d14] p-5 transition hover:border-white/20">
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">{title}</p>
      <h3 className={`mt-3 font-display text-xl font-semibold ${accentClasses}`}>{label}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{body}</p>
      <span className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-paper transition group-hover:translate-x-1">
        {internal ? "See the route" : "Follow"} &rarr;
      </span>
    </div>
  );

  return internal ? (
    <Link href={href}>{inner}</Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer noopener">{inner}</a>
  );
}
