import Reveal from "./Reveal";

/**
 * Brilliant leads with "100,000+ 5-star reviews / 10M+ learners". WiseAI does
 * not have that yet, and inventing it is exactly the fabricated-stat trap the
 * app just spent a week climbing out of. So this strip carries only claims the
 * production database backs today: 439 published lessons, 67 tools in the
 * directory, and the real length of the IQ test. Update the numbers when the
 * catalog grows, never ahead of it.
 */
const STATS = [
  { value: "400+", label: "interactive lessons" },
  { value: "60+", label: "AI tools compared" },
  { value: "2 min", label: "free AI IQ test" },
];

export default function ProofStrip() {
  return (
    <section className="border-y border-[var(--wise-divider)] bg-[var(--wise-surface1)]">
      <Reveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-10 sm:flex-row sm:justify-between">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="heading-font text-[36px] leading-none text-[var(--wise-accent)] sm:text-[40px]">
                {s.value}
              </p>
              <p className="mt-2 text-[14px] text-[var(--wise-text2)]">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
