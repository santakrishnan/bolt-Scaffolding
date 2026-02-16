// Layer 2: Shared UI Components
// This package contains primitives (shadcn/ui) and custom shared components

// Primitives (shadcn/ui components)
export * from "./primitives";

// Shared hooks
export * from "./hooks";

// Re-export cn utility from utils package for convenience
export { cn } from "@arrow-ecommerce/utils";

// Landing page components
export { HeroSearch } from "./components/hero-search";
export { FeatureCard } from "./components/feature-card";
export { VehicleTypeCard } from "./components/vehicle-type-card";
export { InfoCard } from "./components/info-card";
export { CategoryCard } from "./components/category-card";
export { InspectionCard } from "./components/inspection-card";
export { MobileFooter } from "./components/mobile-footer";
