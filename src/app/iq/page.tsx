import type { Metadata } from "next";
import Nav from "@/components/Nav";
import IqTest from "@/components/IqTest";

export const metadata: Metadata = {
  title: "AI IQ Test: 10 questions, 2 minutes, no signup | WiseAI",
  description:
    "Ten practical questions about using AI tools well. Find out where you actually stand, then get a plan to close the gaps. No signup required.",
  openGraph: {
    title: "What is your AI IQ?",
    description: "Ten questions. Two minutes. No signup.",
    url: "https://www.thewiseai.app/iq",
  },
};

export default function IqPage() {
  return (
    <main className="relative min-h-dvh">
      <Nav />
      <div className="relative z-10 mx-auto max-w-5xl">
        <IqTest />
      </div>
    </main>
  );
}
