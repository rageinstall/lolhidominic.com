import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Category } from "./site";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// The front matter schema every .mdx file in content/blog must follow.
export type PostFrontMatter = {
  title: string;
  excerpt: string;
  category: Category;
  date: string; // ISO 8601, e.g. "2026-05-12"
  cover: string; // path under /public, e.g. "/images/blog/algorithm.jpg"
  coverAlt: string; // real, descriptive alt text. Never decorative filler.
  featured?: boolean;
};

export type PostMeta = PostFrontMatter & {
  slug: string;
  readTime: string; // derived, e.g. "6 min read"
};

export type Post = PostMeta & {
  content: string; // raw MDX body
};

function fileToSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

// Read + parse a single post by slug. Returns null if it does not exist.
export function getPost(slug: string): Post | null {
  const full = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(full)) return null;

  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontMatter;

  return {
    ...fm,
    slug,
    readTime: `${Math.max(1, Math.round(readingTime(content).minutes))} min read`,
    content,
  };
}

// All posts, newest first. Used by the blog index, home, and related lists.
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => {
      const slug = fileToSlug(f);
      const post = getPost(slug);
      if (!post) return null;
      // Drop the heavy content field for list views.
      const { content: _content, ...meta } = post;
      return meta;
    })
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getFeaturedPost(): PostMeta | null {
  const posts = getAllPosts();
  return posts.find((p) => p.featured) ?? posts[0] ?? null;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(fileToSlug);
}

// Format an ISO date the way it reads on a card: "May 12, 2026".
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
