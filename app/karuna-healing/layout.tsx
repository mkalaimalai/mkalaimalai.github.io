import type { Metadata } from "next";
import { Cormorant_Garamond, Philosopher, Noto_Sans_Devanagari } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const philosopher = Philosopher({
  variable: "--font-philosopher-font",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Karuna Karma Soul & DNA Healing — Daily Practice",
  description:
    "Interactive daily practice guide for Karuna Reiki healing — chakra mappings, symbol references, guided meditation, and visualization.",
};

export default function KarunaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${cormorant.variable} ${philosopher.variable} ${notoDevanagari.variable} karuna-noise`}
      style={{
        fontFamily: "var(--font-philosopher)",
        background: "var(--color-k-bg)",
        color: "var(--color-k-text)",
        lineHeight: 1.7,
        overflowX: "hidden" as const,
      }}
    >
      {children}
    </div>
  );
}
