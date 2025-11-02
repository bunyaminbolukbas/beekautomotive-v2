"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
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
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <FadeIn>
              <div className="rb-5 mb-5 md:mb-6">
                <img src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg" className="size-12" alt="Relume logo" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-5xl font-bold text-scheme-text md:text-7xl lg:text-8xl">
                {heading}
              </h2>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={0.2}>
              <p className="text-scheme-text md:text-md">{description}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} variant={button.variant} title={button.title} className="flex items-center gap-2 carousel-button" asChild>
                    <a href="/over-ons">
                      {button.title}
                      {button.iconRight}
                    </a>
                  </Button>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
