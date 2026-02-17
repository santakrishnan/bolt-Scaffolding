import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { CartProvider } from '@/components/providers/cart-provider'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Arrow - Modern E-commerce',
  description: 'Built with Next.js 15 and React 19',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CartProvider>
            {children}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
