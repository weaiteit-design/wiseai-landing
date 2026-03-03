"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SCREENS = [
  { src: "/app-home.png", alt: "TheWiseAI Home — streaks, daily AI hacks, and bite-sized lessons" },
  { src: "/app-updates.png", alt: "TheWiseAI Updates — curated AI news and must-read stories" },
  { src: "/app-tools.png", alt: "TheWiseAI Tools — discover and compare 53+ AI tools" },
];

export default function PhoneMockup() {
  const [active, setActive] = useState(0);

  /* Auto-rotate every 3.5 seconds */
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SCREENS.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative animate-float">
      {/* Phone Frame */}
      <div className="relative mx-auto w-[280px] rounded-[40px] border-2 border-[rgba(255,255,255,0.1)] bg-[var(--wise-surface1)] p-2 shadow-[0_0_60px_rgba(99,102,241,0.15)]">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[var(--wise-surface1)]" />

        {/* Screen */}
        <div className="relative aspect-[375/812] overflow-hidden rounded-[32px] bg-[var(--wise-bg)]">
          {SCREENS.map((screen, i) => (
            <div
              key={screen.src}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: i === active ? 1 : 0 }}
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                width={750}
                height={1624}
                className="h-full w-full object-cover object-top"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {SCREENS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show screen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 bg-[var(--wise-accent)]"
                : "w-1.5 bg-[var(--wise-text4)] hover:bg-[var(--wise-text3)]"
            }`}
          />
        ))}
      </div>

      {/* Glow behind phone */}
      <div
        className="absolute inset-0 -z-10 scale-125 rounded-full bg-[rgba(99,102,241,0.08)] blur-[80px]"
        aria-hidden="true"
      />
    </div>
  );
}
