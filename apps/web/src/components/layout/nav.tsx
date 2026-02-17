import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

/**
 * Nav - Server Component
 * Main navigation links
 */
export function Nav() {
  return (
    <nav className="hidden md:flex md:gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
