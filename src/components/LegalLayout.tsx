import Nav from "./Nav";
import Footer from "./Footer";
import GlowOrb from "./GlowOrb";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GlowOrb position="top-right" color="orange" />
      <GlowOrb position="bottom-left" color="turquoise" />

      <Nav />

      <div className="relative z-10 mx-auto max-w-3xl px-5 pt-12 pb-8 sm:px-8">
        <article className="prose-wise">
          <h1>{title}</h1>
          <p className="!mb-8 !text-sm !text-[var(--wise-text3)]">
            Last updated: {lastUpdated}
          </p>
          {children}
        </article>

        <Footer />
      </div>
    </main>
  );
}
