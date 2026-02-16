"use client";

import React, { useState } from 'react';
import { VehicleTypeCard, InfoCard, CategoryCard, InspectionCard } from '@arrow-ecommerce/ui';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from '@arrow-ecommerce/ui/primitives/carousel';
import { Hero, Prequalify } from '@/components/features/landing';
import landingData from '@/data/landing-data.json';

export default function LandingPage() {
  const [currentInfoSlide, setCurrentInfoSlide] = useState(0);
  const [currentInspectedSlide, setCurrentInspectedSlide] = useState(0);
  const [infoCarouselApi, setInfoCarouselApi] = useState<any>(null);
  const [inspectedCarouselApi, setInspectedCarouselApi] = useState<any>(null);

  React.useEffect(() => {
    if (!infoCarouselApi) return;
    const handleSelectChange = () => {
      setCurrentInfoSlide(infoCarouselApi.selectedSnapIndex());
    };
    infoCarouselApi.on('select', handleSelectChange);
    return () => {
      infoCarouselApi.off('select', handleSelectChange);
    };
  }, [infoCarouselApi]);

  React.useEffect(() => {
    if (!inspectedCarouselApi) return;
    const handleSelectChange = () => {
      setCurrentInspectedSlide(inspectedCarouselApi.selectedSnapIndex());
    };
    inspectedCarouselApi.on('select', handleSelectChange);
    return () => {
      inspectedCarouselApi.off('select', handleSelectChange);
    };
  }, [inspectedCarouselApi]);

  return (
    <div className="min-h-screen bg-white">
      <Hero placeholder={landingData.hero.searchPlaceholder} backgroundImages={[landingData.hero.backgroundImage]} features={landingData.hero.features} />

      {/* Vehicle Types Section */}
      <section className="py-12 md:py-16 bg-white">
        <h2 className="text-2xl md:text-[32px] font-semibold text-center mb-6 md:mb-12 text-[color:var(--color-text-secondary)] tracking-[-1.28px] leading-[1.1]">What type of vehicle?</h2>
        <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {landingData.vehicleTypes.map((type, index) => (
              <VehicleTypeCard
                key={type.id}
                title={type.title}
                description={type.description}
                image={type.image}
                backgroundColor={index % 2 === 1 ? 'bg-[color:var(--color-bg-muted)]' : 'bg-white'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img src={landingData.howToBuy.backgroundImage} alt="Background" className="absolute w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 howto-gradient" />
        </div>

        <div className="relative z-10 flex flex-col items-center py-12 md:py-16">
          <h2 className="text-2xl md:text-[32px] font-semibold text-white text-center tracking-[-0.64px] leading-[1.1] mb-8 md:mb-16">How to buy your next Toyota</h2>
          
          {/* Mobile Carousel - visible on mobile, hidden on md and above */}
          <div className="md:hidden w-full px-6">
            <Carousel
              opts={{
                align: 'center',
                loop: true,
              }}
              className="w-full"
              setApi={setInfoCarouselApi}
            >
              <CarouselContent className="gap-4">
                {landingData.howToBuy.cards.map((card) => (
                  <CarouselItem key={card.id} className="basis-full pl-0">
                    <div className="flex justify-center">
                      <InfoCard
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                        showLink={card.showLink}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="mt-6 flex justify-center">
              <CarouselDots
                totalSlides={landingData.howToBuy.cards.length}
                currentSlide={currentInfoSlide}
                onDotClick={(index) => {
                  infoCarouselApi?.scrollTo(index);
                }}
                className="gap-2"
              />
            </div>
          </div>

          {/* Desktop Grid - hidden on mobile, visible on md and above */}
          <div className="hidden md:flex w-full max-w-[1440px] mx-auto px-4 md:px-20">
            <div className="flex gap-4 md:gap-8 w-full justify-center">
              {landingData.howToBuy.cards.map((card) => (
                <div key={card.id} className="flex justify-center">
                  <InfoCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                    showLink={card.showLink}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Vehicle Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-[32px] font-semibold text-center text-[#2b2b2b] mb-8 md:mb-16 tracking-[-1.28px] leading-[1.1]">{landingData.findVehicle.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {landingData.findVehicle.categories.map((category) => (
              <CategoryCard key={category.id} icon={category.icon} title={category.title} count={category.count} label={category.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Prequalify Section */}
      <Prequalify items={landingData.prequalify} />

      {/* Arrow Inspected Section */}
      <section className="py-12 md:py-16 relative inspected-gradient">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-[32px] font-semibold text-[color:var(--color-text-primary)] mb-4 md:mb-6 tracking-[-0.64px] leading-[1.1]">{landingData.arrowInspected.title}</h2>
            <p className="text-[14px] md:text-[16px] capitalize text-[color:var(--color-text-primary)]">{landingData.arrowInspected.subtitle}</p>
          </div>

          {/* Mobile Carousel - visible on mobile, hidden on md and above */}
          <div className="md:hidden w-full overflow-hidden">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
              setApi={setInspectedCarouselApi}
            >
              <CarouselContent className="gap-4 ml-4 pr-4">
                {landingData.arrowInspected.cards.map((card) => (
                  <CarouselItem key={card.id} className="basis-[calc(100%-77px)] pl-0 shrink-0">
                    <InspectionCard
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      image={card.image}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="mt-6 flex justify-start pl-4">
              <CarouselDots
                totalSlides={landingData.arrowInspected.cards.length}
                currentSlide={currentInspectedSlide}
                onDotClick={(index) => {
                  inspectedCarouselApi?.scrollTo(index);
                }}
                className="gap-2"
              />
            </div>
          </div>

          {/* Desktop Grid - hidden on mobile, visible on md and above */}
          <div className="hidden md:grid grid-cols-4 gap-6 w-full">
            {landingData.arrowInspected.cards.map((card) => (
              <InspectionCard key={card.id} icon={card.icon} title={card.title} description={card.description} image={card.image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
