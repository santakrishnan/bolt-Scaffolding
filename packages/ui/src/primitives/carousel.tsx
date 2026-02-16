'use client';

import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';

import { cn } from '@arrow-ecommerce/utils';

type CarouselApi = UseEmblaCarouselType[1];
interface CarouselItem {
  current: HTMLDivElement | null;
  scrollNext(): void;
  scrollPrev(): void;
  scrollTo(index: number): void;
  canScrollNext: boolean;
  canScrollPrev: boolean;
}

interface CarouselContextProps {
  carouselRef: React.RefObject<HTMLDivElement | null>;
  emblaRef: any;
  api?: CarouselApi;
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  current: number;
  count: number;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.ComponentProps<'div'> {
  opts?: any;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      []
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const onSelect = React.useCallback(() => {
      if (!emblaApi) {
        return;
      }

      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setCurrent(emblaApi.selectedScrollSnap());
      setCount(emblaApi.scrollSnapList().length);
    }, [emblaApi]);

    const scrollPrev = React.useCallback(() => {
      emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
      emblaApi?.scrollNext();
    }, [emblaApi]);

    const scrollTo = React.useCallback((index: number) => {
      emblaApi?.scrollTo(index);
    }, [emblaApi]);

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          scrollPrev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!emblaApi || !setApi) {
        return;
      }

      setApi(emblaApi);
    }, [emblaApi, setApi]);

    React.useEffect(() => {
      if (!emblaApi) {
        return;
      }

      onSelect();
      emblaApi.on('reInit', onSelect);
      emblaApi.on('select', onSelect);

      return () => {
        emblaApi?.off('select', onSelect);
      };
    }, [emblaApi, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          emblaRef,
          api: emblaApi,
          scrollNext,
          scrollPrev,
          scrollTo,
          canScrollNext,
          canScrollPrev,
          current,
          count,
        }}
      >
        <div
          ref={carouselRef}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative w-full', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { emblaRef } = useCarousel();
    return (
      <div ref={emblaRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn('flex', className)}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('min-w-0 shrink-0 grow-0 basis-full', className)}
      role="group"
      aria-roledescription="slide"
      {...props}
    />
  )
);
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      className={cn(
        'absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-100 disabled:opacity-50',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      className={cn(
        'absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-100 disabled:opacity-50',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
});
CarouselNext.displayName = 'CarouselNext';

interface CarouselDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  totalSlides: number;
  currentSlide: number;
  onDotClick?: (index: number) => void;
}

const CarouselDots = React.forwardRef<HTMLDivElement, CarouselDotsProps>(
  ({ className, totalSlides, currentSlide, onDotClick, ...props }, ref) => {
    const carouselContext = React.useContext(CarouselContext);

    const handleDotClick = (index: number) => {
      carouselContext?.scrollTo(index);
      onDotClick?.(index);
    };

    return (
      <div
        ref={ref}
        className={cn('flex justify-center gap-2', className)}
        role="tablist"
        {...props}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-2 w-2 rounded-full transition-colors',
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            )}
            role="tab"
            aria-selected={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    );
  }
);
CarouselDots.displayName = 'CarouselDots';

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  useCarousel,
  type CarouselApi,
};
