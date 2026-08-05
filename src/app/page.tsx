import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

/**
 * One screen, then the footer.
 *
 * This page previously ran nine sections and opened with a waitlist for an app
 * that had already shipped, plus a stat row rendering "0 AI updates" and
 * "0+ interactive lessons". It is also the Support URL registered in App Store
 * Connect, so Apple loads it during review and needs to find real support
 * information rather than a "coming soon" page.
 *
 * The removed sections still exist as components. They are unmounted here
 * rather than deleted, so any of them can be brought back without rewriting.
 */
export default function Home() {
  return (
    <main className="relative min-h-dvh">
      <Nav />
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
