"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export function Contact9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image"
            className="size-full rounded-image object-cover"
          />
        </div>
        <div>
          <div className="mb-6 md:mb-8">
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Stuur ons een bericht
            </h2>
            <p className="text-medium">
              Wij luisteren naar jouw automotive verhaal
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
                E-mail
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Bericht
              </Label>
              <Textarea
                id="message"
                placeholder="Deel jouw automotive uitdaging"
                className="min-h-[11.25rem] overflow-auto"
              />
            </div>
            <div className="text-small mb-3 flex items-center space-x-2 md:mb-4">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer">
                Ik accepteer de voorwaarden
              </Label>
            </div>
            <div>
              <Button title="Verzenden">Verzenden</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
