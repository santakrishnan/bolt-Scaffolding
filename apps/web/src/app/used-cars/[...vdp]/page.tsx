import { Button, Card, CardContent, CardHeader, CardTitle } from "@arrow-ecommerce/ui";
import { formatCurrency } from "@arrow-ecommerce/utils";
import { notFound } from "next/navigation";
import Link from "next/link";

// Mock data - in production, this would come from an API
const vehicles: Record<string, any> = {
  "toyota-camry-2023": {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 28500,
    mileage: 15000,
    vin: "1HGBH41JXMN109186",
    color: "Silver",
    transmission: "Automatic",
    fuelType: "Gasoline",
    description:
      "Well-maintained 2023 Toyota Camry with low mileage. Perfect for daily commuting.",
    features: ["Bluetooth", "Backup Camera", "Cruise Control", "Power Windows"],
    image: "https://via.placeholder.com/800x600",
  },
  "honda-accord-2023": {
    id: "2",
    make: "Honda",
    model: "Accord",
    year: 2023,
    price: 29500,
    mileage: 12000,
    vin: "1HGBH41JXMN109187",
    color: "White",
    transmission: "Automatic",
    fuelType: "Gasoline",
    description: "Nearly new Honda Accord with excellent condition and full service history.",
    features: ["Apple CarPlay", "Lane Assist", "Adaptive Cruise Control", "Leather Seats"],
    image: "https://via.placeholder.com/800x600",
  },
};

interface VDPPageProps {
  params: Promise<{
    vdp: string[];
  }>;
}

export default async function VDPPage({ params }: VDPPageProps) {
  const { vdp } = await params;
  const slug = vdp.join("/");
  const vehicle = vehicles[slug];

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Button asChild variant="ghost">
          <Link href="/used-cars/search">← Back to Search</Link>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <img
              src={vehicle.image}
              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            <p className="mt-2 text-3xl font-bold text-primary">{formatCurrency(vehicle.price)}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Vehicle Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Mileage</p>
                <p className="font-semibold">{vehicle.mileage.toLocaleString()} miles</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Color</p>
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
              <CardTitle>Features</CardTitle>
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

          <Button className="w-full" size="lg">
            Contact Dealer
          </Button>
        </div>
      </div>
    </div>
  );
}
