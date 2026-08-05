import Link from "next/link";
import Image from "next/image";
import { SUPPORT_EMAIL } from "@/lib/constants";

/**
 * This is the support surface, not decoration.
 *
 * thewiseai.app is registered as the Support URL in App Store Connect, so App
 * Review loads this page and expects to find a real way to get help. It has to
 * state the contact plainly rather than hide it behind a "Contact" label.
 *
 * The old footer also linked to /#features, /#faq and /#pricing, which are
 * dead anchors now, and offered hello@ while the App Store listing and the
 * app itself both publish support@. One address, everywhere.
 */
export default function Footer() {
  return (
    <footer className="border-t border-[var(--wise-divider)] pb-8 pt-10">
      <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          <Image src="/wiseai-logo.png" alt="WiseAI" width={500} height={500} className="h-9 w-auto" />
          <p className="mt-2 text-xs text-[var(--wise-text3)]">Your Intelligence, Amplified.</p>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <p className="text-sm text-[var(--wise-text2)]">
            Support:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-[var(--wise-accent-light)] underline underline-offset-4 hover:text-[var(--wise-accent)]"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p className="text-xs text-[var(--wise-text3)]">
            Questions, refunds or account help. We reply within 2 business days.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/blog"
              className="flex min-h-[44px] items-center text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
            >
              Blog
            </Link>
            <Link
              href="/privacy"
              className="flex min-h-[44px] items-center text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="flex min-h-[44px] items-center text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[var(--wise-divider)] pt-6 text-center">
        <p className="text-xs text-[var(--wise-text3)]">
          &copy; {new Date().getFullYear()} WiseAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
