"use client";

import { ErrorState } from "@/components/shared";
import ActionButton from "@/components/ui/action-button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-background flex min-h-dvh items-center justify-center px-4">
      <div className="grid max-w-md gap-4">
        <ErrorState description="Refresh the admin interface and try again." />
        <ActionButton type="button" onClick={reset}>
          Try again
        </ActionButton>
      </div>
    </main>
  );
}
