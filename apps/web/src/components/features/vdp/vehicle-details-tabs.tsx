"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Button,
  Card,
  cn,
  BatteryIcon,
  EngineIcon,
  MPGIcon,
  TransmissionIcon,
  OdometerIcon,
  DamageReportIcon,
  PreviousOwnersIcon,
  ServiceHistoryIcon,
  MileageIcon,
  ColorsIcon,
  MarkerPinIcon,
  VectorRightOutlineIcon,
  NoDamageIcon,
  TypeOwnersIcon,
} from "@tfs-ucmp/ui";
import {
  Eye,
  ExternalLink,
} from "lucide-react";

interface VehicleSpec {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export interface PricingData {
  currentPrice: number;
  avgPrice: number;
  daysOnSite: number;
  views: number;
  saves: number;
}

export interface HistoryData {
  vin: string;
  vehicleDescription: string;
  damageReported: number;
  previousOwners: number;
  servicesOnRecord: number;
  repairsReported: number;
  ownerTypes: string[];
  lastOdometerReading: number;
}

interface VehicleDetailsTabsProps {
  className?: string;
  vehicleSpecs?: VehicleSpec[];
  pricingData?: PricingData;
  historyData?: HistoryData;
  showInspectionSection?: boolean;
}

/**
 * FeatureItem - Helper component for displaying a feature with checkmark
 */
function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-0.5 flex-shrink-0">
        <VectorRightOutlineIcon size={20} className="text-gray-900" />
      </div>
      <span className="text-sm text-gray-900">{text}</span>
    </div>
  );
}

/**
 * PriceRangeMeter - Component for displaying price range visualization
 */
function PriceRangeMeter({
  currentPrice,
  avgPrice,
}: {
  currentPrice: number;
  avgPrice: number;
}) {
  // Calculate percentage position for current price (0-100%)
  // Range: 0.7 * avgPrice to 1.3 * avgPrice
  const minPrice = avgPrice * 0.7;
  const maxPrice = avgPrice * 1.3;
  const currentPercentage = Math.min(
    100,
    Math.max(0, ((currentPrice - minPrice) / (maxPrice - minPrice)) * 100),
  );

  // Calculate percentage for avg price marker (should be around 50%)
  const avgPercentage = 50;

  // Determine price category
  let priceCategory = "Excellent";
  let categoryColor = "bg-green-500";
  if (currentPercentage > 65) {
    priceCategory = "High";
    categoryColor = "bg-orange-500";
  } else if (currentPercentage > 50) {
    priceCategory = "Fair";
    categoryColor = "bg-gray-400";
  } else if (currentPercentage > 35) {
    priceCategory = "Good";
    categoryColor = "bg-green-600";
  }

  // Bar segment percentages - 4 equal segments
  const excellentEnd = 25;
  const goodEnd = 50;
  const fairEnd = 75;
  // High: 75-100

  return (
    <div className="w-full">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1"></div>
        <div className="flex flex-col items-center" style={{ minWidth: 100 }}>
          <div className="bg-green-500 text-white px-4 py-1 rounded-full text-lg font-bold whitespace-nowrap mb-1">
            ${currentPrice.toLocaleString()}
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">
              ${avgPrice.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">Avg. market price (IMV)</div>
          </div>
        </div>
      </div>
      {/* Segmented bar with markers - 4 segments */}
      <div
        className="relative w-full flex items-center mb-2"
        style={{ height: 32 }}
      >
        {/* Segments */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-2.5 flex z-0 gap-1.5">
          <div
            className="h-2.5 rounded-full bg-green-500"
            style={{ width: `${excellentEnd}%` }}
          ></div>
          <div
            className="h-2.5 rounded-full bg-green-700"
            style={{ width: `${goodEnd - excellentEnd}%` }}
          ></div>
          <div
            className="h-2.5 rounded-full bg-gray-700"
            style={{ width: `${fairEnd - goodEnd}%` }}
          ></div>
          <div
            className="h-2.5 rounded-full bg-orange-500"
            style={{ width: `${100 - fairEnd}%` }}
          ></div>
        </div>
        {/* Current price marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 z-10"
          style={{ left: `calc(${currentPercentage}% - 8px)` }}
        >
          <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-lg"></div>
        </div>
        {/* Avg price marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 z-10"
          style={{ left: `calc(${avgPercentage}% - 8px)` }}
        >
          <div className="w-4 h-4 rounded-full bg-gray-900 border-2 border-white shadow-lg"></div>
        </div>
      </div>
      {/* Labels below bar */}
      <div className="flex w-full justify-between text-center text-xs">
        <div className="flex-1 text-gray-900 font-medium">Excellent</div>
        <div className="flex-1 text-gray-900 font-medium">Good</div>
        <div className="flex-1 text-gray-900 font-medium">Fair</div>
        <div className="flex-1 text-gray-900 font-medium">High</div>
      </div>
    </div>
  );
}

const defaultSpecs: VehicleSpec[] = [
  {
    icon: <EngineIcon size={20} className="text-gray-400" />,
    label: "Engine",
    value: "3.5L V6",
  },
  {
    icon: <ColorsIcon size={20} className="text-gray-400" />,
    label: "Interior Color",
    value: "Black",
  },
  {
    icon: <ColorsIcon size={20} className="text-gray-400" />,
    label: "Exterior Color",
    value: "Grey Metallic",
  },
  {
    icon: <MPGIcon size={20} className="text-gray-400" />,
    label: "MPG",
    value: "18 city / 35 highway",
  },
  {
    icon: <MileageIcon size={20} className="text-gray-400" />,
    label: "Mileage",
    value: "15,400 mi",
  },
  {
    icon: <MarkerPinIcon size={20} className="text-gray-400" />,
    label: "Location",
    value: "Fort Worth, TX 76116",
  },
  {
    icon: <BatteryIcon size={20} className="text-gray-400" />,
    label: "Fuel Type",
    value: "Gas",
  },
  {
    icon: <BatteryIcon size={20} className="text-gray-400" />,
    label: "Drivetrain",
    value: "AWD",
  },
  {
    icon: <TransmissionIcon size={20} className="text-gray-400" />,
    label: "Transmission",
    value: "8-Speed Automatic",
  },
];

/**
 * VehicleDetailsTabs Component
 * Displays vehicle information organized in tabs
 */
export function VehicleDetailsTabs({
  className,
  vehicleSpecs = defaultSpecs,
  pricingData = {
    currentPrice: 43098,
    avgPrice: 48098,
    daysOnSite: 3,
    views: 541,
    saves: 73,
  },
  historyData = {
    vin: "2T3D1RFV5RW123456",
    vehicleDescription:
      "2023 Toyota Highlander XLE 4 Door Wagon/Sport Utility 2.5L 14F DOHV I4V - HYBRID - AWD",
    damageReported: 0,
    previousOwners: 2,
    servicesOnRecord: 10,
    repairsReported: 0,
    ownerTypes: ["Commercial", "Personal"],
    lastOdometerReading: 18450,
  },
  showInspectionSection = false,
}: VehicleDetailsTabsProps) {
  return (
    <div className={cn("w-full", className)}>
      <Tabs defaultValue="overview" className="w-full">
        <div className="relative w-full border-b border-gray-200 mb-6">
          <div
            className="overflow-x-auto md:overflow-x-visible px-1 md:px-0"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <TabsList className="bg-transparent h-auto p-0 gap-8 rounded-none flex flex-nowrap border-0">
              <TabsTrigger
                value="overview"
                className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-[#EB0A1E] data-[state=active]:shadow-none pb-3 px-0 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 text-gray-600 font-normal data-[state=active]:font-semibold whitespace-nowrap flex-shrink-0"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="features"
                className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-[#EB0A1E] data-[state=active]:shadow-none pb-3 px-0 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 text-gray-600 font-normal data-[state=active]:font-semibold whitespace-nowrap flex-shrink-0"
              >
                Features & Details
              </TabsTrigger>
              <TabsTrigger
                value="pricing"
                className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-[#EB0A1E] data-[state=active]:shadow-none pb-3 px-0 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 text-gray-600 font-normal data-[state=active]:font-semibold whitespace-nowrap flex-shrink-0"
              >
                Pricing
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-[#EB0A1E] data-[state=active]:shadow-none pb-3 px-0 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 text-gray-600 font-normal data-[state=active]:font-semibold whitespace-nowrap flex-shrink-0"
              >
                History
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Overview Tab Content */}
        <TabsContent value="overview" className="mt-0">
          <div className="rounded-lg p-6">
            {/* Header with title and button */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-semibold">Overview</h3>
              <Button
                variant="outline"
                className="rounded-full border-black hover:bg-gray-100 px-4 py-1.5 text-sm"
              >
                View All Specs
              </Button>
            </div>

            {/* Specs Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Mobile layout */}
              <div className="block md:hidden divide-y divide-gray-200">
                {vehicleSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center py-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="mt-0.5">{spec.icon}</span>
                      <span className="text-sm text-gray-500">
                        {spec.label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 text-right min-w-[90px]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              {/* Desktop layout */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicleSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 pb-6 border-b border-gray-200"
                  >
                    <div className="mt-0.5">{spec.icon}</div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">
                        {spec.label}
                      </span>
                      <span className="text-base font-medium text-gray-900">
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Features & Details Tab Content */}
        <TabsContent value="features" className="mt-0">
          <div className="rounded-lg p-6">
            {/* Header with title and button */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <Button
                variant="outline"
                className="rounded-full border-black hover:bg-gray-100"
              >
                View All Features
              </Button>
            </div>

            {/* Features Grid - 4 columns */}
            <div className="bg-white rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Safety Column */}
                <div>
                  <h4 className="font-semibold text-base mb-4">Safety</h4>
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
                  <h4 className="font-semibold text-base mb-4">Interior</h4>
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
                  <h4 className="font-semibold text-base mb-4">Technology</h4>
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
                  <h4 className="font-semibold text-base mb-4">Exterior</h4>
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
        <TabsContent value="pricing" className="mt-0">
          {/* Header with stats */}
          <div className="rounded-t-lg px-6 pt-6 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-2xl font-bold">Pricing</h3>
              <div className="flex items-center gap-4 sm:gap-6 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      {pricingData.daysOnSite} days
                    </span>{" "}
                    on Arrow
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      {pricingData.views}
                    </span>{" "}
                    Views
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      {pricingData.saves}
                    </span>{" "}
                    saves
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Price Analysis Section - white background */}
          <div className="px-6 py-6">
            <div className="bg-white rounded-lg px-8 py-8">
              {/* Price badge and description + Price Range Meter side by side */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
                {/* Left: Text content */}
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl font-semibold">
                      This vehicle is an
                    </h4>
                    <span className="inline-flex items-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-md text-sm font-semibold">
                      <span className="text-xs">✓</span> Excellent Price
                    </span>
                  </div>
                  <p className="text-base text-gray-900">
                    This vehicle is below the current average market range.
                  </p>
                </div>

                {/* Right: Price Range Meter */}
                <div className="flex-1 w-full lg:max-w-2xl">
                  <PriceRangeMeter
                    currentPrice={pricingData.currentPrice}
                    avgPrice={pricingData.avgPrice}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Price History Accordion - separate section */}
          <div className="rounded-b-lg px-6 pb-6">
            <div className="bg-white rounded-lg">
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <img
                      src="/images/vdp/currency-dollar-circle.svg"
                      alt="Dollar"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-lg font-semibold">Price History</span>
                </div>
                {/* <ChevronDown className="w-5 h-5 text-gray-500" /> */}
              </button>
            </div>
          </div>
        </TabsContent>

        {/* History Tab Content */}
        <TabsContent value="history" className="mt-0">
          <div className="rounded-lg p-6">
            {/* Header with VIN, Vehicle Description and View Report button */}
            <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-6 mb-8 pb-6 border-b border-gray-200 md:border-b-0 md:pb-0">
              <div className="flex flex-col justify-center flex-shrink-0 md:pr-6 md:border-r md:border-gray-200">
                <h3 className="text-xl font-bold mb-1">Vehicle History</h3>
                <p className="text-xs text-gray-600">
                  VIN:{" "}
                  <span className="font-medium text-gray-900">
                    {historyData.vin}
                  </span>
                </p>
              </div>
              <div className="flex items-center flex-1 text-sm text-gray-700 md:px-6 md:border-r md:border-gray-200">
                {historyData.vehicleDescription}
              </div>
              <div className="flex items-center flex-shrink-0 md:pl-6">
                <Button
                  variant="outline"
                  className="rounded-full border-black hover:bg-gray-100"
                >
                  View Full Report
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* History Stats - Single Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* No Damage */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <NoDamageIcon size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-600 mb-0.5">No Damage</h4>
                    <p className="text-base font-bold text-gray-900">
                      {historyData.damageReported} Damage Reported
                    </p>
                  </div>
                </div>

                {/* Previous Owners */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <PreviousOwnersIcon size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-600 mb-0.5">
                      Previous Owners
                    </h4>
                    <p className="text-base font-bold text-gray-900">
                      {historyData.previousOwners} Owners
                    </p>
                  </div>
                </div>

                {/* Service History */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <ServiceHistoryIcon size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-600 mb-0.5">
                      Service History
                    </h4>
                    <p className="text-base font-bold text-gray-900">
                      {historyData.servicesOnRecord} Services on Record
                    </p>
                  </div>
                </div>

                {/* Damage Reports */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <DamageReportIcon size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-600 mb-0.5">
                      Damage Reports
                    </h4>
                    <p className="text-base font-bold text-gray-900">
                      {historyData.repairsReported} Repairs Reported
                    </p>
                  </div>
                </div>

                {/* Type of Owner */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <TypeOwnersIcon size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-600 mb-0.5">
                      Type of Owner
                    </h4>
                    <p className="text-base font-bold text-gray-900">
                      {historyData.ownerTypes.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Last Odometer Reading */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <OdometerIcon size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-600 mb-0.5">
                      Last Odometer Reading
                    </h4>
                    <p className="text-base font-bold text-gray-900">
                      {historyData.lastOdometerReading.toLocaleString()} Miles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inspection Certification Section */}
            {showInspectionSection && (
              <div className="bg-white rounded-lg p-8 mt-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Inspected*
                  </h3>
                  <p className="text-sm text-gray-600">
                    Every vehicle is backed by Toyota's commitment to quality
                    and transparency
                  </p>
                </div>

                {/* Inspection Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Inspected */}
                  <Card className="bg-white shadow-sm overflow-hidden">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src="/images/vdp/inspected.png"
                        alt="Inspected Vehicle"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col items-start">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="/images/vdp/inspected.svg"
                          alt="Inspected"
                          className="w-8 h-8"
                        />
                        <h4 className="font-semibold text-base text-gray-900">
                          Inspected
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Every vehicle undergoes our rigorous 160-point
                        certification process
                      </p>
                    </div>
                  </Card>

                  {/* Verified VIN & Full History Check */}
                  <Card className="bg-white shadow-sm overflow-hidden">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src="/images/vdp/verifiedVin.png"
                        alt="Verified VIN Check"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col items-start">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="/images/vdp/Verified VIN.svg"
                          alt="Verified VIN"
                          className="w-8 h-8"
                        />
                        <h4 className="font-semibold text-base text-gray-900">
                          Verified VIN
                          <br />& Full History Check
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Complete vehicle history with no hidden accidents or
                        major repairs
                      </p>
                    </div>
                  </Card>

                  {/* No Hidden Damage Guarantee */}
                  <Card className="bg-white shadow-sm overflow-hidden">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src="/images/vdp/Damage.png"
                        alt="No Hidden Damage"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col items-start">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="/images/vdp/No Hidden.svg"
                          alt="No Damage"
                          className="w-8 h-8"
                        />
                        <h4 className="font-semibold text-base text-gray-900">
                          No Hidden
                          <br />
                          Damage Guarantee
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        All damage disclosed upfront with detailed condition
                        reports
                      </p>
                    </div>
                  </Card>

                  {/* 7-Day Return or Exchange */}
                  <Card className="bg-white shadow-sm overflow-hidden">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src="/images/vdp/return.png"
                        alt="7-Day Return"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col items-start">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="/images/vdp/exchange.svg"
                          alt="Return"
                          className="w-8 h-8"
                        />
                        <h4 className="font-semibold text-base text-gray-900">
                          7-Day Return
                          <br />
                          or Exchange
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Not satisfied? Return or exchange within 7 days, no
                        questions asked
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
  );
}
