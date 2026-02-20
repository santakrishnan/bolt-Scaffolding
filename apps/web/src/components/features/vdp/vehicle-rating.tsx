import { Button, StarIcon } from '@tfs-ucmp/ui'

interface RatingDistribution {
  stars: number
  count: number
}

interface VehicleRatingProps {
  title: string
  rating: number
  reviewCount: number
  distribution: RatingDistribution[]
}

export function VehicleRating({ title, rating, reviewCount, distribution }: VehicleRatingProps) {
  // Find max count for bar scaling
  const maxCount = Math.max(...distribution.map((d) => d.count))
  return (
    <div className="flex w-full flex-col gap-6 rounded-lg bg-white p-6 md:flex-row md:items-center md:gap-12">
      {/* Left: Title, rating, stars, button */}
      <div className="flex flex-col items-center md:min-w-[220px] md:items-start">
        <div className="mb-3 font-semibold text-base text-gray-900">{title}</div>
        <div className="mb-3 flex items-center gap-2">
          <span className="font-bold text-4xl text-gray-900">{rating.toFixed(1)}</span>
<<<<<<< Updated upstream
          <div
            aria-label={`${rating.toFixed(1)} out of 5 stars`}
            className="ml-2 flex gap-1"
            role="img"
          >
=======
          <div className="ml-2 flex gap-1">
>>>>>>> Stashed changes
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon
                className={`h-5 w-5 ${i <= Math.round(rating) ? 'text-black' : 'text-gray-300'}`}
                fill={i <= Math.round(rating) ? 'currentColor' : 'none'}
                key={i}
                size={20}
              />
            ))}
          </div>
        </div>
        <Button
          className="rounded-full border-black px-4 py-1.5 font-medium text-sm"
          variant="outline"
        >
          View More ({reviewCount} Reviews)
        </Button>
      </div>
      {/* Right: Rating distribution bars */}
      <div className="w-full flex-1">
        <div className="flex flex-col gap-2">
<<<<<<< Updated upstream
          {distribution.map((d, _idx) => (
            <div className="flex items-center gap-3" key={d.stars}>
              <span className="w-12 text-right text-gray-700 text-sm" id={`rating-bar-${d.stars}`}>
                {d.stars} stars
              </span>
              <div
                aria-labelledby={`rating-bar-${d.stars}`}
                aria-valuemax={maxCount}
                aria-valuemin={0}
                aria-valuenow={d.count}
                className="relative h-2 flex-1 overflow-hidden rounded-full bg-gray-200"
                role="meter"
              >
=======
          {distribution.map((d, idx) => (
            <div className="flex items-center gap-3" key={d.stars}>
              <span className="w-12 text-right text-gray-700 text-sm">{d.stars} stars</span>
              <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
>>>>>>> Stashed changes
                <div
                  className={'absolute top-0 left-0 h-2 rounded-full bg-[#EB0A1E]'}
                  style={{
                    width: `${d.count && maxCount ? (d.count / maxCount) * 100 : 0}%`,
                  }}
                />
              </div>
              <span className="w-10 text-right text-gray-500 text-xs">{d.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
