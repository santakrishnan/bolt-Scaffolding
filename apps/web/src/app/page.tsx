import { Button } from "@arrow-ecommerce/ui";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex max-w-4xl flex-col items-center gap-8 text-center">
        <h1 className="text-6xl font-bold tracking-tight">Arrow E-Commerce</h1>
        <p className="text-xl text-muted-foreground">
          Modern, production-ready e-commerce platform built with Next.js 16, Turborepo, and
          Tailwind CSS 4
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/used-cars/search">Browse Vehicles</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com" target="_blank">
              View on GitHub
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
