'use client'

import {
  Button,
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  cn,
} from '@tfs-ucmp/ui'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { prequalifySlides } from './carousel-data'

interface PrequalifyCarouselProps {
  className?: string
}

/**
 * PrequalifyCarousel - Client Component
 * Auto-playing carousel with custom indicators
 */
export function PrequalifyCarousel({ className }: PrequalifyCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    // Auto-play functionality
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <Carousel
      className={cn('relative w-full', className)}
      opts={{
        align: 'start',
        loop: true,
      }}
      setApi={setApi}
    >
      <CarouselContent className="h-full w-full">
        {prequalifySlides.map((slide) => (
          <CarouselItem className="h-full w-full basis-full pl-0" key={slide.id}>
            {/* Mobile Layout: Image on top, content below */}
            <div className="overflow-hidden rounded-xl sm:hidden">
              {/* Image Section */}
              <div className="relative h-[200px] w-full">
                <Image
                  alt={slide.title}
                  className="object-cover"
                  fill
                  priority
                  sizes="100vw"
                  src={slide.image}
                />
                {/* Gradient blend from image to black */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black" />
              </div>

              {/* Content Section - Black background */}
              <div className="-mt-1 bg-black px-6 py-8 text-center text-white">
                <h2 className="mb-3 font-bold text-xl uppercase">{slide.title}</h2>
                <p className="mb-6 text-sm leading-relaxed">{slide.subtitle}</p>
                <Button
                  className="w-full rounded-full bg-[#EB0A1E] px-8 font-semibold text-white hover:bg-[#EB0A1E]/90"
                  size="lg"
                >
                  {slide.ctaText}
                </Button>
              </div>
            </div>

            {/* Desktop Layout: Overlay design with gradient */}
            <div className="relative hidden h-[400px] w-full overflow-hidden rounded-xl sm:block lg:h-[500px]">
              {/* Background Image */}
              <Image
                alt={slide.title}
                className="object-cover"
                fill
                priority
                sizes="100vw"
                src={slide.image}
              />

              {/* Gradient Overlay - Left side gradient */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: 'linear-gradient(91.94deg, #000000 28.21%, rgba(0, 0, 0, 0) 50.16%)',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-12 text-white lg:px-16">
                <h2 className="mb-4 max-w-md font-bold text-3xl uppercase lg:text-4xl">
                  {slide.title}
                </h2>
                <p className="mb-8 max-w-md text-base leading-relaxed">{slide.subtitle}</p>
                <Button
                  className="rounded-full bg-[#EB0A1E] px-8 font-semibold text-white hover:bg-[#EB0A1E]/90"
                  size="lg"
                >
                  {slide.ctaText}
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Carousel Indicators */}
      <CarouselDots className="absolute right-0 bottom-4 left-0 z-30 gap-3 pt-0 [&>button[class~='w-6']]:w-2 [&>button[class~='w-6']]:bg-white [&>button[class~='w-6']]:ring-2 [&>button[class~='w-6']]:ring-white [&>button[class~='w-6']]:ring-offset-2 [&>button[class~='w-6']]:ring-offset-black [&>button]:h-2 [&>button]:w-2 [&>button]:rounded-full [&>button]:bg-white/40 [&>button]:transition-all [&>button]:hover:bg-white/60" />
    </Carousel>
  )
}
