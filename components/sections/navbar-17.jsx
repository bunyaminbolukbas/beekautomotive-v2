"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
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

  // Scroll detection
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
  const closeMenu = () => setIsMenuOpen(false);
  const animateMenu = isMenuOpen
    ? { menu: "open", menu2: "openSecond" }
    : { menu: "close", menu2: "closeSecond" };
  return {
    toggleMenu,
    closeMenu,
    animateMenu,
    isMenuOpen,
    isScrolled,
  };
};

export function Navbar17() {
  const useActive = useRelume();

  // Blokkeer body scroll wanneer menu open is (alleen op mobiel)
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // md breakpoint

    if (useActive.isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup functie
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [useActive.isMenuOpen]);

  return (
    <section
      className={`fixed top-0 left-0 right-0 z-[999] flex w-full items-center px-[5%] transition-all duration-300 ease-in-out ${
        useActive.isScrolled
          ? 'min-h-14 py-2 md:min-h-16 shadow-md bg-neutral-darkest/95 backdrop-blur-md border-b border-b-white/10'
          : 'min-h-20 py-4 md:min-h-24 bg-transparent border-b border-b-transparent'
      }`}
    >
      <div className="mx-auto flex size-full items-center justify-between">
        <Link href="/">
          <img
            src="/images/beek-automotive-logo-white-transparent.png"
            alt="Beek Automotive Logo"
            className={`transition-all duration-300 ease-in-out ${
              useActive.isScrolled
                ? 'h-8 md:h-10'
                : 'h-12 md:h-14'
            }`}
          />
        </Link>
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <span className="text-sm font-medium text-white md:text-base">
            MENU
          </span>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:mr-0"
            onClick={useActive.toggleMenu}
          >
            <span className="relative flex size-6 flex-col items-center justify-center">
              <motion.span
                className="absolute top-[3px] h-0.5 w-full bg-white"
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
                className="absolute h-0.5 w-full bg-white"
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
                className="absolute h-0.5 w-full bg-white"
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
                className="absolute bottom-[3px] h-0.5 w-full bg-white"
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
          <div className="fixed top-0 right-0 w-full md:w-1/2 h-screen overflow-hidden z-[1000]">
            <motion.div
              variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}
              animate={useActive.animateMenu.menu}
              initial="close"
              exit="close"
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col overflow-auto text-white bg-neutral-darkest/95 backdrop-blur-md"
            >
              <div className={`flex justify-end items-center pr-[5%] transition-all duration-300 ease-in-out ${
                useActive.isScrolled
                  ? 'min-h-14 md:min-h-16'
                  : 'min-h-20 md:min-h-24'
              }`}>
                <button
                  onClick={useActive.closeMenu}
                  className="flex size-12 items-center justify-center text-white text-4xl hover:opacity-70 transition-opacity leading-none"
                  aria-label="Sluit menu"
                >
                  ×
                </button>
              </div>
              <div className="mt-px flex grow flex-col">
                <Link
                  href="/"
                  onClick={useActive.closeMenu}
                  className="heading-h3 flex grow items-center justify-end border-t border-white/10 px-[5%] py-4 font-bold last:border-b last:border-b-white/10 md:py-2 hover:bg-white/5 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/aanbod"
                  onClick={useActive.closeMenu}
                  className="heading-h3 flex grow items-center justify-end border-t border-white/10 px-[5%] py-4 font-bold last:border-b last:border-b-white/10 md:py-2 hover:bg-white/5 transition-colors"
                >
                  Aanbod
                </Link>
                <Link
                  href="/services-afleverpakket"
                  onClick={useActive.closeMenu}
                  className="heading-h3 flex grow items-center justify-end border-t border-white/10 px-[5%] py-4 font-bold last:border-b last:border-b-white/10 md:py-2 hover:bg-white/5 transition-colors"
                >
                  Service
                </Link>
                <Link
                  href="/over-ons"
                  onClick={useActive.closeMenu}
                  className="heading-h3 flex grow items-center justify-end border-t border-white/10 px-[5%] py-4 font-bold last:border-b last:border-b-white/10 md:py-2 hover:bg-white/5 transition-colors"
                >
                  Over ons
                </Link>
                <Link
                  href="/reviews"
                  onClick={useActive.closeMenu}
                  className="heading-h3 flex grow items-center justify-end border-t border-white/10 px-[5%] py-4 font-bold last:border-b last:border-b-white/10 md:py-2 hover:bg-white/5 transition-colors"
                >
                  Reviews
                </Link>
                <Link
                  href="/contact"
                  onClick={useActive.closeMenu}
                  className="heading-h3 flex grow items-center justify-end border-t border-white/10 px-[5%] py-4 font-bold last:border-b last:border-b-white/10 md:py-2 hover:bg-white/5 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </div>
        </ConditionalRender>
      </AnimatePresence>
    </section>
  );
}
