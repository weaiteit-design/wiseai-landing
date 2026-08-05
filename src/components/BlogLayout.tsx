import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import { APP_STORE_URL } from "@/lib/constants";
import type { BlogPost } from "@/lib/blog-posts";

interface BlogLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: { "@type": "Organization", name: "WiseAI" },
        publisher: {
          "@type": "Organization",
          name: "WiseAI",
          logo: { "@type": "ImageObject", url: "https://www.thewiseai.app/wiseai-logo.png" },
        },
        image: `https://www.thewiseai.app/blog/${post.slug}/opengraph-image`,
        mainEntityOfPage: `https://www.thewiseai.app/blog/${post.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thewiseai.app" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.thewiseai.app/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://www.thewiseai.app/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-8 sm:px-8">
        <article className="mx-auto max-w-2xl pt-10 sm:pt-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[var(--wise-text3)]">
            <Link href="/" className="hover:text-[var(--wise-text1)]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--wise-text1)]">Blog</Link>
          </nav>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[var(--wise-border)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-[var(--wise-text3)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="heading-font mb-4 text-[36px] leading-[1.08] text-[var(--wise-text1)] sm:text-[48px]">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mb-10 flex items-center gap-3 text-sm text-[var(--wise-text3)]">
            <span>WiseAI Team</span>
            <span aria-hidden="true">·</span>
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

          {/* Content */}
          <div className="prose-blog">{children}</div>

          {/* End-of-post CTA. This used to be a waitlist signup promising to
              email the reader "the moment WiseAI launches", for an app that has
              been on the App Store since June. */}
          <div className="mt-14 border-t border-[var(--wise-divider)] pt-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
              Try it yourself
            </p>
            <h2 className="heading-font mb-4 text-2xl text-[var(--wise-text1)]">
              How good are you with AI, really?
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iq"
                className="btn-press flex min-h-[52px] items-center justify-center rounded-2xl bg-[var(--wise-accent)] px-7 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#1A0E04] hover:bg-[var(--wise-accent-light)]"
              >
                Take the AI IQ test
              </Link>
              <a
                href={APP_STORE_URL}
                className="btn-press flex min-h-[52px] items-center justify-center rounded-2xl border border-[var(--wise-border-strong)] px-7 text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--wise-text1)] hover:border-[var(--wise-accent)] hover:text-[var(--wise-accent-light)]"
              >
                Get the app
              </a>
            </div>
            <p className="mt-3 text-xs text-[var(--wise-text3)]">
              10 questions. 2 minutes. No signup.
            </p>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
