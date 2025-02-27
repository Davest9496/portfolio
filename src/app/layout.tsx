import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Software Developer",
  description:
    "Portfolio and professional work of a London-based software developer specializing in web development.",
  keywords: [
    "software developer",
    "web developer",
    "frontend",
    "London",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
