import 'server-only'

import type { CarsSearchContext } from './context-token'

export type VdpParams = {
  make: string
  model: string
  year: string
  trimSlug: string
  vinId: string
}

export function buildVdpPath({ make, model, year, trimSlug, vinId }: VdpParams): string {
  return `/cars/${encodeURIComponent(make)}/${encodeURIComponent(model)}/${encodeURIComponent(year)}/${encodeURIComponent(trimSlug)}/${encodeURIComponent(vinId)}`
}

export function buildCanonicalVdpPath(params: VdpParams): string {
  // Canonical should not include any search params.
  return buildVdpPath(params)
}

export function buildSrpHrefFromContext(context: CarsSearchContext): string {
  const searchParams = new URLSearchParams()

  if (context.make) searchParams.set('make', context.make)
  if (context.model) searchParams.set('model', context.model)
  if (context.year) searchParams.set('year', context.year)
  if (context.trim) searchParams.set('trim', context.trim)
  if (context.q) searchParams.set('q', context.q)
  if (context.page) searchParams.set('page', context.page)
  if (context.sort) searchParams.set('sort', context.sort)

  const qs = searchParams.toString()
  return qs ? `/cars?${qs}` : '/cars'
}

export function buildFallbackSrpHrefFromVdpParams(params: VdpParams): string {
  return buildSrpHrefFromContext({
    make: params.make,
    model: params.model,
    year: params.year,
    trim: params.trimSlug,
  })
}
