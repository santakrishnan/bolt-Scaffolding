'use client'

import { Button, Input } from '@tfs-ucmp/ui'
import { useRouter } from 'next/navigation'
import * as React from 'react'

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.8847 1.03981L16.5 0L16.1153 1.03981C15.8449 1.76979 15.2698 2.34486 14.5398 2.61529L13.5 3L14.5398 3.38471C15.2698 3.6551 15.8449 4.23015 16.1153 4.96019L16.5 6L16.8847 4.96019C17.1551 4.23021 17.7302 3.65514 18.4602 3.38471L19.5 3L18.4602 2.61529C17.7302 2.3449 17.1551 1.76985 16.8847 1.03981Z"
        fill="#EB0D1C"
      />
      <path
        d="M3.38471 14.1668L3 13.127L2.61529 14.1668C2.3449 14.8967 1.76985 15.4718 1.03981 15.7422L0 16.127L1.03981 16.5117C1.76979 16.7821 2.34486 17.3571 2.61529 18.0871L3 19.127L3.38471 18.0871C3.6551 17.3572 4.23015 16.7821 4.96019 16.5117L6 16.127L4.96019 15.7422C4.23021 15.4719 3.65514 14.8968 3.38471 14.1668Z"
        fill="#EB0D1C"
      />
      <path
        d="M11.1502 4.55214L10.1667 1.89502L9.18314 4.55214C8.49303 6.4176 7.02253 7.88816 5.15712 8.57816L2.5 9.56168L5.15712 10.5452C7.02258 11.2353 8.49314 12.7058 9.18314 14.5712L10.1667 17.2283L11.1502 14.5712C11.8403 12.7058 13.3108 11.2352 15.1762 10.5452L17.8333 9.56168L15.1762 8.57816C13.3107 7.88805 11.8402 6.41755 11.1502 4.55214Z"
        fill="#EB0D1C"
      />
    </svg>
  )
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.092 12C19.5133 12 18.9584 12.2299 18.5492 12.639C18.14 13.0482 17.9102 13.6032 17.9102 14.1818V20C17.9102 20.5786 18.14 21.1336 18.5492 21.5427C18.9584 21.9519 19.5133 22.1818 20.092 22.1818C20.6706 22.1818 21.2256 21.9519 21.6347 21.5427C22.0439 21.1336 22.2738 20.5786 22.2738 20V14.1818C22.2738 13.6032 22.0439 13.0482 21.6347 12.639C21.2256 12.2299 20.6706 12 20.092 12Z"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <path
        d="M25.1818 18.5469V20.0014C25.1818 21.3516 24.6454 22.6465 23.6907 23.6012C22.736 24.5559 21.4411 25.0923 20.0909 25.0923C18.7407 25.0923 17.4458 24.5559 16.4911 23.6012C15.5364 22.6465 15 21.3516 15 20.0014V18.5469"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <path
        d="M20.0938 25.0898V27.9989"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <path
        d="M17.1797 28H22.9978"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
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

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg fill="none" height="16" viewBox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 7.85714L0.999997 7.85714M17 7.85714L10.1429 1M17 7.85714L10.1429 14.7143"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export function HomeHeroSearch() {
  const router = useRouter()
  const [query, setQuery] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      console.log('Search query:', query)
      // In a real app: router.push(`/cars?q=${encodeURIComponent(query)}`)
      router.push('/cars')
    }
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 rounded-full bg-white p-2 shadow-xl">
        {/* Left icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          <SparklesIcon className="h-5 w-5 text-primary" />
        </div>

        {/* Input */}
        <div className="relative flex-1">
          <label className="sr-only" htmlFor="hero-search">
            Search for vehicles
          </label>
          <Input
            className="h-10 border-0 bg-transparent text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            id="hero-search"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SUV under 35k with low miles..."
            type="text"
            value={query}
          />
        </div>

        {/* Mic button */}
        <MicIcon className="h-5 w-5" />

        {/* Search button */}
        <Button
          className="h-10 w-10 shrink-0 rounded-full bg-[#FF0202] font-semibold text-sm text-white hover:bg-primary/90 lg:w-auto lg:px-6"
          type="submit"
        >
          <span className="lg:hidden">
            <SearchIcon className="h-5 w-5" />
          </span>
          <span className="hidden lg:block">Search</span>
        </Button>
      </div>
    </form>
  );
}
