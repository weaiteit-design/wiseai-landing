import { Check } from "lucide-react";
import { PRICING } from "@/lib/constants";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 pb-20 sm:pb-28">
      <Reveal className="mb-10 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
          Pricing
        </p>
        <h2 className="heading-font text-[34px] leading-[1.05] text-[var(--wise-text1)] sm:text-[44px]">
          Free to start. No credit card.
        </h2>
      </Reveal>

      <Reveal delay={100} className="grid grid-cols-1 border border-[var(--wise-divider)] sm:grid-cols-2">
        {/* Free */}
        <div className="border-t-2 border-b border-[var(--wise-secondary)] p-7 sm:border-r sm:border-b-0 sm:p-9">
          <h3 className="mb-1 heading-font text-2xl text-[var(--wise-text1)]">
            {PRICING.free.name}
          </h3>
          <p className="mb-6 text-sm text-[var(--wise-text2)]">
            {PRICING.free.tagline}
          </p>
          <ul className="space-y-3">
            {PRICING.free.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--wise-text2)]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--wise-secondary-light)]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pro, distinguished by a solid accent top bar, not a glow blob */}
        <div className="border-t-2 border-[var(--wise-accent)] p-7 sm:p-9">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="heading-font text-2xl text-[var(--wise-text1)]">
              {PRICING.pro.name}
            </h3>
            <span className="border border-[var(--wise-accent)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--wise-accent-light)]">
              Upgrade
            </span>
          </div>
          <p className="mb-6 text-sm text-[var(--wise-text2)]">
            {PRICING.pro.tagline}
          </p>
          <ul className="space-y-3">
            {PRICING.pro.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--wise-text1)]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--wise-accent-light)]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-[var(--wise-text3)]">
            {PRICING.pro.note}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
