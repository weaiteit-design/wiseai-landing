import { FEATURES } from "@/lib/constants";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="pb-20 sm:pb-28">
      {/* Section Title */}
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.8px] text-[var(--wise-accent-light)]">
        Everything you need to stay AI-fluent
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} index={i} />
        ))}
      </div>
    </section>
  );
}
