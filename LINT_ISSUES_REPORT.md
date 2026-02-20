# Lint Issues Report

**Generated:** $(date)
**Total Errors:** 20 issues across 6 files
**Status:** Merge conflicts resolved, formatting applied

---

## Summary by File

| File | Issues | Priority |
|------|--------|----------|
| `buying-process-carousel.tsx` | 9 | HIGH |
| `home-hero-carousel.tsx` | 5 | MEDIUM |
| `buying-process.tsx` | 2 | MEDIUM |
| `validators.ts` (utils package) | 2 | LOW |
| `checkout-form.tsx` | 1 | LOW |
| `cart-drawer.tsx` | 1 | LOW |

---

## Detailed Issues by Category

### 🔴 HIGH PRIORITY - Performance & Accessibility

#### 1. **buying-process-carousel.tsx** (9 issues)
**Location:** `apps/web/src/components/features/landing/buying-process/`

**Issues:**
- ❌ **3x img tags** - Should use Next.js `<Image>` component (lines 36, 41, 46)
  - SearchIcon, ShieldCheckIcon, ClipboardIcon
  - Missing width/height attributes
  - Performance impact: slower LCP, higher bandwidth

- ⚠️ **3x Array index as key** - React performance issue (lines 95, 118, 147)
  - Can cause state issues when items reorder

- ⚠️ **1x SVG without title** - Accessibility issue (line 9)
  - RefreshIcon needs title element or aria-label

- ⚠️ **1x Namespace import** - Bundle size issue (line 4)
  - `import * as React` should use named imports

- ⚠️ **1x Unused parameter** - Code quality (line 7)
  - `className` parameter in RefreshIcon not used

**Fix Approach:**
1. Convert all `<img>` to Next.js `<Image>` with width/height
2. Add unique IDs to step data and use as keys
3. Add title/aria-label to SVG
4. Change to `import { useState, useRef } from 'react'`
5. Remove or use className parameter

---

#### 2. **buying-process.tsx** (2 issues)
**Location:** `apps/web/src/components/features/landing/buying-process/`

**Issues:**
- ❌ **1x img tag** - Background image (line 31)
  - Should use Next.js `<Image>` with fill prop
  - Missing width/height attributes

**Fix Approach:**
1. Convert to `<Image fill priority />` for above-fold background

---

#### 3. **home-hero-carousel.tsx** (5 issues)
**Location:** `apps/web/src/components/features/landing/home-hero/`

**Issues:**
- ⚠️ **2x Accessibility issues** (line 45)
  - Non-interactive element with event handlers
  - Static element with interactions
  - Needs role attribute or semantic element

- ⚠️ **1x Namespace import** - Bundle size (line 5)
  - `import * as React` should use named imports

- ⚠️ **2x Array index as key** (lines 57, 82)
  - React performance issue

**Fix Approach:**
1. Add `role="region"` to div with mouse events
2. Use named React imports
3. Add unique IDs to slide data

---

### 🟡 MEDIUM PRIORITY - Code Quality

#### 4. **validators.ts** (2 issues)
**Location:** `packages/utils/src/`

**Issues:**
- ⚠️ **2x Regex not at top level** (lines 5, 13)
  - Performance issue if called frequently
  - emailRegex and phoneRegex should be constants

**Fix Approach:**
```typescript
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email)
}

export function isValidPhone(phone: string): boolean {
  return PHONE_REGEX.test(phone)
}
```

---

### 🟢 LOW PRIORITY - Minor Issues

#### 5. **checkout-form.tsx** (1 issue)
**Location:** `apps/web/src/components/features/landing/checkout-form/`

**Issues:**
- ⚠️ **1x alert() usage** (line 30)
  - Should use toast/notification UI component

**Fix Approach:**
1. Replace with toast notification from UI library

---

#### 6. **cart-drawer.tsx** (1 issue)
**Location:** `apps/web/src/components/features/landing/cart-drawer/`

**Issues:**
- ⚠️ **1x SVG without title** (line 26)
  - Accessibility issue

**Fix Approach:**
1. Add title element or aria-label to SVG

---

## Recommended Fix Order

### Phase 1: Critical Performance Issues (Do First)
1. ✅ **Fix merge conflicts** - DONE
2. ✅ **Run auto-format** - DONE
3. 🔧 **Convert img tags to Next.js Image** (3 files, 6 instances)
   - buying-process-carousel.tsx (3 images)
   - buying-process.tsx (1 image)
   - Already done: car-card.tsx

### Phase 2: React Best Practices
4. 🔧 **Fix array index keys** (2 files, 5 instances)
   - Add unique IDs to data structures
   - Use stable identifiers as keys

### Phase 3: Accessibility
5. 🔧 **Add SVG titles/labels** (2 files, 2 instances)
6. 🔧 **Fix interactive element roles** (1 file)

### Phase 4: Code Quality
7. 🔧 **Move regex to module level** (1 file, 2 instances)
8. 🔧 **Fix namespace imports** (2 files)
9. 🔧 **Remove unused parameters** (1 file)
10. 🔧 **Replace alert with toast** (1 file)

---

## Estimated Effort

| Phase | Files | Time Estimate |
|-------|-------|---------------|
| Phase 1 | 2 files | 30 minutes |
| Phase 2 | 2 files | 20 minutes |
| Phase 3 | 3 files | 15 minutes |
| Phase 4 | 4 files | 20 minutes |
| **Total** | **6 files** | **~1.5 hours** |

---

## Commands to Run

```bash
# After each fix, check progress
pnpm check

# Auto-fix safe issues
pnpm fix

# Final check before commit
pnpm check
```

---

## Notes

- All merge conflicts have been resolved
- Auto-formatting has been applied
- Most issues are straightforward fixes
- No breaking changes required
- All fixes improve performance, accessibility, and code quality
