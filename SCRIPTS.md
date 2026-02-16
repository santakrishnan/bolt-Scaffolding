# Package.json Scripts Reference

This document explains all available npm scripts in the monorepo.

## 🏠 Root Scripts

Located in root `package.json`:

### Development

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `turbo dev` | Start all apps in development mode with hot reload |
| `build` | `turbo build` | Build all packages and apps for production |
| `start` | `turbo start` | Start production servers |

### Code Quality

| Script | Command | Description |
|--------|---------|-------------|
| `lint` | `turbo lint` | Run Biome linter across all packages |
| `format` | `biome format --write .` | Format all files with Biome |
| `check` | `biome check --write .` | Check and auto-fix code issues |
| `type-check` | `turbo type-check` | Type check all packages |

### Testing

| Script | Command | Description |
|--------|---------|-------------|
| `test` | `turbo test` | Run all tests |

### Maintenance

| Script | Command | Description |
|--------|---------|-------------|
| `clean` | `turbo clean && rm -rf node_modules` | Remove all build artifacts and dependencies |
| `prepare` | `husky` | Setup git hooks (runs automatically after install) |

## 📦 Package Scripts

### apps/web (Next.js App)

Located in `apps/web/package.json`:

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev --turbopack` | Start Next.js dev server with Turbopack |
| `build` | `next build` | Build Next.js app for production |
| `start` | `next start` | Start production Next.js server |
| `lint` | `biome check .` | Lint app code |
| `type-check` | `tsc --noEmit` | Check TypeScript types |

### packages/ui (UI Components)

Located in `packages/ui/package.json`:

| Script | Command | Description |
|--------|---------|-------------|
| `lint` | `biome check .` | Lint component code |
| `type-check` | `tsc --noEmit` | Check component types |

### packages/utils (Utilities)

Located in `packages/utils/package.json`:

| Script | Command | Description |
|--------|---------|-------------|
| `lint` | `biome check .` | Lint utility code |
| `type-check` | `tsc --noEmit` | Check utility types |

## 🎯 Common Workflows

### Starting Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Before Committing

```bash
# Check code quality
pnpm check

# Type check
pnpm type-check

# Run tests (if any)
pnpm test
```

### Building for Production

```bash
# Build all packages
pnpm build

# Or build specific package
cd apps/web
pnpm build
```

### Adding Dependencies

#### Workspace Package

To add a workspace package as dependency:

```bash
cd apps/web
pnpm add @arrow-ecommerce/ui@workspace:*
```

#### External Package

To add external package:

```bash
# In specific package
cd apps/web
pnpm add <package-name>

# Or from root for all packages
pnpm add -w <package-name>
```

#### Dev Dependency

```bash
pnpm add -D <package-name>
```

### Removing Dependencies

```bash
pnpm remove <package-name>
```

### Updating Dependencies

```bash
# Update all dependencies
pnpm update

# Update specific package
pnpm update <package-name>

# Check for outdated packages
pnpm outdated
```

## 🔧 Turborepo Commands

### Cache Management

```bash
# Clear Turborepo cache
pnpm turbo clean

# Run with no cache
pnpm turbo dev --no-cache
```

### Filtering

Run commands for specific packages:

```bash
# Run dev for web app only
pnpm turbo dev --filter=@arrow-ecommerce/web

# Build ui package only
pnpm turbo build --filter=@arrow-ecommerce/ui
```

### Parallel Execution

```bash
# Run with specific concurrency
pnpm turbo build --concurrency=2
```

## 🐕 Husky Hooks

### Pre-commit

Automatically runs on `git commit`:

```bash
pnpm lint
```

To skip hooks (not recommended):

```bash
git commit --no-verify
```

## 🎨 Custom Scripts

### Add Custom Script

To add a custom script, update the appropriate `package.json`:

**Root level** (affects all packages):
```json
{
  "scripts": {
    "my-script": "turbo my-script"
  }
}
```

**Package level** (affects single package):
```json
{
  "scripts": {
    "my-script": "echo 'Custom script'"
  }
}
```

Then update `turbo.json`:

```json
{
  "tasks": {
    "my-script": {
      "cache": false
    }
  }
}
```

## 📊 Performance Tips

1. **Use Turborepo cache**: Don't use `--no-cache` unless necessary
2. **Filter packages**: Use `--filter` to run tasks on specific packages
3. **Parallel execution**: Turborepo automatically runs independent tasks in parallel
4. **PNPM workspaces**: Share dependencies across packages efficiently

## 🆘 Troubleshooting

### Clear Everything and Reinstall

```bash
pnpm clean
pnpm install
```

### Fix PNPM Lock File

```bash
rm pnpm-lock.yaml
pnpm install
```

### Rebuild from Scratch

```bash
rm -rf node_modules pnpm-lock.yaml .turbo
pnpm install
pnpm build
```

## 📝 Notes

- All scripts respect the `turbo.json` pipeline configuration
- Turborepo caches task outputs for faster subsequent runs
- PNPM workspaces enable efficient dependency management
- Pre-commit hooks ensure code quality before commits

For more information, see:
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [PNPM Workspaces](https://pnpm.io/workspaces)
