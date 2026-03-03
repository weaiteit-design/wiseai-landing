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
  title: "TheWiseAI — Master AI Before It Masters You",
  description:
    "The all-in-one app for AI fluency. Personalized news from 15+ sources, interactive micro-lessons, 53+ tool comparisons, and gamified learning. Join the waitlist.",
  keywords: [
    "AI learning app",
    "learn artificial intelligence",
    "AI news",
    "AI tools directory",
    "Duolingo for AI",
    "AI education",
    "TheWiseAI",
    "AI literacy",
    "micro-lessons AI",
  ],
  authors: [{ name: "TheWiseAI" }],
  creator: "TheWiseAI",
  metadataBase: new URL("https://thewiseai.app"),
  openGraph: {
    title: "TheWiseAI — Master AI Before It Masters You",
    description:
      "The all-in-one app for AI fluency. Personalized news, bite-sized lessons, 53+ tool comparisons, and gamified learning.",
    url: "https://thewiseai.app",
    siteName: "TheWiseAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TheWiseAI - Your Intelligence, Amplified",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheWiseAI — Master AI Before It Masters You",
    description:
      "The all-in-one app for AI fluency. Join the waitlist.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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
