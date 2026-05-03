interface GlowOrbProps {
  position: "top-right" | "bottom-left" | "center";
  color: "orange" | "turquoise" | "amber";
}

const positionClasses = {
  "top-right": "-top-32 -right-32",
  "bottom-left": "-bottom-32 -left-32",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const colorClasses = {
  orange: "bg-[rgba(249,115,22,0.18)]",
  turquoise: "bg-[rgba(13,148,136,0.15)]",
  amber: "bg-[rgba(251,146,60,0.14)]",
};

export default function GlowOrb({ position, color }: GlowOrbProps) {
  return (
    <div
      className={`absolute ${positionClasses[position]} h-[500px] w-[500px] rounded-full ${colorClasses[color]} blur-[120px] animate-glow-pulse pointer-events-none`}
      aria-hidden="true"
    />
  );
}
