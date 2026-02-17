import { Card, CardContent } from "ui/primitives/card";
import { cn } from "ui/lib/utils";
import {
  PricetagIcon,
  DealsIcon,
  DownIcon,
  MeterIcon,
} from "../icons/advantages-icons";
import type { VehicleFinderOption } from "./data";

interface VehicleFinderCardProps {
  option: VehicleFinderOption;
  className?: string;
}

const iconMap = {
  "price-tag": PricetagIcon,
  badge: DealsIcon,
  "arrow-down": DownIcon,
  speedometer: MeterIcon,
};

export function VehicleFinderCard({
  option,
  className,
}: VehicleFinderCardProps) {
  const IconComponent = iconMap[option.icon];

  return (
    <Card
      className={cn(
        "border-[#0000001A] shadow-none transition-all duration-200 min-h-[140px] sm:min-h-[160px]",
        "hover:shadow-md hover:border-[#00000033] cursor-pointer",
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
          <span className="font-bold text-[#EB0A1E]">
            {option.vehicleCount.toLocaleString()}
          </span>{" "}
          <span className="text-muted-foreground">vehicles</span>
        </p>
      </CardContent>
    </Card>
  );
}
