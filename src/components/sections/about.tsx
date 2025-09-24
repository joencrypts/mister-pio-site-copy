import Image from "next/image";

const featureCards = [
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-549144-about_03.webp?",
    alt: "cook at oven",
    title: "Labor of Love",
    description: "Our birds are marinated for 48 hours in a handcrafted 22-spice rub — an old family recipe that delivers bold, unforgettable flavor.",
    desktopClasses: "lg:absolute lg:z-30 lg:w-[30%] lg:left-1/2 lg:-translate-x-1/2",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/svgs/next-019656-about_02.webp?",
    alt: "peppers",
    title: "Farm-Fresh Produce",
    description: "Our seasonal vegetables come straight from Steadfast Farm in Mesa, AZ — local, organic, and simply delicious.",
    desktopClasses: "lg:absolute lg:z-20 lg:w-[30%] lg:left-[22%] lg:top-8 lg:rotate-2",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-740393-about_01.webp?",
    alt: "chicken on a plate",
    title: "Premium Poultry",
    description: "We proudly serve all-natural, humanely-raised chickens from Bell & Evans — known for their quality, and no antibiotics ever.",
    desktopClasses: "lg:absolute lg:z-10 lg:w-[30%] lg:right-[22%] lg:top-16 lg:-rotate-2",
  },
];

const galleryImages = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-403811-about-gallery-1.webp?", alt: "cook holding a roast chicken", rotation: "lg:rotate-2" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-977885-about-gallery-2.webp?", alt: "chicken, salad, french fries, and a drink", rotation: "lg:-rotate-1" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-738131-about-gallery-3.webp?", alt: "shelves of merchandise and a fridge with drinks", rotation: "lg:rotate-1" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/icons/next-150679-about-gallery-4.webp?", alt: "salad", rotation: "lg:-rotate-3" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e218bb76-042f-4203-a655-c9d7df87e103-misterpio-com/assets/images/next-499455-about-gallery-5.webp?", alt: "chicken lunch with a drink", rotation: "lg:rotate-2" },
];

const AboutSection = () => {
    // Reorder cards for mobile layout (Labor of Love, Farm-Fresh, Premium Poultry)
    const mobileOrderCards = [featureCards[0], featureCards[1], featureCards[2]];

  return (
    <section 
      id="about" 
      className="bg-secondary bg-[url('https://www.misterpio.com/images/texture_purple.webp')] bg-cover pt-[175px] pb-80 overflow-x-hidden md:pb-120 lg:pb-150"
    >
      <div className="relative flex overflow-hidden whitespace-nowrap text-cream">
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-5 lg:gap-10">
          <h2 className="font-section-header text-[120px] leading-none">About About About About About About</h2>
        </div>
        <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-5 lg:gap-10">
          <h2 className="font-section-header text-[120px] leading-none">About About About About About About</h2>
        </div>
      </div>

      <div className="container mt-50 px-4 mx-auto">
        <p className="font-hero-tagline text-[48px] leading-tight text-center text-cream max-w-[80%] mx-auto md:max-w-[75%] lg:max-w-[40%]">
          Rooted in Tradition, Made with Fresh Ingredients
        </p>

        <div className="relative mt-32 lg:mt-40 lg:min-h-[750px]">
          <div className="flex flex-col items-center gap-[120px] w-3/4 mx-auto md:w-1/2 lg:w-full lg:flex-row lg:justify-center lg:gap-0">
            {mobileOrderCards.map((card, index) => (
              <div
                key={index}
                className={`w-full ${card.desktopClasses || ''}`}
              >
                <div className="bg-white p-4">
                  <Image
                    src={card.imageSrc}
                    alt={card.alt}
                    width={500}
                    height={500}
                    className="w-full lg:grayscale"
                  />
                </div>
                <div className="text-cream text-center mt-[30px]">
                  <h3 className="font-menu-item text-[36px] mb-[18px]">
                    {card.title}
                  </h3>
                  <p className="font-body text-base">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-40 lg:mt-0 relative flex overflow-hidden group">
        <div className="animate-scroll flex gap-14 p-4">
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <div key={index} className={`relative shrink-0 w-[280px] sm:w-[320px] lg:w-[400px] bg-white p-2.5 border-2 border-black/10 shadow-lg ${image.rotation}`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={562}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;