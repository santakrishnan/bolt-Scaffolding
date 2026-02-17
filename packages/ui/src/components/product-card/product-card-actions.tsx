'use client'

import { Button } from 'ui/primitives/button'
import { useCart } from '@/components/providers/cart-provider'

interface ProductCardActionsProps {
  productId: string
}

/**
 * ProductCardActions - Client Component
 * Handles interactive actions for product card
 */
export function ProductCardActions({ productId }: ProductCardActionsProps) {
  const { actions } = useCart()

  return (
    <div className="flex w-full gap-2">
      <Button 
        className="flex-1"
        onClick={() => actions.addToCart(productId)}
      >
        Add to Cart
      </Button>
      <Button variant="outline" size="icon">
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
          className="h-4 w-4"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </Button>
    </div>
  )
}
