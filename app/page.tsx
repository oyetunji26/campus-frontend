import Footer from "@/components/landing/Footer";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";
import Marquee from "../components/landing/Marquee";
import Navbar from "../components/landing/Navbar";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/Cta";
import FAQ from "@/components/landing/Faq";
import HowItWorks from "@/components/landing/HowItWorks";
import Stats from "@/components/landing/Stats";


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-soft-pearl selection:bg-neutral-800 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Marquee />
      {/* Footer */}
      <Footer />
    </main>
  );
}