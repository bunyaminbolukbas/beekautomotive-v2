"use client";

import { FadeIn } from "@/components/ui/fade-in";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial13_3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <FadeIn delay={0.2} className="order-last md:order-first">
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial image 1"
                className="aspect-square w-full rounded-image object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col items-start">
              <div className="mb-4 flex">
                <BiSolidStar className="size-6" />
                <BiSolidStar className="size-6" />
                <BiSolidStar className="size-6" />
                <BiSolidStar className="size-6" />
                <BiSolidStar className="size-6" />
              </div>
              <blockquote className="heading-h6 font-bold mb-5 md:mb-6">
                "Geweldige service! Ze hebben me perfect geholpen bij het vinden van mijn ideale auto. Aanrader voor iedereen die kwaliteit zoekt."
              </blockquote>
              <div>
                <p className="font-semibold text-lg">Tim Bakker</p>
                <p className="text-sm text-gray-600">Review van Google</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
