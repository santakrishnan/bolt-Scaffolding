import React from 'react';
import { Card } from '../primitives/card';

interface CategoryCardProps {
  icon: string;
  title: string;
  count: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function CategoryCard({ 
  icon, 
  title, 
  count, 
  label,
  onClick,
  className = "" 
}: CategoryCardProps) {
  return (
    <div 
      className={`flex flex-col items-center justify-center rounded-lg cursor-pointer hover:shadow-lg transition-shadow ${className}`}
      style={{
        flex: '1 0 0',
        height: '171px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        paddingLeft: '56px',
        paddingRight: '56px',
        paddingTop: '32px',
        paddingBottom: '32px'
      }}
      onClick={onClick}
    >
      {/* Icon - 48px */}
      <div 
        className="flex items-center justify-center flex-shrink-0"
        style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px', marginBottom: '24px' }}
      >
        <img 
          src={icon} 
          alt={title}
          style={{
            maxWidth: '48px',
            maxHeight: '48px',
            width: 'auto',
            height: 'auto'
          }}
          className="object-contain"
        />
      </div>
      
      {/* Title - 20px Semibold */}
      <h3 
        className="text-[20px] font-semibold text-[color:var(--color-text-secondary)] text-center"
        style={{ 
          letterSpacing: '-0.8px',
          lineHeight: '1.1',
          marginBottom: '12px'
        }}
      >
        {title}
      </h3>
      
      {/* Count and Label - 16px Semibold */}
      <div className="flex items-baseline gap-1" style={{ lineHeight: '1.1' }}>
        <span className="text-[16px] font-semibold text-[color:var(--color-brand-primary)]" style={{ letterSpacing: '-0.64px' }}>
          {count}
        </span>
        <span className="text-[16px] font-semibold" style={{ letterSpacing: '-0.64px' }}>
          {label}
        </span>
      </div>
    </div>
  );
}
