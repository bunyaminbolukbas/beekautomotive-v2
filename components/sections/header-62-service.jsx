"use client";

import { FadeIn } from "@/components/ui/fade-in";
import React from "react";

export function Header62Service() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <FadeIn>
          <h1 className="heading-h1 mb-5 font-bold md:mb-6">Service</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-medium">
            Ontdek onze uitgebreide service en afleverpakketten voor jouw voertuig.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
