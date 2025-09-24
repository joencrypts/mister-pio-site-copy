import React from 'react';
import { Instagram } from 'lucide-react';

const CurvedText = () => (
  <svg
    viewBox="0 0 500 500"
    className="w-full h-full absolute top-0 left-0 pointer-events-none"
    aria-hidden="true"
  >
    <defs>
      <path
        id="circlePathTop"
        d="M 125, 250 a 125,125 0 1,1 250,0"
        fill="transparent"
      />
      <path
        id="circlePathBottom"
        d="M 125, 250 a 125,125 0 0,0 250,0"
        fill="transparent"
      />
    </defs>
    <text
      className="font-brand fill-foreground uppercase"
      style={{ fontSize: '38px', letterSpacing: '0.5rem' }}
    >
      <textPath
        href="#circlePathTop"
        startOffset="50%"
        textAnchor="middle"
      >
        MISTER PIO
      </textPath>
    </text>
    <text
      className="font-brand fill-foreground uppercase"
      style={{ fontSize: '22px', letterSpacing: '0.3rem' }}
    >
      <textPath
        href="#circlePathBottom"
        startOffset="50%"
        textAnchor="middle"
      >
        PERUVIAN ROTISSERIE CHICKEN
      </textPath>
    </text>
  </svg>
);

const ContactIntro = () => {
  return (
    <section id="contact" className="overflow-hidden">
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-secondary to-accent pt-16 lg:pt-0">
        <div className="relative mx-auto flex h-[350px] w-[350px] items-center justify-center sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] -mb-24 sm:-mb-36 lg:-mb-52">
          <div className="absolute inset-0 bg-primary rounded-full"></div>
          <CurvedText />
          <a
            href="#"
            className="font-button z-10 rounded-lg border-2 border-black bg-cream px-6 py-3 text-sm uppercase text-foreground shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-px hover:translate-y-px hover:shadow-none"
          >
            Reserve a Bird
          </a>
        </div>
      </div>

      <div className="bg-accent text-secondary pt-32 sm:pt-48 lg:pt-64 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="relative flex overflow-x-hidden">
          <div className="flex -translate-x-1/4">
            <h2 className="font-section-header flex-shrink-0 whitespace-nowrap text-[60px] text-secondary/70 sm:text-[90px] lg:text-[120px]">
              Contact Contact Contact Contact Contact Contact
            </h2>
            <h2 className="font-section-header flex-shrink-0 whitespace-nowrap text-[60px] text-secondary/70 sm:text-[90px] lg:text-[120px]">
              Contact Contact Contact Contact Contact Contact
            </h2>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-lg text-center font-body text-secondary sm:mt-24 lg:mt-32">
          <p className="leading-relaxed sm:text-lg lg:text-xl">
            4502 E Thomas Rd
            <br />
            Phoenix, AZ 85018
          </p>
          <p className="mt-8 leading-relaxed sm:text-lg lg:text-xl">
            Tuesday to Saturday
            <br />
            12pm - 8pm
          </p>
          <a
            href="tel:16024415060"
            className="mt-8 inline-block text-2xl font-bold transition-transform hover:scale-105 sm:text-3xl"
          >
            602.441.5060
          </a>
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.instagram.com/misterpiorotisserie/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-cream transition-transform group-hover:scale-105">
                <Instagram size={32} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;