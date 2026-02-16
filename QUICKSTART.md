# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

### 3. Visit the Routes

- **Home**: `http://localhost:3000`
- **Vehicle Search (SRP)**: `http://localhost:3000/used-cars/search`
- **Vehicle Detail (VDP)**: `http://localhost:3000/used-cars/toyota-camry-2023`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build all packages and apps |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code with Biome |
| `pnpm check` | Check and auto-fix code issues |
| `pnpm type-check` | Type check all packages |
| `pnpm test` | Run tests |
| `pnpm clean` | Clean build artifacts |

## 🎨 Project Highlights

- **Monorepo**: Turborepo manages multiple packages efficiently
- **Next.js 16**: Latest features with App Router and Server Components
- **Turbopack**: Lightning-fast bundler for development
- **Tailwind CSS 4**: Modern CSS-first configuration
- **shadcn/ui**: Beautiful, accessible components
- **Biome**: Fast linting and formatting (ESLint + Prettier replacement)
- **TypeScript**: Type safety throughout

## 📁 Key Files

- `turbo.json` - Turborepo configuration
- `biome.json` - Linting and formatting rules
- `pnpm-workspace.yaml` - PNPM workspace definition
- `packages/ui/` - Shared UI components
- `packages/utils/` - Shared utilities
- `apps/web/` - Next.js application

## 🔧 Adding New Components

### Using shadcn/ui

To add more shadcn/ui components to the `@arrow-ecommerce/ui` package:

```bash
cd packages/ui
pnpx shadcn@latest add <component-name>
```

### Creating Custom Components

Add new components to `packages/ui/src/components/` and export them in `packages/ui/src/index.ts`.

## 📝 Environment Variables

Create `.env.local` in `apps/web/` for environment-specific variables:

```env
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import repository to Vercel
3. Set root directory to `apps/web`
4. Deploy!

### Build for Production

```bash
pnpm build
cd apps/web
pnpm start
```

## 💡 Tips

- Use `turbo` for parallel builds and caching
- Run `pnpm check` before committing (automatic with Husky)
- Share components via `@arrow-ecommerce/ui` package
- Keep utilities in `@arrow-ecommerce/utils`
- Update theme colors in `packages/ui-theme/index.css`

For more details, see [README.md](README.md)
