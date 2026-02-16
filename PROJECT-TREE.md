# 📁 Project Tree Structure

```
arrow-ecommerce/
│
├── 📄 Configuration Files
│   ├── package.json              # Root package with scripts
│   ├── pnpm-workspace.yaml       # PNPM workspace config
│   ├── pnpm-lock.yaml            # Dependency lock file
│   ├── turbo.json                # Turborepo pipeline config
│   ├── biome.json                # Biome linter config
│   ├── .gitignore                # Git ignore rules
│   └── tsconfig.json             # Base TypeScript config
│
├── 📚 Documentation
│   ├── README.md                 # Main documentation
│   ├── QUICKSTART.md             # Quick start guide
│   ├── CONTRIBUTING.md           # Contribution guide
│   ├── SCRIPTS.md                # Scripts reference
│   ├── SETUP-COMPLETE.md         # Setup summary
│   ├── KNOWN-ISSUES.md           # Known issues & notes
│   └── LICENSE                   # MIT License
│
├── 🤖 GitHub & Git Hooks
│   ├── .github/
│   │   └── copilot-instructions.md
│   └── .husky/
│       └── pre-commit            # Pre-commit linting
│
├── 🌐 Apps
│   └── web/                      # Next.js 16 Application
│       ├── src/
│       │   └── app/              # App Router
│       │       ├── layout.tsx    # Root layout
│       │       ├── page.tsx      # Home page
│       │       ├── globals.css   # Global styles
│       │       │
│       │       ├── used-cars/    # Vehicle Routes
│       │       │   ├── search/
│       │       │   │   └── page.tsx        # Search Results Page (SRP)
│       │       │   └── [...vdp]/
│       │       │       └── page.tsx        # Vehicle Detail Page (VDP)
│       │       │
│       │       └── api/          # API Routes
│       │           └── srp/
│       │               └── route.ts        # SRP Token API
│       │
│       ├── next.config.ts        # Next.js configuration
│       ├── tsconfig.json         # TypeScript config
│       └── package.json          # App dependencies
│
├── 📦 Packages
│   │
│   ├── ui/                       # 🎨 Shared UI Components
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── ui/
│   │   │   │       ├── button.tsx        # Button component
│   │   │   │       ├── card.tsx          # Card component
│   │   │   │       └── input.tsx         # Input component
│   │   │   │
│   │   │   ├── lib/
│   │   │   │   └── utils.ts              # cn() utility
│   │   │   │
│   │   │   └── index.ts          # Package exports
│   │   │
│   │   ├── components.json       # shadcn/ui config
│   │   ├── tsconfig.json         # TypeScript config
│   │   └── package.json          # UI package
│   │
│   ├── utils/                    # 🛠️ Shared Utilities
│   │   ├── src/
│   │   │   ├── formatters.ts     # formatCurrency, formatDate, truncate
│   │   │   ├── validators.ts     # isValidEmail, isValidPhone, isValidURL
│   │   │   └── index.ts          # Package exports
│   │   │
│   │   ├── tsconfig.json         # TypeScript config
│   │   └── package.json          # Utils package
│   │
│   ├── ui-theme/                 # 🎨 Design System
│   │   ├── index.css             # Tailwind CSS 4 theme with @theme directive
│   │   └── package.json          # Theme package
│   │
│   └── config/                   # ⚙️ Shared Configurations
│       ├── typescript/           # TypeScript Configs
│       │   ├── base.json         # Base TS config
│       │   ├── nextjs.json       # Next.js TS config
│       │   ├── react-library.json # React library config
│       │   └── package.json
│       │
│       ├── vitest/               # Vitest Configs
│       │   ├── vitest.config.ts  # Vitest configuration
│       │   ├── vitest.setup.ts   # Test setup
│       │   └── package.json
│       │
│       └── package.json          # Config package
│
└── 🗂️ Build Artifacts
    ├── node_modules/             # Dependencies (gitignored)
    ├── .turbo/                   # Turbo cache (gitignored)
    ├── .next/                    # Next.js build (gitignored)
    └── dist/                     # Build output (gitignored)
```

## 📊 Package Structure

```
@arrow-ecommerce/
├── web                          # Next.js application
├── ui                           # UI components library
├── utils                        # Utility functions
├── ui-theme                     # Design system
├── config                       # Parent config
├── config-typescript            # TypeScript configs
└── config-vitest                # Vitest configs
```

## 🔗 Package Dependencies

```
web
├── depends on → ui
├── depends on → utils
└── depends on → ui-theme

ui
├── depends on → @radix-ui/*
├── depends on → class-variance-authority
└── depends on → tailwind-merge

utils
└── standalone (no workspace deps)

ui-theme
└── depends on → tailwindcss
```

## 📈 Build Pipeline

```
Turbo Pipeline:
┌─────────────┐
│   build     │  Build all packages & apps
│  (cached)   │  Output: .next/, dist/
└─────────────┘
      ↓
┌─────────────┐
│     dev     │  Start dev servers
│ (no cache)  │  Output: Live reload
└─────────────┘
      ↓
┌─────────────┐
│    lint     │  Run Biome checks
│  (cached)   │  Output: Lint results
└─────────────┘
      ↓
┌─────────────┐
│ type-check  │  TypeScript validation
│  (cached)   │  Output: Type errors
└─────────────┘
```

## 🎯 Route Structure

```
Web App Routes:
├── /                                    # Home page
├── /used-cars/search                    # Search Results Page (SRP)
├── /used-cars/[...vdp]                  # Vehicle Detail Page (VDP)
│   └── Example: /used-cars/toyota-camry-2023
└── /api/srp                             # SRP Token API endpoint
```

## 📦 Total Files Created

- **Configuration**: 7 files
- **Documentation**: 7 files
- **Source Code**: 24 files
- **Git/GitHub**: 2 files

**Total**: 40+ files across 6 packages

## 🎨 Component Library

```
@arrow-ecommerce/ui exports:
├── Button (6 variants, 4 sizes)
├── Card (with Header, Content, Footer, Title, Description)
├── Input (styled form input)
└── cn() utility function
```

## 🛠️ Utility Library

```
@arrow-ecommerce/utils exports:
├── Formatters
│   ├── formatCurrency(amount, currency)
│   ├── formatDate(date)
│   └── truncate(text, length)
└── Validators
    ├── isValidEmail(email)
    ├── isValidPhone(phone)
    └── isValidURL(url)
```

## 🎨 Theme Tokens

```
Design Tokens (in ui-theme):
├── Colors (light & dark modes)
│   ├── background, foreground
│   ├── primary, secondary
│   ├── muted, accent
│   ├── destructive
│   └── border, input, ring
└── Radius
    ├── sm (0.375rem)
    ├── md (0.5rem)
    ├── lg (1rem)
    └── xl (1.5rem)
```

---

**Version**: 1.0.0  
**Created**: February 14, 2026  
**Status**: ✅ Ready for Development
