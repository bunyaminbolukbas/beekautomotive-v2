"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FadeIn } from "@/components/ui/fade-in";
import React, { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    // Autoplay functionaliteit
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 5000); // Scroll elke 5 seconden

    return () => clearInterval(autoplay);
  }, [api]);

  const testimonials = [
    {
      quote: "Beek Automotive heeft mijn BMW getransformeerd tot een perfect afgestelde machine.",
      name: "Jan Bakker",
      role: "Automotive liefhebber",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    },
    {
      quote: "Precisie en passie in elke aanraking met mijn MINI.",
      name: "Emma de Vries",
      role: "Performance rijder",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    },
    {
      quote: "Geen enkele andere garage begrijpt mijn auto zoals Beek Automotive.",
      name: "Michael Schmidt",
      role: "BMW enthusiast",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    },
    {
      quote: "Uitstekende service en transparante communicatie. Ik kom hier zeker terug!",
      name: "Sophie Janssen",
      role: "MINI eigenaar",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    },
    {
      quote: "Van begin tot eind perfect geregeld. Mijn droomauto gevonden en probleemloos afgeleverd.",
      name: "Mark van Dijk",
      role: "Auto liefhebber",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    },
    {
      quote: "Persoonlijke aandacht en vakmanschap. Beek Automotive is de beste keuze voor premium occasions.",
      name: "Linda Peters",
      role: "BMW rijder",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    }
  ];

  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <FadeIn>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Verhalen van vertrouwen
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-medium">
              Onze klanten vertellen over hun ervaringen met Beek Automotive
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="overflow-hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="flex w-full flex-col items-start justify-between p-5 md:p-6 lg:p-8 h-full">
                    <div className="mb-4 md:mb-5 lg:mb-6">
                      <div className="mb-4 flex md:mb-5 lg:mb-6">
                        <BiSolidStar className="mr-1 size-5 md:size-6" />
                        <BiSolidStar className="mr-1 size-5 md:size-6" />
                        <BiSolidStar className="mr-1 size-5 md:size-6" />
                        <BiSolidStar className="mr-1 size-5 md:size-6" />
                        <BiSolidStar className="mr-1 size-5 md:size-6" />
                      </div>
                      <blockquote className="text-sm md:text-base">
                        {testimonial.quote}
                      </blockquote>
                    </div>
                    <div className="mt-4 flex w-full flex-col items-start md:mt-5 lg:mt-6 md:w-fit md:flex-row md:items-center">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} avatar`}
                        className="mb-3 size-10 min-h-10 min-w-10 md:size-12 md:min-h-12 md:min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                      />
                      <div>
                        <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                        <p className="text-xs md:text-sm text-scheme-text-subtle">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
