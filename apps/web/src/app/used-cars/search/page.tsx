import { VehicleCard } from "@/components/features/vehicle-card";

// Mock data - in production, this would come from search API
const vehicles = [
  {
    id: "1",
    listingId: "768168090",
    make: "Toyota",
    model: "Camry",
    year: 2024,
    trim: "SE Hybrid",
    trimSlug: "se-hybrid",
    price: 28500,
    mileage: 15000,
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: "2",
    listingId: "890123456",
    make: "Honda",
    model: "Accord",
    year: 2023,
    trim: "EX-L",
    trimSlug: "ex-l",
    price: 29500,
    mileage: 8000,
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: "3",
    listingId: "1C4JJXR66NW155836",
    make: "Jeep",
    model: "Wrangler",
    year: 2022,
    trim: "Rubicon",
    trimSlug: "rubicon",
    price: 45000,
    mileage: 12000,
    image: "https://via.placeholder.com/400x300",
  },
];

interface SearchPageProps {
  searchParams: Promise<{
    make?: string;
    model?: string;
    year?: string;
    context?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const { make, model, year, context } = params;

  // Filter vehicles based on search params (in production, this would be a database query)
  let filteredVehicles = vehicles;
  if (make) {
    filteredVehicles = filteredVehicles.filter((v) => v.make.toLowerCase() === make.toLowerCase());
  }
  if (model) {
    filteredVehicles = filteredVehicles.filter(
      (v) => v.model.toLowerCase() === model.toLowerCase(),
    );
  }
  if (year) {
    filteredVehicles = filteredVehicles.filter((v) => v.year.toString() === year);
  }

  // Generate search context token (in production, encode search state)
  const searchContext = context || Buffer.from(JSON.stringify({ make, model, year })).toString("base64");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          {make || model || year ? "Filtered " : ""}Search Results
        </h1>
        <p className="mt-2 text-muted-foreground">
          Found {filteredVehicles.length} vehicle{filteredVehicles.length !== 1 ? "s" : ""}{" "}
          {make && `• Make: ${make}`}
          {model && ` • Model: ${model}`}
          {year && ` • Year: ${year}`}
        </p>
      </div>

      {/* Filter Summary */}
      {(make || model || year) && (
        <div className="mb-6 flex flex-wrap gap-2">
          {make && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium">
              {make}
            </span>
          )}
          {model && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium">
              {model}
            </span>
          )}
          {year && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium">
              {year}
            </span>
          )}
        </div>
      )}

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} searchContext={searchContext} />
        ))}
      </div>

      {/* No Results */}
      {filteredVehicles.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            No vehicles found matching your criteria. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const { make, model, year } = params;

  let title = "Search Used Cars";
  if (make || model || year) {
    const parts = [];
    if (year) parts.push(year);
    if (make) parts.push(make);
    if (model) parts.push(model);
    title = `${parts.join(" ")} for Sale`;
  }

  return {
    title: `${title} | Arrow E-Commerce`,
    description: `Browse our selection of quality used vehicles. ${make ? `${make} ` : ""}${model ? `${model} ` : ""}${year ? `${year} ` : ""}cars for sale.`,
  };
}
