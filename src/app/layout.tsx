import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Editorial display serif, the signature move on premium AI product sites
// (Perplexity, Claude, Manus) pivoting away from generic geometric sans.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "WiseAI: Get Good at AI in 10 Minutes a Day",
  description:
    "Short daily lessons, real practice, and the AI news that matters. Take the free 2-minute AI IQ test, then build a plan. On the App Store.",
  keywords: [
    "AI learning app",
    "learn artificial intelligence",
    "AI news app",
    "AI tools directory",
    "Duolingo for AI",
    "AI skills test",
    "AI education",
    "WiseAI",
    "AI literacy",
    "micro-lessons AI",
    "ChatGPT lessons",
    "Claude lessons",
    "AI IQ test",
  ],
  authors: [{ name: "WiseAI" }],
  creator: "WiseAI",
  metadataBase: new URL("https://www.thewiseai.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WiseAI: Get Good at AI in 10 Minutes a Day",
    description:
      "Short daily lessons, real practice, and the AI news that matters. Free 2-minute AI IQ test, no signup.",
    url: "https://www.thewiseai.app",
    siteName: "WiseAI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WiseAI: Get Good at AI in 10 Minutes a Day",
    description:
      "Get good at AI in 10 minutes a day. Take the free 2-minute AI IQ test.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/wiseai-logo.png", type: "image/png" },
    ],
    apple: "/wiseai-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
