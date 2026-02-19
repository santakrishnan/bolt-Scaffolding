import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { buildVdpPath, parseVdpSegments } from '~/lib/routes'

interface Props {
  params: Promise<{ vdp: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vdp } = await params
  const vehicle = parseVdpSegments(vdp)

  const trimLabel = vehicle.trimSlug ? ` ${formatTrim(vehicle.trimSlug)}` : ''
  const title = `${vehicle.year} ${capitalize(vehicle.make)} ${capitalize(vehicle.model)}${trimLabel}`

  return {
    title,
    description: `View details, photos, and pricing for this ${title}. VIN: ${vehicle.vin}`,
    openGraph: {
      title,
      type: 'website',
    },
  }
}

export default async function VehicleDetailPage({ params }: Props) {
  const { vdp: segments } = await params

  // parseVdpSegments calls notFound() internally for invalid inputs
  const vehicle = parseVdpSegments(segments)

  // Canonical URL enforcement — redirect if casing/format differs
  const canonicalPath = buildVdpPath(vehicle)
  const currentPath = `/used-cars/${segments.join('/')}`
  if (currentPath !== canonicalPath) {
    redirect(canonicalPath)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article>
        <h1 className="mb-2 font-bold text-3xl">
          {vehicle.year} {capitalize(vehicle.make)} {capitalize(vehicle.model)}
          {vehicle.trimSlug ? ` ${formatTrim(vehicle.trimSlug)}` : ''}
        </h1>
        <p className="mb-8 text-muted-foreground text-sm">VIN: {vehicle.vin}</p>

        {/* Vehicle gallery — placeholder */}
        <section aria-label="Vehicle photos" className="mb-8 rounded-lg border p-8 text-center">
          <p className="text-muted-foreground">Vehicle photos will appear here.</p>
        </section>

        {/* Vehicle details — placeholder */}
        <section aria-label="Vehicle details" className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h2 className="mb-3 font-semibold text-xl">Details</h2>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <dt className="text-muted-foreground">Make</dt>
              <dd className="font-medium">{capitalize(vehicle.make)}</dd>
              <dt className="text-muted-foreground">Model</dt>
              <dd className="font-medium">{capitalize(vehicle.model)}</dd>
              <dt className="text-muted-foreground">Trim</dt>
              <dd className="font-medium">
                {vehicle.trimSlug ? formatTrim(vehicle.trimSlug) : '—'}
              </dd>
              <dt className="text-muted-foreground">Year</dt>
              <dd className="font-medium">{vehicle.year}</dd>
              <dt className="text-muted-foreground">VIN</dt>
              <dd className="font-mono text-xs">{vehicle.vin}</dd>
            </dl>
          </div>

          <div className="rounded-lg border p-4">
            <h2 className="mb-3 font-semibold text-xl">Pricing</h2>
            <p className="text-muted-foreground">Pricing details will appear here.</p>
          </div>
        </section>
      </article>
    </main>
  )
}

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function formatTrim(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.toUpperCase())
    .join(' ')
}
