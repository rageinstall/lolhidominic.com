"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/post-types";

type BlogCardProps = {
  post: PostMeta;
  feature?: boolean;
  priority?: boolean;
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post, feature = false, priority = false }: BlogCardProps) {
  return (
    <article className={`group flex flex-col rounded-card border border-rule bg-surface overflow-hidden transition-all duration-300 hover:border-flame/40 hover:-translate-y-0.5 ${feature ? "md:col-span-2" : ""}`}>
      <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1">
        {/* Cover */}
        <div className={`relative w-full overflow-hidden bg-surface2 ${feature ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,74,28,0.12),transparent_45%)]" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-pill border border-flame/30 bg-flame/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-flame" />
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-label text-flame">
              {post.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] text-ink-faint">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <h3
            className={`font-display font-semibold tracking-tight text-white text-balance transition-colors group-hover:text-flame ${
              feature ? "text-[clamp(1.4rem,2.2vw,2rem)]" : "text-[1.2rem]"
            }`}
            style={{ lineHeight: "1.12", letterSpacing: "-0.015em" }}
          >
            {post.title}
          </h3>

          <span className="mt-4 font-mono text-[11.5px] font-medium text-flame">
            Read more &rarr;
          </span>
        </div>
      </Link>
    </article>
  );
}
