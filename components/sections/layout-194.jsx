"use client";

import { FadeIn } from "@/components/ui/fade-in";

export const Layout194 = (props) => {
  const { heading, description, image } = {
    ...Layout194Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <FadeIn delay={0.1}>
            <div className="order-2 md:order-1">
              <img src={image.src} className="w-full object-cover rounded-lg" alt={image.alt} />
            </div>
          </FadeIn>
          <div className="order-1 md:order-2">
            <FadeIn>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h3>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="md:text-md">{description}</p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout194Defaults = {
  heading: "Het verhaal achter BEEK Automotive",
  description:
    "Elke auto heeft een verhaal. Maar ons verhaal bepaalt waarom wij de auto's kiezen die wij kiezen. BEEK Automotive is ontstaan vanuit een gedeelde passie voor auto's en de wens om het anders te doen dan de massa. Nét iets zorgvuldiger. Nét iets eerlijker. En met meer persoonlijke aandacht voor u. Wat wij vandaag doen, komt voort uit jaren ervaring in de branche en de overtuiging dat auto kopen weer persoonlijk en prettig mag zijn. Dit is waar onze basis vandaan komt — en waar dit verhaal begint.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "BEEK Automotive verhaal",
  },
};
