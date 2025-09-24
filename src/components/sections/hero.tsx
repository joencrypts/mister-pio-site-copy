"use client";

import Image from 'next/image';
import type { FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: FC = () => {
  const { scrollYProgress } = useScroll();
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

  // Parallax for floating bits
  const yStamp = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yCap = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yPeppers = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <section
      className="relative w-full bg-magenta pt-40 px-4 md:pt-80 lg:pt-[400px] lg:px-6 lg:pb-[250px] lg:overflow-hidden 2xl:pt-[460px] bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/texture_pink-21.webp?')",
        backgroundSize: 'auto',
      }}
    >
      {/* Big intro title that shrinks/fades on scroll */}
      <motion.h2
        style={{ scale: titleScale, opacity: titleOpacity, y: titleY }}
        className="pointer-events-none font-brand text-[10vw] leading-none tracking-[0.2em] text-dark-purple-text drop-shadow-[0_4px_0_#00000020] absolute top-28 left-1/2 -translate-x-1/2 z-30 select-none md:top-36"
        aria-hidden="true"
      >
        MISTER PIO
      </motion.h2>

      <div className="max-w-[1440px] mx-auto">
        <div className="relative pt-[30px] md:pt-0">
          <h1 className="font-hero-tagline text-center text-dark-purple-text sm:max-w-3/4 sm:mx-auto">
            <span className="sr-only">Mister Pio </span>Peruvian Rotisserie Chicken
          </h1>
          {/* Stamp with parallax */}
          <motion.div style={{ y: yStamp }} className="absolute top-[140px] right-[8%] rotate-12 max-w-[66px] z-10 sm:top-[108px] md:max-w-[80px] md:-top-[120px] lg:max-w-[110px]">
            <Image
              alt="Peruvian stamp"
              width={110}
              height={142}
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-950452-stampperu2.webp?"
              className="w-full"
            />
          </motion.div>
        </div>

        <div className="relative mt-[80px]">
          <div className="flex justify-center items-center mt-[50px]">
            <div className="relative w-4/5 rotate-3 overflow-hidden md:w-2/3 xl:w-1/2 xl:max-w-[950px]">
              <Image
                alt="Picture frame"
                width={690}
                height={482}
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-804319-frame-large.webp?"
                className="relative w-full z-10"
              />
              <div className="absolute top-[10px] bottom-[14px] left-[10px] right-[10px] rounded-xl overflow-hidden xl:bottom-[18px] xl:right-[14px] 2xl:bottom-[22px] 2xl:right-[18px]">
                <Image
                  alt="Lima"
                  width={690}
                  height={880}
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-310186-lima.webp?"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Inka cola cap with parallax */}
            <motion.div style={{ y: yCap }} className="absolute -top-[20%] left-[3%] w-1/4 max-w-[125px] -rotate-20 z-20 md:w-1/5 md:-top-[15%] md:left-[6%]">
              <Image
                alt="Inka Cola"
                width={133}
                height={134}
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-650413-incakolacap.webp?"
                className="w-full"
              />
            </motion.div>
            {/* Peppers with parallax */}
            <motion.div style={{ y: yPeppers }} className="absolute top-3/4 left-[5%] -rotate-3 max-w-[40%] z-10 md:max-w-[200px] md:top-1/2 lg:max-w-sm lg:left-[8.333333%] xl:left-[16.666667%]">
              <Image
                alt="Peppers"
                width={329}
                height={451}
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/svgs/next-350410-aji_dried_peppers.webp?"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>

        <div className="relative flex flex-col justify-between mt-[200px] md:flex-row md:items-start">
          <div className="max-w-[850px] -translate-x-[60px] translate-y-[80px] opacity-60 md:w-[45%] md:-translate-x-[32px] md:-translate-y-[160px] lg:-translate-x-[80px]">
            {/* This div is a placeholder for an omitted SVG element to maintain layout */}
          </div>

          <div className="absolute w-4/5 left-1/2 -top-[12%] -translate-x-1/2 max-w-[440px] z-10 md:relative md:left-auto md:translate-x-0 md:translate-y-[5%] md:w-[55%] lg:w-1/3 lg:right-[12.5%] lg:translate-y-0 xl:max-w-[520px]">
            <span className="absolute top-1/3 left-1/2 -translate-x-1/2 z-20">
              <a
                href="#menu"
                className="font-button flex h-full items-center text-center bg-cream py-3 px-6 rounded-md border-2 border-black text-dark-purple-text transition-colors hover:bg-opacity-90"
              >
                View Menu
              </a>
            </span>
            <Image
              alt="Chicken Plate"
              width={481}
              height={601}
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-632873-chicken_plate.webp?"
              className="relative z-10 w-full"
            />
          </div>

          <Image
            alt="Sculpture"
            width={370}
            height={424}
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-327731-trinket.webp?"
            className="absolute top-full left-1/6 w-1/3 max-w-[200px] md:w-2/5 lg:top-4/5 lg:w-1/4 lg:max-w-[220px] xl:left-1/3 2xl:max-w-[240px]"
          />
        </div>

        <div className="relative mt-[120px] flex flex-col md:mt-0">
          <Image
            alt="Peruvian Gold Coin"
            width={350}
            height={350}
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-620438-perugoldcoin.webp?"
            className="absolute -top-[32px] right-[10%] max-w-[65px] rotate-15 z-10 md:right-1/6 lg:max-w-[90px]"
          />
          <Image
            alt="Peruvian Gold Coin"
            width={350}
            height={350}
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-620438-perugoldcoin.webp?"
            className="absolute top-1/4 left-[30%] max-w-[65px] rotate-15 z-20 md:left-1/2 md:-translate-x-1/2 lg:left-auto lg:right-[10%] lg:top-full lg:max-w-[90px] lg:-translate-x-0"
          />
          <Image
            alt="Mountain"
            width={500}
            height={507}
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-472260-mountain.webp?"
            className="self-end relative right-3 w-[45%] rotate-5 md:right-8 md:w-2/5 lg:absolute lg:self-auto lg:-bottom-[110%] lg:right-1/5 lg:w-1/4 lg:max-w-[350px] lg:rotate-0"
          />
          <Image
            alt="Peruvian stamp"
            width={400}
            height={528}
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-115884-stampperu.webp?"
            className="absolute bottom-2/5 left-1/5 -rotate-12 max-w-[66px] z-10 md:max-w-[80px] lg:max-w-[110px]"
          />
          <div className="relative -bottom-[60px] left-2/5 w-4/5 -rotate-3 -translate-x-2/5 overflow-hidden md:w-3/5 md:left-1/3 lg:left-0 lg:w-[45%] lg:-bottom-0 lg:max-w-[700px] lg:translate-y-[120px] lg:-translate-x-0 2xl:left-[10%]">
            <Image
              alt="Picture frame"
              width={690}
              height={482}
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-804319-frame-large.webp?"
              className="relative z-10 w-full"
            />
            <div className="absolute top-[10px] bottom-[14px] left-[10px] right-[10px] rounded-xl overflow-hidden">
              {/* The original image for this frame (oven.webp) was not provided in the assets. */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;