"use client";

import { Apple, Smartphone } from "lucide-react";

interface DownloadButtonsProps {
  variant?: "hero" | "section";
}

// Store links go live once each build clears review, until then, both
// badges scroll to the waitlist so visitors can still get on the list.
export default function DownloadButtons({ variant = "hero" }: DownloadButtonsProps) {
  const sizing =
    variant === "hero"
      ? "h-12 px-4 text-[13px]"
      : "h-11 px-4 text-[12px]";

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row">
      {/* App Store, in review */}
      <button
        type="button"
        onClick={scrollToWaitlist}
        className={`store-badge group inline-flex items-center justify-center gap-3 border border-[var(--wise-border)] ${sizing} text-[var(--wise-text1)] transition-colors hover:border-[var(--wise-border-strong)]`}
      >
        <span className="soon-ribbon">Soon</span>
        <Apple className="h-6 w-6 shrink-0" />
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--wise-text3)]">
            Coming soon to the
          </span>
          <span className="text-[15px] font-semibold">App Store</span>
        </div>
      </button>

      {/* Play Store, coming right after */}
      <button
        type="button"
        onClick={scrollToWaitlist}
        className={`store-badge group inline-flex items-center justify-center gap-3 border border-[var(--wise-border)] ${sizing} text-[var(--wise-text1)] transition-colors hover:border-[var(--wise-border-strong)]`}
      >
        <span className="soon-ribbon">Soon</span>
        <Smartphone className="h-6 w-6 shrink-0" />
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--wise-text3)]">
            Coming soon to
          </span>
          <span className="text-[15px] font-semibold">Google Play</span>
        </div>
      </button>
    </div>
  );
}
