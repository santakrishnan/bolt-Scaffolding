'use client'

import { Button } from '@tfs-ucmp/ui'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
<<<<<<< Updated upstream
import Image from 'next/image'
=======
>>>>>>> Stashed changes
import type React from 'react'
import { useState } from 'react'

export const VehiclePDP: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Demo vehicle data
  const vehicle = {
    year: 2023,
    make: 'Toyota',
    model: 'Highlander XLE',
    price: 43_098,
    originalPrice: 35_900,
    condition: 'Excellent Price',
    warranty: true,
    inspected: true,
    miles: '18,450',
    drivetrain: 'AWD',
    mpg: '18-24',
    stock: '990167H',
    vin: '2T3P1RF5VNW123456',
    exterior: 'Graphite Fabric',
    interior: 'Charcoal Gray',
    dealer: 'Toyota of Fort Worth',
    location: 'Fort Worth, TX 76116',
    distance: '6.1mi',
    images: [
      '/images/vdp/PDP_1.png',
      '/images/vdp/PDP_2.png',
      '/images/vdp/PDP_3.png',
      '/images/vdp/PDP_4.png',
      '/images/vdp/PDP_5.png',
      '/images/vdp/PDP_6.png',
    ],
    features: [
      'Apple Carplay/ Android Auto',
      'Around View Camera',
      'Bluetooth Hands-Free/ Streaming Audio',
      'Pedestrian Detection',
      'Forward Collision Warning',
      'Voice Command',
      'Rear Sunshade',
      'Power Trunk/ Liftgate',
      'LED Highlights',
      'Folding Mirrors',
    ],
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length)
  }

  return (
    <div className="mx-auto max-w-7xl md:p-4 lg:p-1">
<<<<<<< Updated upstream
      {/* Breadcrumb Navigation */}
      <div className="mb-2 flex items-center justify-between px-4 py-3 lg:mb-4 lg:px-0 lg:py-4">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1 text-foreground text-sm">
            <li>
              <a className="hover:text-gray-700" href="/used-cars">
                Toyota
              </a>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li>
              <a className="hover:text-gray-700" href="/used-cars?make=toyota&model=highlander">
                Highlander
              </a>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li aria-current="page">XLE</li>
          </ol>
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Share this vehicle" className="hover:opacity-70" type="button">
            <Image
              alt=""
              aria-hidden="true"
              className="h-5 w-5"
              height={20}
              src="/images/vdp/Vector_6.svg"
              width={20}
            />
          </button>
          <button aria-label="Save to favorites" className="hover:opacity-70" type="button">
            <Image
              alt=""
              aria-hidden="true"
              className="h-5 w-5"
              height={20}
              src="/images/vdp/Vector_8.svg"
              width={20}
            />
          </button>
          <button aria-label="Print vehicle details" className="hover:opacity-70" type="button">
            <Image
              alt=""
              aria-hidden="true"
              className="h-5 w-5"
              height={20}
              src="/images/vdp/Vector_7.svg"
              width={20}
            />
=======
      {/* Back to Search Header */}
      <div className="mb-2 flex items-center justify-between px-4 py-3 lg:mb-4 lg:px-0 lg:py-4">
        <button className="flex items-center gap-2 font-normal text-[#111] text-[14px] hover:text-gray-700">
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Search Result</span>
        </button>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-70">
            <img alt="Share" className="h-5 w-5" src="/images/vdp/Vector_6.svg" />
          </button>
          <button className="hover:opacity-70">
            <img alt="Favorite" className="h-5 w-5" src="/images/vdp/Vector_7.svg" />
          </button>
          <button className="hover:opacity-70">
            <img alt="More" className="h-5 w-5" src="/images/vdp/Vector_8.svg" />
>>>>>>> Stashed changes
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Left Side - Image Section */}
        <div className="flex flex-col gap-4">
<<<<<<< Updated upstream
          {/* Main Image Carousel */}
          <div
            aria-label="Vehicle image gallery"
            aria-roledescription="carousel"
            className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-gray-100 lg:aspect-auto lg:h-[518px] lg:w-[58.89vw] lg:max-w-[848px] lg:rounded-[16px]"
            role="region"
          >
            <Image
              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} - Image ${currentImageIndex + 1} of ${vehicle.images.length}`}
              className="object-cover"
              fill
              priority={currentImageIndex === 0}
              sizes="(max-width: 1024px) 100vw, 848px"
              src={vehicle.images[currentImageIndex] as string}
=======
          {/* Main Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-gray-100 lg:aspect-auto lg:h-[518px] lg:w-[58.89vw] lg:max-w-[848px] lg:rounded-[16px]">
            <img
              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              className="h-full w-full object-cover"
              src={vehicle.images[currentImageIndex]}
>>>>>>> Stashed changes
            />

            {/* Navigation Arrows - Desktop only */}
            <button
              aria-label="Previous image"
              className="absolute top-1/2 left-4 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-50 lg:flex"
              onClick={prevImage}
<<<<<<< Updated upstream
              type="button"
=======
>>>>>>> Stashed changes
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Next image"
              className="absolute top-1/2 right-4 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-50 lg:flex"
              onClick={nextImage}
<<<<<<< Updated upstream
              type="button"
=======
>>>>>>> Stashed changes
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Count Badge */}
            <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
<<<<<<< Updated upstream
              <Image
                alt=""
                aria-hidden="true"
                className="h-4 w-4"
                height={16}
                src="/images/vdp/PDP_prev.svg"
                width={16}
              />
              <span className="text-center font-normal text-[12px] text-foreground leading-normal">
                {vehicle.images.length} Images
              </span>
            </div>
            {/* Live region for screen readers */}
            <div aria-atomic="true" aria-live="polite" className="sr-only">
              Showing image {currentImageIndex + 1} of {vehicle.images.length}
            </div>
=======
              <img alt="" className="h-4 w-4" src="/images/vdp/PDP_prev.svg" />
              <span className="text-center font-normal text-[#111] text-[12px] leading-normal">
                {vehicle.images.length} Images
              </span>
            </div>
>>>>>>> Stashed changes
          </div>

          {/* Thumbnail Gallery */}
          <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2 pl-[24px] lg:gap-4 lg:pl-0">
            {vehicle.images.map((img, idx) => (
              <button
<<<<<<< Updated upstream
                aria-label={`View image ${idx + 1} of ${vehicle.images.length}`}
                aria-pressed={idx === currentImageIndex}
=======
>>>>>>> Stashed changes
                className={`flex-shrink-0 rounded-[16px] border-2 p-1 transition-all ${
                  idx === currentImageIndex
                    ? 'border-red-500'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
<<<<<<< Updated upstream
                type="button"
              >
                <Image
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} thumbnail ${idx + 1}`}
                  className="rounded-md object-contain"
                  height={72}
                  src={img}
                  width={72}
=======
              >
                <img
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-14 w-14 rounded-md object-contain lg:h-[72px] lg:w-[72px]"
                  src={img}
>>>>>>> Stashed changes
                />
              </button>
            ))}
          </div>

          {/* Key Highlights - Desktop only */}
          <div className="hidden rounded-lg bg-gray-100 p-4 lg:block">
<<<<<<< Updated upstream
            <h2 className="mb-4 font-semibold text-xl">Key Highlights</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {vehicle.features.map((feature, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0"
                    height={20}
                    src="/images/vdp/Vector_5.svg"
                    width={20}
                  />
=======
            <h3 className="mb-4 font-semibold text-xl">Key Highlights</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {vehicle.features.map((feature, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                  <img alt="" className="h-5 w-5 flex-shrink-0" src="/images/vdp/Vector_5.svg" />
>>>>>>> Stashed changes
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Details Section */}
<<<<<<< Updated upstream
        <div className="mt-4 flex w-full flex-col gap-4 px-[24px] lg:mt-0 lg:w-[392px] lg:gap-3 lg:px-0">
          {/* Title and Price */}
          <div>
            <h1 className="mb-2 font-bold text-foreground text-xl leading-tight lg:text-[32px] lg:leading-[42px]">
=======
        <div className="mt-4 flex w-full flex-col gap-4 px-[24px] lg:mt-0 lg:w-[392px] lg:gap-6 lg:px-0">
          {/* Title and Price */}
          <div>
            <h1 className="mb-2 font-bold text-[#101828] text-xl leading-tight lg:text-[32px] lg:leading-[42px]">
>>>>>>> Stashed changes
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            <div className="flex flex-wrap items-baseline gap-2 lg:gap-3">
              <span className="font-bold text-2xl text-[#EB0A1E] leading-normal lg:text-[32px]">
                ${vehicle.price.toLocaleString()}
              </span>
<<<<<<< Updated upstream
              <span className="font-normal text-[12px] text-muted-foreground leading-normal line-through lg:text-[14px]">
=======
              <span className="font-normal text-[#8A8A8A] text-[12px] leading-normal line-through lg:text-[14px]">
>>>>>>> Stashed changes
                was ${vehicle.originalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex h-[24px] items-center gap-1.5 rounded-md bg-[#10B981] px-3 py-1.5">
<<<<<<< Updated upstream
              <Image
                alt=""
                aria-hidden="true"
                className="h-4 w-4"
                height={16}
                src="/images/vdp/Vector_1.svg"
                width={16}
              />
=======
              <img alt="" className="h-4 w-4" src="/images/vdp/Vector_1.svg" />
>>>>>>> Stashed changes
              <span className="text-center font-semibold text-[10px] text-white leading-normal">
                {vehicle.condition}
              </span>
            </div>
            {vehicle.warranty && (
              <div className="inline-flex h-[24px] items-center gap-1.5 rounded-md bg-white px-3 py-1.5 font-medium text-gray-700 text-sm">
<<<<<<< Updated upstream
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4"
                  height={16}
                  src="/images/vdp/Vector_2.svg"
                  width={16}
                />
=======
                <img alt="" className="h-4 w-4" src="/images/vdp/Vector_2.svg" />
>>>>>>> Stashed changes
                <span className="text-[10px]">Warranty</span>
              </div>
            )}
            {vehicle.inspected && (
              <div className="inline-flex h-[24px] items-center gap-1.5 rounded-md bg-white px-3 py-1.5 font-medium text-gray-700 text-sm">
<<<<<<< Updated upstream
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4"
                  height={16}
                  src="/images/vdp/Vector_3.svg"
                  width={16}
                />
=======
                <img alt="" className="h-4 w-4" src="/images/vdp/Vector_3.svg" />
>>>>>>> Stashed changes
                <span className="text-[10px]">Inspected</span>
              </div>
            )}
          </div>

          {/* Specs Grid */}
          <div className="border-gray-200 border-t py-4 lg:py-5">
            <div className="grid grid-cols-3 gap-3 pb-4 lg:gap-4">
              <div>
                <p className="font-semibold text-[#111] text-[12px] capitalize opacity-50">Miles</p>
                <p className="mt-1 font-semibold text-[#111] text-[14px] leading-normal">
                  {vehicle.miles}
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#111] text-[12px] capitalize opacity-50">
                  Drivetrain
                </p>
                <p className="mt-1 font-semibold text-[#111] text-[14px] leading-normal">
                  {vehicle.drivetrain}
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#111] text-[12px] capitalize opacity-50">MPG</p>
                <p className="mt-1 font-semibold text-[#111] text-[14px] leading-normal">
                  {vehicle.mpg}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 border-gray-200 border-b pt-4 pb-4 lg:gap-4">
              <div>
                <p className="font-semibold text-[#111] text-[12px] capitalize opacity-50">
                  Stock #
                </p>
                <p className="mt-1 font-semibold text-[#111] text-[14px] leading-normal">
                  {vehicle.stock}
                </p>
              </div>
              <div className="col-span-2">
                <p className="font-semibold text-[#111] text-[12px] capitalize opacity-50">VIN</p>
                <p className="mt-1 font-semibold text-[#111] text-[14px] leading-normal">
                  {vehicle.vin}
                </p>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="flex gap-8 border-gray-200 border-b pb-4 lg:gap-12">
            <div className="flex items-start gap-2">
              <div
                className="mt-[4.5%] h-[28px] w-[28px] rounded-[2px]"
                style={{
                  background: 'linear-gradient(166deg, #3F3F3F -30%, #A5A5A5 140%)',
                }}
              />
              <div className="flex flex-col">
                <p className="font-semibold text-[#111] text-[12px] capitalize opacity-50">
                  Exterior
                </p>
                <span className="font-semibold text-[#111] text-[14px] leading-normal">
                  {vehicle.exterior}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-[4.5%] h-[28px] w-[28px] rounded-[2px] bg-black" />
              <div className="flex flex-col">
                <p className="font-semibold text-[#111] text-[12px] capitalize opacity-50">
                  Interior
                </p>
                <span className="font-semibold text-[#111] text-[14px] leading-normal">
                  {vehicle.interior}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <Button className="w-full rounded-[100px] bg-[#EB0A1E] py-4 text-center font-semibold text-[14px] text-white hover:bg-red-700 lg:py-6">
              Get Pre-Qualified
            </Button>
            <Button
              className="w-full rounded-[100px] border border-[#58595B] bg-white py-4 text-center font-semibold text-[#111] text-[14px] hover:bg-gray-50 lg:py-6"
              variant="outline"
            >
              Get My Trade-In Offer
            </Button>
          </div>

          {/* Dealer Info */}
          <div className="border-gray-200 border-t border-b py-4">
            <div className="flex items-end justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#EB0A1E]">
<<<<<<< Updated upstream
                  <Image
                    alt="Toyota"
                    className="h-[24px] w-[23px]"
                    height={24}
                    src="/images/vdp/Vector_4.svg"
                    width={23}
                  />
=======
                  <img alt="Toyota" className="h-[24px] w-[23px]" src="/images/vdp/Vector_4.svg" />
>>>>>>> Stashed changes
                </div>
                <div>
                  <p className="font-semibold text-[#272727] text-[14px] leading-[130%] tracking-[-0.42px]">
                    {vehicle.dealer}
                  </p>
                  <p className="font-normal text-[#58595B] text-[12px] leading-normal">
                    {vehicle.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 font-normal text-[#58595B] text-[12px] leading-normal">
                <MapPin className="h-3.5 w-3.5" />
                <span>{vehicle.distance}</span>
              </div>
            </div>
          </div>

          {/* Key Highlights - Mobile only */}
          <div className="rounded-lg bg-gray-100 p-4 lg:hidden">
<<<<<<< Updated upstream
            <h2 className="mb-4 font-semibold text-lg">Key Highlights</h2>
            <div className="grid grid-cols-1 gap-3">
              {vehicle.features.map((feature, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0"
                    height={16}
                    src="/images/vdp/Vector_5.svg"
                    width={16}
                  />
=======
            <h3 className="mb-4 font-semibold text-lg">Key Highlights</h3>
            <div className="grid grid-cols-1 gap-3">
              {vehicle.features.map((feature, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                  <img alt="" className="h-4 w-4 flex-shrink-0" src="/images/vdp/Vector_5.svg" />
>>>>>>> Stashed changes
                  <span className="text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
