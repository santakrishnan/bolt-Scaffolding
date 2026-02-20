import localFont from 'next/font/local'

/**
 * ToyotaType Font Family - Next.js Configuration
 *
 * This file provides Next.js-specific font loading configuration.
 * Font files should be in the app's public/fonts directory.
 *
 * Usage in Next.js apps:
 * 1. Ensure fonts are copied to app's public/fonts/
 * 2. Import: import { toyotaType } from '@tfs-ucmp/ui-theme/fonts/toyota-type/next'
 * 3. Apply: <html className={toyotaType.variable}>
 *
 * Note: Next.js font loaders require module-scope const assignment.
 * The paths are relative to the consuming app's root directory.
 */

export const toyotaType = localFont({
  src: [
    {
      path: 'ToyotaType-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'ToyotaType-LightIt.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: 'ToyotaType-Book.ttf',
      weight: '350',
      style: 'normal',
    },
    {
      path: 'ToyotaType-BookIt.ttf',
      weight: '350',
      style: 'italic',
    },
    {
      path: 'ToyotaType-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'ToyotaType-RegularIt.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'ToyotaType-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'ToyotaType-SemiboldIt.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: 'ToyotaType-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'ToyotaType-BoldIt.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: 'ToyotaType-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: 'ToyotaType-BlackIt.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-toyota-type',
  display: 'swap',
  preload: true,
})
