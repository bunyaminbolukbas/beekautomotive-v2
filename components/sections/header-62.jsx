"use client";

import { FadeIn } from "@/components/ui/fade-in";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 min-h-screen snap-start flex items-center justify-center">
      <div className="container max-w-lg text-center">
        <FadeIn>
          <h1 className="heading-h1 mb-5 font-bold md:mb-6">Reviews</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-medium">
            Wat onze vorige klanten gezegd hebben over Beek Automotive.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
