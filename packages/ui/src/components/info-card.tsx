import React from 'react';
import { Card } from '../primitives/card';

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
  showLink?: boolean;
  className?: string;
}

export function InfoCard({ 
  icon, 
  title, 
  description, 
  link = "Find Out More",
  showLink = false,
  className = "" 
}: InfoCardProps) {
  return (
    <div className={`flex flex-col items-center bg-white w-full max-w-[308px] px-4 py-5 gap-4 min-h-[320px] ${className}`} style={{ borderRadius: '16px' }}>
      {/* Icon - 36px */}
      <div className="flex items-center justify-center flex-shrink-0 w-9 h-9">
        <img src={icon} alt={title} width={36} height={36} className="object-contain" />
      </div>
      
      {/* Title - 20px Semibold */}
      <h3 className="text-[20px] font-semibold text-[color:var(--color-text-primary)] leading-[28px] text-center h-[56px] flex items-center justify-center">
        {title}
      </h3>
      
      {/* Description - 16px Regular with -0.48px tracking */}
      <p className="text-[16px] text-[color:var(--color-text-primary)] text-center flex-1" style={{ letterSpacing: '-0.48px', lineHeight: '1.25' }}>
        {description}
      </p>
      
      {/* Link */}
      {showLink && (
        <a href="#" className="text-[color:var(--color-brand-primary)] text-[16px] underline text-center" style={{ letterSpacing: '-0.48px', lineHeight: '1.3' }}>
          {link}
        </a>
      )}
    </div>
  );
}
