"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Loader2, ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error" | "already";

export default function WaitlistForm() {
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

  if (status === "success" || status === "already") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-[rgba(16,185,129,0.25)] bg-[rgba(16,185,129,0.08)] px-6 py-4 animate-fade-in">
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
          className="h-[90px] sm:h-[84px] flex-1 rounded-2xl border-2 border-[rgba(99,102,241,0.5)] bg-[var(--wise-surface2)] px-8 text-xl text-[var(--wise-text1)] placeholder:text-[var(--wise-text1)] placeholder:text-lg outline-none transition-all duration-200 animate-[input-glow_2.5s_ease-in-out_infinite] focus:border-[var(--wise-accent)] focus:ring-2 focus:ring-[rgba(99,102,241,0.4)] focus:shadow-[0_0_60px_rgba(99,102,241,0.5),0_0_120px_rgba(99,102,241,0.2)]"
          disabled={status === "loading"}
          autoComplete="email"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--wise-accent)] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Join the Waitlist
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
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
