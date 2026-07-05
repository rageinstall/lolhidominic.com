import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getAllSlugs, getAllPosts, formatDate } from "@/lib/posts";
import { site } from "@/lib/site";
import { useMDXComponents } from "@/mdx-components";
import BlogCard from "@/components/BlogCard";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Not found" };

  const url = `${site.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [site.name],
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function PostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <article>
      {/* Article header */}
      <header className="mx-auto max-w-3xl px-5 pb-10 pt-16 md:px-8 md:pt-24">
        <Link href="/blog" className="font-display text-sm font-semibold text-flame hover:underline">
          &larr; All writing
        </Link>
        <p className="eyebrow mb-5 mt-8">{post.category}</p>
        <h1 className="font-display text-display-lg font-black text-ink dark:text-paper text-balance">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink/55 dark:text-paper/55">
          <span className="font-display font-semibold text-ink dark:text-paper">{site.name}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* Cover */}
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-paper-deep dark:bg-night-soft">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <div className="prose-editorial">
          <MDXRemote source={post.content} components={useMDXComponents({})} />
        </div>

        <div className="rule mt-16 pt-8">
          <p className="font-serif text-xl italic leading-snug text-ink/80 dark:text-paper/80">
            Written by Dominic. If this said something out loud you&rsquo;d been thinking quietly,
            that&rsquo;s the whole point.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="border border-ink/25 px-5 py-2.5 font-display text-sm font-semibold text-ink hover:border-ink dark:border-paper/25 dark:text-paper dark:hover:border-paper"
            >
              More about me
            </Link>
            <a
              href="https://instagram.com/lolhidominic"
              className="border border-ink/25 px-5 py-2.5 font-display text-sm font-semibold text-ink hover:border-ink dark:border-paper/25 dark:text-paper dark:hover:border-paper"
            >
              Follow along
            </a>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 ? (
        <section className="border-t border-ink/10 dark:border-paper/10" aria-labelledby="related-heading">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <h2 id="related-heading" className="eyebrow mb-10">
              More in {post.category}
            </h2>
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
