'use client'

import { useState } from 'react'
import { Input } from 'ui/primitives/input'
import { useDebounce } from 'ui/hooks/use-debounce'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

/**
 * SearchBar - Client Component
 * Search input with debouncing
 */
export function SearchBar({ placeholder = 'Search...', onSearch }: SearchBarProps) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)

  // Effect would go here to call onSearch with debouncedSearch
  // useEffect(() => { onSearch?.(debouncedSearch) }, [debouncedSearch, onSearch])

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <Input
        type="search"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10"
      />
    </div>
  )
}
