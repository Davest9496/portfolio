import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeInit from "@/components/theme-init";
import { ThemeScript } from "@/components/theme-script";
import Header from "@/components/header";

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
    default: "Dave Ejezie | Full-Stack Software Developer",
    template: "%s | Dave Ejezie",
  },
  description:
    "Experienced Full-Stack Software Developer based in London specializing in web development, React, Next.js, and TypeScript.",
  keywords: [
    "Full-Stack Software Developer",
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
    title: "Dave Ejezie | Full-Stack Software Developer",
    description:
      "Experienced Full-Stack Software Developer based in London specializing in web development, React, Next.js, and TypeScript.",
    url: "https://your-domain.com",
    siteName: "Dave Ejezie",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dave Ejezie | Full-Stack Software Developer",
    description:
      "Experienced Full-Stack Software Developer based in London specializing in web development, React, Next.js, and TypeScript.",
    creator: "@your_twitter_handle",
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
      <body className="antialiased min-h-screen">
        <ThemeInit />
        <Header/>
        {children}
      </body>
    </html>
  );
}
