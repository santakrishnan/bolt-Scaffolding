'use client'

import { FilterLinesIcon, XIcon } from '@tfs-ucmp/ui'
import { useEffect, useRef, useState } from 'react'
import { filterSections } from '~/lib/search/filter-sections'

// Collapsible Filter Section Component (Accordion - only one open at a time)
const FilterSection = ({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <div className="border-gray-200 border-b">
      <button
        className="flex w-full items-center justify-between px-4 py-4 transition-colors hover:bg-gray-50"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-900 text-sm">{title}</span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-45' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      {isOpen && <div className="px-4 pb-4">{children}</div>}
    </div>
  )
}

// Chip/Toggle Button Component
const FilterChip = ({
  label,
  selected = false,
  onClick,
}: {
  label: string
  selected?: boolean
  onClick?: () => void
}) => (
  <button
    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-medium text-xs transition-colors ${
      selected
        ? 'border-red-500 bg-white text-gray-900'
        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
    }`}
    onClick={onClick}
  >
    {label}
    {selected && (
      <svg className="h-3 w-3 text-red-500" fill="none" viewBox="0 0 12 12">
        <path
          d="M10 3L4.5 8.5L2 6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    )}
  </button>
)

// Color Swatch Component
const ColorSwatch = ({
  color,
  label,
  selected = false,
  onClick,
}: {
  color: string
  label: string
  selected?: boolean
  onClick?: () => void
}) => {
  const colorMap: Record<string, string> = {
    White: 'bg-white border border-gray-300',
    Black: 'bg-black',
    'Midnight Gray': 'bg-gray-600',
    'Metallic Green': 'bg-green-600',
    'Deep Red': 'bg-red-700',
    Graphite: 'bg-gray-800',
    'Luminous Yellow': 'bg-yellow-400',
    'Ocean Blue': 'bg-blue-600',
    'Electric Blue': 'bg-blue-400',
  }

  return (
    <button
      className={`flex items-center gap-2 rounded-full border px-2 py-1 transition-colors ${
        selected ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <span className={`h-5 w-5 rounded-full ${colorMap[label] || 'bg-gray-400'}`} />
      <span className="text-gray-700 text-xs">{label}</span>
    </button>
  )
}

// Filter state types
export type FilterState = {
  selectedPriceQuick: string
  selectedYearQuick: string
  selectedMileage: string
  selectedBodyStyles: string[]
  selectedExteriorColors: string[]
  selectedInteriorColors: string[]
  selectedFuelTypes: string[]
  selectedModels: string[]
  selectedSafetyFeatures: string[]
  selectedComfortFeatures: string[]
  selectedTechFeatures: string[]
  selectedExteriorFeatures: string[]
  selectedPerformanceFeatures: string[]
  selectedSeatingCapacity: string[]
  selectedDrivetrains: string[]
  selectedTransmissions: string[]
  inspection160: boolean
}

export type FilterSidebarProps = {
  isOpen: boolean
  onClose: () => void
  vehicleCount: number
  filterState: FilterState
  onFilterChange: (key: keyof FilterState, value: FilterState[keyof FilterState]) => void
  onReset: () => void
}

export function FilterSidebar({
  isOpen,
  onClose,
  vehicleCount,
  filterState,
  onFilterChange,
  onReset,
}: FilterSidebarProps) {
  const {
    selectedPriceQuick,
    selectedYearQuick,
    selectedMileage,
    selectedBodyStyles,
    selectedExteriorColors,
    selectedInteriorColors,
    selectedFuelTypes,
    selectedModels,
    selectedSafetyFeatures,
    selectedComfortFeatures,
    selectedTechFeatures,
    selectedExteriorFeatures,
    selectedPerformanceFeatures,
    selectedSeatingCapacity,
    selectedDrivetrains,
    selectedTransmissions,
    inspection160,
  } = filterState

  // Track which section is open (null = all closed, string = section title)
  const [openSection, setOpenSection] = useState<string | null>(null)

  // Custom scrollbar tracking
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollInfo, setScrollInfo] = useState({ thumbTop: 0, thumbHeight: 20 })

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (!container) {
      return
    }

    const { scrollTop, scrollHeight, clientHeight } = container
    const trackHeight = clientHeight
    const thumbHeight = Math.max((clientHeight / scrollHeight) * trackHeight, 30)
    const scrollableHeight = scrollHeight - clientHeight
    const thumbTop =
      scrollableHeight > 0 ? (scrollTop / scrollableHeight) * (trackHeight - thumbHeight) : 0

    setScrollInfo({ thumbTop, thumbHeight })
  }

  useEffect(() => {
    handleScroll()
  }, [openSection])

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  const toggleArrayFilter = (key: keyof FilterState, arr: string[], value: string) => {
    if (arr.includes(value)) {
      onFilterChange(
        key,
        arr.filter((v) => v !== value)
      )
    } else {
      onFilterChange(key, [...arr, value])
    }
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 transition-opacity" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-[100] flex h-full w-full max-w-[60%] transform flex-col bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-gray-200 border-b bg-white px-4 py-3">
          <div className="flex items-center gap-3">
            <FilterLinesIcon className="h-4 w-4 text-gray-500" />
            <span className="font-medium text-gray-700 text-sm">Filter</span>
            <span className="rounded-full bg-red-500 px-2.5 py-1 font-semibold text-white text-xs">
              ({vehicleCount}) Vehicles
            </span>
            <button
              className="rounded-full bg-gray-200 px-3 py-1 font-medium text-gray-700 text-xs transition-colors hover:bg-gray-300"
              onClick={onReset}
            >
              Reset
            </button>
          </div>
          <button
            className="rounded-full p-1 transition-colors hover:bg-gray-100"
            onClick={onClose}
          >
            <XIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Main Content with Left Nav + Right Filters */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Navigation Column */}
          <nav className="w-44 flex-shrink-0 overflow-y-auto border-gray-200 border-r bg-white">
            {[
              'Price',
              'Year',
              'Mileage',
              'Body Style',
              'Exterior Color',
              'Interior Color',
              'Make & Model',
              'Fuel Type',
              'Features & Technology',
              'Inspection',
              'Drivetrain',
              'Transmission',
            ].map((item) => (
              <button
                className={`w-full border-gray-100 border-b px-4 py-3 text-left text-sm transition-colors ${
                  openSection === item
                    ? 'bg-red-500 font-medium text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                key={item}
                onClick={() => toggleSection(item)}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right Filter Content */}
          <div className="relative flex flex-1">
            {/* Scrollable Content */}
            <div
              className="scrollbar-hide flex-1 overflow-y-auto"
              onScroll={handleScroll}
              ref={scrollContainerRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="pb-20">
                {/* Price */}
                <FilterSection
                  isOpen={openSection === 'Price'}
                  onToggle={() => toggleSection('Price')}
                  title="Price"
                >
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="mb-1 block text-gray-500 text-xs">Min</label>
                        <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                          <option>$5,000</option>
                          <option>$10,000</option>
                          <option>$15,000</option>
                          <option>$20,000</option>
                        </select>
                      </div>
                      <div className="flex items-end pb-2 text-gray-400">—</div>
                      <div className="flex-1">
                        <label className="mb-1 block text-gray-500 text-xs">Max</label>
                        <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                          <option>$7,000</option>
                          <option>$10,000</option>
                          <option>$20,000</option>
                          <option>$30,000</option>
                          <option>$40,000</option>
                          <option>$50,000</option>
                          <option>$70,000</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 text-gray-500 text-xs">Quick Price Ranges</div>
                      <div className="flex flex-wrap gap-2">
                        {filterSections.price.quickRanges.map((range) => (
                          <FilterChip
                            key={range}
                            label={range}
                            onClick={() =>
                              onFilterChange(
                                'selectedPriceQuick',
                                range === selectedPriceQuick ? '' : range
                              )
                            }
                            selected={selectedPriceQuick === range}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </FilterSection>

                {/* Year */}
                <FilterSection
                  isOpen={openSection === 'Year'}
                  onToggle={() => toggleSection('Year')}
                  title="Year"
                >
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                          {[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map(
                            (y) => (
                              <option key={y}>{y}</option>
                            )
                          )}
                        </select>
                      </div>
                      <div className="flex items-center text-gray-400">to</div>
                      <div className="flex-1">
                        <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                          {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map(
                            (y) => (
                              <option key={y}>{y}</option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 text-gray-500 text-xs">Popular Year Ranges</div>
                      <div className="flex flex-wrap gap-2">
                        {filterSections.year.popularRanges.map((range) => (
                          <FilterChip
                            key={range}
                            label={range}
                            onClick={() =>
                              onFilterChange(
                                'selectedYearQuick',
                                range === selectedYearQuick ? '' : range
                              )
                            }
                            selected={selectedYearQuick === range}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </FilterSection>

                {/* Mileage */}
                <FilterSection
                  isOpen={openSection === 'Mileage'}
                  onToggle={() => toggleSection('Mileage')}
                  title="Mileage"
                >
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="mb-1 block text-gray-500 text-xs">Min</label>
                        <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                          <option>0</option>
                          <option>10,000</option>
                          <option>25,000</option>
                        </select>
                      </div>
                      <div className="flex items-end pb-2 text-gray-400">—</div>
                      <div className="flex-1">
                        <label className="mb-1 block text-gray-500 text-xs">Max</label>
                        <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                          <option>100,000</option>
                          <option>75,000</option>
                          <option>50,000</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 text-gray-500 text-xs">Quick Mileage Filters</div>
                      <div className="flex flex-wrap gap-2">
                        {filterSections.mileage.quickFilters.map((filter) => (
                          <FilterChip
                            key={filter}
                            label={filter}
                            onClick={() =>
                              onFilterChange(
                                'selectedMileage',
                                filter === selectedMileage ? '' : filter
                              )
                            }
                            selected={selectedMileage === filter}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </FilterSection>

                {/* Body Style */}
                <FilterSection
                  isOpen={openSection === 'Body Style'}
                  onToggle={() => toggleSection('Body Style')}
                  title="Body Style"
                >
                  <div>
                    <div className="mb-2 text-gray-500 text-xs">
                      Select all body styles that match your needs
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {filterSections.bodyStyle.map((style) => (
                        <FilterChip
                          key={style}
                          label={style}
                          onClick={() =>
                            toggleArrayFilter('selectedBodyStyles', selectedBodyStyles, style)
                          }
                          selected={selectedBodyStyles.includes(style)}
                        />
                      ))}
                    </div>
                  </div>
                </FilterSection>

                {/* Exterior Color */}
                <FilterSection
                  isOpen={openSection === 'Exterior Color'}
                  onToggle={() => toggleSection('Exterior Color')}
                  title="Exterior Color"
                >
                  <div>
                    <div className="mb-2 text-gray-500 text-xs">
                      Choose your preferred exterior colors
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {filterSections.exteriorColors.map((color) => (
                        <ColorSwatch
                          color={color}
                          key={color}
                          label={color}
                          onClick={() =>
                            toggleArrayFilter(
                              'selectedExteriorColors',
                              selectedExteriorColors,
                              color
                            )
                          }
                          selected={selectedExteriorColors.includes(color)}
                        />
                      ))}
                    </div>
                  </div>
                </FilterSection>

                {/* Interior Color */}
                <FilterSection
                  isOpen={openSection === 'Interior Color'}
                  onToggle={() => toggleSection('Interior Color')}
                  title="Interior Color"
                >
                  <div>
                    <div className="mb-2 text-gray-500 text-xs">
                      Choose your preferred interior colors
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {filterSections.interiorColors.map((color) => (
                        <ColorSwatch
                          color={color}
                          key={color}
                          label={color}
                          onClick={() =>
                            toggleArrayFilter(
                              'selectedInteriorColors',
                              selectedInteriorColors,
                              color
                            )
                          }
                          selected={selectedInteriorColors.includes(color)}
                        />
                      ))}
                    </div>
                  </div>
                </FilterSection>

                {/* Make & Model */}
                <FilterSection
                  isOpen={openSection === 'Make & Model'}
                  onToggle={() => toggleSection('Make & Model')}
                  title="Make & Model"
                >
                  <div className="space-y-3">
                    <input
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Search Toyota models (e.g., Camry, RAV4)"
                      type="text"
                    />
                    <div>
                      <div className="mb-2 text-gray-500 text-xs">Popular Toyota Models</div>
                      <div className="flex flex-wrap gap-2">
                        {filterSections.popularModels.slice(0, 18).map((model) => (
                          <FilterChip
                            key={model}
                            label={model}
                            onClick={() =>
                              toggleArrayFilter('selectedModels', selectedModels, model)
                            }
                            selected={selectedModels.includes(model)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </FilterSection>

                {/* Fuel Type */}
                <FilterSection
                  isOpen={openSection === 'Fuel Type'}
                  onToggle={() => toggleSection('Fuel Type')}
                  title="Fuel Type"
                >
                  <div>
                    <div className="mb-2 text-gray-500 text-xs">Select acceptable fuel types</div>
                    <div className="flex flex-wrap gap-2">
                      {filterSections.fuelTypes.map((type) => (
                        <FilterChip
                          key={type}
                          label={type}
                          onClick={() =>
                            toggleArrayFilter('selectedFuelTypes', selectedFuelTypes, type)
                          }
                          selected={selectedFuelTypes.includes(type)}
                        />
                      ))}
                    </div>
                  </div>
                </FilterSection>

                {/* Features & Technology */}
                <FilterSection
                  isOpen={openSection === 'Features & Technology'}
                  onToggle={() => toggleSection('Features & Technology')}
                  title="Features & Technology"
                >
                  <div className="space-y-4">
                    <div className="mb-2 text-gray-500 text-xs">
                      Select desired vehicle features and options
                    </div>
                    <div>
                      <div className="mb-2 font-medium text-gray-600 text-xs">
                        Safety & Drive Assist
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filterSections.safetyFeatures.map((f) => (
                          <FilterChip
                            key={f}
                            label={f}
                            onClick={() =>
                              toggleArrayFilter('selectedSafetyFeatures', selectedSafetyFeatures, f)
                            }
                            selected={selectedSafetyFeatures.includes(f)}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 font-medium text-gray-600 text-xs">
                        Comfort & Convenience
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filterSections.comfortFeatures.map((f) => (
                          <FilterChip
                            key={f}
                            label={f}
                            onClick={() =>
                              toggleArrayFilter(
                                'selectedComfortFeatures',
                                selectedComfortFeatures,
                                f
                              )
                            }
                            selected={selectedComfortFeatures.includes(f)}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 font-medium text-gray-600 text-xs">
                        Technology & Entertainment
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filterSections.techFeatures.map((f) => (
                          <FilterChip
                            key={f}
                            label={f}
                            onClick={() =>
                              toggleArrayFilter('selectedTechFeatures', selectedTechFeatures, f)
                            }
                            selected={selectedTechFeatures.includes(f)}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 font-medium text-gray-600 text-xs">
                        Exterior & Lighting
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filterSections.exteriorFeatures.map((f) => (
                          <FilterChip
                            key={f}
                            label={f}
                            onClick={() =>
                              toggleArrayFilter(
                                'selectedExteriorFeatures',
                                selectedExteriorFeatures,
                                f
                              )
                            }
                            selected={selectedExteriorFeatures.includes(f)}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 font-medium text-gray-600 text-xs">
                        Performance & Capability
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filterSections.performanceFeatures.map((f) => (
                          <FilterChip
                            key={f}
                            label={f}
                            onClick={() =>
                              toggleArrayFilter(
                                'selectedPerformanceFeatures',
                                selectedPerformanceFeatures,
                                f
                              )
                            }
                            selected={selectedPerformanceFeatures.includes(f)}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 font-medium text-gray-600 text-xs">
                        Seating & Capacity
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filterSections.seatingCapacity.map((f) => (
                          <FilterChip
                            key={f}
                            label={f}
                            onClick={() =>
                              toggleArrayFilter(
                                'selectedSeatingCapacity',
                                selectedSeatingCapacity,
                                f
                              )
                            }
                            selected={selectedSeatingCapacity.includes(f)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </FilterSection>

                {/* Inspection */}
                <FilterSection
                  isOpen={openSection === 'Inspection'}
                  onToggle={() => toggleSection('Inspection')}
                  title="Inspection"
                >
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                    <div>
                      <div className="font-medium text-sm">160-Point Inspection</div>
                      <div className="text-gray-500 text-xs">
                        Factory-trained technician verified
                      </div>
                    </div>
                    <button
                      className={`h-6 w-12 rounded-full transition-colors ${inspection160 ? 'bg-red-500' : 'bg-gray-300'}`}
                      onClick={() => onFilterChange('inspection160', !inspection160)}
                    >
                      <div
                        className={`h-5 w-5 transform rounded-full bg-white shadow transition-transform ${inspection160 ? 'translate-x-6' : 'translate-x-0.5'}`}
                      />
                    </button>
                  </div>
                </FilterSection>

                {/* Drivetrain */}
                <FilterSection
                  isOpen={openSection === 'Drivetrain'}
                  onToggle={() => toggleSection('Drivetrain')}
                  title="Drivetrain"
                >
                  <div className="flex flex-wrap gap-2">
                    {filterSections.drivetrains.map((dt) => (
                      <FilterChip
                        key={dt}
                        label={dt}
                        onClick={() =>
                          toggleArrayFilter('selectedDrivetrains', selectedDrivetrains, dt)
                        }
                        selected={selectedDrivetrains.includes(dt)}
                      />
                    ))}
                  </div>
                </FilterSection>

                {/* Transmission */}
                <FilterSection
                  isOpen={openSection === 'Transmission'}
                  onToggle={() => toggleSection('Transmission')}
                  title="Transmission"
                >
                  <div className="flex flex-wrap gap-2">
                    {filterSections.transmissions.map((t) => (
                      <FilterChip
                        key={t}
                        label={t}
                        onClick={() =>
                          toggleArrayFilter('selectedTransmissions', selectedTransmissions, t)
                        }
                        selected={selectedTransmissions.includes(t)}
                      />
                    ))}
                  </div>
                </FilterSection>
              </div>
            </div>
            {/* Custom Red Scrollbar */}
            <div className="relative w-1.5 flex-shrink-0 bg-gray-200">
              <div
                className="absolute w-full rounded-full bg-red-500 transition-all duration-150"
                style={{
                  top: scrollInfo.thumbTop,
                  height: scrollInfo.thumbHeight,
                }}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
