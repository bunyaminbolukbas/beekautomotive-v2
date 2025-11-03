"use client";

import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import clsx from "clsx";
import { BiSolidStar } from "react-icons/bi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TestimonialWithStory = (props) => {
  const { heading, description, testimonials } = {
    ...TestimonialWithStoryDefaults,
    ...props,
  };

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-x-20">
          {/* Left side - Fixed story */}
          <div className="order-1">
            <FadeIn>
              <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm md:text-base leading-[2]">{description}</p>
            </FadeIn>
          </div>

          {/* Right side - Scrollable reviews */}
          <div className="order-2 pt-24 md:pt-28">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                align: "start",
              }}
              className="overflow-hidden"
            >
              <div className="relative pb-20">
                <CarouselContent className="ml-0">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-0">
                      <TestimonialCard testimonial={testimonial} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute bottom-0 flex w-full items-end justify-end">
                  <div className="flex items-end justify-end gap-2 md:gap-4">
                    <CarouselPrevious className="static size-12 -translate-y-0 carousel-button" />
                    <CarouselNext className="static size-12 -translate-y-0 carousel-button" />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <FadeIn>
      <div className="flex flex-col">
        <div className="mb-4 flex">
          {Array(testimonial.numberOfStars)
            .fill(null)
            .map((_, starIndex) => (
              <BiSolidStar key={starIndex} className="size-5 text-[#C8A85E]" />
            ))}
        </div>
        <blockquote className="mb-6 text-lg font-semibold md:text-xl">
          {testimonial.quote}
        </blockquote>
        <div>
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-scheme-text-subtle">
            {testimonial.position}, {testimonial.companyName}
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

const testimonial = {
  numberOfStars: 5,
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Testimonial image",
  },
  name: "Jan Jansen",
  position: "Klant",
  companyName: "Amsterdam",
};

export const TestimonialWithStoryDefaults = {
  heading: "Wat vinden onze klanten écht?",
  description:
    "Bij BEEK Automotive draait alles om vertrouwen. Wij kunnen zelf vertellen hoe wij werken – maar uiteindelijk zegt het veel meer hoe onze klanten dit ervaren. Daarom laten wij onze klanten spreken.\n\nDe reviews hieronder zijn geschreven door mensen die een auto bij ons gekocht hebben, met ons maatwerk traject gingen of hun auto aan ons hebben verkocht. Echt, eerlijk en ongefilterd.\n\nWij zijn trots op iedere ervaring die hier staat. Want een mooie auto afleveren is één ding… maar een tevreden klant afleveren is waar wij het voor doen.",
  testimonials: [testimonial, testimonial, testimonial, testimonial],
};
