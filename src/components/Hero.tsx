import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import PhoneMockup from "./PhoneMockup";
import DownloadButtons from "./DownloadButtons";

export default function Hero() {
  return (
    <section className="pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Logo */}
          <div className="mb-6 animate-fade-in">
            <Image
              src="/wiseai-logo.png"
              alt="WiseAI"
              width={500}
              height={500}
              className="h-28 w-auto drop-shadow-[0_0_24px_rgba(249,115,22,0.25)] sm:h-32"
              priority
            />
          </div>

          {/* Live Badge */}
          <div
            className="mb-5 inline-flex animate-fade-in items-center gap-2 rounded-full border border-[var(--wise-accent-dim)] bg-[rgba(249,115,22,0.08)] px-4 py-1.5"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-[var(--wise-accent)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.8px] text-[var(--wise-accent-light)]">
              Now Available
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-4 animate-slide-up text-[30px] font-extrabold leading-[1.1] tracking-tight sm:text-[40px] lg:text-[44px]"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="gradient-text">Master AI</span>
            <br />
            <span className="text-[var(--wise-text1)]">
              Before It Masters You
            </span>
          </h1>

          {/* Description */}
          <p
            className="mb-8 max-w-md animate-slide-up text-base leading-relaxed text-[var(--wise-text2)] sm:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            The all-in-one app that turns AI overwhelm into AI fluency.
            Personalized news, bite-sized lessons, 53+ tool comparisons, and a
            gamified experience that keeps you coming back.
          </p>

          {/* Download CTAs */}
          <div
            id="download"
            className="w-full animate-slide-up scroll-mt-20"
            style={{ animationDelay: "0.4s" }}
          >
            <DownloadButtons />
          </div>

          {/* Tagline */}
          <p
            className="mt-4 animate-slide-up text-xs text-[var(--wise-text3)]"
            style={{ animationDelay: "0.5s" }}
          >
            Free to start · No credit card · 15 minutes a day
          </p>
        </div>

        {/* Right: Phone Mockup */}
        <div
          className="flex shrink-0 animate-slide-up justify-center lg:justify-end"
          style={{ animationDelay: "0.4s" }}
        >
          <PhoneMockup />
        </div>
      </div>

      {/* Waitlist (still functional, secondary CTA) */}
      <div
        id="waitlist"
        className="mt-20 animate-slide-up scroll-mt-20"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="mx-auto max-w-xl rounded-2xl border border-[var(--wise-glass-border-light)] bg-[var(--wise-surface1)] p-6 sm:p-8">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.8px] text-[var(--wise-secondary-light)]">
            Stay in the loop
          </p>
          <h2 className="mb-2 text-center text-[22px] font-bold text-[var(--wise-text1)] sm:text-[26px]">
            Get notified about new features
          </h2>
          <p className="mb-6 text-center text-sm text-[var(--wise-text2)]">
            Major updates, new lessons, and exclusive AI insights — straight to
            your inbox. No spam, unsubscribe anytime.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
