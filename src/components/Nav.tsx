import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL } from "@/lib/constants";

/**
 * Logo, one link, one CTA.
 *
 * The previous nav linked to #tour, #features, #pricing and #faq, plus a
 * "Join Waitlist" button, for an app that shipped in June. Those sections no
 * longer exist on the homepage, so every one of those anchors was dead. With
 * two items left there is nothing to collapse, so the hamburger menu and its
 * client state are gone and this is a server component again.
 */
export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--wise-divider)] bg-[var(--wise-bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="WiseAI home">
          <Image
            src="/wiseai-logo.png"
            alt="WiseAI"
            width={500}
            height={500}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-5 sm:gap-7">
          <Link
            href="/blog"
            className="flex min-h-[44px] items-center text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
          >
            Blog
          </Link>
          <a
            href={APP_STORE_URL}
            className="btn-press flex min-h-[44px] items-center rounded-xl bg-[var(--wise-accent)] px-4 text-sm font-semibold text-[#1A0E04] hover:bg-[var(--wise-accent-light)]"
          >
            Get the app
          </a>
        </div>
      </div>
    </nav>
  );
}
