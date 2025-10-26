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

const cars = [
  {
    name: "BMW 3 Series",
    specs: "320d · M-Sport · Schuifdak · Leder · 19 inch · NL Auto",
    price: "€45,000",
    pricePerMonth: "€550",
    km: "85.432 km",
    year: "2021",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "MINI Cooper",
    specs: "S · Chili Pack · Panoramadak · Xenon · 17 inch · NL Auto",
    price: "€32,500",
    pricePerMonth: "€398",
    km: "62.120 km",
    year: "2020",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "BMW X5",
    specs: "xDrive40i · M-Sport · Panoramadak · HUD · 21 inch · NL Auto",
    price: "€65,000",
    pricePerMonth: "€795",
    km: "45.678 km",
    year: "2022",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "MINI Countryman",
    specs: "Cooper S · ALL4 · Panoramadak · Leder · 18 inch · NL Auto",
    price: "€38,750",
    pricePerMonth: "€475",
    km: "58.290 km",
    year: "2021",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "BMW 5 Series",
    specs: "530e · M-Sport · Schuifdak · HUD · Leder · 19 inch · NL Auto",
    price: "€55,000",
    pricePerMonth: "€673",
    km: "72.450 km",
    year: "2020",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "MINI Electric",
    specs: "Level 3 · Panoramadak · Navigatie · 17 inch · NL Auto",
    price: "€36,500",
    pricePerMonth: "€447",
    km: "28.934 km",
    year: "2022",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
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

export function Product11() {
  const carouselState = useCarousel();
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <h1 className="heading-h2 mb-3 font-bold md:mb-4">Aanbod</h1>
          </div>
        </div>
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
        >
          <div className="relative pb-24">
            <CarouselContent className="ml-0">
              {cars.map((car, index) => (
                <CarouselItem key={index} className="basis-[95%] pr-6 pl-0 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[33%] lg:pr-12">
                  <a href="/voertuig" className="text-medium group">
                    <div className="relative mb-4 aspect-[5/6] overflow-hidden rounded-lg md:mb-5">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                      <div className="text-sm font-normal text-gray-600">
                        {car.specs}
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-3">
                      <div>
                        <div className="text-xl font-bold">{car.price}</div>
                        <div className="text-sm text-gray-600">of {car.pricePerMonth} p/m</div>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div>{car.km}</div>
                        <div>{car.year}</div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
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
              <div className="flex items-center gap-4">
                <Button variant="secondary" title="Bekijk alles" asChild>
                  <a href="/aanbod">Bekijk alles</a>
                </Button>
                <div className="flex gap-2 md:gap-4">
                  <CarouselPrevious className="static size-12 -translate-y-0" />
                  <CarouselNext className="static size-12 -translate-y-0" />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
