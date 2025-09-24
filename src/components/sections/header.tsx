"use client";

import Link from "next/link";
import Image from "next/image";

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

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-magenta bg-[url('https://www.misterpio.com/images/texture_pink.webp')] bg-repeat">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 pt-6 pb-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:py-4">
        
        {/* Desktop Layout */}
        <div className="hidden w-full items-center lg:flex">
          <div className="flex flex-1 justify-start">
            <NavButton href="/#">Reserve a Bird</NavButton>
          </div>
          
          <div className="shrink-0">
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
              className="w-4/5 max-w-xs"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;