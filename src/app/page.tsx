import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel";
import SourcesMarquee from "@/components/SourcesMarquee";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import MascotSection from "@/components/MascotSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-8 sm:px-8">
        <Hero />
        <ScreenshotsCarousel />
        <SourcesMarquee />
        <HowItWorks />
        <Features />
        <MascotSection />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
