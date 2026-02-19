import { cn } from '@tfs-ucmp/ui'
import { PrequalifyCarousel } from './prequalify-carousel'
import { VehicleFinderGrid } from './vehicle-finder-grid'

interface VehicleFinderSectionProps {
  className?: string
}

/**
 * VehicleFinderSection - Server Component
 * Main container for the Find your vehicle section
 */
export function VehicleFinderSection({ className }: VehicleFinderSectionProps) {
  return (
    <section className={cn('w-full py-12 sm:py-16 lg:py-20', className)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mb-8 text-center font-bold text-2xl sm:mb-12 sm:text-3xl lg:text-4xl">
          Find your vehicle
        </h2>

        {/* Grid Section */}
        <VehicleFinderGrid className="mb-6 sm:mb-8" />

        {/* Carousel Section */}
        <PrequalifyCarousel />
      </div>
    </section>
  )
}
