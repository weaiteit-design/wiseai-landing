"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Loader2, ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error" | "already";

interface WaitlistFormProps {
  size?: "default" | "large";
}

export default function WaitlistForm({ size = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    if (params.get("utm_source")) utm.utm_source = params.get("utm_source")!;
    if (params.get("utm_medium")) utm.utm_medium = params.get("utm_medium")!;
    if (params.get("utm_campaign"))
      utm.utm_campaign = params.get("utm_campaign")!;
    setUtmParams(utm);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, ...utmParams }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setStatus("success");
        setMessage(data.message);
      } else if (res.ok && data.alreadyExists) {
        setStatus("already");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  const inputHeight = size === "large" ? "h-14" : "h-12";
  const buttonHeight = size === "large" ? "h-14 px-7 text-[15px]" : "h-12 px-6 text-sm";
  const textSize = size === "large" ? "text-base" : "text-sm";

  if (status === "success" || status === "already") {
    return (
      <div className="flex items-center gap-3 border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.06)] px-6 py-4 animate-fade-in">
        <CheckCircle className="h-5 w-5 shrink-0 text-[var(--wise-success)]" />
        <p className="text-sm text-[var(--wise-text1)]">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Enter your email address"
          className={`${inputHeight} flex-1 border border-[var(--wise-border)] bg-[var(--wise-surface2)] px-4 ${textSize} text-[var(--wise-text1)] placeholder:text-[var(--wise-text3)] outline-none transition-colors duration-150 focus:border-[var(--wise-accent)]`}
          disabled={status === "loading"}
          autoComplete="email"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`group flex ${buttonHeight} items-center justify-center gap-2 bg-[var(--wise-accent)] font-semibold text-white transition-colors duration-150 hover:bg-[var(--wise-accent-light)] active:translate-y-px disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto`}
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Join the Waitlist
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
      {status === "error" && message && (
        <p className="mt-2 text-xs text-[var(--wise-error)] animate-fade-in">
          {message}
        </p>
      )}
    </form>
  );
}
