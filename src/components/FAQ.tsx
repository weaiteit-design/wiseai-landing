"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[var(--wise-divider)]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors"
      >
        <span className="text-[15px] font-semibold text-[var(--wise-text1)] pr-4">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[var(--wise-text3)] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-[var(--wise-text2)]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-xl scroll-mt-20 pb-20 sm:pb-28">
      {/* Section Title */}
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.8px] text-[var(--wise-accent-light)]">
        FAQ
      </p>
      <h2 className="mb-8 text-center text-[26px] font-extrabold leading-tight tracking-tight text-[var(--wise-text1)] sm:text-[32px]">
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      <div className="rounded-2xl border border-[var(--wise-glass-border-light)] bg-[var(--wise-surface1)] px-6">
        {FAQS.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
