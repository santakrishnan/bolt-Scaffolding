import { type FilterSections, filterSections } from './filter-sections'
import { mockVehicles, type Vehicle } from './mock-vehicles'

export type { FilterSections, MileageFilter, PriceFilter, YearFilter } from './filter-sections'
// Types
export type { Vehicle } from './mock-vehicles'

export type SearchPageData = {
  vehicles: Vehicle[]
  filterSections: FilterSections
}

// Server-side data fetching function
export async function getSearchPageData(): Promise<SearchPageData> {
  // In the future, this could fetch from an API
  return {
    vehicles: mockVehicles,
    filterSections,
  }
}
