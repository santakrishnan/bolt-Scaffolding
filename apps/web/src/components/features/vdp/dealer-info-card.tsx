"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, Button, cn } from "@tfs-ucmp/ui";
import type { DealerInfo } from "../../../lib/data/dealer/dealer-data";

interface DealerInfoCardProps {
  dealer: DealerInfo;
  onReviewsClick?: () => void;
  onTestDriveClick?: () => void;
  className?: string;
}

export function DealerInfoCard({
  dealer,
  onReviewsClick,
  onTestDriveClick,
  className,
}: DealerInfoCardProps) {
  return (
    <Card
      className={cn(
        "w-full border-0 rounded-none shadow-md bg-white py-[80px]",
        className,
      )}
    >
      {/* Outer container for centering */}
      <div className="flex justify-center w-full">
        {/* Inner container with fixed dimensions for large screens */}
        <div className="flex flex-col w-full max-w-[1280px] lg:flex-row lg:h-[400px] gap-6 lg:gap-[124px]">
          {/* Dealership Image */}
          <div className="w-full px-4 lg:w-[75%] lg:px-0 lg:h-full">
            <div className="relative aspect-[4/3] w-full h-full overflow-hidden rounded-lg bg-gray-100 lg:aspect-[2/1]">
              {/* Placeholder shown if image fails to load */}
              <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <svg
                  className="h-24 w-24 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <Image
                src={dealer.dealershipImage}
                alt={dealer.name}
                fill
                className="relative z-10 object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Dealer Information */}
          <CardContent className="w-full flex flex-col items-start justify-center space-y-4 px-4 lg:w-[25%] lg:space-y-[16px] lg:p-0">
            {/* Dealer Name */}
            <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">
              {dealer.name}
            </h3>

            {/* Location */}
            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-xs text-gray-600 lg:text-sm">
                {dealer.address}
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 flex-shrink-0 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href={`tel:${dealer.phone}`}
                className="text-xs text-gray-600 hover:text-gray-900 lg:text-sm"
              >
                {dealer.phone}
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 flex-shrink-0 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs text-gray-600 lg:text-sm">
                {dealer.hours}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-900 lg:text-sm">
                {dealer.rating.toFixed(1)}
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, index) => {
                  const fillPercentage =
                    Math.min(Math.max(dealer.rating - index, 0), 1) * 100;
                  return (
                    <div key={index} className="relative h-4 w-4">
                      {/* Gray background star */}
                      <svg
                        className="absolute inset-0 h-4 w-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {/* Colored filled star with clip */}
                      <div
                        style={{
                          clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
                        }}
                        className="absolute inset-0"
                      >
                        <svg
                          className="h-4 w-4 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-2 pt-4 lg:pt-[32px]">
              <Button
                size="default"
                onClick={onReviewsClick}
                className="w-full rounded-full bg-black text-white hover:bg-gray-800"
              >
                View Reviews
              </Button>
              <Button
                variant="outline"
                size="default"
                onClick={onTestDriveClick}
                className="w-full rounded-full border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
              >
                Schedule a Test Drive
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
