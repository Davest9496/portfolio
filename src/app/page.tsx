import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dave Ejezie",
  description:
    "Welcome to the portfolio of [Your Name], a software developer based in London specializing in frontend development.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">My Developer Portfolio</h1>
        <p className="text-lg text-gray-600">
          Software Developer based in London
        </p>
      </div>
    </main>
  );
}