"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";
import Reveal from "./Reveal";

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
    <div className="border-t border-[var(--wise-divider)]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors"
      >
        <span className="text-[15px] font-medium text-[var(--wise-text1)] pr-4">
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-20 pb-20 sm:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal className="mb-8 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--wise-text3)]">
          FAQ
        </p>
        <h2 className="heading-font text-[34px] leading-[1.05] text-[var(--wise-text1)] sm:text-[44px]">
          Frequently asked questions
        </h2>
      </Reveal>

      <Reveal delay={100} className="max-w-2xl border-b border-[var(--wise-divider)]">
        {FAQS.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </Reveal>
    </section>
  );
}
