"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState, useMemo } from "react";

const cars = [
  {
    name: "BMW 3 Series",
    specs: "320d · M-Sport · Schuifdak · Leder · 19 inch · NL Auto",
    price: "€45,000",
    pricePerMonth: "€550",
    km: "85.432 km",
    year: "2021",
    transmission: "Automaat",
    fuel: "Diesel",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "MINI Cooper",
    specs: "S · Chili Pack · Panoramadak · Xenon · 17 inch · NL Auto",
    price: "€32,500",
    pricePerMonth: "€398",
    km: "62.120 km",
    year: "2020",
    transmission: "Handgeschakeld",
    fuel: "Benzine",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "BMW X5",
    specs: "xDrive40i · M-Sport · Panoramadak · HUD · 21 inch · NL Auto",
    price: "€65,000",
    pricePerMonth: "€795",
    km: "45.678 km",
    year: "2022",
    transmission: "Automaat",
    fuel: "Benzine",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "MINI Countryman",
    specs: "Cooper S · ALL4 · Panoramadak · Leder · 18 inch · NL Auto",
    price: "€38,750",
    pricePerMonth: "€475",
    km: "58.290 km",
    year: "2021",
    transmission: "Automaat",
    fuel: "Benzine",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "BMW 5 Series",
    specs: "530e · M-Sport · Schuifdak · HUD · Leder · 19 inch · NL Auto",
    price: "€55,000",
    pricePerMonth: "€673",
    km: "72.450 km",
    year: "2020",
    transmission: "Automaat",
    fuel: "Hybride",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "MINI Electric",
    specs: "Level 3 · Panoramadak · Navigatie · 17 inch · NL Auto",
    price: "€36,500",
    pricePerMonth: "€447",
    km: "28.934 km",
    year: "2022",
    transmission: "Automaat",
    fuel: "Elektrisch",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "Audi A6",
    specs: "3.0 TDI · S-Line · Luchtvering · Matrix LED · 20 inch · NL Auto",
    price: "€52,900",
    pricePerMonth: "€648",
    km: "68.500 km",
    year: "2021",
    transmission: "Automaat",
    fuel: "Diesel",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "Mercedes C-Klasse",
    specs: "C220d · AMG-Line · Schuifdak · Widescreen · 19 inch · NL Auto",
    price: "€48,750",
    pricePerMonth: "€597",
    km: "54.200 km",
    year: "2022",
    transmission: "Automaat",
    fuel: "Diesel",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "Volkswagen Golf",
    specs: "GTI · Performance · Panoramadak · DCC · 18 inch · NL Auto",
    price: "€35,900",
    pricePerMonth: "€440",
    km: "42.100 km",
    year: "2021",
    transmission: "Handgeschakeld",
    fuel: "Benzine",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "BMW X3",
    specs: "xDrive30d · M-Sport · HUD · Harman Kardon · 20 inch · NL Auto",
    price: "€58,500",
    pricePerMonth: "€716",
    km: "51.800 km",
    year: "2022",
    transmission: "Automaat",
    fuel: "Diesel",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "Audi Q5",
    specs: "45 TFSI · S-Line · Virtual Cockpit · Matrix · 20 inch · NL Auto",
    price: "€54,900",
    pricePerMonth: "€672",
    km: "46.300 km",
    year: "2021",
    transmission: "Automaat",
    fuel: "Benzine",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "Porsche Cayenne",
    specs: "3.0 V6 · Sport Design · Luchtvering · PASM · 21 inch · NL Auto",
    price: "€78,900",
    pricePerMonth: "€965",
    km: "38.700 km",
    year: "2022",
    transmission: "Automaat",
    fuel: "Benzine",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "Mercedes E-Klasse",
    specs: "E300de · AMG · Plug-in Hybrid · Widescreen · 19 inch · NL Auto",
    price: "€62,500",
    pricePerMonth: "€765",
    km: "35.900 km",
    year: "2023",
    transmission: "Automaat",
    fuel: "Hybride",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "BMW 4 Series",
    specs: "420i · M-Sport · Coupé · HUD · Leder · 19 inch · NL Auto",
    price: "€49,900",
    pricePerMonth: "€611",
    km: "44.200 km",
    year: "2022",
    transmission: "Automaat",
    fuel: "Benzine",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
  {
    name: "Audi A4 Avant",
    specs: "40 TDI · S-Line · Panoramadak · Matrix · 19 inch · NL Auto",
    price: "€44,750",
    pricePerMonth: "€548",
    km: "62.800 km",
    year: "2021",
    transmission: "Handgeschakeld",
    fuel: "Diesel",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  },
];

export function Product9() {
  // Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [sortPrice, setSortPrice] = useState("asc");
  const [selectedTransmission, setSelectedTransmission] = useState("all");
  const [selectedFuel, setSelectedFuel] = useState("all");

  // Extract unique brands from cars data
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(cars.map(car => car.name.split(' ')[0]))];
    return uniqueBrands.sort();
  }, []);

  // Filter and sort logic
  const filteredCars = useMemo(() => {
    // First filter
    let filtered = cars.filter(car => {
      // Search filter
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.specs.toLowerCase().includes(searchTerm.toLowerCase());

      // Brand filter
      const matchesBrand = selectedBrand === "all" || car.name.startsWith(selectedBrand);

      // Transmission filter
      const matchesTransmission = selectedTransmission === "all" || car.transmission === selectedTransmission;

      // Fuel filter
      const matchesFuel = selectedFuel === "all" || car.fuel === selectedFuel;

      return matchesSearch && matchesBrand && matchesTransmission && matchesFuel;
    });

    // Then sort by price
    if (sortPrice === "asc") {
      filtered = [...filtered].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[€.,]/g, ''));
        const priceB = parseInt(b.price.replace(/[€.,]/g, ''));
        return priceA - priceB;
      });
    } else if (sortPrice === "desc") {
      filtered = [...filtered].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[€.,]/g, ''));
        const priceB = parseInt(b.price.replace(/[€.,]/g, ''));
        return priceB - priceA;
      });
    }

    return filtered;
  }, [searchTerm, selectedBrand, sortPrice, selectedTransmission, selectedFuel]);

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrand("all");
    setSortPrice("asc");
    setSelectedTransmission("all");
    setSelectedFuel("all");
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="heading-h2 mt-3 font-bold md:mt-4">
              Ons huidige aanbod
            </h1>
            <p className="text-medium mt-5 md:mt-6">
              Bij Beek Automotive draait alles om kwaliteit. We selecteren alleen de mooiste occasions in topconditie. Staat jouw droomauto er niet tussen? Wij vinden 'm voor je.
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8 md:mb-12 space-y-4">
          {/* Search bar - narrower on desktop */}
          <div className="w-full md:max-w-md">
            <Input
              type="text"
              placeholder="🔍 Zoeken op merk, model of specs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Filter dropdowns */}
          <div className="flex flex-wrap gap-3">
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Merk" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle merken</SelectItem>
                {brands.map(brand => (
                  <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortPrice} onValueChange={setSortPrice}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Prijs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Oplopend</SelectItem>
                <SelectItem value="desc">Aflopend</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Transmissie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle transmissies</SelectItem>
                <SelectItem value="Automaat">Automaat</SelectItem>
                <SelectItem value="Handgeschakeld">Handgeschakeld</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedFuel} onValueChange={setSelectedFuel}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Brandstof" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle brandstoffen</SelectItem>
                <SelectItem value="Benzine">Benzine</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Elektrisch">Elektrisch</SelectItem>
                <SelectItem value="Hybride">Hybride</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="secondary"
              size="sm"
              onClick={resetFilters}
            >
              Reset
            </Button>
          </div>

          {/* Counter */}
          <p className="text-sm text-gray-600">
            {filteredCars.length} {filteredCars.length === 1 ? 'auto' : "auto's"} gevonden
          </p>
        </div>

        {/* No results message */}
        {filteredCars.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Geen auto's gevonden met de geselecteerde filters.
            </p>
            <p className="text-medium text-gray-500 mt-2">
              Probeer andere filters of reset je zoekopdracht.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            {filteredCars.map((car, index) => (
              <a key={index} href="#" className="text-medium group">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg md:mb-5">
                <img
                  src={car.image}
                  alt={car.name}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mb-2">
                <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                <div className="text-sm font-normal text-gray-600">
                  {car.specs}
                </div>
              </div>
              <div className="flex justify-between items-end mt-3">
                <div>
                  <div className="text-xl font-bold">{car.price}</div>
                  <div className="text-sm text-gray-600">of {car.pricePerMonth} p/m</div>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div>{car.km}</div>
                  <div>{car.year}</div>
                </div>
              </div>
            </a>
          ))}
          </div>
        )}
      </div>
    </section>
  );
}
