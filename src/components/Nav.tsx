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
    { href: "/#tour", label: "Tour" },
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        scrolled
          ? "border-[var(--wise-divider)] bg-[var(--wise-bg)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="WiseAI home">
          <Image
            src="/wiseai-logo.png"
            alt="WiseAI"
            width={500}
            height={500}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="border border-[var(--wise-text1)] bg-[var(--wise-text1)] px-4 py-2 text-sm font-medium text-[var(--wise-bg)] transition-colors hover:bg-transparent hover:text-[var(--wise-text1)]"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center border border-[var(--wise-border)] text-[var(--wise-text1)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--wise-divider)] bg-[var(--wise-bg)] md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-3 sm:px-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-[var(--wise-text2)] transition-colors hover:text-[var(--wise-text1)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#waitlist"
              onClick={() => setOpen(false)}
              className="mt-1 border border-[var(--wise-text1)] bg-[var(--wise-text1)] px-3 py-2.5 text-center text-sm font-medium text-[var(--wise-bg)]"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
