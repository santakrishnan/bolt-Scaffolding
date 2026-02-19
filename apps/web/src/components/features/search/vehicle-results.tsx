'use client'

import { ChevronDownIcon, FilterLinesIcon, XIcon } from '@/components/assets/icons'
import type { Vehicle } from '~/lib/search/mock-vehicles'
import { CarCard } from './car-card'

export type ActiveFilter = {
  label: string
  type: string
  value: string
}

export type VehicleResultsProps = {
  vehicles: Vehicle[]
  searchQuery: string
  activeFilters: ActiveFilter[]
  onToggleFilter: () => void
  onRemoveFilter: (type: string, value: string) => void
  onReset: () => void
  currentPage: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

export function VehicleResults({
  vehicles,
  searchQuery,
  activeFilters,
  onToggleFilter,
  onRemoveFilter,
  onReset,
  currentPage,
  itemsPerPage,
  onPageChange,
}: VehicleResultsProps) {
  const activeFilterCount = activeFilters.length

  // Filter vehicles based on search query
  const filteredVehicles = vehicles.filter((vehicle) => {
    if (!searchQuery.trim()) {
      return true
    }
    const query = searchQuery.toLowerCase()
    return (
      vehicle.title.toLowerCase().includes(query) ||
      vehicle.miles.toLowerCase().includes(query) ||
      vehicle.labels.some((label) => label.toLowerCase().includes(query))
    )
  })

  const vehicleCount = filteredVehicles.length
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedVehicles = filteredVehicles.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className='px-4 py-6 sm:px-6 lg:px-8'>
      <div className="container mx-auto max-w-7xl">
        {/* Initial State - No Filters Applied */}
        {activeFilterCount === 0 && (
          <div className='mb-6 flex items-center gap-3'>
            <button
              className='inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-300'
              onClick={onToggleFilter}
            >
              <FilterLinesIcon className='h-5 w-5' />
              <span>Filter and Sort</span>
            </button>
            <button
              className='rounded-full bg-gray-200 px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-300'
              onClick={onReset}
            >
              Reset
            </button>
          </div>
        )}

        {/* After Filters Applied - Vehicle Count + Sort + Filter Tags */}
        {activeFilterCount > 0 && (
          <div className='mb-6 flex items-start gap-6 border-gray-200 border-b pb-4'>
            {/* Left: Vehicle Count & Sort */}
            <div className='flex flex-shrink-0 items-center gap-3'>
              <button
                className='flex h-10 w-10 items-center justify-center rounded-full bg-red-500 transition-colors hover:bg-red-600'
                onClick={onToggleFilter}
              >
                <FilterLinesIcon className='h-5 w-5 text-white' />
              </button>
              <div>
                <div className='font-semibold text-black text-lg'>
                  {vehicleCount} vehicles found
                </div>
                <div className='text-gray-600 text-sm'>
                  Sort by:{' '}
                  <button className='inline-flex items-center gap-1 font-medium text-black hover:underline'>
                    Recommended <ChevronDownIcon className='h-3 w-3' />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Filter Tags */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-end gap-2">
                {activeFilters.map((filter, idx) => (
                  <span
                    className='inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-gray-300 bg-white px-3 py-1 text-black text-xs'
                    key={`${filter.type}-${filter.value}-${idx}`}
                  >
                    {filter.label}
                    <button
                      className='text-black transition-colors hover:text-red-500'
                      onClick={() => onRemoveFilter(filter.type, filter.value)}
                    >
                      <XIcon className='h-3 w-3' />
                    </button>
                  </span>
                ))}
                <button
                  className='whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-white text-xs transition-colors hover:bg-black'
                  onClick={onReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Vehicle Grid */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {paginatedVehicles.map((vehicle) => (
            <CarCard key={vehicle.id} {...vehicle} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className='mt-10 flex items-center justify-center gap-2'>
            <button
              className='rounded-full border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50'
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
            >
              Previous
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  className={`h-10 w-10 rounded-full font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-red-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  key={page}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className='rounded-full border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50'
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}

        {/* Page Info */}
        {filteredVehicles.length > 0 && (
          <div className='mt-4 text-center text-gray-500 text-sm'>
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredVehicles.length)}{' '}
            of {filteredVehicles.length} vehicles
          </div>
        )}

        {/* No Results */}
        {filteredVehicles.length === 0 && (
          <div className='py-12 text-center'>
            <p className="text-gray-500 text-lg">No vehicles found for "{searchQuery}"</p>
            <p className='mt-2 text-gray-400 text-sm'>Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </section>
  )
}
