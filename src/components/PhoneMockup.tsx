"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SCREENS = [
  { src: "/app-home.png", alt: "WiseAI Home, daily missions, streaks, and Wurtle the mascot" },
  { src: "/app-updates.png", alt: "WiseAI Updates. 25 personalized AI updates daily, curated for you" },
  { src: "/app-tools.png", alt: "WiseAI Tools, discover and compare 50+ AI tools, with daily launches" },
  { src: "/app-learn.png", alt: "WiseAI Learn, interactive micro-lessons with quizzes and challenges" },
];

export default function PhoneMockup() {
  const [active, setActive] = useState(0);

  /* Auto-rotate every 3.5 seconds */
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SCREENS.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      {/* Phone Frame, realistic, no glow halo */}
      <div className="relative mx-auto w-[300px] rounded-[36px] border border-[var(--wise-border-strong)] bg-[#050d17] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#050d17]" />

        {/* Screen */}
        <div className="relative aspect-[375/812] overflow-hidden rounded-[28px] bg-[var(--wise-bg)]">
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
    </div>
  );
}
