export interface VehicleFinderOption {
  id: string
  title: string
  vehicleCount: number
  icon: 'price-tag' | 'badge' | 'arrow-down' | 'speedometer'
}

export const vehicleFinderOptions: VehicleFinderOption[] = [
  {
    id: 'under-20k',
    title: 'Cars Under $20,000',
    vehicleCount: 4564,
    icon: 'price-tag',
  },
  {
    id: 'excellent-deals',
    title: 'Shop Excellent Deals',
    vehicleCount: 9787,
    icon: 'badge',
  },
  {
    id: 'price-drop',
    title: 'Price Drop',
    vehicleCount: 17_508,
    icon: 'arrow-down',
  },
  {
    id: 'low-miles',
    title: 'Low Miles',
    vehicleCount: 9787,
    icon: 'speedometer',
  },
]
