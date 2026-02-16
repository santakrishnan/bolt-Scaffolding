"use client";

import React, { useEffect, useState } from "react";
import { Button, Carousel, CarouselContent, CarouselItem, CarouselDots } from "@arrow-ecommerce/ui";
import type { CarouselApi } from "@arrow-ecommerce/ui";

interface PrequalifyItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
}

interface PrequalifyProps {
  items: PrequalifyItem[];
}

export default function Prequalify({ items }: PrequalifyProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on('select', onSelect);
    return () => {
      carouselApi?.off('select', onSelect);
    };
  }, [carouselApi]);

  return (
    <>
      {/* Mobile Carousel - visible on mobile, hidden on md and above */}
      <section className="md:hidden relative">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
          setApi={setCarouselApi}
        >
          <CarouselContent className="gap-0">
            {items.map((item) => (
              <CarouselItem key={item.id} className="basis-full pl-0 shrink-0">
                <div 
                  className="relative min-h-[500px] flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 prequalify-gradient" />
                  <div className="relative max-w-md mx-auto px-4 text-center text-white">
                    <h2 className="text-2xl font-bold mb-4 whitespace-pre-line">{item.title}</h2>
                    <p className="text-base mb-6">{item.description}</p>
                    <Button className="bg-[color:var(--color-brand-primary)] hover:bg-[color:var(--color-brand-primary-dark)] text-white px-6 py-3 text-base rounded-lg">
                      {item.ctaText}
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 flex justify-center px-4">
          <CarouselDots
            totalSlides={items.length}
            currentSlide={currentSlide}
            onDotClick={(index) => {
              carouselApi?.scrollTo(index);
            }}
            className="gap-2"
          />
        </div>
      </section>

      {/* Desktop Single Item - hidden on mobile, visible on md and above */}
      <section className="hidden md:block py-20 relative">
        <img src={items[0].backgroundImage} alt="Prequalify background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 prequalify-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white py-12">
          <h2 className="text-5xl font-bold mb-6 whitespace-pre-line">{items[0].title}</h2>
          <p className="text-xl mb-8">{items[0].description}</p>
          <Button className="bg-[color:var(--color-brand-primary)] hover:bg-[color:var(--color-brand-primary-dark)] text-white px-8 py-6 text-lg rounded-lg">
            {items[0].ctaText}
          </Button>
        </div>
      </section>
    </>
  );
}
