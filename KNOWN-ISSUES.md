# Known Issues & Notes

## ⚠️ CSS Validator Warnings

You may see the following warnings in `packages/ui-theme/index.css`:

- `Unknown at rule @theme`
- `Unknown at rule @apply`

**These are false positives!** 

These directives are valid Tailwind CSS 4 syntax. The VS Code CSS validator doesn't yet recognize Tailwind CSS 4's new `@theme` directive.

### Why These Warnings Appear

- Tailwind CSS 4 introduced a new `@theme` directive for CSS-first configuration
- VS Code's built-in CSS validator only knows about standard CSS
- The project will compile and run correctly despite these warnings

### Solution Options

**Option 1: Ignore the warnings** (Recommended)
- The warnings don't affect functionality
- Your code is correct

**Option 2: Disable CSS validation for this file**

Add to `.vscode/settings.json`:

```json
{
  "css.validate": false,
  "css.customData": [".vscode/tailwind.json"]
}
```

**Option 3: Use Tailwind CSS IntelliSense extension**

Install the official Tailwind CSS IntelliSense extension which understands Tailwind CSS 4 syntax.

## 📝 Other Notes

### TypeScript Errors
The project is configured with TypeScript strict mode. All actual TypeScript errors have been resolved.

### Build Process
Despite the CSS warnings, the build process works perfectly:

```bash
pnpm build  # ✅ Builds successfully
pnpm dev    # ✅ Dev server runs without issues
```

### Tailwind CSS 4
This project uses **Tailwind CSS 4** (currently in beta), which introduces:
- CSS-first configuration with `@theme`
- Improved performance
- Better developer experience
- Native CSS variable support

## 🎯 Verified Features

All the following have been tested and work correctly:

- ✅ Monorepo structure
- ✅ Package dependencies
- ✅ TypeScript compilation
- ✅ Next.js routes
- ✅ Component imports
- ✅ Tailwind CSS styling
- ✅ Turbopack development
- ✅ Build process
- ✅ Git hooks

## 🚀 Ready to Use

The project is **100% functional** and ready for development. The CSS warnings are cosmetic and don't affect:

- Build process
- Runtime behavior
- Type safety
- Component functionality
- Styling output

Start developing with confidence:

```bash
pnpm dev
```

## 📚 Additional Resources

- [Tailwind CSS 4 Beta Docs](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)

---

**Last Updated**: February 14, 2026

If you have questions or concerns, please open an issue or discussion on GitHub.
