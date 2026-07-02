import { SOURCES } from "@/lib/constants";

export default function SourcesMarquee() {
  const track = [...SOURCES, ...SOURCES];

  return (
    <section className="border-y border-[var(--wise-divider)] py-6 sm:py-7">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
        Your daily briefing, curated from
      </p>
      <div className="marquee-mask -mx-5 sm:-mx-8">
        <div className="marquee-track gap-10 px-5 sm:gap-14 sm:px-8">
          {track.map((source, i) => (
            <span
              key={`${source}-${i}`}
              className="shrink-0 text-base font-medium text-[var(--wise-text2)] sm:text-lg"
            >
              {source}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
