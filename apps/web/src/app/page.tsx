import { Header } from "@/components/layout/header";
import { HomeHero } from "ui";
import { VehicleTypeSelector } from "ui";
import { ArrowInspectedSection } from "ui";
import { VehicleFinderSection } from "ui";
import { BuyingProcess } from "ui";
import { Background } from "ui";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HomeHero />
      <VehicleTypeSelector />
      <BuyingProcess />
      <div className="relative">
        {/* Background SVG */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url(/Group.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} />
        {/* Semi-transparent Gradient Overlay */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 19.5%, rgba(244, 244, 244, 0.8) 47.67%)'
        }} />
        {/* Content */}
        <div className="relative z-10">
          <VehicleFinderSection />
          <ArrowInspectedSection />
        </div>
      </div>
    </div>
  );
}
