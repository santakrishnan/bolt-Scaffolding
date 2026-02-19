import { Card, CardContent, cn } from '@tfs-ucmp/ui'
import { DealsIcon, DownIcon, MeterIcon, PricetagIcon } from '../../shared/icons/advantages-icons'
import type { VehicleFinderOption } from './data'

interface VehicleFinderCardProps {
  option: VehicleFinderOption
  className?: string
}

const iconMap = {
  'price-tag': PricetagIcon,
  badge: DealsIcon,
  'arrow-down': DownIcon,
  speedometer: MeterIcon,
}

export function VehicleFinderCard({ option, className }: VehicleFinderCardProps) {
  const IconComponent = iconMap[option.icon]

  return (
    <Card
      className={cn(
        'min-h-[140px] border-[#0000001A] shadow-none transition-all duration-200 sm:min-h-[160px]',
        'cursor-pointer hover:border-[#00000033] hover:shadow-md',
        className
      )}
    >
      <CardContent className="flex flex-col items-center justify-center gap-3 p-6 text-center">
        {/* Icon */}
        <IconComponent className="text-[#EB0A1E]" size={40} />

        {/* Title */}
        <h3 className="font-bold text-base leading-tight">{option.title}</h3>

        {/* Vehicle Count */}
        <p className="text-sm">
          <span className="font-bold text-[#EB0A1E]">{option.vehicleCount.toLocaleString()}</span>{' '}
          <span className="text-muted-foreground">vehicles</span>
        </p>
      </CardContent>
    </Card>
  )
}
