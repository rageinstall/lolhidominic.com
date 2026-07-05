import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import BlogFilter from "@/components/BlogFilter";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and breakdowns on media literacy, internet culture, representation, trans life, and travel safety. Filter by what you came for.",
  openGraph: {
    title: `Writing | ${site.shortName}`,
    description:
      "Essays and breakdowns on media literacy, internet culture, representation, trans life, and travel safety.",
    url: `${site.url}/blog`,
    type: "website",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <header className="max-w-3xl">
        <p className="eyebrow mb-4">The writing</p>
        <h1 className="font-display text-display-lg font-black text-ink dark:text-paper text-balance">
          Everything I&rsquo;ve thought hard enough about to write down.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/70 dark:text-paper/70">
          Some of it is breaking down how a story got spun. Some of it is travel I wish someone had
          warned me about. Some of it is just trans life, said plainly. Pick a lane or read it all.
        </p>
      </header>

      <div className="mt-14">
        <BlogFilter posts={posts} />
      </div>
    </div>
  );
}
