import React from "react";
import { StarIcon, Button } from "@tfs-ucmp/ui";

interface RatingDistribution {
  stars: number;
  count: number;
}

interface VehicleRatingProps {
  title: string;
  rating: number;
  reviewCount: number;
  distribution: RatingDistribution[];
}

export function VehicleRating({
  title,
  rating,
  reviewCount,
  distribution,
}: VehicleRatingProps) {
  // Find max count for bar scaling
  const maxCount = Math.max(...distribution.map((d) => d.count));
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg p-6 md:items-center gap-6 md:gap-12 w-full">
      {/* Left: Title, rating, stars, button */}
      <div className="flex flex-col items-center md:items-start md:min-w-[220px]">
        <div className="text-base font-semibold text-gray-900 mb-3">
          {title}
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-4xl font-bold text-gray-900">
            {rating.toFixed(1)}
          </span>
          <div className="flex gap-1 ml-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon
                key={i}
                className={`w-5 h-5 ${i <= Math.round(rating) ? "text-black" : "text-gray-300"}`}
                fill={i <= Math.round(rating) ? "currentColor" : "none"}
                size={20}
              />
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          className="rounded-full border-black px-4 py-1.5 text-sm font-medium"
        >
          View More ({reviewCount} Reviews)
        </Button>
      </div>
      {/* Right: Rating distribution bars */}
      <div className="flex-1 w-full">
        <div className="flex flex-col gap-2">
          {distribution.map((d, idx) => (
            <div key={d.stars} className="flex items-center gap-3">
              <span className="w-12 text-sm text-gray-700 text-right">
                {d.stars} stars
              </span>
              <div className="relative flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-2 rounded-full bg-[#EB0A1E]`}
                  style={{
                    width: `${d.count && maxCount ? (d.count / maxCount) * 100 : 0}%`,
                  }}
                ></div>
              </div>
              <span className="w-10 text-xs text-gray-500 text-right">
                {d.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
