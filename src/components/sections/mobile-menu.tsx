"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

// NOTE: The design instructions contain several inconsistencies when compared to the
// HTML structure and screenshots. This component prioritizes the latter as the
// ground truth. For instance, the background is cream, not magenta, and the logo
// element is a decorative graphic at the bottom, not a text logo at the top.

const MisterPioFlyoutGraphic = () => {
  return (
    <div className="absolute bottom-0 -right-1/4 flex items-center justify-center w-full h-24 pointer-events-none opacity-60">
      {/* Placeholder for a complex decorative SVG from the original site. */}
    </div>
  );
};

export default function MobileMenu() {
  return (
    <div
      id="flyout-menu"
      className="fixed top-0 right-0 flex flex-col items-end gap-8 min-w-[20.625rem] pt-6 pb-4 pr-12 pl-4 h-full bg-card z-[120] text-foreground"
    >
      <a href="#" aria-label="Close Flyout Menu" className="h-9 w-9">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/svgs/times-1.svg?"
          alt="Close Flyout Menu"
          width={24}
          height={24}
          className="mx-auto"
        />
      </a>

      <nav
        id="main-menu-mobile"
        aria-label="Main Menu"
        className="flex flex-col items-end gap-3"
      >
        <Link
          href="#menu"
          className="font-button text-sm font-medium uppercase bg-card text-foreground border-2 border-black rounded-lg py-2 px-5 text-center shadow-[2px_2px_0px_#000000] hover:bg-muted/80 transition-colors"
        >
          View Menu
        </Link>
        <Link
          href="#about"
          className="font-button text-sm font-medium uppercase bg-card text-foreground border-2 border-black rounded-lg py-2 px-5 text-center shadow-[2px_2px_0px_#000000] hover:bg-muted/80 transition-colors"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="font-button text-sm font-medium uppercase bg-card text-foreground border-2 border-black rounded-lg py-2 px-5 text-center shadow-[2px_2px_0px_#000000] hover:bg-muted/80 transition-colors"
        >
          Contact
        </Link>
        <Link
          href="#"
          className="font-button text-sm font-medium uppercase text-foreground border-2 border-black rounded-lg py-2 px-5 text-center shadow-[2px_2px_0px_#000000] bg-gradient-to-b from-yellow-300 to-amber-600 hover:opacity-90 transition-opacity"
        >
          Reserve a Bird
        </Link>
      </nav>

      <div className="flex flex-col items-end gap-8 z-10 w-full">
        <p className="font-body text-base text-right">
          4502 E Thomas Rd
          <br />
          Phoenix, AZ 85018
        </p>
        <p className="font-body text-base text-right">
          Tuesday to Saturday
          <br />
          12pm - 8pm
        </p>
        <a
          href="tel:16024415060"
          className="font-section-header text-accent text-3xl"
        >
          602.441.5060
        </a>
        <a
          href="https://www.instagram.com/misterpiorotisserie/?hl=en"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center transition-opacity group-hover:opacity-80">
            <Instagram className="h-6 w-6 text-card" />
          </div>
        </a>
      </div>
      
      <MisterPioFlyoutGraphic />
    </div>
  );
}