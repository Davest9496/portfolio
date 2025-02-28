import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-theme">
      <Header />
      <main className="flex-grow px-50">
        <Hero />
      </main>
    </div>
  );
}
