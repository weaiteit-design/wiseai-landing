import {
  Newspaper,
  BookOpen,
  Wrench,
  Trophy,
  Sparkles,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Newspaper,
  BookOpen,
  Wrench,
  Trophy,
  Sparkles,
  MessageSquare,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  gradient,
  index,
}: FeatureCardProps) {
  const Icon = iconMap[icon] || Newspaper;

  return (
    <div
      className="glass-card p-6 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
    >
      {/* Icon */}
      <div
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-[15px] font-semibold text-[var(--wise-text1)]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[var(--wise-text2)]">
        {description}
      </p>
    </div>
  );
}
