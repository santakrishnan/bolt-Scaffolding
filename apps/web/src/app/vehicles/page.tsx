import { VehicleTypeSelector } from 'ui';

/**
 * Vehicle Selection Demo Page
 * Demonstrates the VehicleTypeSelector component
 */
export default function VehicleSelectionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Container */}
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Vehicle Type Selector */}
        <VehicleTypeSelector className="mb-12" />

        {/* Additional Content Example */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Select a vehicle type above to continue
          </p>
        </div>
      </main>
    </div>
  );
}
