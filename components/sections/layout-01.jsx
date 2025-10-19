"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { BiSolidStar } from "react-icons/bi";

export function Layout1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-4 flex">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="heading-h6 font-bold mb-5 md:mb-6">
              "Zeer betrouwbaar en servicegericht bedrijf met mooie, snelle auto's. Allemaal nèt even anders. Heel erg blij met mijn fantastische Mini! Dit is mijn 2e van Beek Automotive en een eventueel volgende zal ik ook hier zeker weer halen. Daan is erg vriendelijk, goed bereikbaar en flexibel. Aanrader!"
            </blockquote>
            <div>
              <p className="font-semibold text-lg">Henrike</p>
              <p className="text-sm text-gray-600">Review van Google</p>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
