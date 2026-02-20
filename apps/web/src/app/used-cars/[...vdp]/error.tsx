"use client";

import { Button } from "@tfs-ucmp/ui";
import { useEffect } from "react";

export default function VdpError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: replace with error reporting service (e.g. Sentry)
    console.error("VDP error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4 text-center">
        <h1 className="font-bold text-2xl">Unable to load vehicle details</h1>
        <p className="text-muted-foreground">
          {error.message ||
            "Something went wrong while loading this vehicle. Please try again."}
        </p>
        {error.digest && (
          <p className="font-mono text-muted-foreground text-sm">
            Error ID: {error.digest}
          </p>
        )}
        <Button onClick={() => reset()} size="lg">
          Try again
        </Button>
      </div>
    </div>
  );
}
