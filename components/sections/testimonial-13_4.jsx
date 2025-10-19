"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial13_4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div className="order-last md:order-first">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Testimonial image 1"
              className="aspect-square w-full rounded-image object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-4 flex">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="heading-h6 font-bold mb-5 md:mb-6">
              "Zeer klantvriendelijk en deskundig. Ze namen de tijd om alles uit te leggen en te regelen. Absoluut tevreden met mijn nieuwe Audi!"
            </blockquote>
            <div>
              <p className="font-semibold text-lg">Sophie Meijer</p>
              <p className="text-sm text-gray-600">Review van Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
