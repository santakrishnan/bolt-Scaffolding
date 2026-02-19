import { type CarouselSlide, HomeHeroCarousel } from './home-hero-carousel'
import { HomeHeroSearch } from './home-hero-search'
import { HomeHeroStats } from './home-hero-stats'
import { HomeHeroTitle } from './home-hero-title'

// Sample slides - replace with real images
const slides: CarouselSlide[] = [
  {
    src: '/images/heroes/Carousel-image-1.png',
    alt: 'Modern truck at dusk',
    headline: 'Find Your Next Vehicle',
  },
  {
    src: '/images/heroes/Carousel-image-2.png',
    alt: 'Sporty car on road',
  },
  {
    src: '/images/heroes/Carousel-image-3.png',
    alt: 'Family SUV',
  },
]

export function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background carousel */}
      <HomeHeroCarousel autoAdvanceMs={3000} slides={slides} />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 py-6 sm:px-6 lg:justify-between lg:px-8 lg:py-12">
        {/* Top content: Title + Search */}
        <div className="flex flex-col space-y-4 pt-4 lg:w-[715px] lg:flex-1 lg:justify-center lg:space-y-8 lg:pt-8">
          <HomeHeroTitle />
          <div className="max-w-2xl">
            <HomeHeroSearch />
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="mt-8 pb-4 lg:mt-auto lg:pb-8">
          <HomeHeroStats />
        </div>
      </div>
    </section>
  )
}
