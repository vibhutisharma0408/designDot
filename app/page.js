import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HotTopics from "@/components/HotTopics";
import About from "@/components/About";
import Insights from "@/components/Insights";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HotTopics />
      <About />
      <Insights />
    </main>
  );
}
