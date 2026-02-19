"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@tfs-ucmp/ui";
import { DealerInfoCard } from "./dealer-info-card";
import { sampleDealerNotes } from "../../../lib/data/dealer/dealer-data";
import type { DealerNotes } from "../../../lib/data/dealer/dealer-data";

interface DealerNotesSectionProps {
  data?: DealerNotes;
  onReviewsClick?: () => void;
  onTestDriveClick?: () => void;
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
        <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-white shadow-sm w-full max-w-[1280px] lg:h-[320px]">
            <div className="flex flex-col gap-4 p-6 lg:flex-row lg:items-start lg:gap-8 lg:p-8 h-full">
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 lg:text-3xl">
                  Dealer Notes
                </h2>
                <p className="text-sm leading-relaxed text-gray-700 lg:text-base">
                  {data.vehicleDescription}
                </p>
              </div>

              {/* Vehicle Image */}
              <div className="flex-shrink-0 lg:w-64">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100 lg:aspect-[4/3]">
                  {/* Placeholder shown if image fails to load */}
                  <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <svg
                      className="h-16 w-16 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <Image
                    src={data.vehicleImage}
                    alt="Vehicle"
                    fill
                    className="relative z-10 object-cover"
                    sizes="(max-width: 1024px) 100vw, 256px"
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
  );
}
