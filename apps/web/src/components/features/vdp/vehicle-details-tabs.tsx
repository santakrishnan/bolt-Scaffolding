'use client'

import {
  BatteryIcon,
  Button,
  Card,
  ColorsIcon,
  cn,
  DamageReportIcon,
  EngineIcon,
  MarkerPinIcon,
  MileageIcon,
  MPGIcon,
  NoDamageIcon,
  OdometerIcon,
  PreviousOwnersIcon,
  ServiceHistoryIcon,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TransmissionIcon,
  TypeOwnersIcon,
  VectorRightOutlineIcon,
} from '@tfs-ucmp/ui'
import { ExternalLink, Eye } from 'lucide-react'
<<<<<<< Updated upstream
import Image from 'next/image'
=======
>>>>>>> Stashed changes

interface VehicleSpec {
  icon: React.ReactNode
  label: string
  value: string
}

export interface PricingData {
  currentPrice: number
  avgPrice: number
  daysOnSite: number
  views: number
  saves: number
}

export interface HistoryData {
  vin: string
  vehicleDescription: string
  damageReported: number
  previousOwners: number
  servicesOnRecord: number
  repairsReported: number
  ownerTypes: string[]
  lastOdometerReading: number
}

interface VehicleDetailsTabsProps {
  className?: string
  vehicleSpecs?: VehicleSpec[]
  pricingData?: PricingData
  historyData?: HistoryData
  showInspectionSection?: boolean
}

/**
 * FeatureItem - Helper component for displaying a feature with checkmark
 */
function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-0.5 flex-shrink-0">
        <VectorRightOutlineIcon className="text-gray-900" size={20} />
      </div>
      <span className="text-gray-900 text-sm">{text}</span>
    </div>
  )
}

/**
 * PriceRangeMeter - Component for displaying price range visualization
 */
function PriceRangeMeter({ currentPrice, avgPrice }: { currentPrice: number; avgPrice: number }) {
  // Calculate percentage position for current price (0-100%)
  // Range: 0.7 * avgPrice to 1.3 * avgPrice
  const minPrice = avgPrice * 0.7
  const maxPrice = avgPrice * 1.3
  const currentPercentage = Math.min(
    100,
    Math.max(0, ((currentPrice - minPrice) / (maxPrice - minPrice)) * 100)
  )

  // Calculate percentage for avg price marker (should be around 50%)
  const avgPercentage = 50

  // Determine price category
<<<<<<< Updated upstream
  let _priceCategory = 'Excellent'
  let _categoryColor = 'bg-green-500'
  if (currentPercentage > 65) {
    _priceCategory = 'High'
    _categoryColor = 'bg-orange-500'
  } else if (currentPercentage > 50) {
    _priceCategory = 'Fair'
    _categoryColor = 'bg-gray-400'
  } else if (currentPercentage > 35) {
    _priceCategory = 'Good'
    _categoryColor = 'bg-green-600'
=======
  let priceCategory = 'Excellent'
  let categoryColor = 'bg-green-500'
  if (currentPercentage > 65) {
    priceCategory = 'High'
    categoryColor = 'bg-orange-500'
  } else if (currentPercentage > 50) {
    priceCategory = 'Fair'
    categoryColor = 'bg-gray-400'
  } else if (currentPercentage > 35) {
    priceCategory = 'Good'
    categoryColor = 'bg-green-600'
>>>>>>> Stashed changes
  }

  // Bar segment percentages - 4 equal segments
  const excellentEnd = 25
  const goodEnd = 50
  const fairEnd = 75
  // High: 75-100

  return (
    <div className="w-full">
      <div className="mb-2 flex items-start justify-between">
        <div className="flex-1" />
        <div className="flex flex-col items-center" style={{ minWidth: 100 }}>
          <div className="mb-1 whitespace-nowrap rounded-full bg-green-500 px-4 py-1 font-bold text-lg text-white">
            ${currentPrice.toLocaleString()}
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="text-right">
            <div className="font-bold text-gray-900 text-lg">${avgPrice.toLocaleString()}</div>
            <div className="text-gray-600 text-xs">Avg. market price (IMV)</div>
          </div>
        </div>
      </div>
      {/* Segmented bar with markers - 4 segments */}
      <div className="relative mb-2 flex w-full items-center" style={{ height: 32 }}>
        {/* Segments */}
        <div className="absolute top-1/2 left-0 z-0 flex h-2.5 w-full -translate-y-1/2 gap-1.5">
          <div className="h-2.5 rounded-full bg-green-500" style={{ width: `${excellentEnd}%` }} />
          <div
            className="h-2.5 rounded-full bg-green-700"
            style={{ width: `${goodEnd - excellentEnd}%` }}
          />
          <div
            className="h-2.5 rounded-full bg-gray-700"
            style={{ width: `${fairEnd - goodEnd}%` }}
          />
          <div
            className="h-2.5 rounded-full bg-orange-500"
            style={{ width: `${100 - fairEnd}%` }}
          />
        </div>
        {/* Current price marker */}
        <div
          className="absolute top-1/2 z-10 -translate-y-1/2"
          style={{ left: `calc(${currentPercentage}% - 8px)` }}
        >
          <div className="h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-lg" />
        </div>
        {/* Avg price marker */}
        <div
          className="absolute top-1/2 z-10 -translate-y-1/2"
          style={{ left: `calc(${avgPercentage}% - 8px)` }}
        >
          <div className="h-4 w-4 rounded-full border-2 border-white bg-gray-900 shadow-lg" />
        </div>
      </div>
      {/* Labels below bar */}
      <div className="flex w-full justify-between text-center text-xs">
        <div className="flex-1 font-medium text-gray-900">Excellent</div>
        <div className="flex-1 font-medium text-gray-900">Good</div>
        <div className="flex-1 font-medium text-gray-900">Fair</div>
        <div className="flex-1 font-medium text-gray-900">High</div>
      </div>
    </div>
  )
}

const defaultSpecs: VehicleSpec[] = [
  {
    icon: <EngineIcon className="text-gray-400" size={20} />,
    label: 'Engine',
    value: '3.5L V6',
  },
  {
    icon: <ColorsIcon className="text-gray-400" size={20} />,
    label: 'Interior Color',
    value: 'Black',
  },
  {
    icon: <ColorsIcon className="text-gray-400" size={20} />,
    label: 'Exterior Color',
    value: 'Grey Metallic',
  },
  {
    icon: <MPGIcon className="text-gray-400" size={20} />,
    label: 'MPG',
    value: '18 city / 35 highway',
  },
  {
    icon: <MileageIcon className="text-gray-400" size={20} />,
    label: 'Mileage',
    value: '15,400 mi',
  },
  {
    icon: <MarkerPinIcon className="text-gray-400" size={20} />,
    label: 'Location',
    value: 'Fort Worth, TX 76116',
  },
  {
    icon: <BatteryIcon className="text-gray-400" size={20} />,
    label: 'Fuel Type',
    value: 'Gas',
  },
  {
    icon: <BatteryIcon className="text-gray-400" size={20} />,
    label: 'Drivetrain',
    value: 'AWD',
  },
  {
    icon: <TransmissionIcon className="text-gray-400" size={20} />,
    label: 'Transmission',
    value: '8-Speed Automatic',
  },
]

/**
 * VehicleDetailsTabs Component
 * Displays vehicle information organized in tabs
 */
export function VehicleDetailsTabs({
  className,
  vehicleSpecs = defaultSpecs,
  pricingData = {
    currentPrice: 43_098,
    avgPrice: 48_098,
    daysOnSite: 3,
    views: 541,
    saves: 73,
  },
  historyData = {
    vin: '2T3D1RFV5RW123456',
    vehicleDescription:
      '2023 Toyota Highlander XLE 4 Door Wagon/Sport Utility 2.5L 14F DOHV I4V - HYBRID - AWD',
    damageReported: 0,
    previousOwners: 2,
    servicesOnRecord: 10,
    repairsReported: 0,
    ownerTypes: ['Commercial', 'Personal'],
    lastOdometerReading: 18_450,
  },
  showInspectionSection = false,
}: VehicleDetailsTabsProps) {
  return (
    <div className={cn('w-full', className)}>
      <Tabs className="w-full" defaultValue="overview">
        <div className="relative mb-6 w-full border-gray-200 border-b">
          <div
            className="overflow-x-auto px-1 md:overflow-x-visible md:px-0"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <TabsList className="flex h-auto flex-nowrap gap-8 rounded-none border-0 bg-transparent p-0">
              <TabsTrigger
                className="flex-shrink-0 whitespace-nowrap rounded-none border-transparent border-b-2 bg-transparent px-0 pb-3 font-normal text-gray-600 data-[state=active]:border-[#EB0A1E] data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
                value="overview"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                className="flex-shrink-0 whitespace-nowrap rounded-none border-transparent border-b-2 bg-transparent px-0 pb-3 font-normal text-gray-600 data-[state=active]:border-[#EB0A1E] data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
                value="features"
              >
                Features & Details
              </TabsTrigger>
              <TabsTrigger
                className="flex-shrink-0 whitespace-nowrap rounded-none border-transparent border-b-2 bg-transparent px-0 pb-3 font-normal text-gray-600 data-[state=active]:border-[#EB0A1E] data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
                value="pricing"
              >
                Pricing
              </TabsTrigger>
              <TabsTrigger
                className="flex-shrink-0 whitespace-nowrap rounded-none border-transparent border-b-2 bg-transparent px-0 pb-3 font-normal text-gray-600 data-[state=active]:border-[#EB0A1E] data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
                value="history"
              >
                History
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Overview Tab Content */}
        <TabsContent className="mt-0" value="overview">
          <div className="rounded-lg p-6">
            {/* Header with title and button */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-semibold text-lg sm:text-xl">Overview</h3>
              <Button
                className="rounded-full border-black px-4 py-1.5 text-sm hover:bg-gray-100"
                variant="outline"
              >
                View All Specs
              </Button>
            </div>

            {/* Specs Card */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              {/* Mobile layout */}
              <div className="block divide-y divide-gray-200 md:hidden">
                {vehicleSpecs.map((spec, index) => (
                  <div className="flex items-center py-4 first:pt-0 last:pb-0" key={index}>
                    <div className="flex flex-1 items-center gap-3">
                      <span className="mt-0.5">{spec.icon}</span>
                      <span className="text-gray-500 text-sm">{spec.label}</span>
                    </div>
                    <span className="min-w-[90px] text-right font-semibold text-gray-900 text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              {/* Desktop layout */}
              <div className="hidden grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
                {vehicleSpecs.map((spec, index) => (
                  <div className="flex items-start gap-3 border-gray-200 border-b pb-6" key={index}>
                    <div className="mt-0.5">{spec.icon}</div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm">{spec.label}</span>
                      <span className="font-medium text-base text-gray-900">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Features & Details Tab Content */}
        <TabsContent className="mt-0" value="features">
          <div className="rounded-lg p-6">
            {/* Header with title and button */}
            <div className="mb-8 flex items-center justify-between">
              <h3 className="font-semibold text-xl">Key Features</h3>
              <Button className="rounded-full border-black hover:bg-gray-100" variant="outline">
                View All Features
              </Button>
            </div>

            {/* Features Grid - 4 columns */}
            <div className="rounded-lg bg-white p-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Safety Column */}
                <div>
                  <h4 className="mb-4 font-semibold text-base">Safety</h4>
                  <div className="space-y-3">
                    <FeatureItem text="Toyota safety Sense 3.0+" />
                    <FeatureItem text="Pre-Collision System" />
                    <FeatureItem text="Dynamic Radar Cruise Control" />
                    <FeatureItem text="Lane Departure Alert" />
                    <FeatureItem text="Automatic High Beams" />
                  </div>
                </div>

                {/* Interior Column */}
                <div>
                  <h4 className="mb-4 font-semibold text-base">Interior</h4>
                  <div className="space-y-3">
                    <FeatureItem text="Leather-Trimmed seats" />
                    <FeatureItem text="Power Moonroof" />
                    <FeatureItem text="Dual-Zone Climate Control" />
                    <FeatureItem text="Heated Front Seats" />
                    <FeatureItem text="Power Liftgate" />
                  </div>
                </div>

                {/* Technology Column */}
                <div>
                  <h4 className="mb-4 font-semibold text-base">Technology</h4>
                  <div className="space-y-3">
                    <FeatureItem text='12.3" Touchscreen Display' />
                    <FeatureItem text="Apple CarPlay/Android Auto" />
                    <FeatureItem text="JBL Premium Audio" />
                    <FeatureItem text="Wi-Fi Connect" />
                    <FeatureItem text="Wireless Charging" />
                  </div>
                </div>

                {/* Exterior Column */}
                <div>
                  <h4 className="mb-4 font-semibold text-base">Exterior</h4>
                  <div className="space-y-3">
                    <FeatureItem text="LED Headlights" />
                    <FeatureItem text="LED Daytime Running Lights" />
                    <FeatureItem text="Roof Rails" />
                    <FeatureItem text="Power Mirrors" />
                    <FeatureItem text='20" Alloy Wheels' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Pricing Tab Content */}
        <TabsContent className="mt-0" value="pricing">
          {/* Header with stats */}
          <div className="rounded-t-lg px-6 pt-6 pb-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-bold text-2xl">Pricing</h3>
              <div className="flex flex-wrap items-center gap-4 text-sm sm:gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      {pricingData.daysOnSite} days
                    </span>{' '}
                    on Arrow
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">
                    <span className="font-semibold text-gray-900">{pricingData.views}</span> Views
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">
                    <span className="font-semibold text-gray-900">{pricingData.saves}</span> saves
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Price Analysis Section - white background */}
          <div className="px-6 py-6">
            <div className="rounded-lg bg-white px-8 py-8">
              {/* Price badge and description + Price Range Meter side by side */}
              <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
                {/* Left: Text content */}
                <div className="flex-shrink-0">
                  <div className="mb-3 flex items-center gap-3">
                    <h4 className="font-semibold text-xl">This vehicle is an</h4>
                    <span className="inline-flex items-center gap-1 rounded-md bg-green-500 px-3 py-1.5 font-semibold text-sm text-white">
                      <span className="text-xs">✓</span> Excellent Price
                    </span>
                  </div>
                  <p className="text-base text-gray-900">
                    This vehicle is below the current average market range.
                  </p>
                </div>

                {/* Right: Price Range Meter */}
                <div className="w-full flex-1 lg:max-w-2xl">
                  <PriceRangeMeter
                    avgPrice={pricingData.avgPrice}
                    currentPrice={pricingData.currentPrice}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Price History Accordion - separate section */}
          <div className="rounded-b-lg px-6 pb-6">
            <div className="rounded-lg bg-white">
<<<<<<< Updated upstream
              <button
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                type="button"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-5"
                      height={20}
                      src="/images/vdp/currency-dollar-circle.svg"
                      width={20}
=======
              <button className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <img
                      alt="Dollar"
                      className="h-5 w-5"
                      src="/images/vdp/currency-dollar-circle.svg"
>>>>>>> Stashed changes
                    />
                  </div>
                  <span className="font-semibold text-lg">Price History</span>
                </div>
                {/* <ChevronDown className="w-5 h-5 text-gray-500" /> */}
              </button>
            </div>
          </div>
        </TabsContent>

        {/* History Tab Content */}
        <TabsContent className="mt-0" value="history">
          <div className="rounded-lg p-6">
            {/* Header with VIN, Vehicle Description and View Report button */}
            <div className="mb-8 flex flex-col justify-between gap-6 border-gray-200 border-b pb-6 md:flex-row md:items-stretch md:border-b-0 md:pb-0">
              <div className="flex flex-shrink-0 flex-col justify-center md:border-gray-200 md:border-r md:pr-6">
                <h3 className="mb-1 font-bold text-xl">Vehicle History</h3>
                <p className="text-gray-600 text-xs">
                  VIN: <span className="font-medium text-gray-900">{historyData.vin}</span>
                </p>
              </div>
              <div className="flex flex-1 items-center text-gray-700 text-sm md:border-gray-200 md:border-r md:px-6">
                {historyData.vehicleDescription}
              </div>
              <div className="flex flex-shrink-0 items-center md:pl-6">
                <Button className="rounded-full border-black hover:bg-gray-100" variant="outline">
                  View Full Report
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* History Stats - Single Card */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* No Damage */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <NoDamageIcon className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-gray-600 text-xs">No Damage</h4>
                    <p className="font-bold text-base text-gray-900">
                      {historyData.damageReported} Damage Reported
                    </p>
                  </div>
                </div>

                {/* Previous Owners */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <PreviousOwnersIcon className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-gray-600 text-xs">Previous Owners</h4>
                    <p className="font-bold text-base text-gray-900">
                      {historyData.previousOwners} Owners
                    </p>
                  </div>
                </div>

                {/* Service History */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <ServiceHistoryIcon className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-gray-600 text-xs">Service History</h4>
                    <p className="font-bold text-base text-gray-900">
                      {historyData.servicesOnRecord} Services on Record
                    </p>
                  </div>
                </div>

                {/* Damage Reports */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <DamageReportIcon className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-gray-600 text-xs">Damage Reports</h4>
                    <p className="font-bold text-base text-gray-900">
                      {historyData.repairsReported} Repairs Reported
                    </p>
                  </div>
                </div>

                {/* Type of Owner */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <TypeOwnersIcon className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-gray-600 text-xs">Type of Owner</h4>
                    <p className="font-bold text-base text-gray-900">
                      {historyData.ownerTypes.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Last Odometer Reading */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <OdometerIcon className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-gray-600 text-xs">Last Odometer Reading</h4>
                    <p className="font-bold text-base text-gray-900">
                      {historyData.lastOdometerReading.toLocaleString()} Miles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inspection Certification Section */}
            {showInspectionSection && (
              <div className="mt-8 rounded-lg bg-white p-8">
                <div className="mb-6">
                  <h3 className="mb-2 font-bold text-2xl text-gray-900">Inspected*</h3>
                  <p className="text-gray-600 text-sm">
                    Every vehicle is backed by Toyota's commitment to quality and transparency
                  </p>
                </div>

                {/* Inspection Features Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {/* Inspected */}
                  <Card className="overflow-hidden bg-white shadow-sm">
<<<<<<< Updated upstream
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        alt="Inspected Vehicle - rigorous 160-point certification"
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
=======
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        alt="Inspected Vehicle"
                        className="h-full w-full object-cover"
>>>>>>> Stashed changes
                        src="/images/vdp/inspected.png"
                      />
                    </div>
                    <div className="flex flex-col items-start p-6">
                      <div className="mb-3 flex items-center gap-3">
<<<<<<< Updated upstream
                        <Image
                          alt=""
                          aria-hidden="true"
                          className="h-8 w-8"
                          height={32}
                          src="/images/vdp/inspected.svg"
                          width={32}
                        />
=======
                        <img alt="Inspected" className="h-8 w-8" src="/images/vdp/inspected.svg" />
>>>>>>> Stashed changes
                        <h4 className="font-semibold text-base text-gray-900">Inspected</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Every vehicle undergoes our rigorous 160-point certification process
                      </p>
                    </div>
                  </Card>

                  {/* Verified VIN & Full History Check */}
                  <Card className="overflow-hidden bg-white shadow-sm">
<<<<<<< Updated upstream
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        alt="Verified VIN - complete vehicle history check"
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
=======
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        alt="Verified VIN Check"
                        className="h-full w-full object-cover"
>>>>>>> Stashed changes
                        src="/images/vdp/verifiedVin.png"
                      />
                    </div>
                    <div className="flex flex-col items-start p-6">
                      <div className="mb-3 flex items-center gap-3">
<<<<<<< Updated upstream
                        <Image
                          alt=""
                          aria-hidden="true"
                          className="h-8 w-8"
                          height={32}
                          src="/images/vdp/Verified VIN.svg"
                          width={32}
=======
                        <img
                          alt="Verified VIN"
                          className="h-8 w-8"
                          src="/images/vdp/Verified VIN.svg"
>>>>>>> Stashed changes
                        />
                        <h4 className="font-semibold text-base text-gray-900">
                          Verified VIN
                          <br />& Full History Check
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Complete vehicle history with no hidden accidents or major repairs
                      </p>
                    </div>
                  </Card>

                  {/* No Hidden Damage Guarantee */}
                  <Card className="overflow-hidden bg-white shadow-sm">
<<<<<<< Updated upstream
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        alt="No hidden damage - all damage disclosed upfront"
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
=======
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        alt="No Hidden Damage"
                        className="h-full w-full object-cover"
>>>>>>> Stashed changes
                        src="/images/vdp/Damage.png"
                      />
                    </div>
                    <div className="flex flex-col items-start p-6">
                      <div className="mb-3 flex items-center gap-3">
<<<<<<< Updated upstream
                        <Image
                          alt=""
                          aria-hidden="true"
                          className="h-8 w-8"
                          height={32}
                          src="/images/vdp/No Hidden.svg"
                          width={32}
                        />
=======
                        <img alt="No Damage" className="h-8 w-8" src="/images/vdp/No Hidden.svg" />
>>>>>>> Stashed changes
                        <h4 className="font-semibold text-base text-gray-900">
                          No Hidden
                          <br />
                          Damage Guarantee
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        All damage disclosed upfront with detailed condition reports
                      </p>
                    </div>
                  </Card>

                  {/* 7-Day Return or Exchange */}
                  <Card className="overflow-hidden bg-white shadow-sm">
<<<<<<< Updated upstream
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        alt="7-day return or exchange policy"
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
=======
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        alt="7-Day Return"
                        className="h-full w-full object-cover"
>>>>>>> Stashed changes
                        src="/images/vdp/return.png"
                      />
                    </div>
                    <div className="flex flex-col items-start p-6">
                      <div className="mb-3 flex items-center gap-3">
<<<<<<< Updated upstream
                        <Image
                          alt=""
                          aria-hidden="true"
                          className="h-8 w-8"
                          height={32}
                          src="/images/vdp/exchange.svg"
                          width={32}
                        />
=======
                        <img alt="Return" className="h-8 w-8" src="/images/vdp/exchange.svg" />
>>>>>>> Stashed changes
                        <h4 className="font-semibold text-base text-gray-900">
                          7-Day Return
                          <br />
                          or Exchange
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Not satisfied? Return or exchange within 7 days, no questions asked
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
