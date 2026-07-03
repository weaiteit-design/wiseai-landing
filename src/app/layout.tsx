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

// Editorial display serif — the signature move on premium AI product sites
// (Perplexity, Claude, Manus) pivoting away from generic geometric sans.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "WiseAI — Master AI Before It Masters You",
  description:
    "Daily AI news, bite-sized lessons, 50+ tool comparisons, and AI duels — one app, 15 minutes a day. Launching soon on iOS & Android. Join the waitlist.",
  keywords: [
    "AI learning app",
    "learn artificial intelligence",
    "AI news app",
    "AI tools directory",
    "Duolingo for AI",
    "AI education",
    "WiseAI",
    "AI literacy",
    "micro-lessons AI",
    "ChatGPT lessons",
    "Claude lessons",
    "AI duels",
    "AI IQ test",
  ],
  authors: [{ name: "WiseAI" }],
  creator: "WiseAI",
  metadataBase: new URL("https://www.thewiseai.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WiseAI — Master AI Before It Masters You",
    description:
      "Personalized AI news, 500+ micro-lessons, 50+ tool comparisons, AI duels, and gamified learning. Launching soon — join the waitlist.",
    url: "https://www.thewiseai.app",
    siteName: "WiseAI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WiseAI — Master AI Before It Masters You",
    description:
      "The all-in-one app for AI fluency. Launching soon — join the waitlist.",
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
