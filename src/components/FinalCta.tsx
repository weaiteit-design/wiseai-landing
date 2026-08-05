import Reveal from "./Reveal";
import { APP_STORE_URL } from "@/lib/constants";

/**
 * The close. Celebrating Wurtle (the second animated WebP) plus one repeated
 * ask. Same CTA copy as the hero on purpose: by this point the visitor has
 * seen the product, so the page asks exactly once more, without new angles.
 */
export default function FinalCta() {
  return (
    <section className="px-6 py-20 text-center sm:py-28">
      <Reveal>
        {/* Plain <img>: animated WebP, same reason as the hero. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mascot/wurtle-celebrate.webp"
          loading="lazy"
          alt=""
          width={300}
          height={300}
          className="mascot-result mx-auto object-contain"
        />
        <h2 className="heading-font mx-auto mt-6 max-w-[18ch] text-[32px] leading-[1.12] text-[var(--wise-text1)] sm:text-[44px]">
          Ten minutes a day. Starting today.
        </h2>
        <a
          href={APP_STORE_URL}
          className="btn-press shadow-soft mx-auto mt-8 flex min-h-[56px] w-full max-w-[340px] items-center justify-center rounded-2xl bg-[var(--wise-accent)] px-8 text-[15px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-150 hover:bg-[var(--wise-accent-light)]"
        >
          Download on the App Store
        </a>
      </Reveal>
    </section>
  );
}
