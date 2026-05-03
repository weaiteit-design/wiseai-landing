"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#features", label: "Features" },
    { href: "/#faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--wise-divider)] bg-[rgba(11,26,43,0.85)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="WiseAI home">
          <Image
            src="/wiseai-logo.png"
            alt="WiseAI"
            width={500}
            height={500}
            className="h-16 w-auto sm:h-20"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#download"
            className="rounded-lg bg-[var(--wise-accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(249,115,22,0.25)] transition-all hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(249,115,22,0.4)]"
          >
            Get the App
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--wise-glass-border-light)] text-[var(--wise-text1)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--wise-divider)] bg-[rgba(11,26,43,0.95)] backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-3 sm:px-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--wise-text2)] transition-colors hover:bg-[var(--wise-surface1)] hover:text-[var(--wise-text1)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#download"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-[var(--wise-accent)] px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get the App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
