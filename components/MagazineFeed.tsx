"use client";

import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/post-types";
import CategoryTabs from "./CategoryTabs";
import MagazineCard from "./MagazineCard";

const laneMap: Record<string, string[]> = {
  all: [],
  roam: ["Travel & Safety"],
  munch: ["Representation"],
  screen: ["Media Literacy", "Representation"],
  elevate: ["Trans Life", "Representation"],
  play: ["Internet Culture"],
};

export default function MagazineFeed({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return posts;
    const categories = laneMap[active] ?? [];
    return posts.filter((post) => categories.includes(post.category));
  }, [active, posts]);

  const firstWide = filtered[0] ?? null;
  const nextPortrait = filtered.slice(1, 3);
  const sideCards = filtered.slice(3, 7);

  return (
    <section className="mt-14">
      <CategoryTabs active={active} setActive={setActive} />

      {filtered.length === 0 ? (
        <div className="rounded-[32px] border border-white/10 bg-surface p-12 text-center text-ink-soft shadow-[0_20px_80px_-60px_rgba(0,0,0,0.55)]">
          <p className="font-display text-2xl font-bold text-paper">Nothing matches that mood yet.</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            The editorial dashboard is being filled. Return later for fresh travel, food, film, weed, and game stories.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 xl:grid-cols-[1.8fr_1fr]">
          <div className="grid gap-4">
            {firstWide ? <MagazineCard post={firstWide} layout="wide" /> : null}
            <div className="grid gap-4 sm:grid-cols-2">
              {nextPortrait.map((post) => (
                <MagazineCard key={post.slug} post={post} layout="portrait" />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {sideCards.map((post) => (
              <MagazineCard key={post.slug} post={post} layout="square" />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
