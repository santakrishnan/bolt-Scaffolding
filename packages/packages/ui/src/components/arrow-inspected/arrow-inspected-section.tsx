"use client";

import { inspectionFeatures } from "../../lib/inspection/features";
import { InspectionFeatureCard } from "./inspection-feature-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "ui/primitives/carousel";
import Autoplay from "embla-carousel-autoplay";

export function ArrowInspectedSection() {
  return (
    <section 
      className="w-full pt-0 pb-12 sm:pb-16 lg:pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-3 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Arrow Inspected®
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Every Vehicle Is Backed By Toyota&apos;s Commitment To Quality And
            Transparency
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="pl-4 sm:pl-6 lg:pl-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {inspectionFeatures.map((feature) => (
                  <CarouselItem key={feature.id} className="basis-[70%]">
                    <InspectionFeatureCard feature={feature} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inspectionFeatures.map((feature) => (
            <InspectionFeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
