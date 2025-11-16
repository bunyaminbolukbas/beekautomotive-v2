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

  // Blokkeer body scroll wanneer menu open is
  useEffect(() => {
    if (useActive.isMenuOpen) {
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
    <section className="fixed top-0 left-0 right-0 z-[999]">
      {/* Gradient schaduw die van boven (donker) naar beneden (transparant) loopt */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: useActive.isScrolled ? '4rem' : '6rem',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
          transition: 'height 0.3s ease-in-out'
        }}
      />

      <div
        className={`flex w-full items-center px-[5%] transition-all duration-300 ease-in-out relative z-20 ${
          useActive.isScrolled
            ? 'min-h-14 py-2 md:min-h-16'
            : 'min-h-20 py-4 md:min-h-24'
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
          <button
            className="navbar-toggle -mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:mr-0"
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
      </div>

      <AnimatePresence>
        <ConditionalRender condition={useActive.isMenuOpen}>
          <div className="fixed inset-0 w-full h-screen overflow-hidden z-[1000]">
            <motion.div
              variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}
              animate={useActive.animateMenu.menu}
              initial="close"
              exit="close"
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col overflow-auto text-white bg-gray-500/80 backdrop-blur-md"
            >
              {/* Top bar with close button - matches navbar layout */}
              <div className={`flex items-center justify-between px-[5%] transition-all duration-300 ease-in-out ${
                useActive.isScrolled
                  ? 'min-h-14 md:min-h-16'
                  : 'min-h-20 md:min-h-24'
              }`}>
                {/* Spacer */}
                <div></div>

                {/* close button */}
                <div className="flex items-center justify-center gap-2 lg:gap-4">
                  <button
                    onClick={useActive.closeMenu}
                    className="navbar-toggle -mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:mr-0"
                    aria-label="Sluit menu"
                  >
                    <span className="relative flex size-6 items-center justify-center text-white text-4xl hover:opacity-70 transition-opacity leading-none md:text-black">
                      ×
                    </span>
                  </button>
                </div>
              </div>

              {/* Mobile menu (vertical) */}
              <div className="flex flex-col md:hidden h-full">
                {/* Menu items */}
                <div className="flex flex-col mt-px">
                  <Link
                    href="/"
                    onClick={useActive.closeMenu}
                    className="flex items-center justify-center px-[5%] py-3 text-lg font-semibold hover:bg-white/5 transition-colors"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/aanbod"
                    onClick={useActive.closeMenu}
                    className="flex items-center justify-center px-[5%] py-3 text-lg font-semibold hover:bg-white/5 transition-colors"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    Collectie
                  </Link>
                  <Link
                    href="/services-afleverpakket"
                    onClick={useActive.closeMenu}
                    className="flex items-center justify-center px-[5%] py-3 text-lg font-semibold hover:bg-white/5 transition-colors"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    Service
                  </Link>
                  <Link
                    href="/over-ons"
                    onClick={useActive.closeMenu}
                    className="flex items-center justify-center px-[5%] py-3 text-lg font-semibold hover:bg-white/5 transition-colors"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    Over ons
                  </Link>
                  {/* <Link
                    href="/reviews"
                    onClick={useActive.closeMenu}
                    className="flex items-center justify-center px-[5%] py-3 text-lg font-semibold hover:bg-white/5 transition-colors"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    Reviews
                  </Link> */}
                  <Link
                    href="/contact"
                    onClick={useActive.closeMenu}
                    className="flex items-center justify-center px-[5%] py-3 text-lg font-semibold hover:bg-white/5 transition-colors"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    Contact
                  </Link>
                </div>

                {/* GEÏNTERESSEERD sectie - naar beneden geplaatst met flexbox */}
                <div className="px-[5%] py-4 bg-black/20 mt-auto mb-20">
                  <div className="flex flex-col gap-3 text-center">
                    <h3 className="text-base font-bold tracking-wider text-white">GEÏNTERESSEERD?</h3>
                    <p className="text-white text-xs leading-relaxed">
                      Wilt u meer weten over onze auto's of diensten, of wilt u een proefrit maken? Neem contact op.
                    </p>
                    <div className="flex gap-2">
                      <a
                        href="https://wa.me/31857926363"
                        className="cta-button flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#C8A85E] text-white text-xs font-medium transition-all duration-300 hover:bg-[#B89850]"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        WhatsApp
                      </a>
                      <a
                        href="/contact"
                        onClick={useActive.closeMenu}
                        className="cta-button flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#C8A85E] text-white text-xs font-medium transition-all duration-300 hover:bg-[#B89850]"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop menu (3 sections centered) */}
              <div className="hidden md:flex flex-1 items-center justify-center">
                <div className="max-w-7xl w-full mx-auto px-12 grid grid-cols-3 gap-8 items-start">

                  {/* Links-midden: Home, Collectie, Service */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={useActive.isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col gap-4 justify-self-end"
                  >
                    <Link
                      href="/"
                      onClick={useActive.closeMenu}
                      className="text-4xl font-bold text-white hover:text-black transition-colors"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      Home
                    </Link>
                    <Link
                      href="/aanbod"
                      onClick={useActive.closeMenu}
                      className="text-4xl font-bold text-white hover:text-black transition-colors"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      Collectie
                    </Link>
                    <Link
                      href="/services-afleverpakket"
                      onClick={useActive.closeMenu}
                      className="text-4xl font-bold text-white hover:text-black transition-colors"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      Service
                    </Link>
                  </motion.div>

                  {/* Midden-midden: Over ons, Reviews, Contact */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={useActive.isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col gap-4 justify-self-center"
                  >
                    <Link
                      href="/over-ons"
                      onClick={useActive.closeMenu}
                      className="text-4xl font-bold text-white hover:text-black transition-colors"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      Over ons
                    </Link>
                    {/* <Link
                      href="/reviews"
                      onClick={useActive.closeMenu}
                      className="text-4xl font-bold text-white hover:text-black transition-colors"
                    >
                      Reviews
                    </Link> */}
                    <Link
                      href="/contact"
                      onClick={useActive.closeMenu}
                      className="text-4xl font-bold text-white hover:text-black transition-colors"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      Contact
                    </Link>
                  </motion.div>

                  {/* Rechts-midden: CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={useActive.isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col gap-6 justify-self-start"
                  >
                    {/* GEÏNTERESSEERD sectie */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-lg font-bold tracking-wider text-white">GEÏNTERESSEERD?</h3>
                      <p className="text-white text-sm leading-relaxed">
                        Wilt u meer weten over onze auto's of diensten, of wilt u een proefrit maken? Neem contact op.
                      </p>
                      <div className="flex gap-2">
                        <a
                          href="https://wa.me/31857926363"
                          className="cta-button flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#C8A85E] text-white text-xs font-medium transition-all duration-300 hover:bg-[#B89850]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          WhatsApp
                        </a>
                        <a
                          href="/contact"
                          onClick={useActive.closeMenu}
                          className="cta-button flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#C8A85E] text-white text-xs font-medium transition-all duration-300 hover:bg-[#B89850]"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </div>
        </ConditionalRender>
      </AnimatePresence>
    </section>
  );
}
