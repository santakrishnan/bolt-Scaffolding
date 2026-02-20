/**
 * Toyota Type Font Configuration
 *
 * This file exports font configuration that can be used with next/font/local
 * The paths are relative to the consuming app's node_modules
 */

export const toyotaTypeFontConfig = {
  fontFamily: 'Toyota Type',
  variable: '--font-toyota-type',
  src: [
    {
      path: './ToyotaType-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './ToyotaType-LightIt.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './ToyotaType-Book.ttf',
      weight: '350',
      style: 'normal',
    },
    {
      path: './ToyotaType-BookIt.ttf',
      weight: '350',
      style: 'italic',
    },
    {
      path: './ToyotaType-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './ToyotaType-RegularIt.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './ToyotaType-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './ToyotaType-SemiboldIt.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './ToyotaType-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './ToyotaType-BoldIt.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './ToyotaType-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './ToyotaType-BlackIt.ttf',
      weight: '900',
      style: 'italic',
    },
  ] as const,
} as const

export type ToyotaTypeFontConfig = typeof toyotaTypeFontConfig
