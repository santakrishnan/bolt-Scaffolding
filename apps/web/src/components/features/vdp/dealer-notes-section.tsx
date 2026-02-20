'use client'

import { Card } from '@tfs-ucmp/ui'
import Image from 'next/image'
import type { DealerNotes } from '../../../lib/data/dealer/dealer-data'
import { sampleDealerNotes } from '../../../lib/data/dealer/dealer-data'
import { DealerInfoCard } from './dealer-info-card'

interface DealerNotesSectionProps {
  data?: DealerNotes
  onReviewsClick?: () => void
  onTestDriveClick?: () => void
}

export function DealerNotesSection({
  data = sampleDealerNotes,
  onReviewsClick,
  onTestDriveClick,
}: DealerNotesSectionProps) {
  return (
    <section className="w-full bg-[#f8f8f8] py-8 lg:py-12">
      <div className="flex flex-col gap-6 lg:gap-8">
        {/* Dealer Notes Section - Shows first on mobile, first on desktop */}
        <div className="flex w-full justify-center px-4 sm:px-6 lg:px-8">
          <Card className="w-full max-w-[1280px] border-0 bg-white shadow-sm lg:h-[320px]">
            <div className="flex h-full flex-col gap-4 p-6 lg:flex-row lg:items-start lg:gap-8 lg:p-8">
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="mb-4 font-semibold text-2xl text-gray-900 lg:text-3xl">
                  Dealer Notes
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed lg:text-base">
                  {data.vehicleDescription}
                </p>
              </div>

              {/* Vehicle Image */}
              <div className="flex-shrink-0 lg:w-64">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100 lg:aspect-[4/3]">
                  {/* Placeholder shown if image fails to load */}
                  <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <svg
<<<<<<< Updated upstream
                      aria-hidden="true"
=======
>>>>>>> Stashed changes
                      className="h-16 w-16 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                      />
                    </svg>
                  </div>
                  <Image
                    alt="Vehicle"
                    className="relative z-10 object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 256px"
                    src={data.vehicleImage}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Dealership Section - Full screen width */}
        <div className="w-full">
          <DealerInfoCard
            dealer={data.dealer}
            onReviewsClick={onReviewsClick}
            onTestDriveClick={onTestDriveClick}
          />
        </div>
      </div>
    </section>
  )
}
