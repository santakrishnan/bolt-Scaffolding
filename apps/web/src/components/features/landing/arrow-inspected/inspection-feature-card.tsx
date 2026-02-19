import { Card, CardContent, cn } from '@tfs-ucmp/ui'
import Image from 'next/image'
import type { InspectionFeature } from '~/data/inspection/features'
import {
  ArrowCircleIcon,
  CertifiedDocumentIcon,
  GuaranteeIcon,
  VerifiedBadgeIcon,
} from '../../shared/icons'

interface InspectionFeatureCardProps {
  feature: InspectionFeature
  className?: string
}

const iconMap = {
  'arrow-circle': ArrowCircleIcon,
  'certified-document': CertifiedDocumentIcon,
  'verified-badge': VerifiedBadgeIcon,
  guarantee: GuaranteeIcon,
}

export function InspectionFeatureCard({ feature, className }: InspectionFeatureCardProps) {
  const IconComponent = iconMap[feature.icon]

  return (
    <Card className={cn('min-h-[320px] border-none shadow-none sm:min-h-[360px]', className)}>
      <CardContent className="flex flex-col gap-4 rounded-xl bg-white p-0">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
          <Image
            alt={feature.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            src={feature.image}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 rounded-b-xl px-6 pb-6">
          {/* Icon + Title */}
          <div className="flex items-center gap-3">
            <IconComponent className="flex-shrink-0 text-[#EB0A1E]" size={24} />
            <h3 className="font-bold text-base leading-tight">{feature.title}</h3>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
