"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const SCREENSHOTS = [
  { src: "/screenshots/01_home_daily_path.png", alt: "WiseAI Home, your daily path to practical AI skills, with streaks, XP, and today's missions" },
  { src: "/screenshots/02_roadmap_good_better_wiseai.png", alt: "WiseAI learning roadmap, a personalized journey from zero to AI-fluent, guided by Wurtle" },
  { src: "/screenshots/03_practice_real_skills.png", alt: "WiseAI Practice Hub, warm-ups, guided exercises, and tool mastery paths for ChatGPT, Claude, and more" },
  { src: "/screenshots/04_updates_daily_brief.png", alt: "WiseAI Updates, today's AI briefing, handpicked and turned into actionable insights" },
  { src: "/screenshots/05_article_audio_deep_read.png", alt: "WiseAI article view, read or listen deeply, with narrated summaries and key insights" },
  { src: "/screenshots/06_tools_discovery.png", alt: "WiseAI Tools, find the right AI tool fast, matched to your task" },
  { src: "/screenshots/07_community_discussion.png", alt: "WiseAI Community, learn with other AI builders through tips, reviews, and discussions" },
  { src: "/screenshots/08_progress_profile.png", alt: "WiseAI Profile, show your AI progress with XP, streaks, and a full activity calendar" },
];

export default function ScreenshotsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id="tour" className="scroll-mt-20 pb-20 sm:pb-28">
      <Reveal className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
            See it in action
          </p>
          <h2 className="heading-font text-[34px] leading-[1.05] text-[var(--wise-text1)] sm:text-[44px]">
            A tour of the app
          </h2>
        </div>

        {/* Prev/Next controls, desktop only, touch devices swipe */}
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous screenshots"
            className="flex h-9 w-9 items-center justify-center border border-[var(--wise-border)] text-[var(--wise-text2)] transition-colors hover:border-[var(--wise-border-strong)] hover:text-[var(--wise-text1)]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next screenshots"
            className="flex h-9 w-9 items-center justify-center border border-[var(--wise-border)] text-[var(--wise-text2)] transition-colors hover:border-[var(--wise-border-strong)] hover:text-[var(--wise-text1)]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </Reveal>

      <div
        ref={trackRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-5"
        style={{ scrollPaddingLeft: "4px" }}
      >
        {SCREENSHOTS.map((shot, i) => (
          <div
            key={shot.src}
            className="relative shrink-0 snap-start overflow-hidden border border-[var(--wise-divider)]"
            style={{ width: "min(80vw, 320px)" }}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1520}
              height={2688}
              className="h-auto w-full"
              loading={i === 0 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 80vw, 320px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
