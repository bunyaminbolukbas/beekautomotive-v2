"use client";

import { Button } from "@relume_io/relume-ui";
import { FadeIn } from "@/components/ui/fade-in";
import { RxChevronRight } from "react-icons/rx";

export const LayoutMaatwerk = (props) => {
  const { tagline, heading, description, buttons, image } = {
    ...LayoutMaatwerkDefaults,
    ...props,
  };

  return (
    <section className="py-16 md:py-24 lg:py-28 overflow-hidden" style={{ backgroundColor: '#2B2A28' }}>
      <div className="grid grid-cols-1 md:grid-cols-[45%_55%] lg:grid-cols-[40%_60%] gap-y-12 md:gap-0 md:items-center">
        <div className="px-[5%] md:pl-[5%] md:pr-8 lg:pr-12">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold text-white md:mb-4 md:text-base">{tagline}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mb-5 text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">
              {heading}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm text-white md:text-base leading-relaxed">{description}</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button} className="carousel-button">
                  {button.title}
                </Button>
              ))}
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.4}>
          <div className="px-[5%] md:px-0">
            <img src={image.src} className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg md:rounded-none" alt={image.alt} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export const LayoutMaatwerkDefaults = {
  tagline: "",
  heading: "De perfecte auto bestaat. Wij vinden 'm.",
  description:
    "Niet iedere auto staat standaard bij ons op voorraad, en dat hoeft ook niet. Bij BEEK Automotive helpen wij u juist met het vinden van precies die auto die bij ú past. Dat betekent dat wij verder kijken dan alleen ons actuele aanbod. Door onze connecties binnen de branche, leasemaatschappijen en ons netwerk in heel Europa, kunnen wij gericht zoeken, selecteren, bemiddelen én importeren.",
  buttons: [
    { title: "Neem contact op", variant: "secondary" },
  ],
  image: {
    src: "/images/maatwerk-car.jpg",
    alt: "Beek Automotive maatwerk",
  },
};
