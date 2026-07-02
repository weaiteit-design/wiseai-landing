import Reveal from "./Reveal";

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <Reveal
      className="border-t border-[var(--wise-divider)] py-7 pr-6"
      delay={(index % 3) * 60}
    >
      <span
        className={`text-sm font-medium tracking-wide ${
          index % 2 === 0 ? "text-[var(--wise-accent)]" : "text-[var(--wise-secondary-light)]"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="heading-font mt-2 mb-2 text-2xl text-[var(--wise-text1)]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--wise-text2)]">
        {description}
      </p>
    </Reveal>
  );
}
