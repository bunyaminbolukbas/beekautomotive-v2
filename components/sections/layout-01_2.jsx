"use client";

import { FadeIn } from "@/components/ui/fade-in";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Layout1_2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 min-h-screen snap-start flex items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <FadeIn>
            <div>
              <div className="mb-4 flex">
                <BiSolidStar className="size-6" />
                <BiSolidStar className="size-6" />
                <BiSolidStar className="size-6" />
                <BiSolidStar className="size-6" />
                <BiSolidStar className="size-6" />
              </div>
              <blockquote className="heading-h6 font-bold mb-5 md:mb-6">
                "Uitstekende ervaring van begin tot eind. Snelle levering en de auto was precies zoals beschreven. Ga hier zeker weer een auto kopen!"
              </blockquote>
              <div>
                <p className="font-semibold text-lg">Emma Vermeer</p>
                <p className="text-sm text-gray-600">Review van Google</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
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
