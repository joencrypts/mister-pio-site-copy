import type { FC } from "react";
import { Instagram } from "lucide-react";

const ContactSection: FC = () => {
  return (
    <section
      id="contact"
      className="bg-accent text-dark-purple-text pt-24 pb-48 md:pt-32 md:pb-64 overflow-x-hidden"
    >
      <div className="relative whitespace-nowrap flex flex-nowrap justify-start gap-x-10">
        <h2 className="text-[120px] leading-none select-none flex-shrink-0">
          Contact Contact Contact Contact Contact Contact
        </h2>
        <h2 className="text-[120px] leading-none select-none flex-shrink-0">
          Contact Contact Contact Contact Contact Contact
        </h2>
      </div>

      <div className="container mt-24 flex flex-col items-center text-center gap-8 px-4">
        <p className="font-body text-3xl/snug font-medium">
          4502 E Thomas Rd
          <br />
          Phoenix, AZ 85018
        </p>
        <p className="font-body text-3xl/snug font-medium">
          Tuesday to Saturday
          <br />
          12pm - 8pm
        </p>
        <a
          href="tel:16024415060"
          className="font-body text-4xl/snug font-bold mt-2 transition-opacity hover:opacity-80"
        >
          602.441.5060
        </a>
        <a
          href="https://www.instagram.com/misterpiorotisserie/?hl=en"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 transition-opacity hover:opacity-80"
        >
          <Instagram strokeWidth={1.5} className="h-10 w-10" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;