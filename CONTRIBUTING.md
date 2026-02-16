# Contributing to Arrow E-Commerce

Thank you for your interest in contributing! This guide will help you get started.

## 🏗️ Development Setup

### Prerequisites

- Node.js >= 20.0.0
- PNPM >= 9.0.0
- Git

### Getting Started

1. **Fork and Clone**

```bash
git clone https://github.com/your-username/arrow-ecommerce.git
cd arrow-ecommerce
```

2. **Install Dependencies**

```bash
pnpm install
```

3. **Create a Branch**

```bash
git checkout -b feature/your-feature-name
```

4. **Start Development**

```bash
pnpm dev
```

## 📁 Project Structure

- `apps/web` - Next.js application
- `packages/ui` - Shared UI components
- `packages/utils` - Shared utilities
- `packages/ui-theme` - Design system
- `packages/config` - Shared configurations

## 🛠️ Development Workflow

### Making Changes

1. **Code Style**: We use Biome for linting and formatting
   ```bash
   pnpm lint      # Check for issues
   pnpm check     # Auto-fix issues
   pnpm format    # Format code
   ```

2. **Type Checking**: Ensure TypeScript types are correct
   ```bash
   pnpm type-check
   ```

3. **Testing**: Write tests for new features
   ```bash
   pnpm test
   ```

### Adding New Components

#### UI Components (shadcn/ui)

To add official shadcn/ui components:

```bash
cd packages/ui
pnpx shadcn@latest add button
```

#### Custom Components

1. Create component in `packages/ui/src/components/`
2. Export in `packages/ui/src/index.ts`
3. Document props with TypeScript
4. Add usage example in comments

Example:

```tsx
// packages/ui/src/components/my-component.tsx
import * as React from "react";
import { cn } from "../lib/utils";

interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary";
}

/**
 * MyComponent - Description
 * 
 * @example
 * <MyComponent variant="primary">Content</MyComponent>
 */
export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("base-styles", className)}
        {...props}
      />
    );
  }
);
MyComponent.displayName = "MyComponent";
```

### Adding Utilities

Add utilities to `packages/utils/src/`:

```typescript
// packages/utils/src/my-utility.ts
export function myUtility(input: string): string {
  return input.toUpperCase();
}
```

Export in `packages/utils/src/index.ts`:

```typescript
export * from "./my-utility";
```

## 🎨 Styling Guidelines

### Tailwind CSS 4

- Use utility classes for styling
- Define custom properties in `packages/ui-theme/index.css`
- Follow the existing color scheme
- Use semantic color tokens (e.g., `bg-primary`, not `bg-blue-500`)

### Component Variants

Use `class-variance-authority` (CVA) for component variants:

```tsx
import { cva } from "class-variance-authority";

const variants = cva("base-classes", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
```

## 📝 Commit Guidelines

### Commit Message Format

Follow conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```bash
git commit -m "feat(ui): add dropdown component"
git commit -m "fix(web): resolve navigation issue on mobile"
git commit -m "docs: update installation instructions"
```

## 🧪 Testing

### Writing Tests

Create test files alongside source files:

```
src/
  utils.ts
  utils.test.ts
```

Example test:

```typescript
import { describe, it, expect } from "vitest";
import { formatCurrency } from "./formatters";

describe("formatCurrency", () => {
  it("formats USD correctly", () => {
    expect(formatCurrency(1000)).toBe("$1,000.00");
  });

  it("handles different currencies", () => {
    expect(formatCurrency(1000, "EUR")).toBe("€1,000.00");
  });
});
```

Run tests:

```bash
pnpm test
```

## 🔍 Code Review Process

### Before Submitting

1. ✅ Code follows project style (Biome passes)
2. ✅ TypeScript types are correct
3. ✅ Tests pass (if applicable)
4. ✅ Documentation is updated
5. ✅ Commit messages follow convention
6. ✅ No console logs or debug code

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How to test the changes

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
```

## 🐛 Reporting Issues

### Bug Reports

Include:
- Clear title
- Steps to reproduce
- Expected vs actual behavior
- Environment (OS, Node version, browser)
- Screenshots or error messages

### Feature Requests

Include:
- Clear description
- Use case
- Proposed solution
- Alternative solutions considered

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Turborepo Docs](https://turbo.build/repo/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Biome Docs](https://biomejs.dev)

## 💬 Getting Help

- Open a GitHub Discussion
- Check existing issues
- Read the documentation

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🎉
