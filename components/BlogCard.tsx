"use client";

import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";

type BlogCardProps = {
  post: PostMeta;
  feature?: boolean;
  priority?: boolean;
};

// Accent alternates blue/pink by category index — keeps variety without randomness.
const accentByCategory: Record<string, string> = {
  "Media Literacy":  "text-blue",
  "Internet Culture":"text-blue",
  "Trans Life":      "text-pink",
  "Travel & Safety": "text-pink",
  "Representation":  "text-blue",
};
const dotByCategory: Record<string, string> = {
  "Media Literacy":  "bg-blue shadow-[0_0_6px_#5BCEFA]",
  "Internet Culture":"bg-blue shadow-[0_0_6px_#5BCEFA]",
  "Trans Life":      "bg-pink shadow-[0_0_6px_#F5A9B8]",
  "Travel & Safety": "bg-pink shadow-[0_0_6px_#F5A9B8]",
  "Representation":  "bg-blue shadow-[0_0_6px_#5BCEFA]",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post, feature = false, priority = false }: BlogCardProps) {
  const accentText = accentByCategory[post.category] ?? "text-blue";
  const dotColor   = dotByCategory[post.category]   ?? "bg-blue shadow-[0_0_6px_#5BCEFA]";

  return (
    <article className={`group flex flex-col rounded-card border border-rule bg-surface overflow-hidden transition-all duration-300 hover:border-blue/40 hover:-translate-y-0.5 ${feature ? "md:col-span-2" : ""}`}>
      <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1">
        {/* Cover */}
        <div className={`relative w-full overflow-hidden bg-surface-2 ${feature ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes={feature ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            priority={priority}
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
          />
          {/* Category pill overlay */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-pill border border-blue/30 bg-blue/10 px-3 py-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-label text-blue">
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
            className={`font-display font-semibold tracking-tight text-white text-balance transition-colors group-hover:text-blue ${
              feature ? "text-[clamp(1.4rem,2.2vw,2rem)]" : "text-[1.2rem]"
            }`}
            style={{ lineHeight: "1.12", letterSpacing: "-0.015em" }}
          >
            {post.title}
          </h3>

          <span className={`mt-4 font-mono text-[11.5px] font-medium ${accentText}`}>
            Read more &rarr;
          </span>
        </div>
      </Link>
    </article>
  );
}
