"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 text-white" style={{ backgroundColor: '#121212' }}>
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col">
            <a href="/" className="mb-5 md:mb-6">
              <img
                src="/images/beekautomotivezwart.png"
                alt="Beek Automotive logo"
                className="inline-block h-12 w-auto"
              />
            </a>
            <p className="mb-5 md:mb-6">
              Blijf op de hoogte van onze nieuwste leveringsoplossingen en
              speciale aanbiedingen
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Vul je e-mail in"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Inschrijven" variant="secondary" size="sm">
                  Inschrijven
                </Button>
              </form>
              <p className="text-tiny text-white/60">
                Door je in te schrijven ga je akkoord met onze privacyverklaring
                en ontvang je updates
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4 sm:divide-x sm:divide-white/20">
            {/* Service */}
            <div className="flex flex-col items-start justify-start sm:pr-6 md:pr-8">
              <h2 className="mb-3 font-semibold md:mb-4 text-white">Service</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="/financiering" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
                    <span>Financieringen</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
                    <span>Import</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="/contact" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Gegevens */}
            <div className="flex flex-col items-start justify-start sm:px-6 md:px-8">
              <h2 className="mb-3 font-semibold md:mb-4 text-white">Gegevens</h2>
              <ul className="space-y-2">
                <li className="text-small">
                  <a href="tel:+31857926363" className="text-white hover:opacity-80 transition-opacity">
                    +31 (0)85 792 6363
                  </a>
                </li>
                <li className="text-small">
                  <a href="mailto:info@beekautomotive.nl" className="text-white hover:opacity-80 transition-opacity">
                    info@beekautomotive.nl
                  </a>
                </li>
                <li className="text-small text-white">
                  <p>Het Laar 6</p>
                  <p>6733 BZ, Wekerom</p>
                </li>
                <li className="flex gap-3 pt-2">
                  <a href="#" className="text-white hover:opacity-80 transition-opacity">
                    <BiLogoFacebookCircle className="size-6" />
                  </a>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity">
                    <BiLogoInstagram className="size-6" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Showroom */}
            <div className="flex flex-col items-start justify-start sm:pl-6 md:pl-8">
              <h2 className="mb-3 font-semibold md:mb-4 text-white">Showroom</h2>
              <ul className="space-y-1">
                <li className="text-small text-white">
                  <p>MA-VR: 9.00 - 18.00</p>
                  <p>ZA: Op afspraak</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 md:mt-0 text-white/60">© Beek Automotive 2025</p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacybeleid</a>
            </li>
            <li className="underline">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Gebruiksvoorwaarden</a>
            </li>
            <li className="underline">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookieinstellingen</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
