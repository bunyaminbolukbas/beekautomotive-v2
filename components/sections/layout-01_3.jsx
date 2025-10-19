"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Layout1_3() {
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
              "Persoonlijke aandacht en een breed assortiment aan kwaliteitsauto's. De deal werd snel en professioneel afgerond. Zeer aan te bevelen!"
            </blockquote>
            <div>
              <p className="font-semibold text-lg">Lucas Hendriks</p>
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
