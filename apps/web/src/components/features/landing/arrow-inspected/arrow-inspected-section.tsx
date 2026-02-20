'use client'

import { Carousel, CarouselContent, CarouselItem } from '@tfs-ucmp/ui'
import Autoplay from 'embla-carousel-autoplay'
import { inspectionFeatures } from '../../../../data/inspection/features'
import { InspectionFeatureCard } from './inspection-feature-card'

export function ArrowInspectedSection() {
  return (
    <section className="w-full pt-0 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-8 flex max-w-3xl flex-col gap-3 text-center sm:mb-12">
          <h2 className="font-bold text-2xl leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Arrow Inspected®
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
            Every Vehicle Is Backed By Toyota&apos;s Commitment To Quality And Transparency
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="-mx-4 sm:-mx-6 md:hidden lg:-mx-8">
          <div className="pl-4 sm:pl-6 lg:pl-8">
            <Carousel
              opts={{
                align: 'start',
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
                  <CarouselItem className="basis-[70%]" key={feature.id}>
                    <InspectionFeatureCard feature={feature} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {inspectionFeatures.map((feature) => (
            <InspectionFeatureCard feature={feature} key={feature.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
