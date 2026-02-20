'use client'
import { useState } from 'react'

export function ImageGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handlePrev = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div>
      {/* Main Image Container */}
      <div
        style={{
          position: 'relative',
          borderRadius: 16,
          backgroundColor: '#F5F5F7', // Light gray background
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          height: 400, // Adjusted height slightly to match aspect ratio
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          alt={images[selectedIndex].alt}
          draggable={false}
          src={images[selectedIndex].src}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />

        {/* Left Arrow */}
        <button
          aria-label="Previous image"
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'white',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <svg
            fill="none"
            height="24"
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          aria-label="Next image"
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'white',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <svg
            fill="none"
            height="24"
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Image Count Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            backgroundColor: 'rgba(220, 220, 220, 0.8)', // Semi-transparent gray
            padding: '6px 12px',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 14,
            fontWeight: 500,
            color: '#333',
            backdropFilter: 'blur(4px)',
          }}
        >
          <svg
            fill="none"
            height="16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="16"
          >
            <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span>{images.length} Images</span>
        </div>
      </div>

      {/* Thumbnails */}
      <div
        style={{
          marginTop: 24,
          display: 'flex',
          gap: 12,
          overflowX: 'auto',
          paddingLeft: 4,
          paddingRight: 4,
          paddingBottom: 4, // Added padding for focus rings/shadows
        }}
      >
        {images.map((img, idx) => (
          <button
            aria-label={`Select image ${idx + 1}`}
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            style={{
              flexShrink: 0,
              borderRadius: 8,
              // Using the Toyota Red (#EB0A1E or similar) for the active state
              border: selectedIndex === idx ? '2px solid #E60023' : '2px solid transparent',
              padding: 2, // Reduced padding to match tight fit in screenshot
              backgroundColor: '#fff',
              width: 80,
              height: 60, // Adjusted aspect ratio to match screenshot
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            <img
              alt={img.alt || `Thumbnail ${idx + 1}`}
              draggable={false}
              src={img.src}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Changed to cover for thumbnails
                borderRadius: 6,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
