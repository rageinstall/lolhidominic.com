"use client";

import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/post-types";
import { categories } from "@/lib/site";
import BlogCard from "./BlogCard";

export default function BlogFilter({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<string>("All");

  const filters = useMemo(() => {
    const used = new Set(posts.map((p) => p.category));
    return ["All", ...categories.filter((c) => used.has(c))];
  }, [posts]);

  const visible = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [posts, active]
  );

  return (
    <div>
      {/* Filter pills */}
      <div
        className="flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter writing by topic"
      >
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`rounded-pill border px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-label transition-all duration-150 ${
                isActive
                  ? "border-flame bg-flame/10 text-flame"
                  : "border-rule bg-surface text-ink-muted hover:border-flame/40 hover:text-ink"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Count */}
      <p className="mt-5 font-mono text-[11px] tracking-[0.04em] text-ink-faint" aria-live="polite">
        {visible.length} {visible.length === 1 ? "piece" : "pieces"}
        {active !== "All" ? ` in ${active}` : ""}
      </p>

      {/* Grid */}
      {visible.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <BlogCard key={post.slug} post={post} feature={post.featured} />
          ))}
        </div>
      ) : (
        <p className="mt-16 font-serif text-2xl italic text-ink-faint">
          Nothing filed under {active} yet. Check back soon.
        </p>
      )}
    </div>
  );
}
