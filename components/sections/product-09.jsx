"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useMemo, useEffect } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

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
  // Filter drawer state
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState([]);
  const [selectedFuels, setSelectedFuels] = useState([]);
  const [sortPrice, setSortPrice] = useState("asc");

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFilterOpen]);

  // Extract unique values from cars data
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(cars.map(car => car.name.split(' ')[0]))];
    return uniqueBrands.sort();
  }, []);

  const transmissions = useMemo(() => {
    return [...new Set(cars.map(car => car.transmission))].sort();
  }, []);

  const fuels = useMemo(() => {
    return [...new Set(cars.map(car => car.fuel))].sort();
  }, []);

  // Filter and sort logic
  const filteredCars = useMemo(() => {
    let filtered = cars.filter(car => {
      // Search filter
      const matchesSearch = searchTerm === "" ||
                           car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.specs.toLowerCase().includes(searchTerm.toLowerCase());

      // Brand filter - multiple selection
      const carBrand = car.name.split(' ')[0];
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(carBrand);

      // Transmission filter - multiple selection
      const matchesTransmission = selectedTransmissions.length === 0 || selectedTransmissions.includes(car.transmission);

      // Fuel filter - multiple selection
      const matchesFuel = selectedFuels.length === 0 || selectedFuels.includes(car.fuel);

      return matchesSearch && matchesBrand && matchesTransmission && matchesFuel;
    });

    // Sort by price
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
  }, [searchTerm, selectedBrands, selectedTransmissions, selectedFuels, sortPrice]);

  // Count active filters
  const activeFilterCount = selectedBrands.length + selectedTransmissions.length + selectedFuels.length;

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrands([]);
    setSelectedTransmissions([]);
    setSelectedFuels([]);
    setSortPrice("asc");
  };

  // Toggle multi-select
  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleTransmission = (transmission) => {
    setSelectedTransmissions(prev =>
      prev.includes(transmission) ? prev.filter(t => t !== transmission) : [...prev, transmission]
    );
  };

  const toggleFuel = (fuel) => {
    setSelectedFuels(prev =>
      prev.includes(fuel) ? prev.filter(f => f !== fuel) : [...prev, fuel]
    );
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h1 className="heading-h2 mt-3 font-bold md:mt-4">
                Onze huidige collectie
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-medium mt-5 md:mt-6">
                Bij Beek Automotive draait alles om kwaliteit. We selecteren alleen de mooiste occasions in topconditie. Staat jouw droomauto er niet tussen? Wij vinden 'm voor je.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 md:mb-12 space-y-4">
          <div className="flex justify-between items-center gap-3">
            {/* Search bar */}
            <div className="w-full sm:w-64 md:w-80">
              <Input
                type="text"
                placeholder="🔍 Zoeken..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Filter Button */}
            <Button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 relative shrink-0"
            >
              <BiFilterAlt className="size-5" />
              <span className="hidden sm:inline">Filters</span>
              {activeFilterCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C8A85E] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {activeFilterCount}
                </span>
              )}
            </Button>
          </div>

          {/* Active filter chips */}
          {(selectedBrands.length > 0 || selectedTransmissions.length > 0 || selectedFuels.length > 0) && (
            <div className="flex flex-wrap gap-2">
              {selectedBrands.map(brand => (
                <button
                  key={brand}
                  onClick={() => toggleBrand(brand)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300 transition-colors"
                >
                  {brand}
                  <IoClose className="size-4" />
                </button>
              ))}
              {selectedTransmissions.map(transmission => (
                <button
                  key={transmission}
                  onClick={() => toggleTransmission(transmission)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300 transition-colors"
                >
                  {transmission}
                  <IoClose className="size-4" />
                </button>
              ))}
              {selectedFuels.map(fuel => (
                <button
                  key={fuel}
                  onClick={() => toggleFuel(fuel)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300 transition-colors"
                >
                  {fuel}
                  <IoClose className="size-4" />
                </button>
              ))}
            </div>
          )}

          {/* Counter */}
          <p className="text-sm text-scheme-text-subtle">
            {filteredCars.length} {filteredCars.length === 1 ? 'auto' : "auto's"} gevonden
          </p>
        </div>

        {/* Filter Drawer */}
        <AnimatePresence>
          {isFilterOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFilterOpen(false)}
                className="fixed inset-0 bg-black/50 z-[9998]"
              />

              {/* Drawer */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl z-[9999] max-h-[85vh] overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <IoClose className="size-6" />
                  </button>
                </div>

                {/* Content - Scrollable */}
                <div className="overflow-y-auto flex-1 p-4 space-y-6">
                  {/* Sort */}
                  <div>
                    <h3 className="font-semibold mb-3">Prijs sorteren</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSortPrice("asc")}
                        className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                          sortPrice === "asc"
                            ? "border-[#C8A85E] bg-[#C8A85E]/10 text-[#C8A85E] font-semibold"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        Laag → Hoog
                      </button>
                      <button
                        onClick={() => setSortPrice("desc")}
                        className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                          sortPrice === "desc"
                            ? "border-[#C8A85E] bg-[#C8A85E]/10 text-[#C8A85E] font-semibold"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        Hoog → Laag
                      </button>
                    </div>
                  </div>

                  {/* Brands */}
                  <div>
                    <h3 className="font-semibold mb-3">Merk</h3>
                    <div className="space-y-2">
                      {brands.map(brand => (
                        <label
                          key={brand}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                        >
                          <Checkbox
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => toggleBrand(brand)}
                          />
                          <span className="flex-1">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Transmission */}
                  <div>
                    <h3 className="font-semibold mb-3">Transmissie</h3>
                    <div className="space-y-2">
                      {transmissions.map(transmission => (
                        <label
                          key={transmission}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                        >
                          <Checkbox
                            checked={selectedTransmissions.includes(transmission)}
                            onCheckedChange={() => toggleTransmission(transmission)}
                          />
                          <span className="flex-1">{transmission}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Fuel */}
                  <div>
                    <h3 className="font-semibold mb-3">Brandstof</h3>
                    <div className="space-y-2">
                      {fuels.map(fuel => (
                        <label
                          key={fuel}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                        >
                          <Checkbox
                            checked={selectedFuels.includes(fuel)}
                            onCheckedChange={() => toggleFuel(fuel)}
                          />
                          <span className="flex-1">{fuel}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer - Sticky */}
                <div className="border-t p-4 bg-white sticky bottom-0 flex gap-3">
                  <Button
                    variant="outline"
                    onClick={resetFilters}
                    className="flex-1"
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 bg-[#C8A85E] hover:bg-[#B89850]"
                  >
                    {filteredCars.length} {filteredCars.length === 1 ? 'resultaat' : 'resultaten'} tonen
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* No results message */}
        {filteredCars.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-scheme-text-subtle">
              Geen auto's gevonden met de geselecteerde filters.
            </p>
            <p className="text-medium text-scheme-text-subtle mt-2">
              Probeer andere filters of reset je zoekopdracht.
            </p>
          </div>
        ) : (
          <StaggerContainer className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            {filteredCars.map((car, index) => (
              <StaggerItem key={index}>
                <a href="/voertuig" className="text-medium group card-hover block">
              <div className="relative mb-4 aspect-[4/3] image-zoom-container rounded-lg md:mb-5">
                <img
                  src={car.image}
                  alt={car.name}
                  className="size-full object-cover image-zoom"
                />
              </div>
              <div className="mb-2">
                <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                <div className="text-sm font-normal text-scheme-text-subtle">
                  {car.specs}
                </div>
              </div>
              <div className="flex justify-between items-end mt-3">
                <div>
                  <div className="text-xl font-bold">{car.price}</div>
                  <div className="text-sm text-scheme-text-subtle">of {car.pricePerMonth} p/m</div>
                </div>
                <div className="text-right text-sm text-scheme-text-subtle">
                  <div>{car.km}</div>
                  <div>{car.year}</div>
                </div>
              </div>
            </a>
              </StaggerItem>
          ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
