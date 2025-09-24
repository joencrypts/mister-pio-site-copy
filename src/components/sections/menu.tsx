import React from 'react';
import Image from 'next/image';

const chickenItems = [
  {
    name: "Chicken Sandwich",
    description: "Served with a side salad.",
    extra: "Substitute Market Salad +5",
    price: 18,
  },
  {
    name: "¼ Chicken dark",
    description: "Quarter rotisserie chicken served with a choice of sauce and side salad.",
    extra: "Substitute Market Salad +5",
    price: 15,
  },
  {
    name: "¼ Chicken white",
    description: "Quarter rotisserie chicken served with a choice of sauce and side salad.",
    extra: "Substitute Market Salad +5",
    price: 18,
  },
  {
    name: "½ Chicken",
    description: "Half rotisserie chicken served with a choice of two sauces and side salad.",
    extra: "Substitute Market Salad +7",
    price: 29,
  },
  {
    name: "Whole Chicken",
    description: "Whole rotisserie chicken served with a choice of three sauces and side salad.",
    extra: "Substitute Market Salad +9",
    price: 54,
  },
];

const sidesAndDrinks = [
  { name: "Fries Large", price: 9 },
  { name: "Fries Small", price: 6 },
  { name: "Market Salad", price: 16 },
  { name: "Soda", price: 5 },
  { name: "Spring Water", price: 6 },
  { name: "Extra Sauce", price: 1 },
];

const ZIG_ZAG_SVG = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/svgs/menu-zig-zag-3.svg?";

const MenuSection = () => {
  return (
    <section id="menu" className="relative w-full overflow-x-hidden bg-accent pt-[170px] pb-10 md:pb-52">
      <p className="font-hero-tagline text-4xl text-center max-w-5/6 mx-auto text-dark-purple-text">
        Experience the Authentic Flavors of Peru
      </p>

      <div className="relative flex whitespace-nowrap gap-5 lg:gap-10 text-dark-purple-text mt-52 -ml-4">
        <div className="inline-block flex-shrink-0">
          <h2 className="font-section-header text-[120px] leading-none">Menu Menu Menu Menu Menu Menu</h2>
        </div>
        <div className="inline-block flex-shrink-0">
          <h2 className="font-section-header text-[120px] leading-none">Menu Menu Menu Menu Menu Menu</h2>
        </div>
      </div>

      <div className="relative mx-auto mt-40 flex w-full max-w-[85%] flex-col gap-6 bg-card p-8 text-dark-purple-text z-10 md:mt-64 lg:-rotate-2 lg:max-w-[800px] lg:gap-8 lg:px-10 lg:py-12 xl:max-w-[994px]">
        <div className="absolute -top-7 left-0 h-[50px] w-full lg:-top-8">
          <Image
            src={ZIG_ZAG_SVG}
            alt="zig zag pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          {chickenItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-20 lg:px-10">
                <h3 className="font-menu-item text-4xl lg:flex-1">{item.name}</h3>
                <div className="flex items-end justify-between gap-6 md:gap-20 lg:flex-1 lg:items-start">
                  <div className="flex flex-col gap-2 font-body">
                    <p className="text-base">{item.description}</p>
                    <p className="text-sm font-light">{item.extra}</p>
                  </div>
                  <p className="font-menu-item text-3xl lg:text-right">{item.price}</p>
                </div>
              </div>
              {index < chickenItems.length - 1 && <hr className="border-dashed border-foreground/30" />}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-4 lg:px-12 xl:flex-row xl:gap-0 xl:px-7">
          {sidesAndDrinks.map((item) => (
            <div key={item.name} className="relative flex justify-between gap-4 xl:flex-1 xl:flex-col xl:gap-3 xl:border-r xl:border-dashed xl:border-foreground/30 xl:text-center xl:last:border-0">
              <p className="font-body text-lg font-bold">{item.name}</p>
              <p className="font-menu-item text-3xl">{item.price}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex flex-col items-center gap-6 text-center">
          <hr className="w-full border-dashed border-foreground/30" />
          <h4 className="font-menu-item mt-4 text-3xl lg:text-[40px]">
            Inquire About Whole Chickens and Catering
          </h4>
          <a
            href="#"
            className="inline-block bg-card px-6 py-3 font-button text-sm font-medium uppercase tracking-wider text-foreground border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] transition-all duration-200 hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            Reserve a Bird
          </a>
        </div>

        <div className="absolute -bottom-7 left-0 h-[50px] w-full rotate-180 lg:-bottom-8">
          <Image
            src={ZIG_ZAG_SVG}
            alt="zig zag pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;