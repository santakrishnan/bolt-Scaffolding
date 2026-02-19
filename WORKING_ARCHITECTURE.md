# Working Architecture - The Reality

## What We Learned

Through testing, we discovered that **color mapping must stay at the app level** due to how Tailwind v4's `@theme` directive works.

## Why Color Mapping Must Be in App

### The Technical Reality

1. **@theme Cascade Issue**: When you have multiple `@theme` blocks, later ones override earlier ones completely
2. **@theme inline Priority**: App-level `@theme inline` takes precedence over theme package `@theme`
3. **CSS Variable Fallbacks**: Don't work as expected within `@theme` context in Tailwind v4

### What Breaks Without App-Level Mapping

```css
/* If you remove this from app's globals.css */
@theme inline {
  --color-primary: var(--primary);  /* ❌ REQUIRED */
}

/* Result: */
<Button className="bg-primary">  /* ❌ Doesn't work! */
```

## Final Working Architecture

### Theme Package (`packages/ui-theme/base/index.css`)

**Provides:**
- ✅ Base design tokens (spacing, shadows, font sizes)
- ✅ Base color defaults
- ✅ Dark mode defaults
- ❌ NOT color mapping (doesn't work here)

```css
@theme {
  /* Base tokens that work everywhere */
  --color-primary: #18181b;
  --spacing-4: 1rem;
  --shadow-md: ...;
  --font-size-sm: 0.875rem;
}
```

### App Level (`apps/web/src/app/globals.css`)

**Provides:**
- ✅ Color values (shadcn format)
- ✅ Color mapping (shadcn → Tailwind) **REQUIRED HERE**
- ✅ Font families
- ✅ App-specific overrides

```css
@layer base {
  :root {
    /* Define color values */
    --primary: 354 91% 48%;
    --primary-foreground: 0 0% 100%;
  }
}

@theme inline {
  /* Map to Tailwind - MUST BE HERE */
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);

  /* Font families */
  --font-sans: var(--font-toyota-type);
}
```

## What Can Be Simplified

While color mapping must stay, we CAN simplify other things:

### Option 1: Keep Everything (Current - Safe)

```css
@theme inline {
  /* Colors - REQUIRED */
  --color-primary: var(--primary);

  /* Fonts - REQUIRED */
  --font-sans: var(--font-toyota-type);

  /* These are optional (already in theme) */
  --font-size-xs: 0.75rem;
  --font-weight-light: 300;
  --shadow-sm: ...;
  --radius-xs: ...;
}
```

### Option 2: Minimal (Remove Duplicates)

```css
@theme inline {
  /* Colors - REQUIRED */
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  /* ... all color mappings */

  /* Fonts - REQUIRED */
  --font-sans: var(--font-toyota-type);
  --font-mono: ui-monospace, monospace;

  /* Remove these (already in theme): */
  /* ❌ --font-size-* (use theme's) */
  /* ❌ --font-weight-* (use theme's) */
  /* ❌ --shadow-* (use theme's) */
  /* ❌ --radius-* (not used anyway) */
}
```

## Recommended: Minimal But Working

```css
@import "@tfs-ucmp/ui-theme";

@layer base {
  :root {
    /* App-specific color values */
    --background: 0 0% 100%;
    --foreground: 0 0% 7%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 7%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 7%;
    --primary: 354 91% 48%;
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 96%;
    --secondary-foreground: 0 0% 7%;
    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 54%;
    --accent: 36 25% 50%;
    --accent-foreground: 0 0% 100%;
    --destructive: 354 91% 48%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 0% / 0.1;
    --input: 0 0% 0% / 0.1;
    --ring: 354 91% 48%;
    --radius: 0.5rem;
  }

  .dark {
    /* Dark mode color values */
    --background: oklch(0.145 0 0);
    --foreground: oklch(0.985 0 0);
    /* ... other dark colors */
  }
}

@theme inline {
  /* REQUIRED: Color mapping */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  /* REQUIRED: Font families */
  --font-sans: var(--font-toyota-type), system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, "Geist Mono", monospace;
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-sans);
  }
}
```

## What We Successfully Improved

Even though color mapping must stay in the app, we DID improve:

### ✅ Font Loading
- Moved from `@font-face` to `next/font/local`
- Better performance and zero layout shift
- Centralized in `src/lib/fonts.ts`

### ✅ Font Mapping
- Uses CSS variable from next/font
- Applied in layout.tsx
- Mapped in globals.css

### ✅ Architecture Understanding
- Documented why things are where they are
- Understand the constraints
- Know what can and can't be moved

## Summary

**Q: Can color mapping be in the theme package?**

**A: No, due to Tailwind v4 @theme cascade behavior.**

**What MUST be in app:**
- Color values (`:root`)
- Color mapping (`@theme inline`)
- Font families (`@theme inline`)

**What's in theme package:**
- Base design tokens
- Spacing, shadows, font sizes
- Base color defaults (for non-shadcn apps)

**What we improved:**
- Font loading (next/font/local)
- Better documentation
- Understanding of constraints

The architecture is correct given the technical constraints of Tailwind v4.
