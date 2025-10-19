"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Product9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="heading-h2 mt-3 font-bold md:mt-4">
              Ons huidige aanbod
            </h1>
            <p className="text-medium mt-5 md:mt-6">
              Staat jouw droomauto niet op voorraad? Neem dan contact op zodat
              wij 'm voor je gaan vinden.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          <a href="#" className="text-medium text-center font-semibold">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>BMW 3 Series</h3>
              <div className="text-small font-normal">Sedan</div>
            </div>
            <div className="text-large">€45,000</div>
          </a>
          <a href="#" className="text-medium text-center font-semibold">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>MINI Cooper</h3>
              <div className="text-small font-normal">Hatchback</div>
            </div>
            <div className="text-large">€32,500</div>
          </a>
          <a href="#" className="text-medium text-center font-semibold">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>BMW X5</h3>
              <div className="text-small font-normal">SUV</div>
            </div>
            <div className="text-large">€65,000</div>
          </a>
          <a href="#" className="text-medium text-center font-semibold">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>MINI Countryman</h3>
              <div className="text-small font-normal">Crossover</div>
            </div>
            <div className="text-large">€38,750</div>
          </a>
          <a href="#" className="text-medium text-center font-semibold">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>BMW 5 Series</h3>
              <div className="text-small font-normal">Executive</div>
            </div>
            <div className="text-large">€55,000</div>
          </a>
          <a href="#" className="text-medium text-center font-semibold">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>MINI Electric</h3>
              <div className="text-small font-normal">Electric</div>
            </div>
            <div className="text-large">€36,500</div>
          </a>
        </div>
        <div className="mt-14 flex justify-center md:mt-20 lg:mt-24">
          <Button variant="secondary" title="View all">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
