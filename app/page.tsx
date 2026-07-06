import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import SupportSection from "@/components/sections/SupportSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <SupportSection />
    </>
  );
}