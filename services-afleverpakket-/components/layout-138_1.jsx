"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout138_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Basis</p>
        <h2 className="heading-h2 mb-5 font-bold md:mb-6">
          Premium pakket voor betrouwbare levering
        </h2>
        <p className="text-medium mb-5 md:mb-6">
          Onze standaard dienstverlening biedt een solide en kosteneffectieve
          oplossing voor uw transportbehoeften.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-14"
          />
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="download voorwaarden" variant="secondary">
            download voorwaarden
          </Button>
          <Button
            title="Details"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Details
          </Button>
        </div>
      </div>
    </section>
  );
}
