import Image from "next/image";
import { Card, CardContent } from "ui/primitives/card";
import { cn } from "ui/lib/utils";
import {
  ArrowCircleIcon,
  CertifiedDocumentIcon,
  VerifiedBadgeIcon,
  GuaranteeIcon,
} from "../icons";
import type { InspectionFeature } from "../../lib/inspection/features";

interface InspectionFeatureCardProps {
  feature: InspectionFeature;
  className?: string;
}

const iconMap = {
  "arrow-circle": ArrowCircleIcon,
  "certified-document": CertifiedDocumentIcon,
  "verified-badge": VerifiedBadgeIcon,
  guarantee: GuaranteeIcon,
};

export function InspectionFeatureCard({
  feature,
  className,
}: InspectionFeatureCardProps) {
  const IconComponent = iconMap[feature.icon];

  return (
    <Card className={cn("border-none shadow-none min-h-[320px] sm:min-h-[360px]", className)}>
      <CardContent className="p-0 flex flex-col gap-4 bg-white rounded-xl">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 px-6 pb-6 rounded-b-xl">
          {/* Icon + Title */}
          <div className="flex items-center gap-3">
            <IconComponent size={24} className="text-[#EB0A1E] flex-shrink-0" />
            <h3 className="font-bold text-base leading-tight">
              {feature.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
