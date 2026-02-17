# @arrow/ui-theme

CSS-only design system with multi-theme support for the Arrow monorepo.

## Features

- Tailwind v4 with `@theme` directive
- Design tokens (colors, spacing, typography, etc.)
- Multiple brand themes (Arrow, Acme)
- Dark mode support
- Custom utility classes

## Usage

```css
/* Import default theme (Arrow) */
@import "@arrow/ui-theme";

/* Or explicit theme selection */
@import "@arrow/ui-theme/base";
@import "@arrow/ui-theme/themes/acme";
```

## Theme Structure

- `base/` - Core Tailwind setup and shared design tokens
- `themes/arrow/` - Arrow brand overrides
- `themes/acme/` - Acme brand overrides
- `utilities/` - Custom utility classes
