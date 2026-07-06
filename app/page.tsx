import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import SupportSection from "@/components/sections/SupportSection";
import ValueProposition from "@/components/sections/ValueProposition";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <SupportSection />
      <ValueProposition />
      <Testimonials />
    </>
  );
}