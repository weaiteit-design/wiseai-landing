import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Logo: icon + text separated */}
          <div className="mb-6 animate-fade-in flex flex-col items-center lg:items-start">
            <Image
              src="/logo-icon.png"
              alt="TheWiseAI logo"
              width={713}
              height={470}
              className="w-52 sm:w-64 lg:-ml-[72px]"
              priority
            />
            <span className="mt-2 text-4xl font-extrabold tracking-tight text-[var(--wise-text1)] sm:text-5xl">
              The<span className="text-[var(--wise-text1)]">Wise</span>
              <span className="text-[var(--wise-accent)]">AI</span>
            </span>
          </div>

          {/* Coming Soon Badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--wise-accent-dim)] bg-[rgba(99,102,241,0.06)] px-4 py-1.5 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--wise-accent)] animate-glow-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.8px] text-[var(--wise-accent-light)]">
              Coming Soon
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-4 text-[28px] font-extrabold leading-tight tracking-tight sm:text-[36px] lg:text-[42px] animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="gradient-text">Master AI</span>
            <br />
            <span className="text-[var(--wise-text1)]">Before It Masters You</span>
          </h1>

          {/* Description */}
          <p
            className="mb-8 max-w-md text-base leading-relaxed text-[var(--wise-text2)] sm:text-lg animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            The all-in-one app that turns AI overwhelm into AI fluency.
            Personalized news, bite-sized lessons, 53+ tool comparisons, and a
            gamified experience that keeps you coming back.
          </p>

          {/* Waitlist Form */}
          <div
            className="w-full animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <WaitlistForm />
          </div>

          {/* Tagline */}
          <p
            className="mt-3 text-xs text-[var(--wise-text3)] animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            Your Intelligence, Amplified.
          </p>
        </div>

        {/* Right: Phone Mockup */}
        <div
          className="flex shrink-0 justify-center animate-slide-up lg:justify-end"
          style={{ animationDelay: "0.4s" }}
        >
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
