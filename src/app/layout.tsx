import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WiseAI — Master AI Before It Masters You",
  description:
    "WiseAI is the all-in-one app for AI fluency: personalized AI news from 30+ sources, interactive micro-lessons, 53+ tool comparisons, and gamified learning. 15 minutes a day to stay ahead.",
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
  ],
  authors: [{ name: "WiseAI" }],
  creator: "WiseAI",
  metadataBase: new URL("https://wiseai.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WiseAI — Master AI Before It Masters You",
    description:
      "Personalized AI news, bite-sized micro-lessons, 53+ tool comparisons, and gamified learning. Master AI in 15 minutes a day.",
    url: "https://wiseai.app",
    siteName: "WiseAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WiseAI — Your AI Learning Companion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WiseAI — Master AI Before It Masters You",
    description:
      "The all-in-one app for AI fluency. Get the app now.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/wiseai-icon.png", type: "image/png" },
    ],
    apple: "/wiseai-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
