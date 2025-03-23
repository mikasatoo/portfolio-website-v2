import type { Metadata } from "next";
import { Geist, Geist_Mono, Fuzzy_Bubbles, Delius } from "next/font/google";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fuzzyBubbles = Fuzzy_Bubbles({
  variable: "--font-fuzzy-bubbles",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const delius = Delius({
  variable: "--font-delius",
  subsets: ["latin"], 
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A compilation of my experience, projects, and some interests.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${fuzzyBubbles.variable} ${delius.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
