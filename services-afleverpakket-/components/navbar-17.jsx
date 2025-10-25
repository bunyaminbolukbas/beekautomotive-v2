"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import React, { useState, useEffect } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const animateMenu = isMenuOpen
    ? { menu: "open", menu2: "openSecond" }
    : { menu: "close", menu2: "closeSecond" };
  return {
    toggleMenu,
    animateMenu,
    isMenuOpen,
    isScrolled,
  };
};

export function Navbar17() {
  const useActive = useRelume();
  return (
    <section
      className={`fixed top-0 left-0 right-0 z-[999] flex w-full items-center border-b border-b-scheme-border bg-scheme-background px-[5%] transition-all duration-300 ease-in-out ${
        useActive.isScrolled
          ? 'min-h-14 py-2 md:min-h-16 shadow-md'
          : 'min-h-20 py-4 md:min-h-24'
      }`}
    >
      <div className="mx-auto flex size-full items-center justify-between">
        <a href="#">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Relume placeholder logo"
            className={`transition-all duration-300 ease-in-out ${
              useActive.isScrolled
                ? 'h-8 md:h-10'
                : 'h-12 md:h-14'
            }`}
          />
        </a>
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <Button title="Menu" size="sm" className="px-4 py-1 md:px-6 md:py-2">
            Menu
          </Button>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:mr-0"
            onClick={useActive.toggleMenu}
          >
            <span className="relative flex size-6 flex-col items-center justify-center">
              <motion.span
                className="absolute top-[3px] h-0.5 w-full bg-neutral-darkest"
                animate={useActive.animateMenu.menu}
                variants={{
                  open: {
                    width: 0,
                    transition: { duration: 0.1, ease: "easeIn" },
                  },
                  close: {
                    width: "100%",
                    transition: { duration: 0.1, delay: 0.3, ease: "linear" },
                  },
                }}
              />
              <motion.span
                className="absolute h-0.5 w-full bg-neutral-darkest"
                animate={useActive.animateMenu.menu}
                variants={{
                  open: {
                    rotate: 135,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  close: {
                    rotate: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                  openSecond: {
                    rotate: 45,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  closeSecond: {
                    rotate: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
              />
              <motion.span
                className="absolute h-0.5 w-full bg-neutral-darkest"
                animate={useActive.animateMenu.menu2}
                variants={{
                  open: {
                    rotate: 135,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  close: {
                    rotate: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                  openSecond: {
                    rotate: 45,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  closeSecond: {
                    rotate: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
              />
              <motion.span
                className="absolute bottom-[3px] h-0.5 w-full bg-neutral-darkest"
                animate={useActive.animateMenu.menu}
                variants={{
                  open: {
                    width: 0,
                    transition: { duration: 0.1, ease: "easeIn" },
                  },
                  close: {
                    width: "100%",
                    transition: { duration: 0.1, delay: 0.3, ease: "linear" },
                  },
                }}
              />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        <ConditionalRender condition={useActive.isMenuOpen}>
          <div className="absolute inset-x-0 top-full h-[calc(100vh-4rem)] w-full overflow-hidden md:h-[calc(100vh-4.5rem)]">
            <motion.div
              variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}
              animate={useActive.animateMenu.menu}
              initial="close"
              exit="close"
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col overflow-auto bg-scheme-background"
            >
              <div className="mt-px flex grow flex-col">
                <a
                  href="#"
                  className="heading-h3 flex grow items-center justify-end border-t border-scheme-border px-[5%] py-4 font-bold last:border-b last:border-b-scheme-border md:py-2"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="heading-h3 flex grow items-center justify-end border-t border-scheme-border px-[5%] py-4 font-bold last:border-b last:border-b-scheme-border md:py-2"
                >
                  Over ons
                </a>
                <a
                  href="#"
                  className="heading-h3 flex grow items-center justify-end border-t border-scheme-border px-[5%] py-4 font-bold last:border-b last:border-b-scheme-border md:py-2"
                >
                  Diensten
                </a>
                <a
                  href="#"
                  className="heading-h3 flex grow items-center justify-end border-t border-scheme-border px-[5%] py-4 font-bold last:border-b last:border-b-scheme-border md:py-2"
                >
                  Producten
                </a>
                <a
                  href="#"
                  className="heading-h3 flex grow items-center justify-end border-t border-scheme-border px-[5%] py-4 font-bold last:border-b last:border-b-scheme-border md:py-2"
                >
                  Ervaringen
                </a>
                <a
                  href="#"
                  className="heading-h3 flex grow items-center justify-end border-t border-scheme-border px-[5%] py-4 font-bold last:border-b last:border-b-scheme-border md:py-2"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="heading-h3 flex grow items-center justify-end border-t border-scheme-border px-[5%] py-4 font-bold last:border-b last:border-b-scheme-border md:py-2"
                >
                  Nieuws
                </a>
                <a
                  href="#"
                  className="heading-h3 flex grow items-center justify-end border-t border-scheme-border px-[5%] py-4 font-bold last:border-b last:border-b-scheme-border md:py-2"
                >
                  Locaties
                </a>
              </div>
              <div className="flex min-h-18 items-center justify-between gap-x-4 px-[5%]">
                <Button
                  title="Contact"
                  variant="link"
                  size="link"
                  url="#"
                  className="heading-h6 underline"
                  asChild={true}
                >
                  <a href="#">Contact</a>
                </Button>
                <div className="flex items-center gap-3">
                  <a href="#">
                    <BiLogoFacebookCircle className="size-6" />
                  </a>
                  <a href="#">
                    <BiLogoInstagram className="size-6" />
                  </a>
                  <a href="#">
                    <FaXTwitter className="size-6" />
                  </a>
                  <a href="#">
                    <BiLogoLinkedinSquare className="size-6" />
                  </a>
                  <a href="#">
                    <BiLogoYoutube className="size-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </ConditionalRender>
      </AnimatePresence>
    </section>
  );
}
