"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/constants";
import { AI_IQ_TOTAL, buildAttempt, scoreToBand, type IqQuestion } from "@/lib/iq";

/** band.tone maps to a brand token rather than a raw hex. */
const TONE: Record<string, string> = {
  secondary: "var(--wise-secondary-light)",
  accent: "var(--wise-accent-light)",
  success: "#34D399",
};

export default function IqTest() {
  const [questions, setQuestions] = useState<IqQuestion[]>(() => buildAttempt());
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = questions[index];
  const answered = selected !== null;
  const band = useMemo(() => scoreToBand(score), [score]);
  const tone = TONE[band.tone] ?? "var(--wise-accent-light)";

  const pick = useCallback(
    (i: number) => {
      if (answered) return;
      setSelected(i);
      if (i === question.correctIndex) setScore((s) => s + 1);
    },
    [answered, question],
  );

  const next = useCallback(() => {
    if (index >= AI_IQ_TOTAL - 1) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }, [index]);

  const retake = useCallback(() => {
    setQuestions(buildAttempt());
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }, []);

  // ─── Result ───
  if (done) {
    return (
      <div className="flex flex-col items-center px-6 py-16 text-center">
        <Image
          src="/mascot/wurtle-celebrate.webp"
          alt=""
          width={400}
          height={400}
          className="animate-rise h-[150px] w-[150px] object-contain"
        />

        <div
          className="animate-rise mt-8 flex h-[132px] w-[132px] items-center justify-center rounded-full border-[5px]"
          style={{ borderColor: tone, backgroundColor: `${tone}14`, animationDelay: "0.1s" }}
        >
          <span className="flex items-baseline">
            <span className="heading-font text-[46px] leading-none" style={{ color: tone }}>
              {score}
            </span>
            <span className="ml-0.5 text-[17px] text-[var(--wise-text3)]">/{AI_IQ_TOTAL}</span>
          </span>
        </div>

        {/* No population comparison here. The app used to claim "you beat X% of
            people" from a hard-coded array; it was never measured, so it is not
            repeated on the web. */}
        <h1
          className="heading-font animate-rise mt-6 text-[34px] leading-tight text-[var(--wise-text1)] sm:text-[42px]"
          style={{ animationDelay: "0.2s" }}
        >
          {band.title}
        </h1>

        <p
          className="animate-rise mt-4 max-w-[46ch] text-[16px] leading-[1.65] text-[var(--wise-text2)]"
          style={{ animationDelay: "0.3s" }}
        >
          {band.blurb}
        </p>

        <div
          className="animate-rise mt-10 flex w-full max-w-[340px] flex-col gap-3"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={APP_STORE_URL}
            className="btn-press flex min-h-[56px] items-center justify-center rounded-2xl bg-[var(--wise-accent)] px-8 text-[15px] font-semibold uppercase tracking-[0.06em] text-[#1A0E04] hover:bg-[var(--wise-accent-light)]"
          >
            Build my learning plan
          </a>
          <button
            type="button"
            onClick={retake}
            className="btn-press min-h-[48px] text-[14px] font-medium text-[var(--wise-text3)] hover:text-[var(--wise-text1)]"
          >
            Retake the test
          </button>
          <Link
            href="/"
            className="min-h-[44px] text-[13px] text-[var(--wise-text4)] hover:text-[var(--wise-text2)]"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  // ─── Question ───
  return (
    <div className="mx-auto flex w-full max-w-[620px] flex-col px-6 py-10">
      {/* Progress. aria-live announces the step change to screen readers, which
          would otherwise get no signal that the question swapped. */}
      <div className="flex items-center gap-4">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--wise-surface2)]">
          <div
            className="h-full rounded-full bg-[var(--wise-accent)] transition-[width] duration-300 ease-out"
            style={{ width: `${((index + (answered ? 1 : 0)) / AI_IQ_TOTAL) * 100}%` }}
          />
        </div>
        <span className="text-[13px] tabular-nums text-[var(--wise-text3)]" aria-live="polite">
          {index + 1} / {AI_IQ_TOTAL}
        </span>
      </div>

      <h1
        key={`q-${index}`}
        className="heading-font animate-rise mt-10 text-[26px] leading-[1.25] text-[var(--wise-text1)] sm:text-[32px]"
      >
        {question.question}
      </h1>

      <div className="mt-8 flex flex-col gap-3">
        {question.options.map((option, i) => {
          const isCorrect = i === question.correctIndex;
          const isPicked = selected === i;
          // After answering, always reveal the correct option, not just the
          // one that was tapped. Getting it wrong should still teach.
          const border = !answered
            ? "var(--wise-border)"
            : isCorrect
              ? "#34D399"
              : isPicked
                ? "#F87171"
                : "var(--wise-border)";
          return (
            <button
              key={option}
              type="button"
              onClick={() => pick(i)}
              disabled={answered}
              aria-label={option}
              className="btn-press flex min-h-[56px] items-center rounded-2xl border px-5 py-4 text-left text-[15px] leading-snug text-[var(--wise-text1)] disabled:cursor-default"
              style={{
                borderColor: border,
                backgroundColor: answered && isCorrect ? "rgba(52,211,153,0.10)" : "var(--wise-surface1)",
                opacity: answered && !isCorrect && !isPicked ? 0.55 : 1,
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <p className="animate-rise mt-6 rounded-2xl border border-[var(--wise-border)] bg-[var(--wise-surface1)] p-4 text-[14px] leading-[1.6] text-[var(--wise-text2)]">
          {question.explanation}
        </p>
      )}

      <button
        type="button"
        onClick={next}
        disabled={!answered}
        className="btn-press mt-8 flex min-h-[56px] items-center justify-center rounded-2xl bg-[var(--wise-accent)] px-8 text-[15px] font-semibold uppercase tracking-[0.06em] text-[#1A0E04] transition-opacity hover:bg-[var(--wise-accent-light)] disabled:opacity-40"
      >
        {index >= AI_IQ_TOTAL - 1 ? "See my result" : "Next"}
      </button>
    </div>
  );
}
