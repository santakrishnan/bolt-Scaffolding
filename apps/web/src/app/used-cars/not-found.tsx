import Link from 'next/link'

/**
 * Not-found page for the /used-cars segment.
 * Rendered when `notFound()` is called from VDP or SRP pages.
 */
export default function UsedCarsNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-bold text-4xl">Vehicle Not Found</h1>
      <p className="max-w-md text-muted-foreground">
        The vehicle you&apos;re looking for doesn&apos;t exist or the URL is invalid. Please check
        the URL and try again.
      </p>
      <div className="flex gap-3">
        <Link
          className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
          href="/used-cars/search"
        >
          Search Used Cars
        </Link>
        <Link className="rounded-md border px-4 py-2 font-medium text-sm hover:bg-accent" href="/">
          Go Home
        </Link>
      </div>
    </main>
  )
}
