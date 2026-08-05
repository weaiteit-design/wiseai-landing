import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import MeetWurtle from "@/components/MeetWurtle";
import IqCallout from "@/components/IqCallout";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

/**
 * Five acts, one scroll. The skeleton every strong launch site shares
 * (Family, Brilliant, Amie, measured live 2026-08-05):
 * personality hero -> defensible proof -> character-narrated product story
 * with real screens -> the zero-friction hook -> one final ask.
 *
 * This page is also the Support URL registered in App Store Connect, so the
 * footer must keep real support information.
 */
export default function Home() {
  return (
    <main className="relative min-h-dvh">
      <Nav />
      <Hero />
      <ProofStrip />
      <MeetWurtle />
      <IqCallout />
      <FinalCta />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Footer />
      </div>
    </main>
  );
}
