import Link from "next/link";
import { APP_STORE_URL } from "@/lib/constants";

/**
 * The entire homepage above the footer.
 *
 * Deliberately one screen: mascot, one line, two buttons. Everything that used
 * to live here (waitlist form, screenshots carousel, sources marquee, how it
 * works, features, pricing, FAQ, and a stat row that rendered zeros) is gone. A
 * visitor should know what this is and be one tap from trying it, without
 * scrolling.
 *
 * The secondary CTA goes to a real quiz at /iq, not to the App Store. A button
 * that says "take the test" and delivers a download page is a broken promise.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-center px-6 py-8 text-center">
      {/* Atmospheric only, so it is hidden from assistive tech and cannot catch
          a pointer. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.30), transparent 70%)",
        }}
      />

      <div className="animate-rise" style={{ animationDelay: "0.05s" }}>
        {/* A plain <img>, deliberately, not next/image.
            wurtle-wave.webp is a 61-frame ANIMATED WebP. Routed through the
            Next image optimizer it gets re-encoded and comes out as a frozen
            single frame, which is the opposite of the point. `unoptimized`
            fixes that but next/image then contributes nothing here: the asset
            is a fixed size and already compressed. Explicit width/height keeps
            the layout reserved, so there is no CLS either way.
            Verified in the browser: served straight from /mascot, not through
            /_next/image, and the frames advance. */}
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
        className="heading-font animate-rise mt-6 max-w-[16ch] text-[40px] leading-[1.06] tracking-[-0.01em] text-[var(--wise-text1)] sm:text-[54px] lg:text-[60px]"
        style={{ animationDelay: "0.15s" }}
      >
        Get good at <span className="accent">AI</span> in 10 minutes a day.
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
          className="btn-press flex min-h-[56px] items-center justify-center rounded-2xl bg-[var(--wise-accent)] px-8 text-[15px] font-semibold uppercase tracking-[0.06em] text-[#1A0E04] transition-colors duration-150 hover:bg-[var(--wise-accent-light)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--wise-accent-light)]"
        >
          Download on the App Store
        </a>

        <Link
          href="/iq"
          className="btn-press flex min-h-[56px] items-center justify-center rounded-2xl border border-[var(--wise-border-strong)] px-8 text-[15px] font-semibold uppercase tracking-[0.06em] text-[var(--wise-text1)] transition-colors duration-150 hover:border-[var(--wise-accent)] hover:text-[var(--wise-accent-light)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--wise-accent-light)]"
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
