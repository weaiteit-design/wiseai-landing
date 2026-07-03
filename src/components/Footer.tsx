import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--wise-divider)] pt-10 pb-6">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <Image
            src="/wiseai-logo.png"
            alt="WiseAI"
            width={500}
            height={500}
            className="h-9 w-auto"
          />
          <p className="mt-2 text-xs text-[var(--wise-text3)]">
            Your Intelligence, Amplified.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link
            href="/#features"
            className="text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
          >
            Features
          </Link>
          <Link
            href="/#faq"
            className="text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
          >
            FAQ
          </Link>
          <Link
            href="/#pricing"
            className="text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
          >
            Blog
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
          >
            Terms
          </Link>
          <a
            href="mailto:hello@thewiseai.app"
            className="text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-1 border-t border-[var(--wise-divider)] pt-6 text-center">
        <p className="text-xs text-[var(--wise-text3)]">
          &copy; {new Date().getFullYear()} WiseAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
