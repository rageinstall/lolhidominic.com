import fs from "node:fs";
import path from "node:path";
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

function parseFrontMatter(raw: string) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) return { data: {}, content: raw };

  const body = raw.slice(match[0].length);
  const data: Record<string, unknown> = {};

  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separatorIndex = trimmed.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (!key) continue;

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      data[key] = value.slice(1, -1);
    } else if (value === "true") {
      data[key] = true;
    } else if (value === "false") {
      data[key] = false;
    } else {
      data[key] = value;
    }
  }

  return { data, content: body };
}

// Read + parse a single post by slug. Returns null if it does not exist.
export function getPost(slug: string): Post | null {
  const full = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(full)) return null;

  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = parseFrontMatter(raw);
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
