import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import FeaturedStory from "@/components/FeaturedStory";
import MagazineFeed from "@/components/MagazineFeed";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing from LolHiDominic: clear takes on stories, travel, media, and what the internet is actually saying. Pick a lane or read it all.",
  openGraph: {
    title: `Writing | ${site.shortName}`,
    description:
      "Writing from LolHiDominic: clear takes on stories, travel, media, and what the internet is actually saying.",
    url: `${site.url}/blog`,
    type: "website",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
      <header className="max-w-4xl">
        <p className="eyebrow mb-4">The editorial</p>
        <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-black tracking-[-0.025em] text-paper">
          A cinematic magazine for travel, food, film, weed, and games.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">
          This isn&rsquo;t a list. It&rsquo;s a premium dashboard of stories, reviews, and mood-driven dispatches that feel like a late-night streaming lounge.
        </p>
      </header>

      <div className="mt-12 space-y-12">
        {featured ? <FeaturedStory post={featured} /> : null}
        <MagazineFeed posts={posts.filter((post) => post.slug !== featured?.slug)} />
      </div>
    </div>
  );
}
