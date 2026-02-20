import { BadgeCheck, CheckCircle2, Gem, MapPin } from 'lucide-react'

// Define the shape of the data object
interface VehicleData {
  title: string
  price: number
  oldPrice?: number
  badges: { label: string; type: string }[]
  specs: { label: string; value: string }[]
  colors: { label: string; hex: string; type: string }[]
  dealer: {
    name: string
    address: string
    distance: string
  }
}

interface Props {
  data: VehicleData
}

export default function VehicleDetailsPanel({ data }: Props) {
  return (
    <div className="w-full max-w-[480px] font-sans text-[#1a1a1a]">
      {/* 1. Title */}
      <h1 className="mb-2 font-extrabold text-[28px] leading-[1.2]">{data.title}</h1>

      {/* 2. Price Block */}
      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-extrabold text-[#eb0a1e] text-[32px] tracking-tight">
          ${data.price.toLocaleString()}
        </span>
        {data.oldPrice && (
          <span className="font-medium text-[#999] text-[14px] line-through decoration-1">
            was ${data.oldPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* 3. Badges */}
      <div className="mb-8 flex flex-wrap items-center gap-4">
        {data.badges.map((badge, index) => {
          const isGreen = badge.type === 'green'
          return (
            <div
              className={`flex items-center gap-1.5 rounded-[4px] px-2.5 py-1 font-bold text-[12px] ${
                isGreen ? 'bg-[#00b359] text-white' : 'bg-transparent text-[#1a1a1a]'
              }`}
              key={index}
            >
              {/* Icon Logic based on label/type */}
              {isGreen ? (
                <Gem className="h-3.5 w-3.5" />
              ) : badge.label === 'Warranty' ? (
                <BadgeCheck className="h-4 w-4 text-[#58595b]" />
              ) : (
                <CheckCircle2 className="h-4 w-4 text-[#58595b]" />
              )}
              <span>{badge.label}</span>
            </div>
          )
        })}
      </div>

      {/* 4. Specs Grid */}
      <div className="mb-6 grid grid-cols-3 gap-x-2 gap-y-6 border-[#e0e0e0] border-b pb-8">
        {data.specs.map((spec, index) => (
          <div
            className={`flex flex-col gap-1 ${spec.label === 'VIN' ? 'col-span-2' : ''}`}
            key={index}
          >
            <span className="font-normal text-[#58595b] text-[12px] leading-none">
              {spec.label}
            </span>
            <span className="font-bold text-[#1a1a1a] text-[14px] leading-tight">{spec.value}</span>
          </div>
        ))}
      </div>

      {/* 5. Colors */}
      <div className="mb-8 flex gap-10">
        {data.colors.map((color, index) => (
          <div className="flex items-center gap-3" key={index}>
            <div
              className="h-6 w-6 rounded-[4px] border border-gray-300 shadow-sm"
              style={{ backgroundColor: color.hex }}
            />
            <div className="flex flex-col">
              <span className="font-normal text-[#58595b] text-[11px]">{color.type}</span>
              <span className="font-bold text-[#1a1a1a] text-[13px]">{color.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 6. Action Buttons */}
      <div className="mb-8 space-y-3">
        <button className="w-full rounded-full bg-[#eb0a1e] py-3.5 font-bold text-[16px] text-white shadow-sm transition-colors hover:bg-[#c4000f]">
          Get Pre-Qualified
        </button>
        <button className="w-full rounded-full border border-[#1a1a1a] bg-white py-3.5 font-bold text-[#1a1a1a] text-[16px] transition-colors hover:bg-gray-50">
          Get My Trade-In Offer
        </button>
      </div>

      {/* 7. Dealer Info */}
      <div className="flex items-center gap-3 border-[#e0e0e0] border-t pt-6">
        {/* Toyota Logo Placeholder */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eb0a1e] text-white">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-[#1a1a1a] text-[14px] leading-tight">{data.dealer.name}</h3>
          <p className="mt-0.5 text-[#58595b] text-[12px]">{data.dealer.address}</p>
        </div>

        <div className="flex items-center gap-1 text-[#58595b] text-[12px]">
          <MapPin className="h-3.5 w-3.5" />
          {data.dealer.distance}
        </div>
      </div>
    </div>
  )
}
