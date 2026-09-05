import type { Category } from "./site";

export type PostFrontMatter = {
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  cover: string;
  coverAlt: string;
  featured?: boolean;
};

export type PostMeta = PostFrontMatter & {
  slug: string;
  readTime: string;
};

export type Post = PostMeta & {
  content: string;
};
