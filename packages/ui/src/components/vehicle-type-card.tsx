import React from 'react';

interface VehicleTypeCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
}

export function VehicleTypeCard({ 
  title, 
  description, 
  image, 
  onClick,
  className = "",
  backgroundColor = "bg-white"
}: VehicleTypeCardProps) {
  return (
    <div 
      className={`${backgroundColor} overflow-hidden rounded-lg w-full cursor-pointer flex flex-col ${className}`}
      style={{ height: '240px' }}
      onClick={onClick}
    >
      {/* Image Container - Natural varying heights */}
      <div className="flex-1 flex items-center justify-center p-4 pt-6">
        <img 
          src={image} 
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Text Content - Centered at bottom with 24px padding */}
      <div className="flex flex-col gap-3 items-center text-center px-4 pb-6">
        <p className="text-[20px] font-semibold uppercase text-[color:var(--color-text-primary)] leading-[52px]">
          {title}
        </p>
        <p className="text-[14px] text-[color:var(--color-text-primary)] leading-normal whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
