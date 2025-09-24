import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto bg-primary text-foreground">
      {/* Part 1: B&W Image with Zigzag Overlay */}
      <div className="relative w-full h-80 md:h-[480px] lg:h-[608px]">
        <div className="relative w-full h-full">
          <Image
            alt="Man at oven"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/oven-26.webp?"
            layout="fill"
            objectFit="cover"
            className="grayscale"
            unoptimized
          />
        </div>
        <div className="absolute w-full h-5 -bottom-px md:h-7 lg:h-10">
          <Image
            alt="pink zig-zag"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/texture_pink_footer-27.webp?"
            layout="fill"
            objectFit="cover"
            unoptimized
          />
        </div>
      </div>
      
      {/* NOTE: The original site uses a textured background. Using a solid color (bg-primary) as a fallback since the texture asset was not provided. */}
      
      {/* Part 2: Footer Navigation */}
      <div className="py-8 lg:py-10">
        <div className="flex flex-col gap-4 items-center justify-between w-full max-w-[1440px] mx-auto px-4 md:flex-row lg:px-8">
          <nav className="flex flex-wrap justify-center gap-4 items-center md:gap-6">
            <Link
              href="#"
              role="button"
              className="bg-cream text-black border-2 border-black rounded-lg px-4 py-2 font-bold text-sm uppercase tracking-wider whitespace-nowrap hover:bg-opacity-90 transition-colors"
            >
              Reserve a Bird
            </Link>
            <div className="hidden md:flex flex-wrap justify-center gap-6 items-center">
              <Link href="#menu" className="font-bold text-sm uppercase hover:opacity-75 transition-opacity">MENU</Link>
              <Link href="#about" className="font-bold text-sm uppercase hover:opacity-75 transition-opacity">ABOUT</Link>
              <Link href="#contact" className="font-bold text-sm uppercase hover:opacity-75 transition-opacity">CONTACT</Link>
              <a
                href="https://www.instagram.com/misterpiorotisserie/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm uppercase hover:opacity-75 transition-opacity"
              >
                INSTAGRAM
              </a>
            </div>
          </nav>
          <Link href="#" className="font-bold text-sm uppercase hover:opacity-75 transition-opacity">BACK TO TOP</Link>
        </div>
      </div>

      {/* Part 3: Logo Area */}
      <div className="relative py-24 px-4 overflow-hidden md:pt-40 md:pb-32">
        <div className="max-w-[70%] mx-auto md:max-w-1/2">
          <h2 className="font-['Lilita_One',_sans-serif] text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-none text-center uppercase tracking-[8px]">
            MISTER PIO
          </h2>
        </div>
        {/* NOTE: The circular stamp SVG from the original design is omitted as the asset is not provided. */}
      </div>
    </footer>
  );
};

export default Footer;