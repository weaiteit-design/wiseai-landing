interface GlowOrbProps {
  position: "top-right" | "bottom-left" | "center";
  color: "indigo" | "purple" | "cyan";
}

const positionClasses = {
  "top-right": "-top-32 -right-32",
  "bottom-left": "-bottom-32 -left-32",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const colorClasses = {
  indigo: "bg-[rgba(99,102,241,0.15)]",
  purple: "bg-[rgba(124,58,237,0.12)]",
  cyan: "bg-[rgba(6,182,212,0.1)]",
};

export default function GlowOrb({ position, color }: GlowOrbProps) {
  return (
    <div
      className={`absolute ${positionClasses[position]} h-[500px] w-[500px] rounded-full ${colorClasses[color]} blur-[120px] animate-glow-pulse pointer-events-none`}
      aria-hidden="true"
    />
  );
}
