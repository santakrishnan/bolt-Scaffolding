'use client'

import { MicIcon, SparkleIcon } from '@tfs-ucmp/ui'
import { useState } from 'react'

// Search suggestions data
const searchSuggestions = [
  { text: 'SUV under 35k with', highlight: 'Low Miles' },
  { text: 'SUV under 35k with', highlight: 'Heated Seats' },
  { text: 'SUV under 35K with', highlight: 'Leather Seats' },
  { text: 'SUV under 35K with', highlight: 'All Wheel Drive' },
]

const quickFilters = ['Off-road', 'Eco-friendly', 'High safety rating', 'Near me']

export type SearchHeroProps = {
  searchQuery: string
  onSearchChange: (query: string) => void
  onSearch: () => void
  onBlurOverlayChange?: (showOverlay: boolean) => void
}

export function SearchHero({
  searchQuery,
  onSearchChange,
  onSearch,
  onBlurOverlayChange,
}: SearchHeroProps) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const closeSuggestions = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setShowSuggestions(false)
      setIsAnimating(false)
      onBlurOverlayChange?.(false)
    }, 200)
  }

  const openSuggestions = () => {
    setIsAnimating(true)
    setShowSuggestions(true)
    onBlurOverlayChange?.(true)
    setTimeout(() => setIsAnimating(false), 50)
  }

  const isSearchOpen = showSuggestions && !isAnimating

  return (
    <>
      {/* Blur Overlay for Search */}
      {showSuggestions && (
        <div
          className={`fixed inset-0 z-30 bg-white/80 backdrop-blur-[2px] transition-opacity duration-500 ease-in-out ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeSuggestions}
        />
      )}

      <section
        className={`bg-gray-100 px-4 pt-12 pb-6 sm:px-6 lg:px-8 ${showSuggestions ? 'relative z-40' : ''}`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
            {/* Title */}
            <div>
              <h1 className='mb-1 font-bold text-3xl text-black sm:text-4xl'>FIND YOUR NEXT CAR</h1>
              <p className="text-gray-500 text-sm">1,784,503 Vehicles Available</p>
            </div>

            {/* Search Bar */}
            <div className={`relative max-w-[50rem] flex-1 ${showSuggestions ? 'z-50' : ''}`}>
              <div className="relative">
                {/* Input */}
                <div
                  className={`border border-gray-300 bg-white shadow-sm transition-all duration-500 ${
                    isSearchOpen ? 'rounded-t-[2rem] border-b-0' : 'rounded-[2rem]'
                  }`}
                >
                  <div className="flex items-center px-4 py-3">
                    <SparkleIcon className='mr-2 flex-shrink-0 text-red-500' />
                    <input
                      className='flex-1 bg-transparent text-gray-700 outline-none'
                      onChange={(e) => onSearchChange(e.target.value)}
                      onFocus={openSuggestions}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          closeSuggestions()
                          onSearch()
                        }
                      }}
                      placeholder="Search for cars..."
                      type="text"
                      value={searchQuery}
                    />
                    <MicIcon className='mx-2 cursor-pointer text-gray-400 hover:text-gray-600' />
                    <button
                      className='rounded-full bg-red-500 px-6 py-2 font-medium text-white transition-colors hover:bg-red-600'
                      onClick={() => {
                        closeSuggestions()
                        onSearch()
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>

                {/* Suggestions Dropdown */}
                {showSuggestions && (
                  <div
                    className={`absolute top-full right-0 left-0 z-50 origin-top overflow-hidden rounded-b-[2rem] border border-gray-300 border-t-0 bg-white shadow-lg transition-all duration-500 ease-out ${
                      isAnimating
                        ? '-translate-y-1 scale-y-95 opacity-0'
                        : 'translate-y-0 scale-y-100 opacity-100'
                    }`}
                  >
                    <div className='border-gray-200 border-t' />
                    {searchSuggestions.map((suggestion, idx) => (
                      <button
                        className={`flex w-full items-center gap-2 border-gray-100 border-b px-4 py-3 text-left transition-opacity duration-500 last:border-b-0 hover:bg-gray-50 ${
                          isAnimating ? 'opacity-0' : 'opacity-100'
                        }`}
                        key={idx}
                        onClick={() => {
                          onSearchChange(`${suggestion.text} ${suggestion.highlight}`)
                          closeSuggestions()
                          onSearch()
                        }}
                        style={{ transitionDelay: isAnimating ? '0ms' : `${idx * 50}ms` }}
                      >
                        <span className="text-gray-500">{suggestion.text}</span>
                        <span className="font-semibold text-black">{suggestion.highlight}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Filter Pills */}
              <div className='mt-4 flex flex-wrap justify-end gap-2'>
                {quickFilters.map((pill) => (
                  <button
                    className='rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm transition-colors hover:bg-gray-50'
                    key={pill}
                  >
                    {pill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
