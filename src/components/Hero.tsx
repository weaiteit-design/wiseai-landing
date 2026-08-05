import Link from "next/link";
import { Flame, Sparkles, CheckCircle2, Zap, Lock, Newspaper } from "lucide-react";
import { APP_STORE_URL } from "@/lib/constants";

/**
 * Family.co-pattern hero: one giant centered headline, the animated mascot
 * front and center, and small product artifacts floating on the flanks. The
 * personality lives in the floating field and the mascot, not in UI chrome.
 *
 * The floating bits are REAL app artifacts (streak, XP, lesson done, daily
 * brief, Wurtle Lock, IQ score), not decorative shapes, so the hero quietly
 * previews the product while staying one screen.
 *
 * The key phrase carries an Amie-style marker highlight, and the secondary CTA
 * goes to the real quiz at /iq rather than the App Store.
 */

/** One floating artifact pill. Hidden below lg: on phones the flanks vanish
 *  and the hero collapses to mascot + headline + CTAs, which is the whole
 *  story anyway. aria-hidden: they are atmosphere, not content. */
function Bit({
  icon,
  label,
  className,
  float,
  tilt,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  float: "float-a" | "float-b" | "float-c";
  tilt: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute hidden select-none lg:flex ${float} ${className}`}
      style={{ "--tilt": tilt } as React.CSSProperties}
    >
      <span className="shadow-soft flex items-center gap-2 rounded-full border border-[var(--wise-border)] bg-[var(--wise-surface1)] px-4 py-2.5 text-[14px] font-semibold text-[var(--wise-text1)]">
        {icon}
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-center px-6 py-10 text-center">
      {/* Floating product artifacts, Family-style flanks */}
      <Bit icon={<Flame size={16} className="text-[var(--wise-accent)]" />} label="7 day streak" float="float-a" tilt="-4deg" className="left-[6%] top-[18%]" />
      <Bit icon={<Sparkles size={16} className="text-[var(--wise-accent)]" />} label="+50 XP" float="float-b" tilt="3deg" className="left-[11%] top-[52%]" />
      <Bit icon={<CheckCircle2 size={16} className="text-[var(--wise-secondary)]" />} label="Lesson done" float="float-c" tilt="-2deg" className="left-[4%] top-[76%]" />
      <Bit icon={<Newspaper size={16} className="text-[var(--wise-secondary)]" />} label="Daily brief, 2 min" float="float-b" tilt="4deg" className="right-[5%] top-[20%]" />
      <Bit icon={<Zap size={16} className="text-[var(--wise-accent)]" />} label="AI IQ 8/10" float="float-a" tilt="-3deg" className="right-[10%] top-[50%]" />
      <Bit icon={<Lock size={16} className="text-[var(--wise-text2)]" />} label="Wurtle Lock armed" float="float-c" tilt="2deg" className="right-[4%] top-[74%]" />

      <div className="animate-rise" style={{ animationDelay: "0.05s" }}>
        {/* Plain <img>, deliberately, not next/image: wurtle-wave.webp is a
            61-frame ANIMATED WebP, and the Next optimizer re-encodes it into a
            single frozen frame. Explicit dimensions reserve layout, so no CLS. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mascot/wurtle-wave.webp"
          alt="Wurtle, the WiseAI mascot, waving"
          width={300}
          height={300}
          className="animate-float mascot-hero object-contain"
        />
      </div>

      <h1
        className="heading-font animate-rise mt-6 max-w-[17ch] text-[40px] leading-[1.08] tracking-[-0.01em] text-[var(--wise-text1)] sm:text-[56px] lg:text-[64px]"
        style={{ animationDelay: "0.15s" }}
      >
        Get good at AI in <span className="marker">10 minutes</span> a day.
      </h1>

      <p
        className="animate-rise mt-4 max-w-[40ch] text-[17px] leading-[1.6] text-[var(--wise-text2)] sm:text-[19px]"
        style={{ animationDelay: "0.25s" }}
      >
        Short lessons, real practice, and the AI news that actually matters.
      </p>

      <div
        className="animate-rise mt-8 flex w-full max-w-[340px] flex-col gap-3"
        style={{ animationDelay: "0.35s" }}
      >
        <a
          href={APP_STORE_URL}
          className="btn-press shadow-soft flex min-h-[56px] items-center justify-center rounded-2xl bg-[var(--wise-accent)] px-8 text-[15px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-150 hover:bg-[var(--wise-accent-light)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--wise-accent)]"
        >
          Download on the App Store
        </a>

        <Link
          href="/iq"
          className="btn-press flex min-h-[56px] items-center justify-center rounded-2xl border-2 border-[var(--wise-border-strong)] bg-[var(--wise-surface1)] px-8 text-[15px] font-bold uppercase tracking-[0.06em] text-[var(--wise-text1)] transition-colors duration-150 hover:border-[var(--wise-accent)] hover:text-[var(--wise-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--wise-accent)]"
        >
          Take the AI IQ test
        </Link>

        <p className="mt-1 text-[13px] text-[var(--wise-text3)]">
          10 questions. 2 minutes. No signup.
        </p>
      </div>
    </section>
  );
}
