# ToyotaType Font Files

## Overview

ToyotaType fonts are loaded using Next.js `next/font/local` for optimal performance and zero layout shift. The font configuration is centralized in `src/lib/fonts.ts`.

## Font Files

The following ToyotaType font files are required in this directory:

```
fonts/
├── ToyotaType-Light.ttf
├── ToyotaType-LightIt.ttf
├── ToyotaType-Book.ttf
├── ToyotaType-BookIt.ttf
├── ToyotaType-Regular.ttf
├── ToyotaType-RegularIt.ttf
├── ToyotaType-Semibold.ttf
├── ToyotaType-SemiboldIt.ttf
├── ToyotaType-Bold.ttf
├── ToyotaType-BoldIt.ttf
├── ToyotaType-Black.ttf
└── ToyotaType-BlackIt.ttf
```

## Font Weights Mapping

| File | Weight | Style |
|------|--------|-------|
| ToyotaType-Light.ttf | 300 | normal |
| ToyotaType-LightIt.ttf | 300 | italic |
| ToyotaType-Book.ttf | 350 | normal |
| ToyotaType-BookIt.ttf | 350 | italic |
| ToyotaType-Regular.ttf | 400 | normal |
| ToyotaType-RegularIt.ttf | 400 | italic |
| ToyotaType-Semibold.ttf | 600 | normal |
| ToyotaType-SemiboldIt.ttf | 600 | italic |
| ToyotaType-Bold.ttf | 700 | normal |
| ToyotaType-BoldIt.ttf | 700 | italic |
| ToyotaType-Black.ttf | 900 | normal |
| ToyotaType-BlackIt.ttf | 900 | italic |

## How It Works

### 1. Font Configuration (`src/lib/fonts.ts`)

```typescript
import localFont from 'next/font/local'

export const toyotaType = localFont({
  src: [
    { path: '../../public/fonts/ToyotaType-Regular.ttf', weight: '400', style: 'normal' },
    // ... all font files
  ],
  variable: '--font-toyota-type',
  display: 'swap',
  preload: true,
})
```

### 2. Root Layout (`src/app/layout.tsx`)

```typescript
import { toyotaType } from '~/lib/fonts'

export default function RootLayout({ children }) {
  return (
    <html className={toyotaType.variable}>
      <body>{children}</body>
    </html>
  )
}
```

### 3. Theme Integration (`globals.css`)

```css
@theme inline {
  --font-sans: var(--font-toyota-type), system-ui, -apple-system, sans-serif;
}
```

## Benefits of next/font/local

✅ **Automatic Optimization**: Next.js optimizes font loading automatically
✅ **Zero Layout Shift**: Fonts are preloaded with proper fallbacks
✅ **Self-Hosted**: No external requests to Google Fonts or other CDNs
✅ **CSS Variables**: Easy integration with Tailwind and theme system
✅ **Type Safety**: TypeScript support for font configuration
✅ **Preloading**: Critical fonts are preloaded for better performance

## Performance Optimization

### Current Setup (TTF)
- File size: ~100-200 KB per file
- Total: ~1.2-2.4 MB for 12 files

### Recommended: Convert to WOFF2
- File size: ~50-100 KB per file (50% smaller)
- Total: ~600 KB - 1.2 MB for 12 files

### Conversion Options

#### Using Online Tools:
- https://cloudconvert.com/ttf-to-woff2
- https://everythingfonts.com/ttf-to-woff2

#### Using Command Line (fonttools):
```bash
# Install fonttools
pip install fonttools brotli

# Convert each font
pyftsubset ToyotaType-Regular.ttf \
  --output-file=ToyotaType-Regular.woff2 \
  --flavor=woff2
```

#### After Conversion:
Update `src/lib/fonts.ts` to use `.woff2` files:

```typescript
export const toyotaType = localFont({
  src: [
    {
      path: '../../public/fonts/ToyotaType-Regular.woff2', // Changed extension
      weight: '400',
      style: 'normal',
    },
    // ... update all paths
  ],
  variable: '--font-toyota-type',
  display: 'swap',
  preload: true,
})
```

## Monorepo Integration

The font setup is designed for maximum flexibility in a monorepo:

- **Font Loading**: Each app handles its own font loading via Next.js
- **CSS Variable**: Apps inject font variables (e.g., `--font-toyota-type`) into `<html>`
- **Theme Mapping**: Apps map their font variables to `--font-sans` and `--font-mono`
- **Theme Package**: Remains font-agnostic and works with any font
- **UI Package**: Components automatically use fonts via theme tokens

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│ App A (web)                                                  │
│ - Loads ToyotaType via next/font/local                      │
│ - Maps --font-toyota-type → --font-sans                     │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ App B (admin)                                                │
│ - Loads Inter via next/font/google                          │
│ - Maps --font-inter → --font-sans                           │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ @tfs-ucmp/ui-theme (font-agnostic)                          │
│ - Provides design tokens (colors, spacing, etc.)            │
│ - Uses --font-sans with fallbacks                           │
│ - Works with any font from any app                          │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ @tfs-ucmp/ui (components)                                   │
│ - Uses theme tokens automatically                           │
│ - No font dependencies                                      │
└─────────────────────────────────────────────────────────────┘
```

This means:
- Each app can use different fonts
- Theme package has zero font dependencies
- Easy to add new apps with different fonts
- UI components work everywhere without modification

## Troubleshooting

### Fonts not loading?
1. Check that font files exist in `public/fonts/`
2. Verify paths in `src/lib/fonts.ts` are correct
3. Ensure `toyotaType.variable` is applied to `<html>` element
4. Check browser DevTools Network tab for 404 errors

### Layout shift on page load?
- Ensure `display: 'swap'` is set in font config
- Verify `preload: true` is enabled
- Check that CSS variable is applied before content renders

### Fonts look different?
- Verify font-weight values match the actual font files
- Check that all font files are properly loaded
- Inspect computed styles in browser DevTools

## License

Ensure you have proper licensing for ToyotaType fonts before deploying to production.

