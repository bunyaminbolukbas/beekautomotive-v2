"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const Feature = ({ icon, paragraph }) => (
  <div className="flex self-start">
    <div className="mr-4 flex-none self-start">
      <img src={icon.src} alt={icon.alt} className="size-6" />
    </div>
    <p>{paragraph}</p>
  </div>
);

export const Layout207 = (props) => {
  const { tagline, heading, description, buttons, image, features } = {
    ...Layout207Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <FadeIn delay={0.2} className="order-2 md:order-1">
            <div>
              <img src={image.src} className="w-full object-cover" alt={image.alt} />
            </div>
          </FadeIn>
          <div className="order-1 md:order-2">
            <FadeIn>
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mb-5 md:mb-6 md:text-md">{description}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-1 gap-4 py-2">
                {features.map((feature, index) => (
                  <Feature key={index} {...feature} />
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout207Defaults = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  features: [
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 1" },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 2" },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};
