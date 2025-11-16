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

export const TestimonialWithStoryDefaults = {
  heading: "Wat vinden onze klanten écht?",
  description:
    "Bij BEEK Automotive draait alles om vertrouwen. Wij kunnen zelf vertellen hoe wij werken – maar uiteindelijk zegt het veel meer hoe onze klanten dit ervaren. Daarom laten wij onze klanten spreken.\n\nDe reviews hieronder zijn geschreven door mensen die een auto bij ons gekocht hebben, met ons maatwerk traject gingen of hun auto aan ons hebben verkocht. Echt, eerlijk en ongefilterd.\n\nWij zijn trots op iedere ervaring die hier staat. Want een mooie auto afleveren is één ding… maar een tevreden klant afleveren is waar wij het voor doen.",
  testimonials: [
    {
      numberOfStars: 5,
      quote:
        "Zorgeloos mijn Peugeot 208 uit Frankrijk geïmporteerd via Car Relief Automotive een echte aanrader! Het importproces duurde ongeveer één maand, wat ik heel netjes vind gezien alles wat erbij komt kijken. De auto werd uiteindelijk in perfecte staat geleverd.",
      name: "Kelly Dalmeijer",
      position: "Import klant",
      companyName: "Peugeot 208",
    },
    {
      numberOfStars: 5,
      quote:
        "Halverwege juni kocht ik een occasion bij Car-Relief in Wekerom. Ik ben erg te spreken over de service en na 1.5 maand ook nog erg blij met mijn nieuwe auto. Zelfs een vertraagde betaling, door een foutje van mijn kant, was geen probleem.",
      name: "Dennis",
      position: "Klant",
      companyName: "Ford Focus",
    },
    {
      numberOfStars: 5,
      quote:
        "Ik zou Car Relief Automotive zeker aanraden! Vriendelijk geholpen tijdens het eerste bezoek. Eerlijke en duidelijke communicatie. Na enkele dagen bleek er een klein probleem met de auto. Dit is snel en kosteloos opgelost. Nog steeds blij met de keuze.",
      name: "Stefanie Scheffers",
      position: "Klant",
      companyName: "Auto koop",
    },
    {
      numberOfStars: 5,
      quote:
        "Gisteren mijn nieuw aangekochte Ford focus opgehaald en is keurig afgeleverd. Was beschadiging op bumper en heeft hij heel mooi laten herstellen. Erg blij mee en rijd heerlijk. In love with this Ford!",
      name: "Bianca Vlaanderen",
      position: "Klant",
      companyName: "Ford Focus",
    },
    {
      numberOfStars: 5,
      quote:
        "Zeer tevreden over de service en communicatie van Car Relief. Wij wonen in het noorden van Nederland en de auto werd thuis afgeleverd. Na gebruik bleek er een probleem met de airco. Deze werd snel gerepareerd op kosten van Car Relief. Top geregeld.",
      name: "Frans Warntjes",
      position: "Klant",
      companyName: "Thuisbezorging",
    },
    {
      numberOfStars: 5,
      quote:
        "Ontzettend fijne garage en een zeer prettige ervaring. Vanaf het eerste bericht ben ik snel, professioneel en heel vriendelijk geholpen. Contact in het koopproces verliep heel soepel en elke vraag werd met zorg beantwoord.",
      name: "Silva Hoenen",
      position: "Klant",
      companyName: "Auto koop",
    },
    {
      numberOfStars: 5,
      quote:
        "Mooie audi a3 gekocht bij Car Relief 1 jaar geleden nog steeds heel tevreden. Na 7 maanden klein probleempje met de auto had, dit heeft Car Relief netjes voor ons opgelost omdat het nog in de garantie zat. Top autogarage zeker een aanrader.",
      name: "Mo C",
      position: "Klant",
      companyName: "Audi A3",
    },
    {
      numberOfStars: 5,
      quote:
        "Ik ben ontzettend tevreden met mijn ervaring bij Car Relief. Vanaf eerste contact werd ik vriendelijk en professioneel geholpen. Hij nam de tijd om mijn wensen te begrijpen en gaf eerlijk advies over welke SUV het beste bij mij paste.",
      name: "Carlos Brazao",
      position: "Klant",
      companyName: "SUV koop",
    },
  ],
};
