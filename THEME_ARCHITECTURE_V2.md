# Theme Architecture V2 - Client Feedback Implementation

## Changes Made

### 1. ✅ Fonts Centralized in ui-theme Package

**Before:**
- Fonts in `apps/web/public/fonts/`
- Font configuration in `apps/web/src/lib/fonts.ts`

**After:**
- Fonts in `packages/ui-theme/fonts/`
- Font configuration in `packages/ui-theme/fonts/index.ts`
- Apps import from `@tfs-ucmp/ui-theme/fonts`

**Benefits:**
- Single source of truth for fonts
- Reusable across all apps in monorepo
- Easier to maintain and update

### 2. ✅ Single Theme Import

**Before:**
```css
@import "@tfs-ucmp/ui-theme";
@import "@tfs-ucmp/ui-theme/themes/arrow";
```

**After:**
```css
@import "@tfs-ucmp/ui-theme/themes/arrow";
```

**How it works:**
- Arrow theme now imports base theme automatically
- Base theme contains all foundational tokens
- Arrow theme extends and overrides as needed

### 3. ✅ Removed @layer base from globals.css

**Before:**
```css
@layer base {
  :root { /* colors */ }
  body { /* styles */ }
}
```

**After:**
```css
:root { /* colors */ }
@theme inline { /* fonts */ }
```

**Benefits:**
- Cleaner separation of concerns
- Theme package handles all base styles
- App only defines app-specific overrides

## New Architecture

```
packages/ui-theme/
├── fonts/
│   ├── index.ts                    # Font configuration
│   ├── ToyotaType-*.ttf           # Font files
│   └── README.md
├── base/
│   ├── tokens/                     # Design tokens
│   └── index.css                   # Base theme
├── themes/
│   └── arrow/
│       ├── index.css               # Imports base + overrides
│       ├── overrides/              # Brand-specific tokens
│       ├── light.css               # Light mode
│       └── dark.css                # Dark mode
└── package.json                    # Exports fonts

apps/web/
├── src/
│   ├── lib/
│   │   └── fonts.ts                # Re-exports from ui-theme
│   └── app/
│       ├── layout.tsx              # Uses fonts from ui-theme
│       └── globals.css             # Single theme import
```

## Usage

### In Apps

```typescript
// apps/web/src/lib/fonts.ts
export { toyotaType } from '@tfs-ucmp/ui-theme/fonts'

// apps/web/src/app/layout.tsx
import { toyotaType } from '../lib/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={toyotaType.variable}>
      <body>{children}</body>
    </html>
  )
}
```

```css
/* apps/web/src/app/globals.css */
@import "@tfs-ucmp/ui-theme/themes/arrow";

:root {
  --primary: 354 91% 48%;
  /* other app-specific colors */
}

@theme inline {
  --font-sans: var(--font-toyota-type), system-ui, sans-serif;
}
```

## Migration Guide

### For Existing Apps

1. Update `globals.css`:
   - Remove `@import "@tfs-ucmp/ui-theme"`
   - Keep only `@import "@tfs-ucmp/ui-theme/themes/arrow"`
   - Remove `@layer base` wrappers

2. Update `fonts.ts`:
   ```typescript
   export { toyotaType } from '@tfs-ucmp/ui-theme/fonts'
   ```

3. Run `pnpm install` to update dependencies

### For New Apps

1. Import theme:
   ```css
   @import "@tfs-ucmp/ui-theme/themes/arrow";
   ```

2. Import fonts:
   ```typescript
   import { toyotaType } from '@tfs-ucmp/ui-theme/fonts'
   ```

3. Done! Everything else is handled by the theme.

## Benefits

1. **Simpler imports** - One theme import instead of two
2. **Centralized fonts** - Single source of truth
3. **Better separation** - Theme handles everything, app only overrides
4. **Easier maintenance** - Update fonts in one place
5. **Scalable** - Easy to add new themes or fonts

## Client Feedback Addressed

✅ Fonts and font handling at ui-theme level
✅ Single theme import (Arrow includes base)
✅ Removed unnecessary @layer base from globals.css
