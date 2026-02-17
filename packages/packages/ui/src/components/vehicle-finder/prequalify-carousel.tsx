"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  type CarouselApi,
} from "ui/primitives/carousel";
import { Button } from "ui/primitives/button";
import { prequalifySlides } from "./carousel-data";
import { cn } from "ui/lib/utils";
import { useEffect } from "react";

interface PrequalifyCarouselProps {
  className?: string;
}

/**
 * PrequalifyCarousel - Client Component
 * Auto-playing carousel with custom indicators
 */
export function PrequalifyCarousel({ className }: PrequalifyCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-play functionality
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      className={cn("w-full relative", className)}
    >
      <CarouselContent>
        {prequalifySlides.map((slide) => (
          <CarouselItem key={slide.id}>
            {/* Mobile Layout: Image on top, content below */}
            <div className="sm:hidden overflow-hidden rounded-xl">
              {/* Image Section */}
              <div className="relative w-full h-[200px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                {/* Gradient blend from image to black */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black" />
              </div>

              {/* Content Section - Black background */}
              <div className="bg-black text-white px-6 py-8 text-center -mt-1">
                <h2 className="text-xl font-bold mb-3 uppercase">
                  {slide.title}
                </h2>
                <p className="text-sm mb-6 leading-relaxed">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-[#EB0A1E] hover:bg-[#EB0A1E]/90 text-white font-semibold px-8 rounded-full w-full"
                >
                  {slide.ctaText}
                </Button>
              </div>
            </div>

            {/* Desktop Layout: Overlay design with gradient */}
            <div className="hidden sm:block relative w-full min-h-[400px] overflow-hidden rounded-xl">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />

              {/* Gradient Overlay - Left side gradient */}
              <div 
                className="absolute inset-0" 
                style={{
                  background: 'linear-gradient(91.94deg, #000000 28.21%, rgba(0, 0, 0, 0) 50.16%)'
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-center px-12 lg:px-16 text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 max-w-md uppercase">
                  {slide.title}
                </h2>
                <p className="text-base mb-8 max-w-md leading-relaxed">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-[#EB0A1E] hover:bg-[#EB0A1E]/90 text-white font-semibold px-8 rounded-full"
                >
                  {slide.ctaText}
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Carousel Indicators */}
      <CarouselDots className="absolute bottom-4 left-0 right-0 pt-0 z-10 gap-3 [&>button]:h-2 [&>button]:w-2 [&>button]:rounded-full [&>button]:transition-all [&>button]:bg-white/40 [&>button]:hover:bg-white/60 [&>button[class~='w-6']]:w-2 [&>button[class~='w-6']]:bg-white [&>button[class~='w-6']]:ring-2 [&>button[class~='w-6']]:ring-white [&>button[class~='w-6']]:ring-offset-2 [&>button[class~='w-6']]:ring-offset-black" />
    </Carousel>
  );
}
