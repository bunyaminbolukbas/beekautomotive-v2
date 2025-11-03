"use client";

import { FadeIn } from "@/components/ui/fade-in";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { BiShieldAlt2, BiCheckCircle, BiTargetLock, BiStar, BiBriefcase, BiCog } from "react-icons/bi";

const kernwoorden = [
  {
    icon: BiShieldAlt2,
    title: "Betrouwbaarheid",
    description: "Alleen auto's van topkwaliteit met een eerlijk verhaal"
  },
  {
    icon: BiCheckCircle,
    title: "Transparantie",
    description: "Geen verborgen kosten, altijd duidelijke communicatie"
  },
  {
    icon: BiTargetLock,
    title: "Maatwerk",
    description: "Jouw wensen staan centraal, wij vinden de perfecte match"
  },
  {
    icon: BiStar,
    title: "Kwaliteit",
    description: "Handgeselecteerde premium occasions in topstaat"
  },
  {
    icon: BiBriefcase,
    title: "Service",
    description: "Van oriëntatie tot aflevering, wij regelen alles"
  },
  {
    icon: BiCog,
    title: "Expertise",
    description: "Jarenlange kennis en passie voor exclusieve auto's"
  }
];

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const handleDotClick = (index) => () => {
    if (api) api.scrollTo(index);
  };
  const dotClassName = (index) =>
    clsx("mx-[3px] size-2 rounded-full", {
      "bg-white": current === index + 1,
      "bg-white/20": current !== index + 1,
    });
  return { api, setApi, handleDotClick, dotClassName };
};

export function KernwoordenHome() {
  const carouselState = useCarousel();

  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28" style={{ backgroundColor: '#2B2A28' }}>
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <FadeIn>
            <h2 className="mb-12 text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f5] leading-[1.1] md:mb-16">
              De beloftes van BEEK
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base md:text-lg text-[#eaeaea] leading-relaxed md:leading-8 max-w-[60ch] mx-auto">
              Bij BEEK Automotive zeggen wij niet alleen wat wij doen — wij staan er ook voor. Onze kernwaarden zijn niet bedacht als verkooptekst, maar ontstaan uit hoe wij zelf behandeld willen worden wanneer wij een auto kopen. Daarom zijn deze beloftes de basis van alles wat wij doen. Eerlijk. Persoonlijk. En altijd met zorg voor de klant.
            </p>
          </FadeIn>
        </div>

        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
        >
          <div className="relative pb-24">
            <CarouselContent className="ml-0">
              {kernwoorden.map((item, index) => {
                const Icon = item.icon;
                return (
                  <CarouselItem key={index} className="basis-full pl-0 pr-6 md:basis-1/2 md:pr-8 lg:basis-1/3 lg:pr-12">
                    <FadeIn delay={0.1 * index}>
                      <div className="flex flex-col items-center text-center p-8 h-full">
                        <div className="mb-5 md:mb-6">
                          <Icon className="size-12 text-white" />
                        </div>
                        <h3 className="text-medium mb-3 font-bold md:mb-4 text-white">
                          {item.title}
                        </h3>
                        <p className="text-white/80">
                          {item.description}
                        </p>
                      </div>
                    </FadeIn>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="absolute bottom-0 flex w-full items-end justify-end">
              <div className="flex gap-2 md:gap-4">
                <CarouselPrevious className="static size-12 -translate-y-0 carousel-button-dark" />
                <CarouselNext className="static size-12 -translate-y-0 carousel-button-dark" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
