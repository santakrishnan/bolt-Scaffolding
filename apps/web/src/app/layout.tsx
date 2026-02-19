import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '~/components/layout/footer'
import { Header } from '~/components/layout/header'
import { CartProvider } from '~/components/providers/cart-provider'
import { ThemeProvider } from '~/components/providers/theme-provider'
import { toyotaType } from '~/lib/fonts'

export const metadata: Metadata = {
  title: 'Arrow - Modern E-commerce',
  description: 'Built with Next.js 15 and React 19',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={toyotaType.variable}>
      <body>
        <ThemeProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
