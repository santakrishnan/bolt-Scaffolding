# Font Architecture - Modular Design

## Overview

The font system is designed for maximum modularity and scalability in a monorepo environment. Font family definitions are controlled at the app level, not in shared packages, allowing different apps to use different fonts while sharing the same theme system.

## Architecture Principles

### 1. Separation of Concerns

```
┌─────────────────────────────────────────────────────────────┐
│ App Layer (apps/web, apps/admin, etc.)                      │
│ - Font loading (next/font/local or next/font/google)        │
│ - Font family mapping (--font-sans, --font-mono)            │
│ - App-specific customizations                               │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ Theme Layer (packages/ui-theme)                             │
│ - Design tokens (colors, spacing, shadows, etc.)            │
│ - Font-agnostic (no font family definitions)                │
│ - Works with any font from any app                          │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ Component Layer (packages/ui)                               │
│ - Reusable React components                                 │
│ - Uses theme tokens automatically                           │
│ - No font dependencies                                      │
└─────────────────────────────────────────────────────────────┘
```

### 2. Font Loading Flow

```
Step 1: Load Font (App Level)
├─ apps/web/src/lib/fonts.ts
│  └─ next/font/local → --font-toyota-type
│
Step 2: Apply to HTML (App Level)
├─ apps/web/src/app/layout.tsx
│  └─ <html className={toyotaType.variable}>
│
Step 3: Map to Theme Tokens (App Level)
├─ apps/web/src/app/globals.css
│  └─ --font-sans: var(--font-toyota-type), fallbacks
│
Step 4: Use in Theme (Shared Package)
├─ packages/ui-theme/base/index.css
│  └─ font-family: var(--font-sans, fallbacks)
│
Step 5: Components Use Automatically
└─ packages/ui/src/components/**
   └─ className="font-sans" or inherit from body
```

## Key Design Decisions

### ✅ Font Families Defined at App Level

**Why:** Different apps may need different fonts (brand requirements, licensing, etc.)

```css
/* apps/web/src/app/globals.css */
@theme inline {
  --font-sans: var(--font-toyota-type), system-ui, sans-serif;
}

/* apps/admin/src/app/globals.css */
@theme inline {
  --font-sans: var(--font-inter), system-ui, sans-serif;
}
```

### ✅ Theme Package is Font-Agnostic

**Why:** Maximum reusability across different apps and brands

```css
/* packages/ui-theme/base/index.css */
@theme {
  /* No font family definitions here! */
  /* Only font sizes, weights, line heights */
}

body {
  /* Uses whatever --font-sans the app defines */
  font-family: var(--font-sans, ui-sans-serif, system-ui, sans-serif);
}
```

### ✅ Next.js Font Loading

**Why:** Automatic optimization, zero layout shift, type safety

```typescript
// apps/web/src/lib/fonts.ts
import localFont from 'next/font/local'

export const toyotaType = localFont({
  src: [...],
  variable: '--font-toyota-type',
  display: 'swap',
  preload: true,
})
```

## Multi-App Example

### App 1: Web (ToyotaType)

```typescript
// apps/web/src/lib/fonts.ts
export const toyotaType = localFont({
  src: [{ path: './fonts/ToyotaType-Regular.ttf', weight: '400' }],
  variable: '--font-toyota-type',
})

// apps/web/src/app/layout.tsx
<html className={toyotaType.variable}>

// apps/web/src/app/globals.css
@theme inline {
  --font-sans: var(--font-toyota-type), system-ui, sans-serif;
}
```

### App 2: Admin (Inter from Google Fonts)

```typescript
// apps/admin/src/lib/fonts.ts
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// apps/admin/src/app/layout.tsx
<html className={inter.variable}>

// apps/admin/src/app/globals.css
@theme inline {
  --font-sans: var(--font-inter), system-ui, sans-serif;
}
```

### App 3: Marketing (Custom Variable Font)

```typescript
// apps/marketing/src/lib/fonts.ts
export const brandFont = localFont({
  src: './fonts/BrandFont-Variable.woff2',
  variable: '--font-brand',
})

// apps/marketing/src/app/layout.tsx
<html className={brandFont.variable}>

// apps/marketing/src/app/globals.css
@theme inline {
  --font-sans: var(--font-brand), system-ui, sans-serif;
}
```

## Benefits

### 🎯 Modularity
- Each app controls its own fonts
- Theme package has zero font dependencies
- Easy to add new apps with different fonts

### 🔄 Flexibility
- Switch fonts without touching shared packages
- Different brands can use different fonts
- Easy to test different font combinations

### 📈 Scalability
- Add new apps without modifying existing ones
- Theme package works with any font
- UI components work everywhere

### ⚡ Performance
- Next.js automatic font optimization
- Zero layout shift
- Preloading for critical fonts
- Self-hosted (no external requests)

### 🛡️ Type Safety
- TypeScript support for font configuration
- Compile-time checks for font paths
- IDE autocomplete for font variables

## File Structure

```
monorepo/
├── apps/
│   ├── web/
│   │   ├── public/fonts/          # Font files (TTF, WOFF2)
│   │   └── src/
│   │       ├── lib/
│   │       │   └── fonts.ts       # Font loading (next/font)
│   │       └── app/
│   │           ├── layout.tsx     # Apply font variable
│   │           └── globals.css    # Map to --font-sans
│   │
│   └── admin/
│       └── src/
│           ├── lib/
│           │   └── fonts.ts       # Different font!
│           └── app/
│               ├── layout.tsx     # Apply different variable
│               └── globals.css    # Map to --font-sans
│
└── packages/
    ├── ui-theme/
    │   └── base/
    │       └── index.css          # Font-agnostic theme
    │
    └── ui/
        └── src/
            └── components/        # Use theme tokens
```

## Migration Path

### From Hardcoded Fonts

```css
/* Before: Hardcoded in theme */
@theme {
  --font-sans: "ToyotaType", system-ui, sans-serif;
}
```

```css
/* After: App-level control */
/* Theme package */
@theme {
  /* No font family here */
}

/* App globals.css */
@theme inline {
  --font-sans: var(--font-toyota-type), system-ui, sans-serif;
}
```

### Adding New Apps

1. Create `src/lib/fonts.ts` with your font
2. Apply variable to `<html>` in layout
3. Map to `--font-sans` in `globals.css`
4. Theme and components work automatically

## Best Practices

### ✅ DO

- Define fonts at app level
- Use Next.js font loading
- Map to standard tokens (`--font-sans`, `--font-mono`)
- Provide fallback fonts
- Use WOFF2 format for production

### ❌ DON'T

- Define fonts in shared theme package
- Use `@font-face` in CSS
- Load fonts from external CDNs
- Hardcode font names in components
- Skip fallback fonts

## Testing Different Fonts

To test a different font in an app:

1. Update `src/lib/fonts.ts` with new font
2. Update `globals.css` mapping
3. Restart dev server
4. All components automatically use new font

No changes needed in:
- Theme package
- UI components
- Other apps

## Future Considerations

### Variable Fonts
- Single file for all weights
- Better performance
- Smoother weight transitions

### Font Subsetting
- Include only needed characters
- Reduce file size by 50-90%
- Use `pyftsubset` or online tools

### Font Display Strategies
- `swap`: Show fallback, swap when ready (current)
- `optional`: Use font if cached, otherwise fallback
- `block`: Wait for font (avoid for UX)

## References

- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Tailwind CSS v4 Theme](https://tailwindcss.com/docs/v4-beta)
- [Font Loading Best Practices](https://web.dev/font-best-practices/)
- Agent Skill: `.agents/skills/next-best-practices/font.md`
