import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Brilliant's "Meet Koji" pattern: the mascot narrates the product, and every
 * benefit block pairs one claim with one REAL app screen in a phone frame.
 * Alternating sides keep the scroll rhythm; Reveal staggers each block in as
 * it enters the viewport.
 *
 * Screens are the four polished marketing captures that already ship in
 * /public. The phone frame is dark on purpose: the app IS dark, and the
 * contrast against the cream page makes each screen read as a product window
 * rather than an illustration.
 */

const BLOCKS: {
  kicker: string;
  title: string;
  body: string;
  src: string;
  alt: string;
}[] = [
  {
    kicker: "Your plan",
    title: "A daily path built around you",
    body: "Tell Wurtle your role and goals once. Every day after that starts with a short path picked for you: one lesson, one update, one practice rep.",
    src: "/app-home.png",
    alt: "WiseAI home screen with daily missions, streak, and Wurtle",
  },
  {
    kicker: "Real lessons",
    title: "Lessons you actually finish",
    body: "Five minute interactive lessons with quizzes, flashcards, and practice built in. 400+ of them, from first prompt to advanced workflows.",
    src: "/app-learn.png",
    alt: "WiseAI lesson roadmap with interactive micro-lessons",
  },
  {
    kicker: "Stay current",
    title: "The AI news that matters to you",
    body: "Wurtle reads the firehose so you do not have to. A two minute daily brief, personalized to your role, with deep reads when you want them.",
    src: "/app-updates.png",
    alt: "WiseAI daily brief with curated AI updates",
  },
  {
    kicker: "Know your tools",
    title: "Pick the right AI tool every time",
    body: "60+ tools compared honestly: what each one is for, what it costs, and lessons that teach it. No more guessing which subscription you need.",
    src: "/app-tools.png",
    alt: "WiseAI tools directory comparing AI tools",
  },
];

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-[260px] rounded-[36px] bg-[#0B1A2B] p-2 shadow-[0_30px_60px_-20px_rgba(41,37,36,0.35)] sm:w-[290px]">
      <div className="absolute left-1/2 top-0 z-20 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-[#0B1A2B]" />
      <div className="relative aspect-[375/812] overflow-hidden rounded-[28px] bg-[#0B1A2B]">
        <Image
          src={src}
          alt={alt}
          width={750}
          height={1624}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function MeetWurtle() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <Reveal className="text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--wise-accent)]">
          Meet Wurtle
        </p>
        <h2 className="heading-font mx-auto mt-3 max-w-[22ch] text-[32px] leading-[1.12] text-[var(--wise-text1)] sm:text-[44px]">
          Your daily AI coach, in a bow tie.
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-20 sm:gap-28">
        {BLOCKS.map((b, i) => (
          <div
            key={b.title}
            className={`flex flex-col items-center gap-10 sm:gap-16 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <Reveal className="flex-1" delay={80}>
              <Phone src={b.src} alt={b.alt} />
            </Reveal>
            <Reveal className="flex-1 text-center lg:text-left" delay={160}>
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--wise-accent)]">
                {b.kicker}
              </p>
              <h3 className="heading-font mt-3 text-[28px] leading-[1.15] text-[var(--wise-text1)] sm:text-[36px]">
                {b.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[46ch] text-[16px] leading-[1.7] text-[var(--wise-text2)] sm:text-[17px] lg:mx-0">
                {b.body}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
