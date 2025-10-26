"use client";

import { FadeIn } from "@/components/ui/fade-in";
import React from "react";

export function Header64() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <FadeIn>
          <h1 className="heading-h1 mb-5 font-bold md:mb-6">Over ons</h1>
        </FadeIn>
      </div>
    </section>
  );
}
