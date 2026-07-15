import Link from "next/link";
import type { PostMeta } from "@/lib/post-types";
import ReviewWidget from "./ReviewWidget";
import CoverWave from "./CoverWave";

const layoutStyles: Record<string, string> = {
  wide: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

const accentByCategory: Record<string, string> = {
  "Media Literacy": "bg-blue/10 text-blue border-blue/20",
  "Internet Culture": "bg-cyber/10 text-cyber border-cyber/20",
  "Trans Life": "bg-amber/10 text-amber border-amber/20",
  "Travel & Safety": "bg-amber/10 text-amber border-amber/20",
  Representation: "bg-matcha/10 text-matcha border-matcha/20",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function MagazineCard({ post, layout }: { post: PostMeta; layout: "wide" | "portrait" | "square" }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-surface shadow-[0_20px_80px_-60px_rgba(0,0,0,0.72)] transition duration-300 hover:-translate-y-0.5 hover:border-white/15">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <CoverWave className={layoutStyles[layout]} category={post.category}>
          <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-ink-soft backdrop-blur">
            {post.category}
          </div>
        </CoverWave>

        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] ${accentByCategory[post.category] ?? "bg-white/5 text-ink-soft border-white/10"}`}>
              {post.category}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-faint">
              {formatDate(post.date)} · {post.readTime}
            </span>
          </div>

          <h3 className="font-display text-xl font-black leading-tight text-paper sm:text-2xl">
            {post.title}
          </h3>
          <ReviewWidget post={post} />
        </div>
      </Link>
    </article>
  );
}
