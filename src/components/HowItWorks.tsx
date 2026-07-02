import { HOW_IT_WORKS } from "@/lib/constants";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-y border-[var(--wise-divider)] py-16 sm:py-20">
      <Reveal className="mb-12 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
          The daily loop
        </p>
        <h2 className="heading-font text-[34px] leading-[1.05] text-[var(--wise-text1)] sm:text-[44px]">
          15 minutes a day. That&apos;s the whole system.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
        {HOW_IT_WORKS.map((item, i) => (
          <Reveal key={item.step} delay={i * 80}>
            <span
              className={`text-sm font-medium tracking-wide ${
                i % 2 === 0 ? "text-[var(--wise-accent-light)]" : "text-[var(--wise-secondary-light)]"
              }`}
            >
              {item.step}
            </span>
            <h3 className="heading-font mt-2 mb-2 text-xl text-[var(--wise-text1)]">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--wise-text2)]">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
