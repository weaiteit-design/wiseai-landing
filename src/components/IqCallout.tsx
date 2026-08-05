import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

/**
 * The zero-friction entry point gets its own act. The quiz is the only thing a
 * visitor can DO on this site without leaving it, so it earns a full-width
 * card rather than a footnote under the hero CTA.
 */
export default function IqCallout() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="shadow-soft flex flex-col items-center gap-8 overflow-hidden rounded-[32px] border border-[var(--wise-border)] bg-gradient-to-br from-[#FFF3E4] to-[var(--wise-surface1)] px-8 py-12 text-center sm:px-14 lg:flex-row lg:text-left">
          <Image
            src="/mascot/wurtle-study.png"
            alt=""
            width={512}
            height={512}
            className="h-[140px] w-[140px] object-contain sm:h-[170px] sm:w-[170px]"
          />
          <div className="flex-1">
            <h2 className="heading-font text-[30px] leading-[1.12] text-[var(--wise-text1)] sm:text-[38px]">
              How good are you with AI, really?
            </h2>
            <p className="mx-auto mt-3 max-w-[48ch] text-[16px] leading-[1.65] text-[var(--wise-text2)] lg:mx-0">
              Ten practical questions about using AI tools well. Find out where
              you actually stand. Free, no signup, two minutes.
            </p>
          </div>
          <Link
            href="/iq"
            className="btn-press shadow-soft flex min-h-[56px] shrink-0 items-center justify-center rounded-2xl bg-[var(--wise-accent)] px-8 text-[15px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-150 hover:bg-[var(--wise-accent-light)]"
          >
            Take the test
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
