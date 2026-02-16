import React from 'react';
import { Card } from '../primitives/card';

interface InspectionCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  className?: string;
}

export function InspectionCard({ 
  icon, 
  title, 
  description, 
  image,
  className = "" 
}: InspectionCardProps) {
  return (
    <div 
      className={`flex flex-col bg-white overflow-hidden ${className}`}
      style={{ width: '308px' }}
    >
      {/* Image - 200px height with rounded top corners */}
      <div 
        className="relative bg-gray-100 overflow-hidden"
        style={{ 
          height: '200px',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px'
        }}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content - 192px height */}
      <div 
        className="flex flex-col gap-6 bg-white"
        style={{
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: '32px',
          paddingBottom: '24px',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px'
        }}
      >
        {/* Icon and Title */}
        <div className="flex gap-5 items-center">
          <div 
            className="flex items-center justify-center flex-shrink-0"
            style={{ width: '32px', height: '32px', minWidth: '32px', minHeight: '32px' }}
          >
            <img 
              src={icon} 
              alt=""
              style={{
                maxWidth: '32px',
                maxHeight: '32px',
                width: 'auto',
                height: 'auto'
              }}
              className="object-contain"
            />
          </div>
          <h3 
            className="text-[18px] font-bold text-[color:var(--color-text-primary)] whitespace-pre-line"
            style={{ lineHeight: 'normal' }}
          >
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p 
          className="text-[18px] text-[color:var(--color-text-primary)] whitespace-pre-line"
          style={{ 
            letterSpacing: '-0.54px',
            lineHeight: '1.3'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
