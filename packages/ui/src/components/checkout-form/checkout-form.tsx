'use client'

import { useState } from 'react'
import { Button } from 'ui/primitives/button'
import { Input } from 'ui/primitives/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'ui/primitives/card'

/**
 * CheckoutForm - Client Component
 * Handles checkout process
 */
export function CheckoutForm() {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    alert('Order placed successfully!')
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription>Enter your payment details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Cardholder Name
            </label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="card" className="text-sm font-medium">
              Card Number
            </label>
            <Input id="card" placeholder="1234 5678 9012 3456" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="expiry" className="text-sm font-medium">
                Expiry Date
              </label>
              <Input id="expiry" placeholder="MM/YY" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="cvc" className="text-sm font-medium">
                CVC
              </label>
              <Input id="cvc" placeholder="123" required />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Place Order'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
