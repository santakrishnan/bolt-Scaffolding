import { Button, Card, CardContent, CardHeader, CardTitle } from "@arrow-ecommerce/ui";
import { formatCurrency } from "@arrow-ecommerce/utils";
import { notFound } from "next/navigation";
import Link from "next/link";

// Mock data - in production, this would come from an API/database
const vehicles: Record<string, any> = {
  "768168090": {
    listingId: "768168090",
    vin: "4T1B11HK5KU123456",
    make: "Toyota",
    model: "Camry",
    year: 2024,
    trim: "SE Hybrid",
    trimSlug: "se-hybrid",
    price: 28500,
    mileage: 15000,
    color: "Silver",
    transmission: "Automatic",
    fuelType: "Hybrid",
    description: "Well-maintained 2024 Toyota Camry SE Hybrid with low mileage. Perfect for daily commuting with excellent fuel economy.",
    features: ["Bluetooth", "Backup Camera", "Cruise Control", "Power Windows", "Hybrid Engine"],
    images: ["https://via.placeholder.com/800x600"],
  },
  "1C4JJXR66NW155836": {
    listingId: "1C4JJXR66NW155836",
    vin: "1C4JJXR66NW155836",
    make: "Jeep",
    model: "Wrangler",
    year: 2022,
    trim: "Rubicon",
    trimSlug: "rubicon",
    price: 45000,
    mileage: 12000,
    color: "Black",
    transmission: "Automatic",
    fuelType: "Gasoline",
    description: "Legendary Jeep Wrangler Rubicon with off-road package. Trail-rated and ready for adventure.",
    features: ["4WD", "Removable Top", "Off-Road Package", "Apple CarPlay", "LED Lights"],
    images: ["https://via.placeholder.com/800x600"],
  },
  "890123456": {
    listingId: "890123456",
    vin: "1HGCV1F30NA123456",
    make: "Honda",
    model: "Accord",
    year: 2023,
    trim: "EX-L",
    trimSlug: "ex-l",
    price: 29500,
    mileage: 8000,
    color: "White",
    transmission: "Automatic",
    fuelType: "Gasoline",
    description: "Nearly new Honda Accord EX-L with excellent condition and full service history.",
    features: ["Apple CarPlay", "Lane Assist", "Adaptive Cruise Control", "Leather Seats", "Sunroof"],
    images: ["https://via.placeholder.com/800x600"],
  },
};

interface VDPPageProps {
  params: Promise<{
    make: string;
    model: string;
    year: string;
    trimVin: string[];
  }>;
  searchParams: Promise<{
    context?: string; // Search context token for "Back to Results"
  }>;
}

/**
 * VDP Page - Vehicle Detail Page
 * Hierarchical URL structure: /cars/{make}/{model}/{year}/{trimSlug}/{listingId}
 * Example: /cars/toyota/camry/2024/se-hybrid/768168090
 */
export default async function VDPPage({ params, searchParams }: VDPPageProps) {
  const { make, model, year, trimVin } = await params;
  const { context } = await searchParams;

  // Parse trimVin - can be either:
  // 1. [trimSlug, listingId] -> /cars/toyota/camry/2024/se-hybrid/768168090
  // 2. [trimSlug-listingId]  -> /cars/toyota/camry/2024/se-hybrid-768168090
  let listingId: string;
  let trimSlug: string;

  if (trimVin.length === 2) {
    // Format: /cars/toyota/camry/2024/se-hybrid/768168090
    [trimSlug, listingId] = trimVin;
  } else if (trimVin.length === 1) {
    // Format: /cars/toyota/camry/2024/se-hybrid-768168090
    const parts = trimVin[0].split("-");
    listingId = parts[parts.length - 1];
    trimSlug = parts.slice(0, -1).join("-");
  } else {
    notFound();
    return;
  }

  // Fetch vehicle data by listingId
  const vehicle = vehicles[listingId];

  if (!vehicle) {
    notFound();
  }

  // Validate URL segments match vehicle data
  if (
    vehicle.make.toLowerCase() !== make.toLowerCase() ||
    vehicle.model.toLowerCase() !== model.toLowerCase() ||
    vehicle.year.toString() !== year ||
    vehicle.trimSlug !== trimSlug
  ) {
    notFound();
  }

  // Build breadcrumb trail from URL segments
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Cars", href: "/cars" },
    { label: vehicle.make, href: `/cars/${make}` },
    { label: vehicle.model, href: `/cars/${make}/${model}` },
    { label: year, href: `/cars/${make}/${model}/${year}` },
    { label: "This Vehicle", href: "#" },
  ];

  // Reconstruct SRP URL with context
  const backToResultsUrl = context
    ? `/used-cars/search?context=${context}`
    : `/used-cars/search?make=${make}&model=${model}&year=${year}`;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 flex items-center space-x-2 text-sm text-muted-foreground">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-foreground">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-foreground">
                {crumb.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Back to Results Button */}
      <div className="mb-4">
        <Button asChild variant="ghost">
          <Link href={backToResultsUrl}>← Back to Results</Link>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Vehicle Image */}
        <div>
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <img
              src={vehicle.images[0]}
              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            <p className="mt-1 text-xl text-muted-foreground">{vehicle.trim}</p>
            <p className="mt-2 text-3xl font-bold text-primary">{formatCurrency(vehicle.price)}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Vehicle Specifications</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Mileage</p>
                <p className="font-semibold">{vehicle.mileage.toLocaleString()} miles</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Exterior Color</p>
                <p className="font-semibold">{vehicle.color}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Transmission</p>
                <p className="font-semibold">{vehicle.transmission}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fuel Type</p>
                <p className="font-semibold">{vehicle.fuelType}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Trim</p>
                <p className="font-semibold">{vehicle.trim}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Listing ID</p>
                <p className="font-mono text-sm">{vehicle.listingId}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">VIN</p>
                <p className="font-mono text-sm">{vehicle.vin}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{vehicle.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features & Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-2">
                {vehicle.features.map((feature: string) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button className="flex-1" size="lg">
              Contact Dealer
            </Button>
            <Button variant="outline" className="flex-1" size="lg">
              Schedule Test Drive
            </Button>
          </div>
        </div>
      </div>

      {/* SEO-friendly structured data for AEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Car",
            name: `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`,
            brand: {
              "@type": "Brand",
              name: vehicle.make,
            },
            model: vehicle.model,
            productionDate: vehicle.year,
            vehicleConfiguration: vehicle.trim,
            mileageFromOdometer: {
              "@type": "QuantitativeValue",
              value: vehicle.mileage,
              unitCode: "SMI",
            },
            color: vehicle.color,
            vehicleTransmission: vehicle.transmission,
            fuelType: vehicle.fuelType,
            vehicleIdentificationNumber: vehicle.vin,
            offers: {
              "@type": "Offer",
              price: vehicle.price,
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </div>
  );
}

/**
 * Generate static params for pre-rendering (optional)
 * In production, this would fetch from your vehicle database
 */
export async function generateStaticParams() {
  // Example: Pre-render top vehicles
  return Object.values(vehicles).map((vehicle: any) => ({
    make: vehicle.make.toLowerCase(),
    model: vehicle.model.toLowerCase(),
    year: vehicle.year.toString(),
    trimVin: [vehicle.trimSlug, vehicle.listingId],
  }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: VDPPageProps) {
  const { make, model, year, trimVin } = await params;

  let listingId: string;
  if (trimVin.length === 2) {
    listingId = trimVin[1];
  } else {
    const parts = trimVin[0].split("-");
    listingId = parts[parts.length - 1];
  }

  const vehicle = vehicles[listingId];

  if (!vehicle) {
    return {
      title: "Vehicle Not Found",
    };
  }

  return {
    title: `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim} for Sale | Arrow E-Commerce`,
    description: vehicle.description,
    openGraph: {
      title: `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`,
      description: vehicle.description,
      images: vehicle.images,
    },
  };
}
