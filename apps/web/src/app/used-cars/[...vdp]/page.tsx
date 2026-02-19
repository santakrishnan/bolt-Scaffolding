import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { buildVdpPath, parseVdpSegments } from "~/lib/routes";
import { VehicleDetailClient } from "./vehicle-detail-client";

interface Props {
  params: Promise<{ vdp: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vdp } = await params;
  const vehicle = parseVdpSegments(vdp);

  const trimLabel = vehicle.trimSlug ? ` ${formatTrim(vehicle.trimSlug)}` : "";
  const title = `${vehicle.year} ${capitalize(vehicle.make)} ${capitalize(vehicle.model)}${trimLabel}`;

  return {
    title,
    description: `View details, photos, and pricing for this ${title}. VIN: ${vehicle.vin}`,
    openGraph: {
      title,
      type: "website",
    },
  };
}

export default async function VehicleDetailsPage({ params }: Props) {
  const { vdp: segments } = await params;

  // parseVdpSegments calls notFound() internally for invalid inputs
  const vehicle = parseVdpSegments(segments);

  // Canonical URL enforcement — redirect if casing/format differs
  const canonicalPath = buildVdpPath(vehicle);
  const currentPath = `/used-cars/${segments.join("/")}`;
  if (currentPath !== canonicalPath) {
    redirect(canonicalPath);
  }

  return <VehicleDetailClient vehicle={vehicle} />;
}

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatTrim(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.toUpperCase())
    .join(" ");
}
