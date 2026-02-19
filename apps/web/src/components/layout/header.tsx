'use client'

import { Button, cn } from '@tfs-ucmp/ui'
import Link from 'next/link'
import * as React from 'react'

// Inline SVG icons (no new dependencies)
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 9H15.75M2.25 4.5H15.75M6.75 13.5H15.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 0)
    update()

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header
      className={cn(
        'top-0 z-50 w-full border-b transition-all duration-300',
        isScrolled ? 'sticky bg-white' : 'absolute border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link className="flex items-center gap-2.5" href="/">
          <div aria-hidden="true" className="h-8 w-8 bg-[#EF4444]" />
          <span
            className={cn(
              'font-bold text-base uppercase tracking-tight transition-colors',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
          >
            ARROW
          </span>
        </Link>

        {/* Center: Nav links (desktop unchanged) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <Link
            className={cn(
              'font-medium text-sm transition-colors hover:underline hover:underline-offset-4',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
            href="/cars"
          >
            Buy
          </Link>
          <Link
            className={cn(
              'font-medium text-sm transition-colors hover:underline hover:underline-offset-4',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
            href="/cars"
          >
            Sell
          </Link>
          <Link
            className={cn(
              'font-medium text-sm transition-colors hover:underline hover:underline-offset-4',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
            href="/cars"
          >
            Finance
          </Link>
          <Link
            className={cn(
              'font-medium text-sm transition-colors hover:underline hover:underline-offset-4',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
            href="/cars"
          >
            Why Arrow
          </Link>
        </nav>

        {/* Right: MOBILE (match screenshot), DESKTOP unchanged */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Mobile right cluster: heart, user, hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              className={cn(
                'h-9 w-9 rounded-full border transition-colors',
                isScrolled ? 'border-[#ccc] hover:bg-muted' : 'border-white/30 hover:bg-white/10'
              )}
              size="icon"
              variant="ghost"
            >
              <Link aria-label="Favorites" href="/favorites">
                <HeartIcon
                  className={cn(
                    'h-5 w-5 transition-colors',
                    isScrolled ? 'text-[#EF4444]' : 'text-white'
                  )}
                />
              </Link>
            </Button>

            <Button
              className={cn(
                'h-9 w-9 rounded-full border transition-colors',
                isScrolled ? 'border-[#ccc] hover:bg-muted' : 'border-white/30 hover:bg-white/10'
              )}
              size="icon"
              variant="ghost"
            >
              <Link aria-label="Sign in" href="/sign-in">
                <UserIcon
                  className={cn(
                    'h-5 w-5 transition-colors',
                    isScrolled ? 'text-[#EF4444]' : 'text-white'
                  )}
                />
              </Link>
            </Button>

            <Button
              aria-label="Open menu"
              className={cn(
                'h-9 w-9 rounded-full border transition-colors',
                isScrolled ? 'border-[#ccc] hover:bg-muted' : 'border-white/30 hover:bg-white/10'
              )}
              size="icon"
              type="button"
              variant="ghost"
            >
              <MenuIcon
                className={cn(
                  'h-5 w-5 transition-colors',
                  isScrolled ? 'text-[#EF4444]' : 'text-white'
                )}
              />
            </Button>
          </div>

          {/* Desktop right cluster (unchanged from your code) */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="hidden items-center gap-1.5 text-xs sm:flex">
              <MapPinIcon
                className={cn(
                  'h-3.5 w-3.5 transition-colors',
                  isScrolled ? 'text-[#EF4444]' : 'text-white'
                )}
              />
              <span
                className={cn(
                  'transition-colors',
                  isScrolled ? 'text-muted-foreground' : 'text-white'
                )}
              >
                Buffalo, WV 25033
              </span>
            </div>

            <Button
              className={cn(
                'h-9 w-9 rounded-full border transition-colors',
                isScrolled ? 'border-[#ccc] hover:bg-muted' : 'border-white/30 hover:bg-white/10'
              )}
              size="icon"
              variant="ghost"
            >
              <Link aria-label="Favorites" href="/favorites">
                <HeartIcon
                  className={cn(
                    'h-5 w-5 transition-colors',
                    isScrolled ? 'text-[#EF4444]' : 'text-white'
                  )}
                />
              </Link>
            </Button>

            <Button
              className={cn(
                'h-9 gap-1.5 rounded-full border px-4 transition-colors',
                isScrolled
                  ? 'border-[#ccc] bg-white text-black hover:bg-gray-50'
                  : 'border-white/30 bg-transparent text-white hover:bg-white/10'
              )}
            >
              <Link className="flex flex-row items-center" href="/sign-in">
                <UserIcon
                  className={cn(
                    'h-4 w-4 transition-colors',
                    isScrolled ? 'text-[#EF4444]' : 'text-white'
                  )}
                />
                <span>Sign In</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
