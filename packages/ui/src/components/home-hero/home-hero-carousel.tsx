'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from 'ui/lib/utils'

export interface CarouselSlide {
  src: string
  alt: string
  headline?: string
}

interface HomeHeroCarouselProps {
  slides: CarouselSlide[]
  autoAdvanceMs?: number
  pauseOnHover?: boolean
}

export function HomeHeroCarousel({
  slides,
  autoAdvanceMs = 10000,
  pauseOnHover = true,
}: HomeHeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)

  // Auto-advance
  React.useEffect(() => {
    if (isPaused || slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, autoAdvanceMs)

    return () => clearInterval(interval)
  }, [isPaused, slides.length, autoAdvanceMs])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
    </div>
  )
}
