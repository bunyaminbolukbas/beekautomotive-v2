"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout81() {
  const icon = { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg", alt: "Relume logo" };
  const heading = "Waarom kiezen voor Beek Automotive?";
  const description = "Eigenaar Rutger van Beek en Ilias hebben jarenlange ervaring in de auto industrie. We zijn pas tevreden als jij dat ook bent. Daarom doen we er alles aan om je een zorgeloze en plezierige ervaring te bieden bij het kopen van jouw droomauto. Met onze persoonlijke aanpak, transparantie en expertise zorgen we ervoor dat je met een gerust hart de weg op kunt.";
  const buttons = [
    { title: "Lees meer", variant: "secondary", iconRight: <RxChevronRight /> },
  ];

  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img src={icon.src} className="size-12" alt={icon.alt} />
            </div>
            <h2 className="text-5xl font-bold text-text-alternative md:text-7xl lg:text-8xl">
              {heading}
            </h2>
          </div>
          <div>
            <p className="text-text-alternative md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} variant={button.variant} title={button.title} className="flex items-center gap-2">
                  {button.title}
                  {button.iconRight}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#121212' }} />
    </section>
  );
}
