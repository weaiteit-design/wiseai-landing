import { FEATURES } from "@/lib/constants";
import FeatureCard from "./FeatureCard";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 pb-20 sm:pb-28">
      {/* Section Title */}
      <Reveal className="mb-10 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
          What&apos;s inside
        </p>
        <h2 className="heading-font text-[34px] leading-[1.05] text-[var(--wise-text1)] sm:text-[44px]">
          Everything you need to stay AI-fluent
        </h2>
      </Reveal>

      {/* Editorial feature list — hairline dividers, numbered, no icon tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} index={i} />
        ))}
      </div>
    </section>
  );
}
