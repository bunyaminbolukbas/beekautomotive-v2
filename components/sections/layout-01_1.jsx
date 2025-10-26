"use client";

import { FadeIn } from "@/components/ui/fade-in";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Layout1_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
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
                "Top service en fantastische auto's. Het team denkt echt met je mee en zorgt dat alles tot in de puntjes geregeld is. Heel tevreden met mijn aankoop!"
              </blockquote>
              <div>
                <p className="font-semibold text-lg">Sarah de Vries</p>
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
