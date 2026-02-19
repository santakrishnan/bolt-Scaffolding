'use client'

export default function UsedCarsError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-bold text-3xl">Something went wrong</h1>
      <p className="max-w-md text-muted-foreground">
        We couldn&apos;t load the vehicle information. Please try again.
      </p>
      <button
        className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
        onClick={() => reset()}
        type="button"
      >
        Try again
      </button>
    </main>
  )
}
