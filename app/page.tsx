import Footer from "@/components/landing/Footer";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";
import Marquee from "../components/landing/Marquee";
import Navbar from "../components/landing/Navbar";


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-soft-pearl selection:bg-burnt-amber selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Marquee />
      {/* Footer */}
      <Footer />
    </main>
  );
}