"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import React, { Fragment, useEffect, useState } from "react";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const Star = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFullStar = i < fullStars;
        const isHalfStar = hasHalfStar && i === fullStars;

        return (
          <div key={i}>
            {isFullStar ? (
              <BiSolidStar />
            ) : isHalfStar ? (
              <BiSolidStarHalf />
            ) : (
              <BiStar />
            )}
          </div>
        );
      })}
    </div>
  );
};

const useCarousel = () => {
  const [mainApi, setMainApi] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!mainApi) {
      return;
    }
    mainApi.on("select", () => {
      const index = mainApi.selectedScrollSnap();
      setCurrent(index);
    });
  }, [mainApi]);
  const handleClick = (index) => () => {
    return mainApi?.scrollTo(index);
  };
  const getDotsStyles = (index) => {
    return clsx("relative mx-[3px] inline-block size-2 rounded-full", {
      "bg-scheme-text": current === index,
      "bg-scheme-text/20": current !== index,
    });
  };
  return {
    setMainApi,
    handleClick,
    getDotsStyles,
  };
};

export function ProductHeader7() {
  const useActive = useCarousel();
  return (
    <header className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-[1.25fr_1fr] lg:gap-x-20">
          <div className="order-first md:order-none">
            <div className="lg:sticky lg:inset-y-[10vh]">
              <div className="flex flex-col gap-y-4">
                <div className="group overflow-hidden">
                  <Carousel
                    setApi={useActive.setMainApi}
                    opts={{ loop: true, align: "start" }}
                    className="relative m-0"
                  >
                    <CarouselContent className="relative m-0 pt-[120%] lg:pt-0">
                      <CarouselItem className="absolute inset-0 size-full basis-full pl-0 lg:static">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 1"
                          className="size-full object-cover lg:h-[80vh]"
                        />
                      </CarouselItem>
                      <CarouselItem className="absolute inset-0 size-full basis-full pl-0 lg:static">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 2"
                          className="size-full object-cover lg:h-[80vh]"
                        />
                      </CarouselItem>
                      <CarouselItem className="absolute inset-0 size-full basis-full pl-0 lg:static">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 3"
                          className="size-full object-cover lg:h-[80vh]"
                        />
                      </CarouselItem>
                      <CarouselItem className="absolute inset-0 size-full basis-full pl-0 lg:static">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 4"
                          className="size-full object-cover lg:h-[80vh]"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-4 z-10 hidden size-12 opacity-0 transition-opacity group-hover:opacity-100 md:flex carousel-button" />
                    <CarouselNext className="right-4 z-10 hidden size-12 opacity-0 transition-opacity group-hover:opacity-100 md:flex carousel-button" />
                    <div className="absolute bottom-[26px] left-0 flex w-full items-center justify-center">
                      <button
                        onClick={useActive.handleClick(0)}
                        className={useActive.getDotsStyles(0)}
                      />
                      <button
                        onClick={useActive.handleClick(1)}
                        className={useActive.getDotsStyles(1)}
                      />
                      <button
                        onClick={useActive.handleClick(2)}
                        className={useActive.getDotsStyles(2)}
                      />
                      <button
                        onClick={useActive.handleClick(3)}
                        className={useActive.getDotsStyles(3)}
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Breadcrumb className="text-small mb-6 flex flex-wrap items-center">
              <BreadcrumbList>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="" href="#">
                      Shop alle
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="" href="#">
                      Voertuigen
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="font-semibold" href="#">
                      Premium voertuig
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Fragment>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <h1 className="heading-h3 mb-5 font-bold md:mb-6">
                Premium voertuig
              </h1>
              <div className="mb-5 flex flex-col flex-wrap sm:flex-row sm:items-center md:mb-6">
                <p className="heading-h5 font-bold">€55,000</p>
                <div className="mx-4 hidden w-px self-stretch bg-scheme-border sm:block" />
                <div className="flex flex-wrap items-center gap-3">
                  <Star rating={3.5} />
                  <p className="text-small">(4.5 sterren) • 15 beoordelingen</p>
                </div>
              </div>
              <p>
                Gebouwd voor pure rijervaring. Een machine die de grenzen van
                prestatie verlegt.
              </p>
              <ul className="mt-4 mb-5 list-inside list-disc md:mb-6">
                <li className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                  Technologie ontmoet passie
                </li>
                <li className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                  Technologie ontmoet passie
                </li>
                <li className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                  Technologie ontmoet passie
                </li>
              </ul>
              <form className="mb-8">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2">Model</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-choice">Option One</SelectItem>
                        <SelectItem value="second-choice">
                          Option Two
                        </SelectItem>
                        <SelectItem value="third-choice">
                          Option Three
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Model</Label>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        className="px-4 py-2"
                        asChild={true}
                        title="Standaard editie"
                        url="#"
                      >
                        <a href="#" className="">
                          Standaard editie
                        </a>
                      </Button>
                      <Button
                        className="px-4 py-2"
                        asChild={true}
                        title="Sport pakket"
                        url="#"
                        variant="secondary"
                      >
                        <a href="#" className="">
                          Sport pakket
                        </a>
                      </Button>
                      <Button
                        className="px-4 py-2"
                        asChild={true}
                        title="Beperkte editie"
                        url="#"
                        variant="secondary"
                        disabled={true}
                      >
                        <a href="#" className="pointer-events-none opacity-25">
                          Beperkte editie
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="quantity" className="mb-2">
                      Aantal
                    </Label>
                    <Input
                      type="number"
                      id="quantity"
                      placeholder="1"
                      className="w-16"
                    />
                  </div>
                </div>
                <div className="mt-8 mb-4 flex flex-col gap-y-4">
                  <Button title="Toevoegen aan winkelwagen">
                    Toevoegen aan winkelwagen
                  </Button>
                  <Button title="Nu kopen" variant="secondary">
                    Nu kopen
                  </Button>
                </div>
                <p className="text-tiny text-center">
                  Gratis verzending wereldwijd
                </p>
              </form>
              <div className="space-y-5 md:space-y-6">
                <div>
                  <p className="text-medium mb-2 font-semibold">Details</p>
                  <p>
                    30-dagen retourbeleid voor ongebruikte voertuigen. Volledige
                    terugbetaling binnen 10 werkdagen. Strenge
                    kwaliteitsinspectie vereist voor retourauthorisatie.
                  </p>
                  <div className="mt-5 h-px w-full bg-scheme-border md:mt-6" />
                </div>
                <div>
                  <p className="text-medium mb-2 font-semibold">Verzending</p>
                  <p>
                    30-dagen retourbeleid voor ongebruikte voertuigen. Volledige
                    terugbetaling binnen 10 werkdagen. Strenge
                    kwaliteitsinspectie vereist voor retourauthorisatie.
                  </p>
                  <div className="mt-5 h-px w-full bg-scheme-border md:mt-6" />
                </div>
                <div>
                  <p className="text-medium mb-2 font-semibold">Retourneren</p>
                  <p>
                    30-dagen retourbeleid voor ongebruikte voertuigen. Volledige
                    terugbetaling binnen 10 werkdagen. Strenge
                    kwaliteitsinspectie vereist voor retourauthorisatie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
