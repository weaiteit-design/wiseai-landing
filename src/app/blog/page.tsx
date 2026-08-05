import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog. WiseAI",
  description:
    "Practical, no-hype writing on AI tools, learning science, and how to actually build AI fluency, from the team building WiseAI.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog. WiseAI",
    description:
      "Practical, no-hype writing on AI tools, learning science, and how to actually build AI fluency.",
    url: "https://www.thewiseai.app/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-8 sm:px-8">
        <div className="pt-10 pb-12 sm:pt-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
            The WiseAI Blog
          </p>
          <h1 className="heading-font max-w-2xl text-[36px] leading-[1.05] text-[var(--wise-text1)] sm:text-[48px]">
            Learning AI, without the hype.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-x-8 border-t border-[var(--wise-divider)] sm:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border-b border-[var(--wise-divider)] py-8 pr-6"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[var(--wise-border)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-[var(--wise-text3)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="heading-font mb-2 text-2xl text-[var(--wise-text1)] transition-colors group-hover:text-[var(--wise-accent-light)]">
                {post.title}
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-[var(--wise-text2)]">
                {post.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--wise-text3)]">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}
