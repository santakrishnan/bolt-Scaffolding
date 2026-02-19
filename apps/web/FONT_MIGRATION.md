# Font Migration to next/font/local

## Summary

Successfully migrated ToyotaType font loading from manual `@font-face` declarations to Next.js `next/font/local` pattern, following Next.js best practices and maintaining compatibility with the monorepo theme system.

## Changes Made

### 1. Created Font Configuration (`src/lib/fonts.ts`)
- Centralized font loading using `next/font/local`
- Configured all 12 ToyotaType font files (weights 300-900, normal + italic)
- Exports `--font-toyota-type` CSS variable
- Enabled automatic optimization, preloading, and zero layout shift

### 2. Updated Root Layout (`src/app/layout.tsx`)
- Imported `toyotaType` from `~/lib/fonts`
- Applied `toyotaType.variable` to `<html>` element
- CSS variable now available throughout the app

### 3. Cleaned Up Global CSS (`src/app/globals.css`)
- Removed all manual `@font-face` declarations (12 declarations removed)
- Added font family mapping in `@theme inline` block
- Maps `--font-toyota-type` to `--font-sans` with fallbacks
- Maintained fallback fonts for progressive enhancement

### 4. Updated Theme Package (`packages/ui-theme/base/index.css`)
- Removed font family definitions from base theme
- Theme is now font-agnostic and works with any font
- Added fallback in body styles for apps that don't define fonts
- Improved modularity and scalability

### 5. Documentation
- Updated `apps/web/public/fonts/README.md` with comprehensive guide
- Created `packages/ui-theme/README.md` with usage instructions
- Documented modular architecture pattern

## Benefits

✅ **Performance**: Automatic font optimization by Next.js
✅ **Zero Layout Shift**: Proper font preloading and fallback handling
✅ **Type Safety**: TypeScript support for font configuration
✅ **Maintainability**: Single source of truth for font configuration
✅ **Monorepo Compatible**: Works seamlessly with shared theme package
✅ **Best Practices**: Follows Next.js and Vercel recommendations

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│ apps/web/src/lib/fonts.ts                                   │
│ - Loads fonts using next/font/local                         │
│ - Exports CSS variable: --font-toyota-type                  │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ apps/web/src/app/layout.tsx                                 │
│ - Applies toyotaType.variable to <html> element             │
│ - Makes --font-toyota-type available globally               │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ apps/web/src/app/globals.css                                │
│ - Maps --font-toyota-type to --font-sans (app level)        │
│ - Provides fallback fonts                                   │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ packages/ui-theme/base/index.css                            │
│ - Font-agnostic theme (no font family definitions)          │
│ - Uses --font-sans with system fallbacks                    │
│ - Works with any font from any app                          │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ All components automatically use ToyotaType font            │
│ via Tailwind's font-sans utility or CSS var(--font-sans)    │
└─────────────────────────────────────────────────────────────┘
```

### Key Architecture Decision

**Font mapping happens at the app level, not in the theme package.**

This means:
- ✅ Different apps can use different fonts
- ✅ Theme package is truly reusable and font-agnostic
- ✅ Easy to switch fonts without touching shared packages
- ✅ Each app controls its own font loading strategy

## Testing

To verify the migration:

1. **Start dev server**: `pnpm dev`
2. **Check browser DevTools**:
   - Network tab: Verify font files are loaded
   - Elements tab: Inspect `<html>` element for `--font-toyota-type` variable
   - Computed styles: Verify `font-family` uses ToyotaType
3. **Visual check**: Ensure text renders with ToyotaType font
4. **Performance**: Check for layout shift (should be zero)

## Next Steps (Optional)

### Convert to WOFF2 for Better Performance

Current: TTF files (~1.2-2.4 MB total)
Optimized: WOFF2 files (~600 KB - 1.2 MB total, 50% smaller)

```bash
# Install fonttools
pip install fonttools brotli

# Convert each font
pyftsubset ToyotaType-Regular.ttf \
  --output-file=ToyotaType-Regular.woff2 \
  --flavor=woff2

# Repeat for all 12 font files
```

Then update `src/lib/fonts.ts` to use `.woff2` extensions.

### Add to Other Apps in Monorepo

To use different fonts in other Next.js apps:

1. Create font config in the new app: `src/lib/fonts.ts`
2. Load your desired font (ToyotaType, Inter, custom, etc.)
3. Apply font variable to `<html>` in layout
4. Map font variable to `--font-sans` in app's `globals.css`:

```css
/* apps/admin/src/app/globals.css */
@import "@tfs-ucmp/ui-theme";

@theme inline {
  /* Use a different font! */
  --font-sans: var(--font-inter), system-ui, sans-serif;
  --font-mono: var(--font-fira-code), monospace;
}
```

The theme package and UI components will automatically work with the new font.

## Rollback (if needed)

If you need to rollback:

1. Restore `@font-face` declarations in `globals.css`
2. Remove `toyotaType.variable` from `layout.tsx`
3. Update `--font-sans` to use `"ToyotaType"` directly
4. Delete `src/lib/fonts.ts`

However, the new approach is recommended and follows Next.js best practices.

## References

- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [next/font/local API](https://nextjs.org/docs/app/api-reference/components/font#localfont)
- Agent skill: `.agents/skills/next-best-practices/font.md`
