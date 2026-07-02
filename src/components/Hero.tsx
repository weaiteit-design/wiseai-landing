import WaitlistForm from "./WaitlistForm";
import PhoneMockup from "./PhoneMockup";
import DownloadButtons from "./DownloadButtons";
import CountUp from "./CountUp";
import { STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8">
        {/* Left: Content */}
        <div className="flex flex-col items-start text-left">
          {/* Status Badge — plain hairline, no glow */}
          <div className="mb-6 inline-flex animate-fade-in items-center gap-2 border border-[var(--wise-border)] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--wise-accent)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--wise-text2)]">
              Launching soon — in final App Store review
            </span>
          </div>

          {/* Headline — italic display serif, the editorial signature of premium AI product sites */}
          <h1
            className="heading-font mb-6 animate-slide-up text-[54px] leading-[1.02] tracking-[-0.01em] text-[var(--wise-text1)] sm:text-[76px] lg:text-[88px]"
            style={{ animationDelay: "0.05s" }}
          >
            Master <span className="accent">AI</span>
            <br />
            before it masters you.
          </h1>

          {/* Description */}
          <p
            className="mb-8 max-w-md animate-slide-up text-base leading-relaxed text-[var(--wise-text2)] sm:text-lg"
            style={{ animationDelay: "0.1s" }}
          >
            Daily AI news, bite-sized lessons, 50+ tool comparisons, and AI
            duels — one app, 15 minutes a day.
          </p>

          {/* Primary CTA: Waitlist */}
          <div
            id="waitlist"
            className="w-full animate-slide-up scroll-mt-20"
            style={{ animationDelay: "0.15s" }}
          >
            <WaitlistForm size="large" />
            <p className="mt-3 text-xs text-[var(--wise-text3)]">
              Be first to know the moment we launch. No spam, unsubscribe
              anytime.
            </p>
          </div>

          {/* Secondary: store badges (coming soon) */}
          <div
            id="download"
            className="mt-8 w-full animate-slide-up scroll-mt-20"
            style={{ animationDelay: "0.2s" }}
          >
            <DownloadButtons />
          </div>

          {/* Stats — plain inline row, hairline dividers, no boxes */}
          <div
            className="mt-12 flex w-full max-w-md animate-slide-up divide-x divide-[var(--wise-divider)] border-t border-[var(--wise-divider)] pt-6"
            style={{ animationDelay: "0.25s" }}
          >
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex-1 px-3 first:pl-0">
                <CountUp
                  value={stat.value}
                  className={`text-xl font-semibold tracking-tight sm:text-2xl ${
                    i % 2 === 0 ? "text-[var(--wise-accent-light)]" : "text-[var(--wise-secondary-light)]"
                  }`}
                />
                <p className="mt-0.5 text-[11px] leading-tight text-[var(--wise-text3)] sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Phone Mockup — real product, minimal frame */}
        <div
          className="relative flex animate-slide-up justify-center lg:justify-end"
          style={{ animationDelay: "0.15s" }}
        >
          <PhoneMockup />

          {/* Wurtle, waving hello from beside the phone */}
          <img
            src="/mascot/wurtle-wave.webp"
            alt="Wurtle the mascot waving hello"
            width={512}
            height={512}
            className="absolute -bottom-3 -left-4 h-20 w-20 sm:h-24 sm:w-24"
          />
        </div>
      </div>
    </section>
  );
}
