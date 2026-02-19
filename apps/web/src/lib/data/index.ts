export async function getHeroData() {
  'use cache'
  const data = await import('@/data/landing-data.json')
  return data.default.hero
}

export async function getVehiclesAvailable() {
  'use cache'
  const data = await import('@/data/landing-data.json')
  return data.default.hero.features[0]
}

export async function getVehicleTypes() {
  'use cache'
  const data = await import('@/data/landing-data.json')
  return data.default.vehicleTypes
}

export async function getHowToBuy() {
  'use cache'
  const data = await import('@/data/landing-data.json')
  return data.default.howToBuy
}

export async function getFindVehicle() {
  'use cache'
  const data = await import('@/data/landing-data.json')
  return data.default.findVehicle
}

export async function getPrequalify() {
  'use cache'
  const data = await import('@/data/landing-data.json')
  return data.default.prequalify
}

export async function getArrowInspected() {
  'use cache'
  const data = await import('@/data/landing-data.json')
  return data.default.arrowInspected
}

export async function getFooterSections() {
  'use cache'
  return {
    shopLinks: ['Buy a Car', 'Sell Your Car', 'Finance Options', 'Trade-In Value'].map((label) => ({
      label,
      href: '#',
    })),
    supportLinks: ['Contact Us', 'FAQs', 'Financing Help', 'Returns & Exchanges'].map((label) => ({
      label,
      href: '#',
    })),
    companyLinks: ['About Arrow', 'Press', 'Partnerships', 'Locations'].map((label) => ({
      label,
      href: '#',
    })),
    legalLinks: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Accessibility',
      'Sitemap',
    ].map((label) => ({ label, href: '#' })),
  }
}
