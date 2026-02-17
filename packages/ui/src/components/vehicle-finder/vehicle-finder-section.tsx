import { VehicleFinderGrid } from "./vehicle-finder-grid";
import { PrequalifyCarousel } from "./prequalify-carousel";
import { cn } from "ui/lib/utils";

interface VehicleFinderSectionProps {
  className?: string;
}

/**
 * VehicleFinderSection - Server Component
 * Main container for the Find your vehicle section
 */
export function VehicleFinderSection({
  className,
}: VehicleFinderSectionProps) {
  return (
    <section className={cn("w-full py-12 sm:py-16 lg:py-20", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          Find your vehicle
        </h2>

        {/* Grid Section */}
        <VehicleFinderGrid className="mb-6 sm:mb-8" />

        {/* Carousel Section */}
        <PrequalifyCarousel />
      </div>
    </section>
  );
}
