import React from 'react';

const MenuIntro = () => {
  return (
    <section
      id="menu"
      className="relative w-full pt-[170px] pb-10 bg-accent bg-cover bg-center md:pb-[200px]"
      style={{ backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/texture_blue-23.webp?')" }}
    >
      <p className="font-hero-tagline text-dark-purple-text text-center max-w-[83.3333%] mx-auto">
        Experience the Authentic Flavors of Peru
      </p>

      <div className="relative mt-[200px] flex justify-start gap-5 overflow-hidden whitespace-nowrap text-dark-purple-text z-10 lg:gap-10">
        <div className="inline-block flex-shrink-0">
          <h2 className="font-section-header tracking-[-2.4px]">
            Menu Menu Menu Menu Menu Menu
          </h2>
        </div>
        <div className="inline-block flex-shrink-0">
          <h2 className="font-section-header tracking-[-2.4px]">
            Menu Menu Menu Menu Menu Menu
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MenuIntro;