"use client";

import { useState } from "react";
import Header from "@/components/sections/header";
import MobileMenu from "@/components/sections/mobile-menu";
import Hero from "@/components/sections/hero";
import MenuIntro from "@/components/sections/menu-intro";
import MenuSection from "@/components/sections/menu";
import AboutSection from "@/components/sections/about";
import CtaBanner from "@/components/sections/cta-banner";
import ContactIntro from "@/components/sections/contact-intro";
import Footer from "@/components/sections/footer";
import CursorFX from "@/components/cursor-fx";
import ScrollReveal from "@/components/scroll-reveal";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onMenuToggle={toggleMobileMenu} />
      
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-[110]"
            onClick={toggleMobileMenu}
          />
          <div className="relative">
            <MobileMenu onClose={toggleMobileMenu} />
          </div>
        </>
      )}

      <main>
        <Hero />
        <ScrollReveal>
          <MenuIntro />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <MenuSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <CtaBanner />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ContactIntro />
        </ScrollReveal>
      </main>

      <Footer />
      <CursorFX />
    </div>
  );
}