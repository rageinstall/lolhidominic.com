import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllSlugs } from "@/lib/posts";

const staticRoutes = [
  "",
  "/about",
  "/work-with-me",
  "/t-time-media",
  "/blog",
  "/link-with-pride",
  "/press",
  "/contact",
  "/work/dc-pride-worldpride",
  "/work/fossil-made-for-this",
  "/work/poizon",
  "/work/portland-pride",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));

  const posts = getAllSlugs().map((slug) => ({
    url: `${site.url}/blog/${slug}`,
    lastModified: now,
  }));

  return [...pages, ...posts];
}
