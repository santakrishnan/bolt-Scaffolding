'use client';

import { useState } from 'react';
import { vehicleTypes } from '../../lib/vehicles/vehicle-types';
import { VehicleTypeCard } from './vehicle-type-card';

interface VehicleTypeSelectorProps {
  /**
   * Callback when a vehicle type is selected
   */
  onSelect?: (vehicleId: string) => void;
  /**
   * Optional default selected vehicle ID
   */
  defaultSelected?: string;
  /**
   * Optional className for the container
   */
  className?: string;
}

/**
 * VehicleTypeSelector - Main section component for vehicle type selection
 * Manages selection state and renders the grid of vehicle cards
 */
export function VehicleTypeSelector({
  onSelect,
  defaultSelected,
  className,
}: VehicleTypeSelectorProps) {
  const [selected, setSelected] = useState<string | null>(
    defaultSelected || null
  );

  const handleSelect = (vehicleId: string) => {
    setSelected(vehicleId);
    onSelect?.(vehicleId);
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <h2 className="mb-6 text-center text-2xl font-semibold text-foreground sm:mb-8 sm:text-3xl">
          What type of vehicle?
        </h2>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {vehicleTypes.map((vehicle) => (
            <VehicleTypeCard
              key={vehicle.id}
              image={vehicle.image}
              name={vehicle.name}
              description={vehicle.description}
              selected={selected === vehicle.id}
              onClick={() => handleSelect(vehicle.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
