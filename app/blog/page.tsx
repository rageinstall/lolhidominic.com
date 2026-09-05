import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import BlogFilter from "@/components/BlogFilter";

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

  return (
    <div className="bg-bg text-ink">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
        <header className="max-w-3xl">
          <p className="eyebrow mb-4">Writing</p>
          <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-black tracking-[-0.025em] text-white">
            Stories, ideas, and things I can&rsquo;t stop thinking about.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
            A collection of essays, travel notes, media commentary, and personal perspectives from Dominic.
          </p>
        </header>

        <div className="mt-12">
          <BlogFilter posts={posts} />
        </div>
      </div>
    </div>
  );
}
