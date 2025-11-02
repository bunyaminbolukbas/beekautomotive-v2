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
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: '#2B2A28' }}>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <FadeIn>
              <p className="mb-3 font-semibold text-white md:mb-4">{tagline}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-white md:text-md">{description}</p>
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
            <div>
              <img src={image.src} className="w-full object-cover rounded-lg" alt={image.alt} />
            </div>
          </FadeIn>
        </div>
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
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Beek Automotive maatwerk",
  },
};
