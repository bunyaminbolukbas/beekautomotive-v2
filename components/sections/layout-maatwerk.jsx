"use client";

import { FadeIn } from "@/components/ui/fade-in";

export const LayoutMaatwerk = (props) => {
  const { tagline, heading, description, reviewScore, reviewCount, image } = {
    ...LayoutMaatwerkDefaults,
    ...props,
  };

  return (
    <section className="overflow-hidden bg-[#2B2A28] py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[52%_48%] gap-y-12 md:gap-0 md:items-center">
        {/* Left Column - Content */}
        <div className="px-[5%] md:pl-[5%] md:pr-8 lg:pr-12 flex flex-col justify-center">
            <FadeIn>
              <p className="mb-8 text-sm md:text-base uppercase tracking-wide text-[#9ca3af] font-medium md:mb-12">
                {tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mb-12 text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f5] leading-[1.1] md:mb-16 max-w-[20ch]">
                {heading}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6 max-w-[60ch]">
                <p className="text-base md:text-lg text-[#eaeaea] leading-relaxed md:leading-8">
                  Niet iedere auto staat standaard bij ons op voorraad, en dat hoeft ook niet. Bij <span className="font-extrabold">BEEK Automotive</span> helpen wij u juist met het vinden van precies die auto die bij ú past. Dat betekent dat wij verder kijken dan alleen ons actuele aanbod.
                </p>
                <p className="text-base md:text-lg text-[#eaeaea] leading-relaxed md:leading-8">
                  Door onze connecties binnen de branche, leasemaatschappijen en ons netwerk in heel Europa, kunnen wij gericht zoeken, selecteren, bemiddelen én importeren.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-12 md:mt-16 flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-[#C8A85E] text-white font-bold text-lg"
                  aria-label={`Score ${reviewScore} uit 10`}
                >
                  {reviewScore}
                </div>
                <p className="text-sm md:text-base text-[#9ca3af]">
                  {reviewCount} klanten waarderen ons gemiddeld met een {reviewScore}/10.
                </p>
              </div>
            </FadeIn>
          </div>

        {/* Right Column - Image */}
        <FadeIn delay={0.4}>
          <div className="px-[5%] md:px-0">
            <img
              src={image.src}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg md:rounded-none"
              alt={image.alt}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export const LayoutMaatwerkDefaults = {
  tagline: "Waarom kiezen voor BEEK Automotive",
  heading: "De perfecte auto bestaat. Wij vinden 'm.",
  description: "",
  reviewScore: "9.9",
  reviewCount: "263",
  image: {
    src: "/images/maatwerk-car.jpg",
    alt: "Beek Automotive maatwerk",
  },
};
