# Biome Commands Reference

Complete guide to Biome CLI commands for linting, formatting, and code quality checks.

---

## Core Commands

### 1. `biome check` - Complete Check (Lint + Format + Import Sort)
Runs formatter, linter, and import sorting together.

```bash
# Basic check
pnpm biome check

# Check with auto-fix
pnpm biome check --write

# Check with unsafe fixes
pnpm biome check --write --unsafe

# Check specific paths
pnpm biome check apps/web/src packages/utils/src
```

### 2. `biome lint` - Linting Only
Run linter checks without formatting.

```bash
# Basic lint
pnpm biome lint

# Lint with auto-fix
pnpm biome lint --write

# Lint with unsafe fixes
pnpm biome lint --write --unsafe
```

### 3. `biome format` - Formatting Only
Run formatter without linting.

```bash
# Check formatting (dry-run)
pnpm biome format

# Apply formatting
pnpm biome format --write

# Format specific files
pnpm biome format --write apps/web/src/**/*.tsx
```

### 4. `biome ci` - CI Environment
Optimized for CI/CD pipelines (fails on any issues).

```bash
# Run in CI mode
pnpm biome ci

# CI with specific paths
pnpm biome ci apps/web/src
```

---

## Filtering & Targeting

### Filter by Severity Level
```bash
# Show only errors (hide warnings)
pnpm biome check --diagnostic-level=error

# Show errors and warnings (default)
pnpm biome check --diagnostic-level=warn

# Show everything including info
pnpm biome check --diagnostic-level=info
```

### Filter by Rules
```bash
# Run only specific rule
pnpm biome lint --only=noUnusedVariables

# Run specific rule group
pnpm biome lint --only=a11y
pnpm biome lint --only=performance
pnpm biome lint --only=correctness

# Skip specific rules
pnpm biome lint --skip=noArrayIndexKey
pnpm biome lint --skip=suspicious

# Combine multiple
pnpm biome lint --only=a11y --only=performance
```

### Target Specific Files
```bash
# Check specific folder
pnpm biome check apps/web/src/components/

# Check multiple paths
pnpm biome check apps/web/src packages/utils/src

# Check only staged files (git)
pnpm biome check --staged

# Check only changed files
pnpm biome check --changed

# Check changed since specific branch
pnpm biome check --changed --since=main
```

---

## Output Control

### Diagnostic Limits
```bash
# Show more diagnostics (default is 20)
pnpm biome check --max-diagnostics=100

# Show ALL diagnostics
pnpm biome check --max-diagnostics=none

# Show verbose output
pnpm biome check --verbose
```

### Reporters
```bash
# JSON output
pnpm biome check --reporter=json

# Pretty JSON
pnpm biome check --reporter=json-pretty

# Summary only
pnpm biome check --reporter=summary

# GitHub Actions format
pnpm biome check --reporter=github

# GitLab format
pnpm biome check --reporter=gitlab

# JUnit format
pnpm biome check --reporter=junit
```

---

## Fix Modes

### Safe Fixes
```bash
# Apply safe fixes only
pnpm biome check --write

# Alias for --write
pnpm biome check --fix
```

### Unsafe Fixes
```bash
# Apply unsafe fixes (may change behavior)
pnpm biome check --write --unsafe

# Lint with unsafe fixes
pnpm biome lint --write --unsafe
```

### Suppress Issues
```bash
# Add suppression comments instead of fixing
pnpm biome lint --suppress

# Add suppression with reason
pnpm biome lint --suppress --reason="TODO: Fix in next sprint"
```

---

## Configuration

### Config File
```bash
# Use specific config file
pnpm biome check --config-path=./custom-biome.json

# Use config from specific directory
pnpm biome check --config-path=./configs/
```

### Initialize Config
```bash
# Create biome.json with defaults
pnpm biome init
```

### Migrate Config
```bash
# Update config for breaking changes
pnpm biome migrate
```

---

## Advanced Options

### VCS Integration
```bash
# Enable VCS integration
pnpm biome check --vcs-enabled=true

# Use .gitignore
pnpm biome check --vcs-use-ignore-file=true

# Set VCS root
pnpm biome check --vcs-root=./
```

### Error Handling
```bash
# Skip files with parse errors
pnpm biome check --skip-parse-errors

# Don't error on unmatched files
pnpm biome check --no-errors-on-unmatched

# Treat warnings as errors
pnpm biome check --error-on-warnings
```

### Logging
```bash
# Set log level
pnpm biome check --log-level=debug
pnpm biome check --log-level=info
pnpm biome check --log-level=warn
pnpm biome check --log-level=error

# Save logs to file
pnpm biome check --log-file=./biome.log

# Compact log format
pnpm biome check --log-kind=compact
```

---

## Practical Examples

### Development Workflow
```bash
# Quick check during development
pnpm biome check --diagnostic-level=error

# Fix all safe issues
pnpm biome check --write

# Check only what you're working on
pnpm biome check --staged
```

### Pre-Commit
```bash
# Check staged files only
pnpm biome check --staged --write

# Lint staged with specific rules
pnpm biome lint --staged --only=correctness --only=a11y
```

### CI/CD Pipeline
```bash
# Strict CI check
pnpm biome ci

# CI with changed files only
pnpm biome check --changed --error-on-warnings

# CI with GitHub Actions reporter
pnpm biome ci --reporter=github
```

### Focus on Specific Issues
```bash
# Only performance issues
pnpm biome lint --only=performance --max-diagnostics=none

# Only accessibility issues
pnpm biome lint --only=a11y --diagnostic-level=error

# Skip warnings, show all errors
pnpm biome check --diagnostic-level=error --max-diagnostics=none
```

### Debugging
```bash
# Verbose output with all diagnostics
pnpm biome check --verbose --max-diagnostics=none

# Debug with logs
pnpm biome check --log-level=debug --log-file=debug.log

# Check specific problematic file
pnpm biome check --verbose apps/web/src/components/problem.tsx
```

---

## Rule Groups Reference

Common rule groups you can use with `--only` or `--skip`:

### Lint Rule Groups
- `a11y` - Accessibility rules
- `complexity` - Code complexity rules
- `correctness` - Correctness rules
- `nursery` - Experimental rules
- `performance` - Performance rules
- `security` - Security rules
- `style` - Code style rules
- `suspicious` - Suspicious code patterns

### Specific Rules Examples
- `noUnusedVariables`
- `noArrayIndexKey`
- `noImgElement`
- `useImageSize`
- `noSvgWithoutTitle`
- `noNamespaceImport`
- `useTopLevelRegex`

---

## Useful Combinations

### Fix Everything Safely
```bash
pnpm biome check --write --max-diagnostics=none
```

### Show Only Critical Errors
```bash
pnpm biome check --diagnostic-level=error --only=correctness --only=security
```

### Performance Audit
```bash
pnpm biome lint --only=performance --max-diagnostics=none --verbose
```

### Accessibility Audit
```bash
pnpm biome lint --only=a11y --max-diagnostics=none --reporter=summary
```

### Pre-Push Check
```bash
pnpm biome check --changed --error-on-warnings --reporter=summary
```

---

## Integration with Package Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "check": "biome check",
    "check:fix": "biome check --write",
    "check:unsafe": "biome check --write --unsafe",
    "lint": "biome lint",
    "lint:fix": "biome lint --write",
    "format": "biome format --write",
    "ci": "biome ci",
    "check:staged": "biome check --staged --write",
    "check:errors": "biome check --diagnostic-level=error",
    "check:perf": "biome lint --only=performance",
    "check:a11y": "biome lint --only=a11y"
  }
}
```

Then use:
```bash
pnpm check
pnpm check:fix
pnpm lint:fix
pnpm check:staged
```

---

## Tips & Best Practices

1. **Start with errors only**: `--diagnostic-level=error` to focus on critical issues
2. **Use --staged for pre-commit**: Only check what you're about to commit
3. **Combine filters**: Use multiple `--only` flags to focus on specific areas
4. **CI should use `biome ci`**: It's optimized for CI environments
5. **Use --max-diagnostics=none**: When you want to see all issues
6. **Save time with --changed**: Only check modified files
7. **Use reporters in CI**: `--reporter=github` or `--reporter=gitlab` for better integration
8. **Verbose for debugging**: `--verbose` shows what files are being processed

---

## Common Issues & Solutions

### "Too many diagnostics"
```bash
# Increase limit
pnpm biome check --max-diagnostics=100

# Or remove limit
pnpm biome check --max-diagnostics=none
```

### "Want to see only specific rule violations"
```bash
pnpm biome lint --only=noUnusedVariables --max-diagnostics=none
```

### "Need to fix everything at once"
```bash
# Safe fixes
pnpm biome check --write

# Including unsafe
pnpm biome check --write --unsafe
```

### "CI failing on warnings"
```bash
# Make warnings fail CI
pnpm biome check --error-on-warnings
```

---

## Quick Reference Card

| Task | Command |
|------|---------|
| Check everything | `pnpm biome check` |
| Fix safe issues | `pnpm biome check --write` |
| Fix all issues | `pnpm biome check --write --unsafe` |
| Errors only | `pnpm biome check --diagnostic-level=error` |
| Show all issues | `pnpm biome check --max-diagnostics=none` |
| Check staged | `pnpm biome check --staged` |
| Check changed | `pnpm biome check --changed` |
| Specific rule | `pnpm biome lint --only=ruleName` |
| Skip rule | `pnpm biome lint --skip=ruleName` |
| CI mode | `pnpm biome ci` |
| Format only | `pnpm biome format --write` |
| Lint only | `pnpm biome lint --write` |

---

**Documentation:** https://biomejs.dev/
**Rule Reference:** https://biomejs.dev/linter/rules/
