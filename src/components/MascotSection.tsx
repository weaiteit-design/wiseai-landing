import Image from "next/image";
import Reveal from "./Reveal";

export default function MascotSection() {
  return (
    <section className="pb-20 sm:pb-28">
      <Reveal className="flex flex-col items-center gap-8 border-b border-[var(--wise-divider)] pb-16 sm:flex-row sm:justify-between sm:gap-12">
        <div className="max-w-md text-center sm:text-left">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
            Meet your study buddy
          </p>
          <h2 className="heading-font mb-4 text-[34px] leading-[1.05] text-[var(--wise-text1)] sm:text-[44px]">
            Say hi to Wurtle
          </h2>
          <p className="text-sm leading-relaxed text-[var(--wise-text2)] sm:text-base">
            Wurtle cheers you on through every lesson, celebrates your
            streaks, and nudges you back when life gets busy. Slow and
            steady wins the AI race — that&apos;s the whole point.
          </p>
        </div>

        <div className="flex shrink-0 items-end gap-4 sm:gap-6">
          {/* Animated clip — plain img so the WebP animation actually plays */}
          <img
            src="/mascot/wurtle-celebrate.webp"
            alt="Wurtle the mascot celebrating a streak"
            width={512}
            height={512}
            className="h-28 w-28 sm:h-36 sm:w-36"
          />
          <Image
            src="/mascot/wurtle-study.png"
            alt="Wurtle studying an AI book"
            width={512}
            height={512}
            className="hidden h-24 w-24 sm:block sm:h-28 sm:w-28"
          />
        </div>
      </Reveal>
    </section>
  );
}
