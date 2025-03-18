import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeInit from "@/components/theme-init";
import ServiceWorkerRegistration from "@/components/service-worker-registeration";
import { ThemeScript } from "@/components/theme-script";
import Header from "@/components/header";
import MouseAnimation from "@/components/mouse-animation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Ensures text remains visible during font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dave Ejezie | Full-Stack Web Developer",
    template: "%s | Dave Ejezie",
  },
  description:
    "Experienced Full-Stack Web Developer based in London specializing in web development, React, Next.js, and TypeScript.",
  keywords: [
    "Full-Stack Web Developer",
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "London",
    "freelance developer",
  ],
  authors: [{ name: "Dave Ejezie" }],
  creator: "Dave Ejezie",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dave Ejezie | Full-Stack Web Developer",
    description:
      "Experienced Full-Stack Web Developer based in London specializing in web development, React, Next.js, and TypeScript.",
    url: "https://duejezie.dev",
    siteName: "Dave Ejezie",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dave Ejezie | Full-Stack Web Developer",
    description:
      "Experienced Full-Stack Web Developer based in London specializing in web development, React, Next.js, and TypeScript.",
    creator: "@duejezie",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0D021B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased min-h-screen overflow-x-hidden">
        <ThemeInit />
        <ServiceWorkerRegistration />
        <MouseAnimation />
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
