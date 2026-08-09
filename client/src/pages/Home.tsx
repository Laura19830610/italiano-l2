/* ============================================================
   Home — Italiano L2
   Assembla tutti i componenti nella pagina principale
   Design "Piazza Italiana": terracotta, crema, oliva
   ============================================================ */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import ProposalsSection from "@/components/ProposalsSection";

import CtaBanner from "@/components/CtaBanner";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EDD6]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ProposalsSection />
      <CtaBanner />

      <ContactSection />
      <Footer />
    </div>
  );
}
