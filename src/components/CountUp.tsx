"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string; // e.g. "25", "500+", "50+", "7"
  className?: string;
}

// Animates the numeric portion of `value` from 0 up to its target once visible,
// preserving any non-numeric suffix (e.g. "+").
export default function CountUp({ value, className }: CountUpProps) {
  const target = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/^[0-9]+/, "");
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 900;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
