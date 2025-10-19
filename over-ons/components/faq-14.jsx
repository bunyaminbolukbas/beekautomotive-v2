"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Kernwaarden</h2>
          <p className="text-medium">
            Ontdek de fundamentele principes die Beek Automotive onderscheiden
            in de automotive wereld
          </p>
        </div>
        <div className="container grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 lg:gap-y-16">
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
                className="size-12"
              />
            </div>
            <h3 className="text-medium mb-3 font-bold md:mb-4">
              Passie voor automotive excellence
            </h3>
            <p>
              Wij zien auto's als meer dan machines - ze zijn kunstwerken met
              een ziel.
            </p>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
                className="size-12"
              />
            </div>
            <h3 className="text-medium mb-3 font-bold md:mb-4">
              Persoonlijke service staat centraal
            </h3>
            <p>Elke klant krijgt onze volledige aandacht en expertise.</p>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
                className="size-12"
              />
            </div>
            <h3 className="text-medium mb-3 font-bold md:mb-4">
              Transparantie in elk proces
            </h3>
            <p>Eerlijkheid en openheid zijn onze belangrijkste handelsmerk.</p>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
                className="size-12"
              />
            </div>
            <h3 className="text-medium mb-3 font-bold md:mb-4">
              Duurzame automotive oplossingen
            </h3>
            <p>
              Wij geloven in verantwoorde en toekomstgerichte automotive keuzes.
            </p>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
                className="size-12"
              />
            </div>
            <h3 className="text-medium mb-3 font-bold md:mb-4">
              Vakmanschap zonder compromissen
            </h3>
            <p>Kwaliteit en precisie zijn onze hoogste prioriteit.</p>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
                className="size-12"
              />
            </div>
            <h3 className="text-medium mb-3 font-bold md:mb-4">
              Innovatie en traditie
            </h3>
            <p>
              Wij combineren moderne technologie met klassieke automotive
              expertise.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">Nog vragen?</h4>
          <p className="text-medium">
            Wij staan klaar om al uw automotive vragen te beantwoorden
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
