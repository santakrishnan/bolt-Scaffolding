/**
 * Vehicle Type Data
 * Contains all vehicle types with their display information
 */

export interface VehicleType {
  id: string
  name: string
  description: string
  image: string
}

export const vehicleTypes: VehicleType[] = [
  {
    id: 'sedan',
    name: 'SEDAN',
    description: 'Fuel-efficient daily driver',
    image: '/images/vehicles/sedan.webp',
  },
  {
    id: 'suv',
    name: 'SUV',
    description: 'Space & versatility',
    image: '/images/vehicles/suv.webp',
  },
  {
    id: 'truck',
    name: 'TRUCK',
    description: 'Power & capability',
    image: '/images/vehicles/truck.webp',
  },
  {
    id: 'coupe',
    name: 'COUPE',
    description: 'Sleek, sporty, two-door',
    image: '/images/vehicles/coupe.webp',
  },
  {
    id: 'hatchback',
    name: 'HATCHBACK',
    description: 'Fuel-efficient daily driver',
    image: '/images/vehicles/hatchback.webp',
  },
  {
    id: 'wagon',
    name: 'WAGON',
    description: 'Space & versatility',
    image: '/images/vehicles/wagon.webp',
  },
  {
    id: 'van',
    name: 'VAN',
    description: 'Power & capability',
    image: '/images/vehicles/van.webp',
  },
  {
    id: 'convertible',
    name: 'CONVERTIBLE',
    description: 'Sleek, sporty, two-door',
    image: '/images/vehicles/convertible.webp',
  },
]
