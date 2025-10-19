"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export function ContactCombined() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          {/* Links: Google Maps */}
          <div className="order-3 md:order-1">
            <iframe
              src="https://maps.google.com/maps?q=Het+Laar+6,+Wekerom&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] rounded-lg"
            ></iframe>
          </div>

          {/* Midden: Showroom, Bedrijfsgegevens, Contact */}
          <div className="order-1 md:order-2 flex flex-col gap-8">
            {/* Showroom */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Showroom</h3>
              <p className="mb-1">Beek Automotive</p>
              <p className="mb-1">Het Laar 6</p>
              <p className="mb-3">Wekerom</p>
              <p className="text-gray-600">Enkel op afspraak</p>
            </div>

            {/* Bedrijfsgegevens */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Bedrijfsgegevens</h3>
              <p className="mb-1">KvK: [KvK nummer]</p>
              <p className="mb-1">BTW: [BTW nummer]</p>
              <p>IBAN: [IBAN nummer]</p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <p className="mb-1">
                <span className="font-semibold">E-mail:</span>{" "}
                <a href="mailto:info@linkerbaan.com" className="hover:underline">
                  info@linkerbaan.com
                </a>
              </p>
              <p className="mb-1">
                <span className="font-semibold">Tel:</span>{" "}
                <a href="tel:+31384580956" className="hover:underline">
                  +31 38 458 09 56
                </a>
              </p>
              <p>
                <span className="font-semibold">WhatsApp:</span>{" "}
                <a href="https://wa.me/31384580956" className="hover:underline">
                  +31 38 458 09 56
                </a>
              </p>
            </div>
          </div>

          {/* Rechts: Contactformulier */}
          <div className="order-2 md:order-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Stuur een mailtje</h2>
              <p className="text-medium text-gray-600">
                Gebruik onderstaand formulier om ons direct een e-mail te sturen
              </p>
            </div>
            <form className="grid grid-cols-1 gap-6">
              <div className="grid w-full items-center">
                <Label htmlFor="name" className="mb-2">
                  Naam
                </Label>
                <Input type="text" id="name" />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  E-mailadres
                </Label>
                <Input type="email" id="email" />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="message" className="mb-2">
                  Bericht
                </Label>
                <Textarea
                  id="message"
                  placeholder="Typ hier uw bericht..."
                  className="min-h-[11.25rem] overflow-auto"
                />
              </div>
              <div>
                <Button title="Versturen" className="w-full md:w-auto">
                  Versturen
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
