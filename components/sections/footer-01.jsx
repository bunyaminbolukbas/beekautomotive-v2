"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
} from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export function Footer1() {
  return (
    <footer className="px-[5%] py-20 md:py-24 lg:py-28 text-white" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container max-w-7xl mx-auto">
        {/* Witte lijn boven */}
        <div className="h-px w-full bg-white/30 mb-20" />

        {/* Main content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          {/* Logo - Later toevoegen */}
          <div className="flex-shrink-0">
            {/* Logo komt hier later */}
          </div>

          {/* Kolommen - rechterkant */}
          <div className="flex gap-16 lg:gap-24 xl:gap-32 flex-1 justify-end">
            {/* Links */}
            <div className="flex flex-col gap-2">
              <ul className="space-y-2.5">
                <li>
                  <a href="/" className="text-sm text-white/70 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/aanbod" className="text-sm text-white/70 hover:text-white transition-colors">
                    Aanbod
                  </a>
                </li>
                <li>
                  <a href="/services-afleverpakket" className="text-sm text-white/70 hover:text-white transition-colors">
                    Service
                  </a>
                </li>
                <li>
                  <a href="/over-ons" className="text-sm text-white/70 hover:text-white transition-colors">
                    Over ons
                  </a>
                </li>
                <li>
                  <a href="/reviews" className="text-sm text-white/70 hover:text-white transition-colors">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Gegevens */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-normal tracking-wider mb-2">Gegevens</h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="tel:+31857926363" className="text-sm text-white/70 hover:text-white transition-colors">
                    +31 (0)85 792 6363
                  </a>
                </li>
                <li>
                  <a href="mailto:info@beekautomotive.nl" className="text-sm text-white/70 hover:text-white transition-colors uppercase">
                    INFO@BEEKAUTOMOTIVE.NL
                  </a>
                </li>
                <li className="text-sm text-white/70">
                  <p>Het Laar 6</p>
                  <p>6733 BZ, Wekerom</p>
                </li>
                <li className="flex gap-3 pt-2">
                  <a href="https://wa.me/31857926363" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    <FaWhatsapp className="size-5" />
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <BiLogoFacebookCircle className="size-5" />
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <BiLogoInstagram className="size-5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Showroom */}
            <div className="flex flex-col gap-2 pl-8 lg:pl-12 border-l border-white/30">
              <h3 className="text-sm font-normal tracking-wider mb-2">Showroom</h3>
              <ul className="space-y-2.5">
                <li className="text-sm text-white/70">
                  <p>MA-VR: 9.00 - 18.00</p>
                  <p>ZA: Op afspraak</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Witte lijn onder */}
        <div className="h-px w-full bg-white/30 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-sm text-white/50">© BBE Operations 2025</p>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
            <li>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Algemene voorwaarden
              </a>
            </li>
            <li>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Privacyverklaring
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
