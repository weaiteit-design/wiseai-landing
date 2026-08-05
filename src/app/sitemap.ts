import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { LANDING_PAGES } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.thewiseai.app";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...LANDING_PAGES.map((page) => ({
      url: `${base}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...BLOG_POSTS.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
