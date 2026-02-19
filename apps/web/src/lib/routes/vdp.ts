import { notFound } from 'next/navigation'
import { z } from 'zod'

/**
 * VDP (Vehicle Detail Page) route segment structure:
 *   /used-cars/{make}/{model}/{trimSlug}/{year}/{VIN}
 *
 * The catch-all [...vdp] receives these as an array of segments.
 * This module validates and parses those segments using Zod,
 * handling all exception scenarios for malformed URLs.
 */

/** Placeholder used in the URL when trim is not available */
const TRIM_PLACEHOLDER = '-'

// Zod schemas for individual fields

/** Alphanumeric slug with hyphens (e.g. "toyota", "corolla-se") */
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const slugSchema = z.string().regex(SLUG_PATTERN, 'Invalid slug')

/** Trim can be a valid slug OR the "-" placeholder (parsed as null) */
const trimSchema = z
  .string()
  .refine((v) => v === TRIM_PLACEHOLDER || SLUG_PATTERN.test(v), 'Invalid trim')
  .transform((v) => (v === TRIM_PLACEHOLDER ? null : v))

/** 4-digit year between 1900 and current year + 2 */
const yearSchema = z
  .string()
  .regex(/^\d{4}$/, 'Year must be 4 digits')
  .transform(Number)
  .refine((y) => y >= 1900 && y <= new Date().getFullYear() + 2, 'Year out of range')

/** Standard 17-character VIN (alphanumeric, excluding I, O, Q) */
const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]{17}$/
const vinSchema = z
  .string()
  .transform((v) => v.toUpperCase())
  .refine((v) => VIN_PATTERN.test(v), 'Invalid VIN')

// Combined schema: validates a 5-element segments array

const vdpSegmentsSchema = z
  .tuple([slugSchema, slugSchema, trimSchema, yearSchema, vinSchema])
  .transform(([make, model, trimSlug, year, vin]) => ({
    make,
    model,
    trimSlug,
    year,
    vin,
  }))

/** Inferred type from the Zod schema */
export type VdpParams = z.output<typeof vdpSegmentsSchema>

/**
 * Parses and validates the catch-all segments for a VDP route.
 *
 * Exception scenarios handled:
 *
 * 1. **Too few segments** (e.g. `/used-cars/toyota`) → 404
 * 2. **Too many segments** (e.g. `/used-cars/toyota/camry/se/2024/VIN/extra`) → 404
 * 3. **Invalid make/model/trim** (non-slug characters) → 404
 * 4. **Missing trim** (`-` placeholder) → parsed as `null`
 * 5. **Invalid year** (non-numeric, out of range) → 404
 * 6. **Invalid VIN** (wrong length or illegal characters) → 404
 *
 * @returns Parsed VDP params, or calls `notFound()` (never returns on failure)
 */
export function parseVdpSegments(segments: string[]): VdpParams {
  const result = vdpSegmentsSchema.safeParse(segments)

  if (!result.success) {
    notFound()
  }

  return result.data
}

/**
 * Constructs a canonical VDP path from typed params.
 * Useful for redirects when the URL casing or order is wrong.
 */
export function buildVdpPath(params: VdpParams): string {
  const trim = params.trimSlug ?? TRIM_PLACEHOLDER
  return `/used-cars/${params.make}/${params.model}/${trim}/${params.year}/${params.vin}`
}
