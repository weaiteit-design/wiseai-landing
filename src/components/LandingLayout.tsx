import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import { APP_STORE_URL } from "@/lib/constants";
import Reveal from "./Reveal";
import type { LandingPage } from "@/lib/landing-pages";

const BASE = "https://www.thewiseai.app";

// Split a headline so the accent word renders in orange, matching the Hero pattern.
function renderHeadline(headline: string, accentWord: string) {
  const idx = headline.indexOf(accentWord);
  if (idx === -1) return headline;
  return (
    <>
      {headline.slice(0, idx)}
      <span className="accent">{accentWord}</span>
      {headline.slice(idx + accentWord.length)}
    </>
  );
}

export default function LandingLayout({ page }: { page: LandingPage }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE}/${page.slug}`,
        url: `${BASE}/${page.slug}`,
        name: page.metaTitle,
        description: page.metaDescription,
        isPartOf: { "@id": `${BASE}/#website` },
        about: { "@id": `${BASE}/#app` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          {
            "@type": "ListItem",
            position: 2,
            name: page.eyebrow,
            item: `${BASE}/${page.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
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
        <article className="mx-auto max-w-3xl pt-10 sm:pt-14">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs text-[var(--wise-text3)]"
          >
            <Link href="/" className="hover:text-[var(--wise-text1)]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--wise-text2)]">{page.eyebrow}</span>
          </nav>

          {/* Header */}
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
            {page.eyebrow}
          </p>
          <h1 className="heading-font mb-6 text-[38px] leading-[1.05] text-[var(--wise-text1)] sm:text-[52px]">
            {renderHeadline(page.headline, page.accentWord)}
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-[var(--wise-text2)]">
            {page.intro}
          </p>

          {/* Primary CTA up top. These are indexed SEO landing pages, so they
              used to send organic search traffic to a waitlist for an app that
              had already shipped. */}
          <div className="mb-4">
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
          </div>
          <p className="mb-14 text-xs text-[var(--wise-text3)]">
            10 questions. 2 minutes. No signup.
          </p>

          {/* Highlights */}
          {page.highlights.length > 0 && (
            <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {page.highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 80}>
                  <div className="wise-card h-full p-5">
                    <h3 className="mb-2 text-[15px] font-semibold text-[var(--wise-text1)]">
                      {h.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--wise-text2)]">
                      {h.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* Body sections */}
          <div className="prose-blog">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul>
                    {section.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-14 border-t border-[var(--wise-divider)] pt-10">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
              FAQ
            </p>
            <div className="border-b border-[var(--wise-divider)]">
              {page.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group border-t border-[var(--wise-divider)] py-4"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-[15px] font-medium text-[var(--wise-text1)] marker:content-none">
                    {faq.q}
                    <span className="ml-4 text-[var(--wise-text3)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--wise-text2)]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Related */}
          {page.related.length > 0 && (
            <div className="mt-12">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
                Keep exploring
              </p>
              <div className="flex flex-col gap-2">
                {page.related.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--wise-text2)] underline decoration-[var(--wise-divider)] underline-offset-4 transition-colors hover:text-[var(--wise-accent-light)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Closing CTA */}
          <div className="mt-14 border-t border-[var(--wise-divider)] pt-10">
            <h2 className="heading-font mb-4 text-2xl text-[var(--wise-text1)]">
              {page.ctaHeading}
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
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
