# Font System Documentation

## Quick Reference

### Using Fonts in Components

Fonts are automatically applied via the theme system. No imports needed in components:

```tsx
// Automatically uses ToyotaType via font-sans
export function MyComponent() {
  return <div className="font-sans">This uses ToyotaType</div>
}

// Or just use default (body already has font-sans)
export function MyComponent() {
  return <div>This also uses ToyotaType</div>
}
```

### Available Font Weights

```tsx
<p className="font-light">Light (300)</p>
<p className="font-normal">Regular (400)</p>
<p className="font-semibold">Semibold (600)</p>
<p className="font-bold">Bold (700)</p>
<p className="font-black">Black (900)</p>
```

Note: Book weight (350) is available but not mapped to a Tailwind utility. Use inline style if needed:
```tsx
<p style={{ fontWeight: 350 }}>Book weight</p>
```

### Font Styles

```tsx
<p className="italic">Italic text</p>
<p className="not-italic">Normal text</p>
```

## Architecture

### Font Loading Flow

```
next/font/local (src/lib/fonts.ts)
  ↓
CSS Variable: --font-toyota-type
  ↓
Applied to <html> element (layout.tsx)
  ↓
Referenced in theme (globals.css + ui-theme)
  ↓
Available as font-sans utility
  ↓
Used by all components
```

### File Locations

- **Font Files**: `apps/web/public/fonts/*.ttf`
- **Font Config**: `apps/web/src/lib/fonts.ts`
- **Font Application**: `apps/web/src/app/layout.tsx`
- **Theme Integration**: `apps/web/src/app/globals.css`
- **Base Theme**: `packages/ui-theme/base/index.css`

## CSS Variables

### Available Variables

```css
/* Font families */
--font-toyota-type  /* Injected by next/font/local */
--font-sans         /* ToyotaType with fallbacks */
--font-mono         /* Monospace font */

/* Font sizes */
--font-size-xs      /* 12px */
--font-size-sm      /* 14px */
--font-size-md      /* 16px */
--font-size-lg      /* 18px */
--font-size-xl      /* 20px */
--font-size-2xl     /* 24px */
--font-size-3xl     /* 30px */
--font-size-4xl     /* 36px */
--font-size-5xl     /* 48px */

/* Font weights */
--font-weight-light      /* 300 */
--font-weight-normal     /* 400 */
--font-weight-medium     /* 500 */
--font-weight-semibold   /* 600 */
--font-weight-bold       /* 700 */

/* Line heights */
--line-height-tight      /* 1.25 */
--line-height-normal     /* 1.5 */
--line-height-relaxed    /* 1.75 */
```

### Using CSS Variables Directly

```css
.my-component {
  font-family: var(--font-sans);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
}
```

## Tailwind Utilities

### Font Family

```tsx
<div className="font-sans">ToyotaType font</div>
<div className="font-mono">Monospace font</div>
```

### Font Size

```tsx
<p className="text-xs">Extra small</p>
<p className="text-sm">Small</p>
<p className="text-base">Base (default)</p>
<p className="text-lg">Large</p>
<p className="text-xl">Extra large</p>
<p className="text-2xl">2X large</p>
<p className="text-3xl">3X large</p>
<p className="text-4xl">4X large</p>
<p className="text-5xl">5X large</p>
```

### Font Weight

```tsx
<p className="font-light">Light (300)</p>
<p className="font-normal">Normal (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-semibold">Semibold (600)</p>
<p className="font-bold">Bold (700)</p>
<p className="font-black">Black (900)</p>
```

### Line Height

```tsx
<p className="leading-tight">Tight line height</p>
<p className="leading-normal">Normal line height</p>
<p className="leading-relaxed">Relaxed line height</p>
```

## Adding New Fonts

To add additional fonts (e.g., a display font):

1. Add font files to `public/fonts/`
2. Create font config in `src/lib/fonts.ts`:

```typescript
export const displayFont = localFont({
  src: './path/to/font.woff2',
  variable: '--font-display',
  display: 'swap',
})
```

3. Apply to layout:

```tsx
<html className={`${toyotaType.variable} ${displayFont.variable}`}>
```

4. Add to theme in `globals.css`:

```css
@theme inline {
  --font-display: var(--font-display);
}
```

5. Use in components:

```tsx
<h1 className="font-display">Display heading</h1>
```

## Performance Tips

1. **Use WOFF2 format**: 50% smaller than TTF
2. **Subset fonts**: Only include needed characters
3. **Preload critical fonts**: Already enabled via `preload: true`
4. **Use font-display: swap**: Already configured for zero layout shift

## Troubleshooting

### Font not loading
- Check browser DevTools Network tab for 404 errors
- Verify font file paths in `src/lib/fonts.ts`
- Ensure `toyotaType.variable` is applied to `<html>`

### Wrong font rendering
- Check computed styles in DevTools
- Verify font-weight values match actual font files
- Clear browser cache and rebuild

### Layout shift on load
- Ensure `display: 'swap'` is set
- Verify `preload: true` is enabled
- Check that CSS variable is applied before content renders

## Best Practices

✅ **DO**: Use Tailwind utilities (`font-sans`, `font-bold`, etc.)
✅ **DO**: Let the theme system handle font application
✅ **DO**: Use CSS variables for custom components
✅ **DO**: Convert fonts to WOFF2 for production

❌ **DON'T**: Import fonts in individual components
❌ **DON'T**: Use inline `@font-face` declarations
❌ **DON'T**: Load fonts from external CDNs
❌ **DON'T**: Create new font instances (use shared config)

## Related Documentation

- [Font Migration Guide](./FONT_MIGRATION.md)
- [Font Files README](../public/fonts/README.md)
- [Theme Package README](../../packages/ui-theme/README.md)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
