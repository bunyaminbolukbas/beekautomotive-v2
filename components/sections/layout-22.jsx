"use client";

import { FadeIn } from "@/components/ui/fade-in";
import React from "react";

export function Layout22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <FadeIn>
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-20"
                  alt="Relume logo"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">Onze missie</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-medium">
                Beek Automotive werd opgericht door twee gepassioneerde
                autoliefhebbers: Rutger en Ilias. Wat begon als een gedeelde hobby
                en liefde voor exclusieve auto's, groeide uit tot een
                professionele onderneming die zich specialiseert in premium
                voertuigen. Rutger en Ilias leerden elkaar kennen door hun
                gemeenschappelijke passie voor auto's. Weekenden werden
                doorgebracht op autobeurzen, circuits en bij dealers, altijd op
                zoek naar die ene bijzondere auto. Hun kennis en netwerk groeiden,
                en al snel begonnen vrienden en familie hen om advies te vragen
                bij het kopen van hun droomauto. De stap van hobby naar fulltime
                baan was een natuurlijke evolutie. In 2020 besloten ze hun passie
                om te zetten in hun professie en richtten Beek Automotive op. Hun
                missie: autoliefhebbers helpen bij het vinden van die ene speciale
                auto die perfect bij hen past.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="w-full rounded-image object-cover"
                alt="Relume placeholder image"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
