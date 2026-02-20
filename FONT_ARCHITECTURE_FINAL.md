# Font Architecture - Final Clean Structure

## Directory Structure

```
packages/ui-theme/fonts/
├── README.md                      # Main fonts documentation
└── toyota-type/                   # Toyota Type font family
    ├── config.json               # Font configuration (framework-agnostic)
    ├── README.md                 # Font-specific documentation
    ├── ToyotaType-Light.ttf      # 300 normal
    ├── ToyotaType-LightIt.ttf    # 300 italic
    ├── ToyotaType-Book.ttf       # 350 normal
    ├── ToyotaType-BookIt.ttf     # 350 italic
    ├── ToyotaType-Regular.ttf    # 400 normal
    ├── ToyotaType-RegularIt.ttf  # 400 italic
    ├── ToyotaType-Semibold.ttf   # 600 normal
    ├── ToyotaType-SemiboldIt.ttf # 600 italic
    ├── ToyotaType-Bold.ttf       # 700 normal
    ├── ToyotaType-BoldIt.ttf     # 700 italic
    ├── ToyotaType-Black.ttf      # 900 normal
    └── ToyotaType-BlackIt.ttf    # 900 italic

Future fonts:
└── [new-font-family]/
    ├── config.json
    ├── README.md
    └── *.ttf
```

## Benefits of This Structure

### ✅ Organized
- Each font family in its own folder
- No mixing of different font files
- Clear separation of concerns

### ✅ Scalable
- Easy to add new font families
- Just create a new folder with config.json
- No changes needed to existing fonts

### ✅ Clean
- Font files grouped by family
- Configuration co-located with fonts
- Documentation at both levels

### ✅ Framework-Agnostic
- No Next.js dependency in ui-theme
- JSON configuration works with any framework
- Apps handle framework-specific loading

### ✅ Discoverable
- Clear structure for developers
- README at each level
- Self-documenting

## Usage Example

### In Next.js App

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

### In Vite/React App

```typescript
// Import specific font files
import '@tfs-ucmp/ui-theme/fonts/toyota-type/ToyotaType-Regular.ttf'

// Or use CSS @font-face with config
import fontConfig from '@tfs-ucmp/ui-theme/fonts/toyota-type/config.json'

fontConfig.variants.forEach(variant => {
  const fontFace = new FontFace(
    fontConfig.fontFamily,
    `url(@tfs-ucmp/ui-theme/fonts/toyota-type/${variant.path})`,
    { weight: variant.weight, style: variant.style }
  )
  document.fonts.add(fontFace)
})
```

## Adding a New Font Family

1. **Create folder structure:**
   ```bash
   mkdir packages/ui-theme/fonts/new-font-family
   ```

2. **Add font files:**
   ```bash
   cp *.ttf packages/ui-theme/fonts/new-font-family/
   ```

3. **Create config.json:**
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

4. **Add README.md** (optional but recommended)

5. **Update package.json exports:**
   ```json
   {
     "exports": {
       "./fonts/new-font-family/config.json": "./fonts/new-font-family/config.json",
       "./fonts/new-font-family/*": "./fonts/new-font-family/*"
     }
   }
   ```

6. **Use in app:**
   ```typescript
   import fontConfig from '@tfs-ucmp/ui-theme/fonts/new-font-family/config.json'
   ```

## Migration from Old Structure

### Before
```
packages/ui-theme/fonts/
├── index.ts                    # Next.js-specific ❌
├── ToyotaType-Light.ttf       # Mixed together ❌
├── ToyotaType-Bold.ttf
└── [other fonts mixed in]
```

### After
```
packages/ui-theme/fonts/
├── README.md                   # Documentation ✅
└── toyota-type/               # Organized by family ✅
    ├── config.json            # Framework-agnostic ✅
    ├── README.md
    └── ToyotaType-*.ttf       # All variants together ✅
```

## Key Principles

1. **One folder per font family**
2. **config.json for metadata**
3. **No framework dependencies**
4. **Apps handle loading**
5. **Documentation at each level**

This structure will scale beautifully as you add more font families! 🎉
