"use client";

import { Button } from "@tfs-ucmp/ui";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import type React from "react";
import { useState } from "react";

export const VehiclePDP: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Demo vehicle data
  const vehicle = {
    year: 2023,
    make: "Toyota",
    model: "Highlander XLE",
    price: 43_098,
    originalPrice: 35_900,
    condition: "Excellent Price",
    warranty: true,
    inspected: true,
    miles: "18,450",
    drivetrain: "AWD",
    mpg: "18-24",
    stock: "990167H",
    vin: "2T3P1RF5VNW123456",
    exterior: "Graphite Fabric",
    interior: "Charcoal Gray",
    dealer: "Toyota of Fort Worth",
    location: "Fort Worth, TX 76116",
    distance: "6.1mi",
    images: [
      "/images/vdp/PDP_1.png",
      "/images/vdp/PDP_2.png",
      "/images/vdp/PDP_3.png",
      "/images/vdp/PDP_4.png",
      "/images/vdp/PDP_5.png",
      "/images/vdp/PDP_6.png",
    ],
    features: [
      "Apple Carplay/ Android Auto",
      "Around View Camera",
      "Bluetooth Hands-Free/ Streaming Audio",
      "Pedestrian Detection",
      "Forward Collision Warning",
      "Voice Command",
      "Rear Sunshade",
      "Power Trunk/ Liftgate",
      "LED Highlights",
      "Folding Mirrors",
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length,
    );
  };

  return (
    <div className="mx-auto max-w-7xl md:p-4 lg:p-1">
      {/* Back to Search Header */}
      <div className="mb-2 flex items-center justify-between px-4 py-3 lg:mb-4 lg:px-0 lg:py-4">
        <button className="flex items-center gap-2 font-normal text-[#111] text-[14px] hover:text-gray-700">
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Search Result</span>
        </button>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-70">
            <img
              alt="Share"
              className="h-5 w-5"
              src="/images/vdp/Vector_6.svg"
            />
          </button>
          <button className="hover:opacity-70">
            <img
              alt="Favorite"
              className="h-5 w-5"
              src="/images/vdp/Vector_7.svg"
            />
          </button>
          <button className="hover:opacity-70">
            <img
              alt="More"
              className="h-5 w-5"
              src="/images/vdp/Vector_8.svg"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Left Side - Image Section */}
        <div className="flex flex-col gap-4">
          {/* Main Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-gray-100 lg:aspect-auto lg:h-[518px] lg:w-[58.89vw] lg:max-w-[848px] lg:rounded-[16px]">
            <img
              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              className="h-full w-full object-cover"
              src={vehicle.images[currentImageIndex]}
            />

            {/* Navigation Arrows - Desktop only */}
            <button
              aria-label="Previous image"
              className="absolute top-1/2 left-4 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-50 lg:flex"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Next image"
              className="absolute top-1/2 right-4 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-50 lg:flex"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Count Badge */}
            <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <img
                alt=""
                className="h-4 w-4"
                src="/images/vdp/PDP_prev.svg"
              />
              <span className="text-center font-normal text-[#111] text-[12px] leading-normal">
                {vehicle.images.length} Images
              </span>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2 pl-[24px] lg:gap-4 lg:pl-0">
            {vehicle.images.map((img, idx) => (
              <button
                className={`flex-shrink-0 rounded-[16px] border-2 p-1 transition-all ${
                  idx === currentImageIndex
                    ? "border-red-500"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
              >
                <img
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-14 w-14 rounded-md object-contain lg:h-[72px] lg:w-[72px]"
                  src={img}
                />
              </button>
            ))}
          </div>

          {/* Key Highlights - Desktop only */}
          <div className="hidden rounded-lg bg-gray-100 p-4 lg:block">
            <h3 className="mb-4 font-semibold text-xl">Key Highlights</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {vehicle.features.map((feature, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                  <img
                    alt=""
                    className="h-5 w-5 flex-shrink-0"
                    src="/images/vdp/Vector_5.svg"
                  />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Details Section */}
        <div className="mt-4 flex w-full flex-col gap-4 px-[24px] lg:mt-0 lg:w-[392px] lg:gap-6 lg:px-0">
          {/* Title and Price */}
          <div>
            <h1 className="mb-2 font-bold text-[#101828] text-xl leading-tight lg:text-[32px] lg:leading-[42px]">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            <div className="flex flex-wrap items-baseline gap-2 lg:gap-3">
              <span className="font-bold text-2xl text-[#EB0A1E] leading-normal lg:text-[32px]">
                ${vehicle.price.toLocaleString()}
              </span>
              <span className="font-normal text-[#8A8A8A] text-[12px] leading-normal line-through lg:text-[14px]">
                was ${vehicle.originalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex h-[24px] items-center gap-1.5 rounded-md bg-[#10B981] px-3 py-1.5">
              <img
                alt=""
                className="h-4 w-4"
                src="/images/vdp/Vector_1.svg"
              />
              <span className="text-center font-semibold text-[10px] text-white leading-normal">
                {vehicle.condition}
              </span>
            </div>
            {vehicle.warranty && (
              <div className="inline-flex h-[24px] items-center gap-1.5 rounded-md bg-white px-3 py-1.5 font-medium text-gray-700 text-sm">
                <img
                  alt=""
                  className="h-4 w-4"
                  src="/images/vdp/Vector_2.svg"
                />
                <span className="text-[10px]">Warranty</span>
              </div>
            )}
            {vehicle.inspected && (
              <div className="inline-flex h-[24px] items-center gap-1.5 rounded-md bg-white px-3 py-1.5 font-medium text-gray-700 text-sm">
                <img
                  alt=""
                  className="h-4 w-4"
                  src="/images/vdp/Vector_3.svg"
                />
                <span className="text-[10px]">Inspected</span>
              </div>
            )}
          </div>

          {/* Specs Grid */}
          <div className="border-gray-200 border-t py-4 lg:py-5">
            <div className="grid grid-cols-3 gap-3 pb-4 lg:gap-4">
              <div>
                <p className="font-semibold text-[#111] text-[12px] capitalize opacity-50">
                  Miles
                </p>
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
                <p className="font-semibold text-[#111] text-[12px] capitalize opacity-50">
                  MPG
                </p>
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
                <p className="font-semibold text-[#111] text-[12px] capitalize opacity-50">
                  VIN
                </p>
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
                  background:
                    "linear-gradient(166deg, #3F3F3F -30%, #A5A5A5 140%)",
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
                  <img
                    alt="Toyota"
                    className="h-[24px] w-[23px]"
                    src="/images/vdp/Vector_4.svg"
                  />
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
            <h3 className="mb-4 font-semibold text-lg">Key Highlights</h3>
            <div className="grid grid-cols-1 gap-3">
              {vehicle.features.map((feature, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                  <img
                    alt=""
                    className="h-4 w-4 flex-shrink-0"
                    src="/images/vdp/Vector_5.svg"
                  />
                  <span className="text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
