"use client";

import React from "react";
import { BiLogoWhatsapp, BiEnvelope } from "react-icons/bi";

export function Team12() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">Ons team</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Rutger"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Rutger</h5>
              <h6 className="text-medium">Oprichter</h6>
            </div>
            <p>
              Innovatie en excellentie in automotive sales en service sinds meer dan twee decennia.
            </p>
            <div className="mt-6 flex gap-3.5 justify-center">
              <a href="https://wa.me/31612345678" className="hover:opacity-70 transition-opacity">
                <BiLogoWhatsapp className="size-6" />
              </a>
              <a href="mailto:rutger@beekautomotive.nl" className="hover:opacity-70 transition-opacity">
                <BiEnvelope className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 w-full overflow-hidden md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Ilias"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Ilias</h5>
              <h6 className="text-medium">Sales Director</h6>
            </div>
            <p>
              Specialist in het vinden van de perfecte match tussen klant en voertuig.
            </p>
            <div className="mt-6 flex gap-3.5 justify-center">
              <a href="https://wa.me/31687654321" className="hover:opacity-70 transition-opacity">
                <BiLogoWhatsapp className="size-6" />
              </a>
              <a href="mailto:ilias@beekautomotive.nl" className="hover:opacity-70 transition-opacity">
                <BiEnvelope className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 md:mt-20 lg:mt-24">
          <div className="mx-auto flex max-w-md flex-col items-center" />
        </div>
      </div>
    </section>
  );
}
