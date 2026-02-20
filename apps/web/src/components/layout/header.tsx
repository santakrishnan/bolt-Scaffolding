'use client'

import { Button, HeartIcon, MapPinIcon, MenuIcon, UserIcon } from '@tfs-ucmp/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 0)
    update()

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  // Use solid/white styles for all pages except home (home uses transparent until scrolled)
  const useSolidStyles = !isHomePage || isScrolled

  return (
    <header
      className={cn(
        'top-0 z-50 w-full transition-all duration-300',
        useSolidStyles ? 'sticky bg-white' : 'absolute border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link className="flex items-center gap-2.5" href="/">
          <div aria-hidden="true" className="h-8 w-8 bg-[#EF4444]" />
          <span
            className={cn(
              'font-bold text-base uppercase tracking-tight transition-colors',
              useSolidStyles ? 'text-foreground' : 'text-white'
            )}
          >
            ARROW
          </span>
        </Link>

        {/* Center: Nav links (desktop unchanged) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          <Link
            className={cn(
              'font-medium text-sm transition-colors hover:underline hover:underline-offset-4',
              useSolidStyles ? 'text-foreground' : 'text-white'
            )}
            href="/cars"
          >
            Buy
          </Link>
          <Link
            className={cn(
              'font-medium text-sm transition-colors hover:underline hover:underline-offset-4',
              useSolidStyles ? 'text-foreground' : 'text-white'
            )}
            href="/cars"
          >
            Sell
          </Link>
          <Link
            className={cn(
              'font-medium text-sm transition-colors hover:underline hover:underline-offset-4',
              useSolidStyles ? 'text-foreground' : 'text-white'
            )}
            href="/cars"
          >
            Finance
          </Link>
          <Link
            className={cn(
              'font-medium text-sm transition-colors hover:underline hover:underline-offset-4',
              useSolidStyles ? 'text-foreground' : 'text-white'
            )}
            href="/cars"
          >
            Why Arrow
          </Link>
        </nav>

        {/* Right: MOBILE (match screenshot), DESKTOP unchanged */}
        <div className="flex items-center gap-2 lg:gap-3">
          {/* Mobile right cluster: heart, user, hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              className={cn(
                'h-9 w-9 rounded-full border transition-colors',
                useSolidStyles
                  ? 'border-[#ccc] hover:bg-muted'
                  : 'border-white/30 hover:bg-white/10'
              )}
              size="icon"
              variant="ghost"
            >
              <Link aria-label="Favorites" href="/favorites">
                <HeartIcon
                  className={cn(
                    'h-5 w-5 transition-colors',
                    useSolidStyles ? 'text-[#EF4444]' : 'text-white'
                  )}
                />
              </Link>
            </Button>

            <Button
              className={cn(
                'h-9 w-9 rounded-full border transition-colors',
                useSolidStyles
                  ? 'border-[#ccc] hover:bg-muted'
                  : 'border-white/30 hover:bg-white/10'
              )}
              size="icon"
              variant="ghost"
            >
              <Link aria-label="Sign in" href="/sign-in">
                <UserIcon
                  className={cn(
                    'h-5 w-5 transition-colors',
                    useSolidStyles ? 'text-[#EF4444]' : 'text-white'
                  )}
                />
              </Link>
            </Button>

            <Button
              aria-label="Open menu"
              className={cn(
                'h-9 w-9 rounded-full border transition-colors',
                useSolidStyles
                  ? 'border-[#ccc] hover:bg-muted'
                  : 'border-white/30 hover:bg-white/10'
              )}
              size="icon"
              type="button"
              variant="ghost"
            >
              <MenuIcon
                className={cn(
                  'h-5 w-5 transition-colors',
                  useSolidStyles ? 'text-[#EF4444]' : 'text-white'
                )}
              />
            </Button>
          </div>

          {/* Desktop right cluster (unchanged from your code) */}
          <div className="hidden items-center gap-3 lg:flex">
            <div className="hidden items-center gap-1.5 text-xs sm:flex">
              <MapPinIcon
                className={cn(
                  'h-3.5 w-3.5 transition-colors',
                  useSolidStyles ? 'text-[#EF4444]' : 'text-white'
                )}
              />
              <span
                className={cn(
                  'transition-colors',
                  useSolidStyles ? 'text-muted-foreground' : 'text-white'
                )}
              >
                Buffalo, WV 25033
              </span>
            </div>

            <Button
              className={cn(
                'h-9 w-9 rounded-full border transition-colors',
                useSolidStyles
                  ? 'border-[#ccc] hover:bg-muted'
                  : 'border-white/30 hover:bg-white/10'
              )}
              size="icon"
              variant="ghost"
            >
              <Link aria-label="Favorites" href="/favorites">
                <HeartIcon
                  className={cn(
                    'h-5 w-5 transition-colors',
                    useSolidStyles ? 'text-[#EF4444]' : 'text-white'
                  )}
                />
              </Link>
            </Button>

            <Button
              className={cn(
                'h-9 gap-1.5 rounded-full border px-4 transition-colors',
                useSolidStyles
                  ? 'border-[#ccc] bg-white text-black hover:bg-gray-50'
                  : 'border-white/30 bg-transparent text-white hover:bg-white/10'
              )}
            >
              <Link className="flex flex-row items-center" href="/sign-in">
                <UserIcon
                  className={cn(
                    'h-4 w-4 transition-colors',
                    useSolidStyles ? 'text-[#EF4444]' : 'text-white'
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
