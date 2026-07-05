import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

type BlogCardProps = {
  post: PostMeta;
  // The first card on the index runs wide and tall.
  feature?: boolean;
  priority?: boolean;
};

export default function BlogCard({ post, feature = false, priority = false }: BlogCardProps) {
  return (
    <article className={feature ? "group md:col-span-2" : "group"}>
      <Link href={`/blog/${post.slug}`} className="block">
        <div
          className={`relative w-full overflow-hidden bg-paper-deep dark:bg-night-soft ${
            feature ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes={feature ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            priority={priority}
            className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
          />
          <span className="absolute left-4 top-4 bg-paper px-3 py-1 font-display text-[0.7rem] font-bold uppercase tracking-label text-ink dark:bg-night dark:text-paper">
            {post.category}
          </span>
        </div>

        <div className="pt-5">
          <div className="flex items-center gap-3 text-xs text-ink/50 dark:text-paper/50">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <h3
            className={`mt-2 font-display font-extrabold tracking-tight text-ink decoration-flame decoration-2 underline-offset-4 group-hover:underline dark:text-paper text-balance ${
              feature ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {post.title}
          </h3>

          <p
            className={`mt-3 text-ink/70 dark:text-paper/70 ${
              feature ? "max-w-prose text-lg leading-relaxed" : "leading-relaxed line-clamp-3"
            }`}
          >
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
