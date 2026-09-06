import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import FeaturedStory from "@/components/FeaturedStory";
import MagazineFeed from "@/components/MagazineFeed";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays, stories, and perspectives from Dominic Pérignon on culture, media, travel, representation, and life.",
  openGraph: {
    title: `Writing | ${site.shortName}`,
    description: "Essays, stories, and perspectives from Dominic Pérignon.",
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
        <p className="eyebrow mb-4">Writing</p>
        <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-black tracking-[-0.025em] text-ink">
          Stories, ideas, and things I can&rsquo;t stop thinking about.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">
          A collection of essays, travel notes, media commentary, and personal perspectives from Dominic.
        </p>
      </header>

      <div className="mt-12 space-y-12">
        {featured ? <FeaturedStory post={featured} /> : null}
        <MagazineFeed posts={posts.filter((post) => post.slug !== featured?.slug)} />
      </div>
    </div>
  );
}
