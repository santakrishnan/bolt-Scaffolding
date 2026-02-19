"use client";

import {
  DealerNotesSection,
  VehicleDetailsTabs,
  VehiclePDP,
  VehicleRating,
} from "~/components/features/vdp";
import type { VdpParams } from "~/lib/routes";

interface VehicleDetailClientProps {
  vehicle: VdpParams;
}

export function VehicleDetailClient({ vehicle }: VehicleDetailClientProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        {/* Vehicle PDP Section */}
        <div className="container mx-auto py-12 sm:px-6 lg:px-8">
          <VehiclePDP />
        </div>

        {/* Tabs and Rating section - full width background */}
        <div
          className="mb-12 w-full py-6"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <VehicleDetailsTabs showInspectionSection={true} />

            {/* Rating Section */}
            <div className="mt-6">
              <VehicleRating
                distribution={[
                  { stars: 5, count: 488 },
                  { stars: 4, count: 74 },
                  { stars: 3, count: 14 },
                  { stars: 2, count: 0 },
                  { stars: 1, count: 0 },
                ]}
                rating={4.7}
                reviewCount={118}
                title={`${vehicle.year} ${capitalize(vehicle.make)} ${capitalize(vehicle.model)}`}
              />
            </div>
          </div>
        </div>

        {/* Dealer Notes & Info Section */}
        <DealerNotesSection
          onReviewsClick={() => console.log("View Reviews clicked")}
          onTestDriveClick={() => console.log("Schedule Test Drive clicked")}
        />
      </main>
    </div>
  );
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
