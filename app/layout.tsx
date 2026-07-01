import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-news",
  weight: ["500", "600"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Combien. Le prix de tout, des chaussettes à une île privée",
  description:
    "Cherche n'importe quel objet, vois son prix réel, ajoute-le à ta liste et découvre combien ça coûte vraiment.",
  openGraph: {
    title: "Combien.",
    description: "Le prix de tout, du plus simple au plus délirant.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
