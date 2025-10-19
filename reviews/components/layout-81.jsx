"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout81() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                className="size-12"
                alt="Relume logo"
              />
            </div>
            <h2 className="heading-h2 font-bold text-white">
              Waar automotive passie en precisie samenkomen
            </h2>
          </div>
          <div>
            <p className="text-medium text-white">
              Eigenaar Rutger van Beek en Ilias hebben jarenlange ervaring in de
              auto industrie. We zijn pas tevreden als jij dat ook bent. Daarom
              doen we er alles aan om je een zorgeloze en plezierige ervaring te
              bieden bij het kopen van jouw droomauto. Met onze persoonlijke
              aanpak, transparantie en expertise zorgen we ervoor dat je met een
              gerust hart de weg op kunt.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Ontdek" variant="secondary-alt">
                Ontdek
              </Button>
              <Button
                title="Contact"
                variant="link-alt"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 aspect-video size-full object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
