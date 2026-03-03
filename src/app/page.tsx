import GlowOrb from "@/components/GlowOrb";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Decorative background glows */}
      <GlowOrb position="top-right" color="indigo" />
      <GlowOrb position="bottom-left" color="purple" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-16 pb-8 sm:px-8 lg:pt-24">
        <Hero />
        <Features />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
