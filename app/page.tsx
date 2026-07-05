import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getFeaturedPost, formatDate } from "@/lib/posts";
import type { PostMeta } from "@/lib/posts";
import { site } from "@/lib/site";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Dominic Anthony Pérignon",
  description:
    "Creator-journalist and cultural translator. Media literacy, internet culture, representation, and trans life, explained like a smart friend would.",
  openGraph: {
    title: `${site.name} | ${site.shortName}`,
    description:
      "Media literacy, internet culture, representation, and trans life, explained like a smart friend would.",
    url: site.url,
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedPost();
  const recent = getAllPosts()
    .filter((p) => p.slug !== featured?.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero. Not a welcome mat. A statement of what this is. */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="eyebrow mb-6">Creator-journalist &middot; Cultural translator</p>
        <h1 className="max-w-[16ch] font-display text-display-xl font-black text-ink dark:text-paper text-balance">
          Culture moves fast. I slow it down so it makes sense.
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-prose text-xl leading-relaxed text-ink/75 dark:text-paper/75 md:col-span-7">
            I&rsquo;m Dominic. I write about media literacy, internet culture, representation, and
            trans life for the people the headlines usually talk over. Real talk, receipts included.
            No lectures, no panic.
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Link
              href="/blog"
              className="bg-ink px-7 py-3.5 font-display text-sm font-bold uppercase tracking-label text-paper transition-colors hover:bg-flame dark:bg-paper dark:text-ink dark:hover:bg-flame dark:hover:text-paper"
            >
              Read the writing
            </Link>
            <Link
              href="/about"
              className="border border-ink/25 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-label text-ink transition-colors hover:border-ink dark:border-paper/25 dark:text-paper dark:hover:border-paper"
            >
              Who I am
            </Link>
          </div>
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
              body="The day-to-day. Culture, commentary, and the occasional unserious detour, posted across the feeds."
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
      <p className="mt-2 text-ink/65 line-clamp-2 dark:text-paper/65">{post.excerpt}</p>
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
