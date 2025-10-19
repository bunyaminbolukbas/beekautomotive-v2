"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Klaar voor je droomauto?
            </h2>
            <p className="text-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="maak afspraak">maak afspraak</Button>
              <Button title="bel ons" variant="secondary">
                bel ons
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
