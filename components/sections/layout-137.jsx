"use client";

import React, { useRef, useState, useEffect } from "react";

function StatCard({ number, suffix, title }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          const duration = 2000;
          const steps = 50;
          const increment = number / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
              setCount(number);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [number, isVisible]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 text-center ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
        {count}{suffix}
      </div>
      <div className="text-base md:text-lg font-medium tracking-wide text-gray-600">
        {title}
      </div>
    </div>
  );
}

export function Layout137() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <div className="flex flex-col items-center justify-start">
          <div className="mb-5 md:mb-6">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
              className="size-12"
              alt="Relume logo"
            />
          </div>
          <h3 className="heading-h3 font-bold">Maatwerk</h3>
          <p className="text-medium mt-5 md:mt-6">
            Het kopen van een auto is voor ons altijd maatwerk waarbij onze
            klanten centraal staan. Ben je op zoek naar een bepaald merk, model
            of type maar staat je droomauto er niet tussen? Geen paniek, we gaan
            graag voor je op zoek binnen ons internationale netwerk om te kijken
            wat er mogelijk is.
          </p>

          {/* Statistics Section */}
          <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto mt-12 md:mt-16 lg:mt-20">
            <StatCard number={10} suffix="+" title="Jaren ervaring" />
            <StatCard number={500} suffix="+" title="Tevreden klanten" />
            <StatCard number={20} suffix="+" title="Auto's op voorraad" />
          </div>
        </div>
      </div>
    </section>
  );
}
