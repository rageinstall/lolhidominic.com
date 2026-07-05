"use client";

import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/posts";
import { categories } from "@/lib/site";
import BlogCard from "./BlogCard";

// Client-side filtering. No database, no query params required.
// All posts ship in the page; we just hide what doesn't match.
export default function BlogFilter({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<string>("All");

  const filters = useMemo(() => {
    // Only show a topic chip if at least one post actually uses it.
    const used = new Set(posts.map((p) => p.category));
    return ["All", ...categories.filter((c) => used.has(c))];
  }, [posts]);

  const visible = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [posts, active]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter writing by topic">
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`border px-4 py-2 font-display text-sm font-medium tracking-tight transition-colors ${
                isActive
                  ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                  : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink dark:border-paper/20 dark:text-paper/70 dark:hover:border-paper dark:hover:text-paper"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-ink/50 dark:text-paper/50" aria-live="polite">
        {visible.length} {visible.length === 1 ? "piece" : "pieces"}
        {active !== "All" ? ` in ${active}` : ""}
      </p>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 font-serif text-2xl italic text-ink/50 dark:text-paper/50">
          Nothing filed under {active} yet. Check back, it&rsquo;s coming.
        </p>
      )}
    </div>
  );
}
