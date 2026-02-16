import React from 'react';

interface FeatureCardProps {
  icon: string;
  value: string;
  label: string;
  className?: string;
}

export function FeatureCard({ icon, value, label, className = "" }: FeatureCardProps) {
  return (
    <div className={`flex items-start md:items-center gap-3 md:gap-6 ${className}`}>
      {/* Desktop: 48px icon with 24px gap, Mobile: 40px icon with 12px gap */}
      <div 
        className="flex-shrink-0 flex items-center justify-center"
        style={{
          width: '40px',
          height: '40px',
          minWidth: '40px',
          minHeight: '40px'
        }}
      >
        <img 
          src={icon} 
          alt={label}
          style={{
            maxWidth: '40px',
            maxHeight: '40px',
            width: 'auto',
            height: 'auto'
          }}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col" style={{ gap: '4px' }}>
        {/* Desktop: 21px Semibold, Mobile: 15px Semibold */}
        <p className="text-[15px] md:text-[21px] font-semibold text-white uppercase leading-tight md:leading-[52px]">
          {value}
        </p>
        {/* Desktop: 14px Regular, Mobile: 12px Light */}
        <p className="text-[12px] md:text-[14px] font-light md:font-normal text-white leading-tight md:leading-normal">
          {label}
        </p>
      </div>
    </div>
  );
}
