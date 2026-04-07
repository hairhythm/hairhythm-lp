/*
 * Home — 育毛の学校 LP
 * Design Philosophy: 「森の癒し」— Natural Elegant Green
 * Color: Sage Green × Cream White × Warm Taupe
 * Typography: Shippori Mincho (display) + Noto Sans JP (body)
 * Sections: Hero → Stats → About → Curriculum → Testimonials → FAQ → Contact
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingLineButton from "@/components/FloatingLineButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CurriculumSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingLineButton />
    </div>
  );
}
