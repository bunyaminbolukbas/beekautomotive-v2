"use client";

import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const Card = ({ image, logo, heading, description, buttons }) => (
  <div className="relative p-6 md:p-8 lg:p-12">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/50" />
      <img src={image.src} className="size-full object-cover" alt={image.alt} />
    </div>
    <div className="relative z-10">
      <div className="mb-5 md:mb-6">
        <img src={logo.src} className="size-12" alt={logo.alt} />
      </div>
      <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
        {heading}
      </h3>
      <p className="text-text-alternative">{description}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
        {buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div>
    </div>
  </div>
);

export const Layout519 = (props) => {
  const { tagline, heading, description, cards } = {
    ...Layout519Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <FadeIn>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="md:text-md">{description}</p>
            </FadeIn>
          </div>
        </div>
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((card, index) => (
            <StaggerItem key={index}>
              <Card {...card} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

const basisPakket = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Basis afleverpakket",
  },
  logo: {
    src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg",
    alt: "Beek Automotive logo",
  },
  heading: "Basis Afleverpakket",
  description:
    "Onze standaard dienstverlening biedt een solide en kosteneffectieve oplossing voor uw transportbehoeften. Inclusief inspectie en basisreiniging.",
  buttons: [
    { title: "Download voorwaarden", variant: "secondary-alt" },
    { title: "Details", variant: "link-alt", size: "link", iconRight: <RxChevronRight /> },
  ],
};

const premiumPakket = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Premium afleverpakket",
  },
  logo: {
    src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg",
    alt: "Beek Automotive logo",
  },
  heading: "Premium Afleverpakket",
  description:
    "Onze premium service met uitgebreide voorbereiding, complete detailing en verlengde garantie. Voor de ultieme rijervaring vanaf dag één.",
  buttons: [
    { title: "Download voorwaarden", variant: "secondary-alt" },
    { title: "Details", variant: "link-alt", size: "link", iconRight: <RxChevronRight /> },
  ],
};

export const Layout519Defaults = {
  tagline: "Afleverpakketten",
  heading: "",
  description: "Ontdek onze flexibele leveringsoplossingen die zijn ontworpen om aan uw specifieke behoeften te voldoen.",
  cards: [basisPakket, premiumPakket],
};
