export default function VdpLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        {/* Hero skeleton */}
        <div className="container mx-auto py-12 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 w-2/3 rounded bg-muted" />
            <div className="aspect-video w-full rounded-lg bg-muted" />
            <div className="flex gap-4">
              <div className="h-10 w-32 rounded bg-muted" />
              <div className="h-10 w-32 rounded bg-muted" />
            </div>
          </div>
        </div>

        {/* Tabs skeleton */}
        <div className="mb-12 w-full bg-muted py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-4">
              <div className="flex gap-4">
                <div className="h-10 w-28 rounded bg-background" />
                <div className="h-10 w-28 rounded bg-background" />
                <div className="h-10 w-28 rounded bg-background" />
              </div>
              <div className="h-48 w-full rounded bg-background" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
