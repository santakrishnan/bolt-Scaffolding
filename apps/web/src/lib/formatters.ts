/**
 * Capitalize the first letter of a string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Format a slug into a human-readable uppercase label.
 * e.g. "xle-awd" → "XLE AWD"
 */
export function formatSlugLabel(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.toUpperCase())
    .join(' ')
}
