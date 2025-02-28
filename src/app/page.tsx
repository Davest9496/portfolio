import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-theme w-full ">
      <Header />
      <main className="flex-grow px-50 block min-h-[80vh]">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
