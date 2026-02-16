# Arrow E-Commerce Monorepo

Modern, production-ready e-commerce monorepo built with Next.js 16, Turborepo, Tailwind CSS 4, shadcn/ui, PNPM, and Biome.

## 🚀 Tech Stack

- **⚡️ Next.js 16** - React framework with App Router
- **🔥 Turbopack** - Next-gen bundler for faster development
- **🏗️ Turborepo** - High-performance build system for monorepos
- **⚛️ React 19** - Latest React with server components
- **🎨 Tailwind CSS 4** - Latest utility-first CSS framework
- **🧩 shadcn/ui** - Re-usable components built with Radix UI & Tailwind
- **📦 PNPM** - Fast, disk space efficient package manager
- **🔍 Biome v2** - Unified linter and formatter (replaces ESLint + Prettier)
- **🧪 Vitest** - Fast unit test framework
- **🐕 Husky** - Git hooks for pre-commit checks
- **🚨 TypeScript** - Type safety across the monorepo

## 📁 Monorepo Structure

```
arrow-ecommerce/
├── apps/
│   └── web/                 # Next.js e-commerce application
│       ├── src/
│       │   ├── app/         # App router pages
│       │   │   ├── used-cars/
│       │   │   │   ├── search/      # Vehicle search results page (SRP)
│       │   │   │   └── [...vdp]/    # Vehicle detail page (VDP)
│       │   │   └── api/
│       │   │       └── srp/         # SRP token generation endpoint
│       │   ├── components/  # App-specific components
│       │   └── lib/         # App utilities
│       ├── next.config.ts
│       └── package.json
├── packages/
│   ├── ui/                  # Shared UI components (shadcn/ui + custom)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── ui/      # shadcn/ui components
│   │   │   └── lib/         # Utilities (cn, etc.)
│   │   ├── components.json  # shadcn/ui config
│   │   └── package.json
│   ├── utils/               # Shared utilities
│   │   └── src/
│   │       ├── formatters.ts
│   │       └── validators.ts
│   ├── ui-theme/            # Design system with Tailwind CSS 4 theme
│   │   └── index.css
│   └── config/              # Centralized configurations
│       ├── typescript/      # TypeScript configs
│       └── vitest/          # Vitest test configs
├── turbo.json              # Turborepo configuration
├── pnpm-workspace.yaml     # PNPM workspace configuration
├── biome.json              # Biome linter & formatter config
└── package.json            # Root package.json
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** >= 20.0.0
- **PNPM** >= 9.0.0

Install PNPM if you haven't already:

```bash
npm install -g pnpm
```

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd arrow-ecommerce
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Run all apps in development mode with Turbopack:

```bash
pnpm dev
```

The development server will start at `http://localhost:3000`

### Building

Build all packages and apps:

```bash
pnpm build
```

### Other Commands

```bash
# Run linting across all packages
pnpm lint

# Format code with Biome
pnpm format

# Run Biome checks and auto-fix issues
pnpm check

# Type check all packages
pnpm type-check

# Run tests
pnpm test

# Clean all build artifacts and node_modules
pnpm clean
```

## 🛣️ Routes

### Vehicle Listing Routes

- **Search Results Page (SRP)**: `/used-cars/search`
  - With filters: `/used-cars/search?make=toyota&model=camry&year=2024`
- **Vehicle Detail Page (VDP)**: `/cars/{make}/{model}/{year}/{trimSlug}/{listingId}`
  - Example: `/cars/toyota/camry/2024/se-hybrid/768168090`
  - Example: `/cars/jeep/wrangler/2022/rubicon/1C4JJXR66NW155836`
- **SRP Token API**: `/api/srp`

> 📖 **See [VDP-URL-STRUCTURE.md](VDP-URL-STRUCTURE.md) for complete URL structure documentation**

## 📦 Packages

### @arrow-ecommerce/ui

Shared UI components built with shadcn/ui and Radix UI. Includes:

- **Primitives**: Button, Card, Input (React 19 patterns)
- **Hooks**: useMediaQuery, useDebounce
- **Utils**: cn() helper

Usage:

```tsx
// Import from main entry
import { Button, Card, useMediaQuery } from "@arrow-ecommerce/ui";

// Or direct imports (better for tree-shaking)
import { Button } from "@arrow-ecommerce/ui/primitives/button";
import { useMediaQuery } from "@arrow-ecommerce/ui/hooks/use-media-query";
```

### @arrow-ecommerce/utils

Shared utility functions:

- **Formatters**: `formatCurrency`, `formatDate`, `truncate`
- **Validators**: `isValidEmail`, `isValidPhone`, `isValidURL`

Usage:

```tsx
import { formatCurrency, isValidEmail } from "@arrow-ecommerce/utils";
```

### @arrow-ecommerce/ui-theme

Design system with Tailwind CSS 4 theme variables. Automatically imported in the web app.

## 🔧 Configuration

### Turborepo

Turborepo is configured for optimal caching and parallel execution. See [turbo.json](turbo.json) for details.

### Biome

Biome v2 handles both linting and formatting. Configuration in [biome.json](biome.json).

### TypeScript

Strict TypeScript configuration across all packages. Each package has its own `tsconfig.json`.

## 🎨 Styling

This project uses **Tailwind CSS 4** with a custom design system defined in `packages/ui-theme`. The theme includes:

- CSS-first configuration using `@theme` directive
- Design tokens for colors, spacing, and typography
- Dark mode support via `prefers-color-scheme`

## 🧪 Testing

Vitest is configured for unit testing. Test configuration is in `packages/config/vitest`.

## 🚀 Deployment

### Vercel (Recommended for Next.js)

1. Import your repository to Vercel
2. Set the root directory to `apps/web`
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the production bundle:

```bash
pnpm build
```

Deploy the `apps/web/.next` directory to your hosting platform.

## 📝 Adding New Packages

To add a new package to the monorepo:

1. Create a new directory under `packages/`
2. Add a `package.json` with the name `@arrow-ecommerce/package-name`
3. Add the package to `pnpm-workspace.yaml` if needed (wildcards already cover `packages/*`)
4. Install the package in other workspaces using `workspace:*` protocol

Example:

```json
{
  "dependencies": {
    "@arrow-ecommerce/new-package": "workspace:*"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Biome Documentation](https://biomejs.dev)
- [PNPM Documentation](https://pnpm.io)
