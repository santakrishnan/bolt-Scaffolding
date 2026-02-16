import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@arrow-ecommerce/ui";
import { formatCurrency } from "@arrow-ecommerce/utils";
import Link from "next/link";

interface Vehicle {
  id: string;
  listingId: string;
  make: string;
  model: string;
  year: number;
  trim?: string;
  trimSlug?: string;
  price: number;
  mileage: number;
  image: string;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  searchContext?: string; // Optional search context token
}

/**
 * VehicleCard - Feature component for displaying vehicle information
 * Server Component by default
 * Links to hierarchical VDP: /cars/{make}/{model}/{year}/{trimSlug}/{listingId}
 */
export function VehicleCard({ vehicle, searchContext }: VehicleCardProps) {
  // Build hierarchical VDP URL
  const vdpUrl = `/cars/${vehicle.make.toLowerCase()}/${vehicle.model.toLowerCase()}/${vehicle.year}/${vehicle.trimSlug || "base"}/${vehicle.listingId}${searchContext ? `?context=${searchContext}` : ""}`;

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full bg-muted">
        <img
          src={vehicle.image}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}${vehicle.trim ? ` ${vehicle.trim}` : ""}`}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>
          {vehicle.year} {vehicle.make} {vehicle.model}
        </CardTitle>
        <CardDescription>
          {vehicle.trim && <span className="font-medium">{vehicle.trim} • </span>}
          {vehicle.mileage.toLocaleString()} miles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{formatCurrency(vehicle.price)}</p>
        <Button asChild className="mt-4 w-full">
          <Link href={vdpUrl}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
