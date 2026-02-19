'use client'

import { cn } from '@tfs-ucmp/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'

/**
 * Card variants using CVA
 */
const cardVariants = cva(
  [
    'group relative flex flex-col items-center justify-center',
    'cursor-pointer rounded-lg p-4 sm:p-6',
    'transition-all duration-200 ease-in-out',
    'min-h-[140px] sm:min-h-[160px]',
  ],
  {
    variants: {
      selected: {
        true: 'bg-primary/5',
        false: 'bg-background hover:bg-[#F8F8F8]',
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
)

interface VehicleTypeCardProps extends VariantProps<typeof cardVariants> {
  /**
   * Vehicle image path
   */
  image: string
  /**
   * Vehicle type name
   */
  name: string
  /**
   * Optional description text
   */
  description?: string
  /**
   * Optional click handler for selection
   */
  onClick?: () => void
  /**
   * Optional selected state
   */
  selected?: boolean
  /**
   * Optional className for additional styling
   */
  className?: string
}

/**
 * VehicleTypeCard - Interactive card component for vehicle type selection
 * Client Component for hover and selection interactivity
 */
export function VehicleTypeCard({
  image,
  name,
  description,
  onClick,
  selected = false,
  className,
}: VehicleTypeCardProps) {
  return (
    <button
      aria-label={`Select ${name}`}
      aria-pressed={selected}
      className={cn(cardVariants({ selected }), className)}
      onClick={onClick}
      type="button"
    >
      {/* Vehicle Image */}
      <div className="relative mb-3 h-20 w-full sm:mb-4 sm:h-24">
        <Image
          alt={name}
          className="object-contain transition-transform duration-200 group-hover:scale-105"
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          src={image}
        />
      </div>

      {/* Vehicle Name */}
      <h3 className="mb-1 font-bold text-foreground text-sm uppercase tracking-wide sm:text-base">
        {name}
      </h3>

      {/* Vehicle Description */}
      {description && <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>}
    </button>
  )
}
