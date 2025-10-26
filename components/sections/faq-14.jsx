"use client";

import { Button } from "@/components/ui/button";
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
      "bg-scheme-text": current === index + 1,
      "bg-scheme-text/20": current !== index + 1,
    });
  return { api, setApi, handleDotClick, dotClassName };
};

export function Faq14() {
  const carouselState = useCarousel();

  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Onze kernwoorden</h2>
          <p className="text-medium">
            Ontdek de fundamentele principes die Beek Automotive onderscheiden
            in de automotive wereld
          </p>
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
                    <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg p-8 h-full">
                      <div className="mb-5 md:mb-6">
                        <Icon className="size-12" />
                      </div>
                      <h3 className="text-medium mb-3 font-bold md:mb-4">
                        {item.title}
                      </h3>
                      <p>
                        {item.description}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="absolute bottom-0 flex w-full items-end justify-between">
              <div className="flex h-7 pt-[10px]">
                <button
                  onClick={carouselState.handleDotClick(0)}
                  className={carouselState.dotClassName(0)}
                />
                <button
                  onClick={carouselState.handleDotClick(1)}
                  className={carouselState.dotClassName(1)}
                />
                <button
                  onClick={carouselState.handleDotClick(2)}
                  className={carouselState.dotClassName(2)}
                />
                <button
                  onClick={carouselState.handleDotClick(3)}
                  className={carouselState.dotClassName(3)}
                />
                <button
                  onClick={carouselState.handleDotClick(4)}
                  className={carouselState.dotClassName(4)}
                />
                <button
                  onClick={carouselState.handleDotClick(5)}
                  className={carouselState.dotClassName(5)}
                />
              </div>
              <div className="flex gap-2 md:gap-4">
                <CarouselPrevious className="static size-12 -translate-y-0" />
                <CarouselNext className="static size-12 -translate-y-0" />
              </div>
            </div>
          </div>
        </Carousel>

        <div className="mt-12 text-center md:mt-18 lg:mt-20 rounded-lg p-8 md:p-12 lg:p-16" style={{ backgroundColor: '#1a1a1a' }}>
          <h4 className="heading-h4 mb-3 font-bold md:mb-4 text-white">Nog vragen?</h4>
          <p className="text-medium text-white">
            Wij staan klaar om al uw automotive vragen te beantwoorden
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
