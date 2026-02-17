import { vehicleFinderOptions } from "./data";
import { VehicleFinderCard } from "./vehicle-finder-card";
import { cn } from "ui/lib/utils";

interface VehicleFinderGridProps {
  className?: string;
}

/**
 * VehicleFinderGrid - Server Component
 * Displays a grid of vehicle finder option cards
 */
export function VehicleFinderGrid({ className }: VehicleFinderGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
        className
      )}
    >
      {vehicleFinderOptions.map((option) => (
        <VehicleFinderCard key={option.id} option={option} />
      ))}
    </div>
  );
}
