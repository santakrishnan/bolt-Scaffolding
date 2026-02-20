import { LocationIcon } from '@tfs-ucmp/ui'
import { Heart } from 'lucide-react'
import type React from 'react'

export type CarCardProps = {
  title: string
  price: number
  image: string
  miles: string
  odometer: string
  match: number
  labels?: string[] // e.g. ["Excellent Price", "Price Drop", "Good Price", "Low Price"]
  oldPrice?: number | null
  isFavorite?: boolean
}

export const CarCard: React.FC<CarCardProps> = ({
  title,
  price,
  image,
  miles,
  odometer,
  match,
  labels = [],
  oldPrice,
  isFavorite = false,
}) => {
  // Helper for badge color
  const getBadgeColor = (label: string) => {
    switch (label) {
      case 'Excellent Price':
        return 'bg-green-500 text-white'
      case 'Price Drop':
        return 'bg-blue-500 text-white'
      case 'Good Price':
        return 'bg-emerald-400 text-white'
      case 'Low Price':
        return 'bg-yellow-400 text-black'
      default:
        return 'bg-gray-200 text-gray-700'
    }
  }
  return (
    <div className="relative flex min-h-[340px] w-full max-w-xs flex-col rounded-lg border border-gray-200 bg-white shadow-lg sm:max-w-sm md:min-h-[380px] md:max-w-md">
      {/* Price badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {labels.map((label, idx) => (
          <span
            className={`rounded px-2 py-1 font-semibold text-xs ${getBadgeColor(label)}`}
            key={idx}
          >
            {label}
          </span>
        ))}
      </div>
      {/* Heart and Share icons */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button aria-label="Share" className="text-gray-400">
          {/* TODO: Replace with Share icon from UI when available */}
          <svg
            fill="none"
            height="22"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="22"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M8.59 13.51l6.83 3.98" />
            <path d="M8.59 10.49l6.83-3.98" />
          </svg>
        </button>
        <button aria-label="Favorite" className={isFavorite ? 'text-red-500' : 'text-gray-400'}>
          <Heart
            className="transition-colors"
            fill={isFavorite ? 'currentColor' : 'none'}
            size={24}
            strokeWidth={2}
          />
        </button>
      </div>
      <div className="mt-6 mb-2 flex justify-center">
        <img
          alt={title}
          className="h-28 w-auto max-w-full object-contain sm:h-32 md:h-40"
          src={image}
        />
      </div>
      <div className="flex flex-col gap-y-1 p-4 sm:p-6 md:p-8">
        <div className="mb-1 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-0">
          <div className="font-bold font-toyota text-[#111] text-[16px] leading-[1.3]">{title}</div>
          <div className="flex flex-col items-end">
            {oldPrice && (
              <span className="text-gray-400 text-xs line-through">
                ${oldPrice.toLocaleString()}
              </span>
            )}
            <span className="text-right font-semibold font-toyota text-[#EB0D1C] text-[20px] leading-normal">
              ${price.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="mb-2 flex flex-wrap items-center gap-2 text-gray-500 text-xs">
          <LocationIcon className="mr-1 inline h-4 w-4" />
          <span>{miles}</span>
          <span className="mx-1">|</span>
          <span>{odometer}</span>
        </div>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded bg-black px-2 py-1 font-semibold text-white text-xs">
            {match}% Match
          </span>
          <a className="ml-auto text-gray-600 text-xs underline" href="#">
            Refine your search
          </a>
        </div>
        <div className="mt-2 flex flex-wrap justify-between gap-2 border-t pt-2 text-gray-500 text-xs">
          <span>Warranty</span>
          <span>Inspected</span>
          <span>1 Owner</span>
        </div>
      </div>
    </div>
  )
}
