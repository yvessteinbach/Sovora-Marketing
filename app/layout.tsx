import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/comp__smooth-scroll";
import { SiteHeader } from "@/components/comp__site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sovora — The Autonomous Application Platform",
  description:
    "Deploy, operate and govern modern applications on European infrastructure.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--color-white)] font-[family-name:var(--font-geist-sans)] text-[var(--color-text)]">
        <SmoothScroll />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
