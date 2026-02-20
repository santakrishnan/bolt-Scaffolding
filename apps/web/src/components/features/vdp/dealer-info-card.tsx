'use client'

import { Button, Card, CardContent, cn } from '@tfs-ucmp/ui'
import Image from 'next/image'
import type { DealerInfo } from '../../../lib/data/dealer/dealer-data'

interface DealerInfoCardProps {
  dealer: DealerInfo
  onReviewsClick?: () => void
  onTestDriveClick?: () => void
  className?: string
}

export function DealerInfoCard({
  dealer,
  onReviewsClick,
  onTestDriveClick,
  className,
}: DealerInfoCardProps) {
  return (
    <Card className={cn('w-full rounded-none border-0 bg-white py-[80px] shadow-md', className)}>
      {/* Outer container for centering */}
      <div className="flex w-full justify-center">
        {/* Inner container with fixed dimensions for large screens */}
        <div className="flex w-full max-w-[1280px] flex-col gap-6 lg:h-[400px] lg:flex-row lg:gap-[124px]">
          {/* Dealership Image */}
          <div className="w-full px-4 lg:h-full lg:w-[75%] lg:px-0">
            <div className="relative aspect-[4/3] h-full w-full overflow-hidden rounded-lg bg-gray-100 lg:aspect-[2/1]">
              {/* Placeholder shown if image fails to load */}
              <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <svg
<<<<<<< Updated upstream
                  aria-hidden="true"
=======
>>>>>>> Stashed changes
                  className="h-24 w-24 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                </svg>
              </div>
              <Image
                alt={dealer.name}
                className="relative z-10 object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={dealer.dealershipImage}
              />
            </div>
          </div>

          {/* Dealer Information */}
          <CardContent className="flex w-full flex-col items-start justify-center space-y-4 px-4 lg:w-[25%] lg:space-y-[16px] lg:p-0">
            {/* Dealer Name */}
            <h3 className="font-bold text-gray-900 text-xl lg:text-2xl">{dealer.name}</h3>

            {/* Location */}
            <div className="flex items-start gap-2">
              <svg
<<<<<<< Updated upstream
                aria-hidden="true"
=======
>>>>>>> Stashed changes
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
                <path
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <span className="text-gray-600 text-xs lg:text-sm">{dealer.address}</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <svg
<<<<<<< Updated upstream
                aria-hidden="true"
=======
>>>>>>> Stashed changes
                className="h-4 w-4 flex-shrink-0 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <a
                className="text-gray-600 text-xs hover:text-gray-900 lg:text-sm"
                href={`tel:${dealer.phone}`}
              >
                {dealer.phone}
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-2">
              <svg
<<<<<<< Updated upstream
                aria-hidden="true"
=======
>>>>>>> Stashed changes
                className="h-4 w-4 flex-shrink-0 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <span className="text-gray-600 text-xs lg:text-sm">{dealer.hours}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900 text-xs lg:text-sm">
                {dealer.rating.toFixed(1)}
              </span>
<<<<<<< Updated upstream
              <div
                aria-label={`${dealer.rating.toFixed(1)} out of 5 stars`}
                className="flex gap-0.5"
                role="img"
              >
                {[...new Array(5)].map((_, index) => {
=======
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, index) => {
>>>>>>> Stashed changes
                  const fillPercentage = Math.min(Math.max(dealer.rating - index, 0), 1) * 100
                  return (
                    <div className="relative h-4 w-4" key={index}>
                      {/* Gray background star */}
                      <svg
<<<<<<< Updated upstream
                        aria-hidden="true"
=======
>>>>>>> Stashed changes
                        className="absolute inset-0 h-4 w-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {/* Colored filled star with clip */}
                      <div
                        className="absolute inset-0"
                        style={{
                          clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
                        }}
                      >
                        <svg
<<<<<<< Updated upstream
                          aria-hidden="true"
=======
>>>>>>> Stashed changes
                          className="h-4 w-4 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full flex-col gap-2 pt-4 lg:pt-[32px]">
              <Button
                className="w-full rounded-full bg-black text-white hover:bg-gray-800"
                onClick={onReviewsClick}
                size="default"
              >
                View Reviews
              </Button>
              <Button
                className="w-full rounded-full border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                onClick={onTestDriveClick}
                size="default"
                variant="outline"
              >
                Schedule a Test Drive
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
