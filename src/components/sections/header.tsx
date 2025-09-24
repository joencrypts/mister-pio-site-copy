"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NavButton = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    href={href}
    className={`bg-cream text-dark-purple-text border-2 border-black rounded-lg font-button text-xs sm:text-sm uppercase py-2 px-3 sm:px-5 font-bold tracking-wider transition-all duration-150 shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] active:shadow-none active:translate-x-px active:translate-y-px ${className}`}
  >
    {children}
  </Link>
);

const Header = ({ onMenuToggle }: { onMenuToggle?: () => void }) => {
  const [shrunk, setShrunk] = useState(false);
  // Scroll-driven intro logo that scales down and moves into the header
  const { scrollYProgress } = useScroll();
  const introScale = useTransform(scrollYProgress, [0, 0.12], [2.4, 1]);
  const introY = useTransform(scrollYProgress, [0, 0.12], [0, -220]);
  const introOpacity = useTransform(scrollYProgress, [0.08, 0.16], [1, 0]);

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-magenta bg-[url('https://www.misterpio.com/images/texture_pink.webp')] bg-repeat transition-all duration-300 ${shrunk ? "shadow-[0_6px_0_#000]" : "shadow-none"}`}>
      {/* Full-screen intro logo that docks into the header on scroll */}
      <motion.img
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/svgs/mister_pio-2.svg?"
        alt="Mister Pio"
        style={{ scale: introScale, y: introY, opacity: introOpacity }}
        className="pointer-events-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[72vw] max-w-[1000px] select-none"
        aria-hidden="true"
      />
      <div className={`container mx-auto flex flex-col items-center gap-4 px-4 ${shrunk ? "pt-3 pb-2" : "pt-6 pb-4"} lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:py-4`}>
        
        {/* Desktop Layout */}
        <div className="hidden w-full items-center lg:flex">
          <div className="flex flex-1 justify-start">
            <NavButton href="/#">Reserve a Bird</NavButton>
          </div>
          
          <div className={`shrink-0 transition-transform duration-300 ${shrunk ? "scale-90" : "scale-100"}`}>
            <Link href="/">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/svgs/mister_pio-2.svg?"
                alt="Mister Pio"
                width={280}
                height={58}
                priority
              />
            </Link>
          </div>
          
          <nav className="flex flex-1 justify-end">
            <div className="flex items-center space-x-2">
              <NavButton href="#menu">View Menu</NavButton>
              <NavButton href="#about">About</NavButton>
              <NavButton href="#contact">Contact</NavButton>
            </div>
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <NavButton href="/#">Reserve a Bird</NavButton>
          <button
            aria-label="Open Flyout Menu"
            onClick={onMenuToggle}
            className="h-9 w-9 flex-shrink-0 bg-[url('https://www.misterpio.com/images/bars.svg')] bg-center bg-no-repeat"
          >
            <span className="sr-only">Open Menu</span>
          </button>
        </div>
        
        <div className="w-full lg:hidden">
          <Link href="/" className="flex justify-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/svgs/mister_pio-2.svg?"
              alt="Mister Pio"
              width={500}
              height={72}
              className={`w-4/5 max-w-xs transition-transform duration-300 ${shrunk ? "scale-95" : "scale-100"}`}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;