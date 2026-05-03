import { FEATURES } from "@/lib/constants";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 pb-20 sm:pb-28">
      {/* Section Title */}
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.8px] text-[var(--wise-accent-light)]">
        What's Inside
      </p>
      <h2 className="mb-10 text-center text-[26px] font-extrabold leading-tight tracking-tight text-[var(--wise-text1)] sm:text-[32px]">
        Everything you need to stay AI-fluent
      </h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} index={i} />
        ))}
      </div>
    </section>
  );
}
