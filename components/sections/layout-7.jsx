"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const SubHeading = ({ icon, title, description }) => (
  <div className="flex">
    <div className="mr-4 flex-none self-start">
      <img src={icon.src} alt={icon.alt} className="size-8" />
    </div>
    <div>
      <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
        {title}
      </h6>
      <p>{description}</p>
    </div>
  </div>
);

export const Layout7 = (props) => {
  const { tagline, heading, description, buttons, image, subHeadings } = {
    ...Layout7Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <FadeIn>
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mb-6 md:mb-8 md:text-md">{description}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-1 gap-6 py-2 md:grid-cols-2">
                {subHeadings.map((subHeading, index) => (
                  <SubHeading key={index} {...subHeading} />
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <div>
              <img src={image.src} className="w-full object-cover" alt={image.alt} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const Layout7Defaults = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  subHeadings: [
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 1" },
      title: "Subheading one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 2" },
      title: "Subheading two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ],
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
};
