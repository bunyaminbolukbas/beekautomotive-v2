"use client";

import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { RxChevronRight } from "react-icons/rx";
import { FaCirclePlay } from "react-icons/fa6";

const TabContent = ({ tab, isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="relative bottom-0 left-auto right-0 top-0 flex size-full items-center justify-center md:absolute md:w-1/2 md:pl-6 lg:pl-10"
    >
      {tab.image && (
        <img src={tab.image.src} alt={tab.image.alt} className="size-full object-cover" />
      )}
      {tab.video && (
        <div className="relative flex w-full items-center justify-center cursor-pointer">
          <img
            src={tab.video.image.src}
            alt={tab.video.image.alt}
            className="size-full object-cover"
          />
          <FaCirclePlay className="absolute z-20 size-16 text-white" />
          <span className="absolute inset-0 z-10 bg-black/50" />
        </div>
      )}
    </motion.div>
  );
};

export const Layout493 = (props) => {
  const { tagline, heading, description, tabs, buttons } = {
    ...Layout493Defaults,
    ...props,
  };
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative">
          <div className="w-full pr-0 md:w-1/2 md:pr-6 lg:pr-10">
            <div className="mb-8 w-full md:w-auto">
              <FadeIn>
                <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="md:text-md">{description}</p>
              </FadeIn>
            </div>
            <div className="static flex flex-col flex-wrap justify-stretch md:block">
              <FadeIn delay={0.3}>
                <div className="relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
                  {tabs.map((tab, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={clsx("cursor-pointer border-b border-border-primary py-4", {
                        "opacity-100": activeTab === index,
                        "opacity-25": activeTab !== index,
                      })}
                    >
                      <h2 className="text-xl font-bold md:text-2xl">{tab.heading}</h2>
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeTab === index ? "auto" : 0,
                          opacity: activeTab === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2">{tab.description}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <AnimatePresence mode="wait" initial={false}>
                {tabs.map((tab, index) => (
                  <TabContent key={index} tab={tab} isActive={activeTab === index} />
                ))}
              </AnimatePresence>
            </div>
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
        </div>
      </div>
    </section>
  );
};

export const Layout493Defaults = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  tabs: [
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      video: {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
          alt: "Relume placeholder image 2",
        },
        url: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
      },
    },
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 3",
      },
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
};
