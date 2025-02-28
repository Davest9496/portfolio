import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            Hello, I am{" "}
            <span className="text-green-600 dark:text-green-500">
              Your Name
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
            A software developer based in London specializing in building (and
            occasionally designing) exceptional digital experiences with
            Next.js, React, and TypeScript.
          </p>
        </div>
      </main>
    </div>
  );
}
