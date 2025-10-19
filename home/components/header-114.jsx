"use client";

import React from "react";

export function Header114() {
  return (
    <section className="relative px-[5%]">
      <div className="container flex max-h-[60rem] min-h-svh">
        <div className="py-16 md:py-24 lg:py-28">
          <div className="relative z-10 grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div className="flex flex-col justify-start md:justify-center">
              <h1 className="heading-h1 font-bold text-white">
                BEEK AUTOMOTIVE
              </h1>
            </div>
            <div className="mx-[7.5%] flex flex-col justify-end">
              <p className="text-medium text-white">
                Wij ademen automotive uitmuntendheid. Onze toewijding aan MINI
                en BMW is meer dan alleen zakelijk - het is een oproep.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
