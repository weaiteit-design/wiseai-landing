import { Apple, Smartphone } from "lucide-react";

interface DownloadButtonsProps {
  variant?: "hero" | "section";
}

export default function DownloadButtons({ variant = "hero" }: DownloadButtonsProps) {
  // TODO: replace these placeholders with real store URLs once published
  const APP_STORE_URL = "https://apps.apple.com/app/wiseai/id000000000";
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.wiseai.app";

  const sizing =
    variant === "hero"
      ? "h-14 px-5 text-[13px]"
      : "h-12 px-4 text-[12px]";

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-stretch lg:items-start">
      {/* App Store */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center justify-center gap-3 rounded-xl border border-[var(--wise-glass-border)] bg-[var(--wise-surface1)] ${sizing} text-[var(--wise-text1)] transition-all hover:-translate-y-0.5 hover:border-[var(--wise-accent)] hover:shadow-[0_0_24px_rgba(249,115,22,0.18)]`}
      >
        <Apple className="h-7 w-7 shrink-0" />
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--wise-text3)]">
            Download on the
          </span>
          <span className="text-[15px] font-semibold">App Store</span>
        </div>
      </a>

      {/* Play Store */}
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center justify-center gap-3 rounded-xl border border-[var(--wise-glass-border)] bg-[var(--wise-surface1)] ${sizing} text-[var(--wise-text1)] transition-all hover:-translate-y-0.5 hover:border-[var(--wise-secondary-light)] hover:shadow-[0_0_24px_rgba(13,148,136,0.18)]`}
      >
        <Smartphone className="h-7 w-7 shrink-0" />
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--wise-text3)]">
            Get it on
          </span>
          <span className="text-[15px] font-semibold">Google Play</span>
        </div>
      </a>
    </div>
  );
}
