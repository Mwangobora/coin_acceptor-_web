"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-dvh items-center justify-center px-4">
          <section className="max-w-md rounded-xl border p-6">
            <h1 className="text-xl font-semibold">Application error</h1>
            <p className="mt-2 text-sm">
              The admin interface could not recover automatically.
            </p>
            <Button type="button" className="mt-4" onClick={reset}>
              Try again
            </Button>
          </section>
        </main>
      </body>
    </html>
  );
}
