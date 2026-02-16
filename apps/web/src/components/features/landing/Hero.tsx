"use client";

import React from "react";
import { HeroSearch, FeatureCard } from "@arrow-ecommerce/ui";

type Feature = { id: string | number; icon: string; value: string; label: string };

interface HeroProps {
  placeholder: string;
  backgroundImages: string[];
  features: Feature[];
}

export default function Hero({ placeholder, backgroundImages, features }: HeroProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    if (!backgroundImages || backgroundImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative h-[560px] md:h-[900px]">
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img src={image} alt={`Hero background ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}

          <div className="absolute inset-0 z-10 hero-gradient-1" />
          <div className="absolute inset-0 z-10 hero-gradient-2" />
          <div className="md:hidden absolute inset-0 z-10 hero-mobile-top" />
          <div className="md:hidden absolute inset-0 z-10 hero-mobile-bottom" />
        </div>

        <div className="relative z-10 h-full">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col h-full px-6 pt-28 pb-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white uppercase leading-[32px] tracking-[-0.4492px] mb-3">
                Find your
                <br />
                next vehicle
              </h1>
              <p className="text-sm font-semibold text-white capitalize mb-6">with transparent pricing and trusted quality</p>
              <HeroSearch placeholder={placeholder} />
            </div>
            <div className="mt-auto grid grid-cols-2 gap-6 w-full">
              {features.map((feature) => (
                <FeatureCard key={feature.id} icon={feature.icon} value={feature.value} label={feature.label} />
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col h-full px-[80px]">
            <div className="pt-[271px] pb-0">
              <h1 className="text-[48px] font-bold text-white uppercase leading-[48px] tracking-[-0.4492px] mb-[28px] w-max">
                Find your
                <br />
                next vehicle
              </h1>
              <p className="text-[16px] font-semibold text-white capitalize leading-[44px] mb-[51px] max-w-[524px]">with transparent pricing and trusted quality</p>
              <div className="max-w-[524px]">
                <HeroSearch placeholder={placeholder} />
              </div>
            </div>

            {/* Desktop Feature Cards - Positioned at bottom */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-[117px]">
              {features.map((feature) => (
                <FeatureCard key={feature.id} icon={feature.icon} value={feature.value} label={feature.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
