"use client";

import { Card } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <FadeIn>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Verhalen van vertrouwen
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-medium">
              Onze klanten vertellen over hun ervaringen met Beek Automotive
            </p>
          </FadeIn>
        </div>
        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <StaggerItem>
            <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 h-full">
            <div className="mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="text-medium">
                "Beek Automotive heeft mijn BMW getransformeerd tot een perfect
                afgestelde machine."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
              />
              <div>
                <p className="font-semibold">Jan Bakker</p>
                <p>Automotive liefhebber</p>
              </div>
            </div>
          </Card>
          </StaggerItem>
          <StaggerItem>
            <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 h-full">
            <div className="mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="text-medium">
                "Precisie en passie in elke aanraking met mijn MINI."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
              />
              <div>
                <p className="font-semibold">Emma de Vries</p>
                <p>Performance rijder</p>
              </div>
            </div>
          </Card>
          </StaggerItem>
          <StaggerItem>
            <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 h-full">
            <div className="mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="text-medium">
                "Geen enkele andere garage begrijpt mijn auto zoals Beek Automotive."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
              />
              <div>
                <p className="font-semibold">Michael Schmidt</p>
                <p>BMW enthusiast</p>
              </div>
            </div>
          </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
