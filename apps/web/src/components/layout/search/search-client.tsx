'use client'

import { useState } from 'react'
import { FilterSidebar, type FilterState } from '~/components/features/search/filter-sidebar'
import { SearchHero } from '~/components/features/search/search-hero'
import { VehicleResults } from '~/components/features/search/vehicle-results'
import type { Vehicle } from '~/lib/search/data'

interface SearchClientProps {
  vehicles: Vehicle[]
}

export function SearchClient({ vehicles }: SearchClientProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const itemsPerPage = 12

  // Compute filtered vehicle count based on search query
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

  // Filter state
  const [filterState, setFilterState] = useState<FilterState>({
    selectedPriceQuick: '',
    selectedYearQuick: '',
    selectedMileage: '',
    selectedBodyStyles: [],
    selectedExteriorColors: [],
    selectedInteriorColors: [],
    selectedFuelTypes: [],
    selectedModels: [],
    selectedSafetyFeatures: [],
    selectedComfortFeatures: [],
    selectedTechFeatures: [],
    selectedExteriorFeatures: [],
    selectedPerformanceFeatures: [],
    selectedSeatingCapacity: [],
    selectedDrivetrains: [],
    selectedTransmissions: [],
    inspection160: false,
  })

  const handleFilterChange = (key: keyof FilterState, value: FilterState[keyof FilterState]) => {
    setFilterState((prev) => ({ ...prev, [key]: value }))
  }

  // Get all active filters as an array for display
  const getActiveFilters = () => {
    const filters: { label: string; type: string; value: string }[] = []

    if (filterState.selectedPriceQuick) {
      filters.push({
        label: filterState.selectedPriceQuick,
        type: 'price',
        value: filterState.selectedPriceQuick,
      })
    }
    if (filterState.selectedYearQuick) {
      filters.push({
        label: filterState.selectedYearQuick,
        type: 'year',
        value: filterState.selectedYearQuick,
      })
    }
    if (filterState.selectedMileage) {
      filters.push({
        label: filterState.selectedMileage,
        type: 'mileage',
        value: filterState.selectedMileage,
      })
    }
    filterState.selectedBodyStyles.forEach((s) =>
      filters.push({ label: s, type: 'bodyStyle', value: s })
    )
    filterState.selectedExteriorColors.forEach((c) =>
      filters.push({ label: c, type: 'exteriorColor', value: c })
    )
    filterState.selectedInteriorColors.forEach((c) =>
      filters.push({ label: c, type: 'interiorColor', value: c })
    )
    filterState.selectedFuelTypes.forEach((f) =>
      filters.push({ label: f, type: 'fuelType', value: f })
    )
    filterState.selectedModels.forEach((m) => filters.push({ label: m, type: 'model', value: m }))
    filterState.selectedSafetyFeatures.forEach((f) =>
      filters.push({ label: f, type: 'safetyFeature', value: f })
    )
    filterState.selectedComfortFeatures.forEach((f) =>
      filters.push({ label: f, type: 'comfortFeature', value: f })
    )
    filterState.selectedTechFeatures.forEach((f) =>
      filters.push({ label: f, type: 'techFeature', value: f })
    )
    filterState.selectedExteriorFeatures.forEach((f) =>
      filters.push({ label: f, type: 'exteriorFeature', value: f })
    )
    filterState.selectedPerformanceFeatures.forEach((f) =>
      filters.push({ label: f, type: 'performanceFeature', value: f })
    )
    filterState.selectedSeatingCapacity.forEach((f) =>
      filters.push({ label: f, type: 'seatingCapacity', value: f })
    )
    filterState.selectedDrivetrains.forEach((d) =>
      filters.push({ label: d, type: 'drivetrain', value: d })
    )
    filterState.selectedTransmissions.forEach((t) =>
      filters.push({ label: t, type: 'transmission', value: t })
    )
    if (filterState.inspection160) {
      filters.push({ label: '160-Point Inspection', type: 'inspection', value: '160' })
    }

    return filters
  }

  const activeFilters = getActiveFilters()

  const removeFilter = (type: string, value: string) => {
    switch (type) {
      case 'price':
        handleFilterChange('selectedPriceQuick', '')
        break
      case 'year':
        handleFilterChange('selectedYearQuick', '')
        break
      case 'mileage':
        handleFilterChange('selectedMileage', '')
        break
      case 'bodyStyle':
        handleFilterChange(
          'selectedBodyStyles',
          filterState.selectedBodyStyles.filter((v) => v !== value)
        )
        break
      case 'exteriorColor':
        handleFilterChange(
          'selectedExteriorColors',
          filterState.selectedExteriorColors.filter((v) => v !== value)
        )
        break
      case 'interiorColor':
        handleFilterChange(
          'selectedInteriorColors',
          filterState.selectedInteriorColors.filter((v) => v !== value)
        )
        break
      case 'fuelType':
        handleFilterChange(
          'selectedFuelTypes',
          filterState.selectedFuelTypes.filter((v) => v !== value)
        )
        break
      case 'model':
        handleFilterChange(
          'selectedModels',
          filterState.selectedModels.filter((v) => v !== value)
        )
        break
      case 'safetyFeature':
        handleFilterChange(
          'selectedSafetyFeatures',
          filterState.selectedSafetyFeatures.filter((v) => v !== value)
        )
        break
      case 'comfortFeature':
        handleFilterChange(
          'selectedComfortFeatures',
          filterState.selectedComfortFeatures.filter((v) => v !== value)
        )
        break
      case 'techFeature':
        handleFilterChange(
          'selectedTechFeatures',
          filterState.selectedTechFeatures.filter((v) => v !== value)
        )
        break
      case 'exteriorFeature':
        handleFilterChange(
          'selectedExteriorFeatures',
          filterState.selectedExteriorFeatures.filter((v) => v !== value)
        )
        break
      case 'performanceFeature':
        handleFilterChange(
          'selectedPerformanceFeatures',
          filterState.selectedPerformanceFeatures.filter((v) => v !== value)
        )
        break
      case 'seatingCapacity':
        handleFilterChange(
          'selectedSeatingCapacity',
          filterState.selectedSeatingCapacity.filter((v) => v !== value)
        )
        break
      case 'drivetrain':
        handleFilterChange(
          'selectedDrivetrains',
          filterState.selectedDrivetrains.filter((v) => v !== value)
        )
        break
      case 'transmission':
        handleFilterChange(
          'selectedTransmissions',
          filterState.selectedTransmissions.filter((v) => v !== value)
        )
        break
      case 'inspection':
        handleFilterChange('inspection160', false)
        break
    }
  }

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen)
  const resetFilters = () => {
    setFilterState({
      selectedPriceQuick: '',
      selectedYearQuick: '',
      selectedMileage: '',
      selectedBodyStyles: [],
      selectedExteriorColors: [],
      selectedInteriorColors: [],
      selectedFuelTypes: [],
      selectedModels: [],
      selectedSafetyFeatures: [],
      selectedComfortFeatures: [],
      selectedTechFeatures: [],
      selectedExteriorFeatures: [],
      selectedPerformanceFeatures: [],
      selectedSeatingCapacity: [],
      selectedDrivetrains: [],
      selectedTransmissions: [],
      inspection160: false,
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <FilterSidebar
        filterState={filterState}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilterChange={handleFilterChange}
        onReset={resetFilters}
        vehicleCount={vehicleCount}
      />

      <main className="relative flex-1">
        <SearchHero
          onSearch={() => setCurrentPage(1)}
          onSearchChange={setSearchQuery}
          searchQuery={searchQuery}
        />
        <VehicleResults
          activeFilters={activeFilters}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onRemoveFilter={removeFilter}
          onReset={resetFilters}
          onToggleFilter={toggleFilter}
          searchQuery={searchQuery}
          vehicles={vehicles}
        />
      </main>
    </div>
  )
}
