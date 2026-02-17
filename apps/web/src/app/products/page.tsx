import { ProductCard } from 'ui'
import { SearchBar } from 'ui'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

// Mock product data
const products = [
  { id: '1', name: 'Premium Wireless Headphones', price: 299, image: '/products/headphones.jpg' },
  { id: '2', name: 'Smart Watch Pro', price: 399, image: '/products/watch.jpg' },
  { id: '3', name: 'Laptop Stand', price: 89, image: '/products/stand.jpg' },
  { id: '4', name: 'Mechanical Keyboard', price: 149, image: '/products/keyboard.jpg' },
  { id: '5', name: 'Ergonomic Mouse', price: 79, image: '/products/mouse.jpg' },
  { id: '6', name: 'USB-C Hub', price: 59, image: '/products/hub.jpg' },
]

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold">Products</h1>
            <SearchBar placeholder="Search products..." />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
