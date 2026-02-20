# UI Theme Fonts

This folder contains font families and configurations for the Arrow monorepo.

## Structure

```
fonts/
├── toyota-type/              # Toyota Type font family
│   ├── config.json          # Font configuration metadata
│   ├── ToyotaType-*.ttf     # Font files (12 variants)
│   └── README.md            # Font-specific documentation
├── [future-font]/           # Future font families go here
│   ├── config.json
│   └── *.ttf
└── README.md                # This file
```

## Philosophy

The ui-theme package is **framework-agnostic**. Each font family folder contains:
- Font files (.ttf, .woff2, etc.)
- Configuration metadata (config.json)
- Optional README with font-specific details

Apps handle framework-specific loading (Next.js, Vite, etc.)

## Adding New Fonts

1. Create a new folder: `fonts/new-font-family/`
2. Add font files: `new-font-family/*.ttf`
3. Create config.json:
```json
{
  "fontFamily": "New Font Family",
  "variable": "--font-new-family",
  "variants": [
    {
      "path": "./NewFont-Regular.ttf",
      "weight": "400",
      "style": "normal"
    }
  ]
}
```
4. Update package.json exports if needed

## Usage in Next.js Apps

```typescript
// apps/web/src/lib/fonts.ts
import localFont from 'next/font/local'
import fontConfig from '@tfs-ucmp/ui-theme/fonts/toyota-type/config.json'

export const toyotaType = localFont({
  src: fontConfig.variants.map((variant) => ({
    path: `../../../../node_modules/@tfs-ucmp/ui-theme/fonts/toyota-type/${variant.path.replace('./', '')}`,
    weight: variant.weight,
    style: variant.style,
  })),
  variable: fontConfig.variable,
  display: 'swap',
  preload: true,
})
```

## Available Font Families

- **toyota-type** - Toyota Type (12 variants: Light, Book, Regular, Semibold, Bold, Black + Italics)

## Why This Structure?

- **Organized**: Each font family in its own folder
- **Scalable**: Easy to add new font families
- **Clean**: No mixing of different font files
- **Discoverable**: Clear structure for developers
- **Framework-agnostic**: No framework dependencies
