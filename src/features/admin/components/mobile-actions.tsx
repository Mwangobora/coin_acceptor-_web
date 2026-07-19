"use client";

import { Button } from "@/components/ui/button";

export function MobileActions({
  busy,
  run,
  reference,
  payload,
}: {
  busy: boolean;
  reference: string;
  payload: string;
  run: (path: string, method: "get" | "post", body?: unknown) => void;
}) {
  const json = () => parseJson(payload);
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <Button
        disabled={busy}
        onClick={() => run("/device-ingestion/charging-packages", "get")}
      >
        Packages
      </Button>
      <Button
        disabled={busy}
        onClick={() => run("/device-ingestion/commands", "get")}
      >
        Commands
      </Button>
      <Button
        disabled={busy}
        onClick={() => run("/device-ingestion/events", "post", json())}
      >
        Ingest event
      </Button>
      <Button
        disabled={busy}
        onClick={() => run("/device-ingestion/payments", "post", json())}
      >
        Start payment
      </Button>
      <Button
        disabled={busy || !reference}
        onClick={() => run(`/device-ingestion/payments/${reference}`, "get")}
      >
        Payment status
      </Button>
      <Button
        disabled={busy || !reference}
        onClick={() =>
          run(`/device-ingestion/payments/${reference}/cancel`, "post", json())
        }
      >
        Cancel payment
      </Button>
    </div>
  );
}

function parseJson(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return {};
  }
}
