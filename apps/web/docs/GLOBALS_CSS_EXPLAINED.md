# globals.css Structure Explained

## Why Do We Need @theme inline When Importing ui-theme?

Good question! Here's the breakdown:

## The Two-Layer System

### Layer 1: @import "@tfs-ucmp/ui-theme"

This imports the **base design system** from the shared package:

```css
/* From packages/ui-theme/base/index.css */
@theme {
  /* Base tokens that work for ANY app */
  --color-background: #ffffff;
  --color-foreground: #09090b;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  /* ... etc */
}
```

These are **generic defaults** that work across all apps.

### Layer 2: @theme inline (App-Specific)

This is where the **web app customizes** the theme:

```css
@theme inline {
  /* Override base tokens with app-specific values */
  --color-primary: var(--primary);  /* Maps to web app's red color */
  --font-sans: var(--font-toyota-type);  /* Uses ToyotaType font */
}
```

## Why the Complexity?

### The shadcn Pattern

Your app uses **shadcn/ui** components, which expect colors in a specific format:

```css
/* shadcn expects HSL values in :root */
:root {
  --primary: 354 91% 48%;  /* HSL without hsl() wrapper */
}

/* Components use it like this */
.button {
  background: hsl(var(--primary));
}
```

### The Tailwind v4 Pattern

Tailwind v4 expects colors with `--color-*` prefix:

```css
@theme {
  --color-primary: var(--primary);  /* Maps shadcn to Tailwind */
}

/* Now you can use Tailwind utilities */
<div className="bg-primary">  <!-- Works! -->
```

## The Complete Flow

```
Step 1: Define App Colors (shadcn format)
├─ @layer base :root
│  └─ --primary: 354 91% 48%  (HSL value)
│
Step 2: Import Base Theme
├─ @import "@tfs-ucmp/ui-theme"
│  └─ Provides: spacing, shadows, base font sizes, etc.
│
Step 3: Map App Colors to Tailwind
├─ @theme inline
│  ├─ --color-primary: var(--primary)  (shadcn → Tailwind)
│  ├─ --font-sans: var(--font-toyota-type)  (app font)
│  └─ --radius-md: var(--radius)  (app radius)
│
Step 4: Use in Components
└─ <div className="bg-primary font-sans">
   └─ Works because of the mapping!
```

## What Each Section Does

### 1. @layer base :root

```css
:root {
  --primary: 354 91% 48%;
}
```

**Purpose**: Define app-specific color values in shadcn format
**Why**: shadcn components expect these exact variable names
**Scope**: This app only (web app's red color)

### 2. @import "@tfs-ucmp/ui-theme"

```css
@import "@tfs-ucmp/ui-theme";
```

**Purpose**: Import shared design tokens
**Why**: Reuse spacing, shadows, font sizes across all apps
**Scope**: All apps in monorepo

### 3. @theme inline

```css
@theme inline {
  --color-primary: var(--primary);
  --font-sans: var(--font-toyota-type);
}
```

**Purpose**: Bridge shadcn variables to Tailwind utilities
**Why**: Make `className="bg-primary"` work
**Scope**: This app only

## Can We Simplify?

### Option 1: Remove shadcn, Use Only Tailwind v4

```css
/* Simpler but breaks shadcn components */
@import "@tfs-ucmp/ui-theme";

@theme inline {
  --color-primary: #eb0a1e;  /* Direct color value */
  --font-sans: var(--font-toyota-type);
}
```

**Problem**: shadcn components won't work (they need HSL variables)

### Option 2: Current Approach (Recommended)

```css
/* Works with both shadcn AND Tailwind */
@import "@tfs-ucmp/ui-theme";

@layer base {
  :root {
    --primary: 354 91% 48%;  /* shadcn format */
  }
}

@theme inline {
  --color-primary: var(--primary);  /* Map to Tailwind */
  --font-sans: var(--font-toyota-type);  /* App font */
}
```

**Benefit**: Both shadcn components AND Tailwind utilities work

## What's NOT Duplicated

The `@theme inline` section only contains:

1. **Color mappings** (shadcn → Tailwind)
2. **Font families** (app-specific)
3. **Radius overrides** (app-specific)

It does NOT duplicate:
- Font sizes (from ui-theme)
- Font weights (from ui-theme)
- Line heights (from ui-theme)
- Shadows (from ui-theme)
- Spacing (from ui-theme)

## Example: Different App

If you had an admin app with different colors:

```css
/* apps/admin/src/app/globals.css */
@import "@tfs-ucmp/ui-theme";

@layer base {
  :root {
    --primary: 217 91% 60%;  /* Blue instead of red */
  }
}

@theme inline {
  --color-primary: var(--primary);  /* Maps blue to Tailwind */
  --font-sans: var(--font-inter);  /* Different font! */
}
```

Same structure, different values. The ui-theme package stays the same.

## Summary

**Q: Why @theme inline when importing ui-theme?**

**A**: Because:
1. ui-theme provides **base tokens** (spacing, shadows, etc.)
2. Your app defines **custom colors** (shadcn format)
3. @theme inline **bridges** shadcn colors to Tailwind utilities
4. @theme inline adds **app-specific** customizations (fonts, radius)

Without @theme inline:
- ❌ `className="bg-primary"` wouldn't work
- ❌ `className="font-sans"` wouldn't use ToyotaType
- ❌ Each app couldn't customize colors

With @theme inline:
- ✅ shadcn components work
- ✅ Tailwind utilities work
- ✅ Each app can customize
- ✅ Shared theme stays reusable

## Visual Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ packages/ui-theme (Shared)                                   │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ @theme {                                                 │ │
│ │   --font-size-sm: 0.875rem;  ← Used by all apps        │ │
│ │   --spacing-4: 1rem;         ← Used by all apps        │ │
│ │   --shadow-md: ...;          ← Used by all apps        │ │
│ │ }                                                        │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                          ↓ @import
┌─────────────────────────────────────────────────────────────┐
│ apps/web/globals.css (App-Specific)                         │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ :root {                                                  │ │
│ │   --primary: 354 91% 48%;  ← Web app's red color       │ │
│ │ }                                                        │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ @theme inline {                                          │ │
│ │   --color-primary: var(--primary);  ← Bridge to Tailwind│ │
│ │   --font-sans: var(--font-toyota-type);  ← App font    │ │
│ │ }                                                        │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                          ↓ Result
┌─────────────────────────────────────────────────────────────┐
│ Components can use:                                          │
│ - className="bg-primary" ✅                                  │
│ - className="font-sans" ✅                                   │
│ - className="text-sm" ✅ (from ui-theme)                     │
│ - className="p-4" ✅ (from ui-theme)                         │
└─────────────────────────────────────────────────────────────┘
```
