import Link from "next/link";
import type { PostMeta } from "@/lib/post-types";
import ReviewWidget from "./ReviewWidget";
import CoverWave from "./CoverWave";

export default function FeaturedStory({ post }: { post: PostMeta }) {
  return (
    <article className="relative overflow-hidden rounded-[36px] border border-white/10 bg-surface shadow-[0_40px_120px_-40px_rgba(0,0,0,0.66)]">
      <Link href={`/blog/${post.slug}`} className="relative block h-[min(580px,60vh)] overflow-hidden">
        <CoverWave className="h-full" category={post.category}>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.75))]" />
        </CoverWave>
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-ink-soft backdrop-blur">
            FEATURED STORY
          </div>
          <p className="max-w-3xl text-sm uppercase tracking-[0.32em] text-ink-soft">{post.category}</p>
          <h1 className="mt-4 max-w-[14ch] font-display text-[min(4.4rem,7vw)] font-black leading-[0.95] tracking-[-0.03em] text-paper">
            {post.title}
          </h1>
          <div className="mt-8 max-w-2xl">
            <ReviewWidget post={post} />
          </div>
        </div>
      </Link>
    </article>
  );
}
