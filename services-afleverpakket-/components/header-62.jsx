"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h1 className="heading-h1 mb-5 font-bold md:mb-6">Service</h1>
        <p className="text-medium">
          Ontdek onze flexibele leveringsoplossingen die zijn ontworpen om aan
          uw specifieke transportbehoeften te voldoen.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Bekijk">Bekijk</Button>
          <Button title="Contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
