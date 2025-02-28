import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    default: "Your Name | Software Developer",
    template: "%s | Your Name",
  },
  description:
    "Experienced software developer based in London specializing in web development, React, Next.js, and TypeScript.",
  keywords: [
    "software developer",
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "London",
    "freelance developer",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Your Name | Software Developer",
    description:
      "Experienced software developer based in London specializing in web development, React, Next.js, and TypeScript.",
    url: "https://your-domain.com",
    siteName: "Your Name Portfolio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Software Developer",
    description:
      "Experienced software developer based in London specializing in web development, React, Next.js, and TypeScript.",
    creator: "@your_twitter_handle",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Script to avoid theme flashing */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              // Check for saved theme preference
              const savedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              // Apply theme based on localStorage or system preference
              if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                document.body.classList.add('dark');
              } else {
                document.body.classList.remove('dark');
              }
            })();
          `}
        </Script>
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
