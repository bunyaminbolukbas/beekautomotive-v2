"use client";

import { FadeIn } from "@/components/ui/fade-in";

export const Layout194 = (props) => {
  const { tagline, heading, description, image } = {
    ...Layout194Defaults,
    ...props,
  };
  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[48%_52%] lg:grid-cols-[48%_52%] gap-y-12 md:gap-0 md:items-center">
        {/* Left Column - Image */}
        <FadeIn delay={0.1} className="order-2 md:order-1">
          <div className="px-[5%] md:px-0">
            <img src={image.src} className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg md:rounded-none" alt={image.alt} />
          </div>
        </FadeIn>

        {/* Right Column - Content */}
        <div className="order-1 md:order-2 px-[5%] md:pr-[5%] md:pl-8 lg:pl-12 flex flex-col justify-center">
          {tagline && (
            <FadeIn>
              <p className="mb-8 text-sm md:text-base uppercase tracking-wide text-[#9ca3af] font-medium md:mb-12">
                {tagline}
              </p>
            </FadeIn>
          )}

          <FadeIn delay={tagline ? 0.1 : 0}>
            <h1 className="mb-12 text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2A28] leading-[1.1] md:mb-16 max-w-[20ch]">
              {heading}
            </h1>
          </FadeIn>

          <FadeIn delay={tagline ? 0.2 : 0.1}>
            <div className="space-y-6 max-w-[60ch]">
              <p className="text-base md:text-lg text-[#2B2A28] leading-relaxed md:leading-8">
                {description}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const Layout194Defaults = {
  tagline: "",
  heading: "Het verhaal achter BEEK Automotive",
  description:
    "Elke auto heeft een verhaal. Maar ons verhaal bepaalt waarom wij de auto's kiezen die wij kiezen. BEEK Automotive is ontstaan vanuit een gedeelde passie voor auto's en de wens om het anders te doen dan de massa. Nét iets zorgvuldiger. Nét iets eerlijker. En met meer persoonlijke aandacht voor u. Wat wij vandaag doen, komt voort uit jaren ervaring in de branche en de overtuiging dat auto kopen weer persoonlijk en prettig mag zijn. Dit is waar onze basis vandaan komt — en waar dit verhaal begint.",
  image: {
    src: "/images/WhatsApp Image 2025-11-02 at 18.52.57.jpeg",
    alt: "BEEK Automotive verhaal",
  },
};
