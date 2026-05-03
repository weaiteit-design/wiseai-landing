import GlowOrb from "@/components/GlowOrb";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Decorative background glows — orange + turquoise to match app brand */}
      <GlowOrb position="top-right" color="orange" />
      <GlowOrb position="bottom-left" color="turquoise" />

      <Nav />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-8 sm:px-8">
        <Hero />
        <Features />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
