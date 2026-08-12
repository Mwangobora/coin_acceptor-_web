"use client";

import ActionButton from "@/components/ui/action-button";

import type { DeviceRequestMethod } from "../types/mobile.types";

type MobileActionsProps = {
  busy: boolean;
  reference: string;
  payload: string;
  run: (path: string, method: DeviceRequestMethod, body?: unknown) => void;
};

export function MobileActions({
  busy,
  run,
  reference,
  payload,
}: MobileActionsProps) {
  const json = () => parseJson(payload);
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <ActionButton
        disabled={busy}
        onClick={() => run("/device-ingestion/charging-packages", "get")}
      >
        Packages
      </ActionButton>
      <ActionButton
        disabled={busy}
        onClick={() => run("/device-ingestion/commands", "get")}
      >
        Commands
      </ActionButton>
      <ActionButton
        disabled={busy}
        onClick={() => run("/device-ingestion/events", "post", json())}
      >
        Ingest event
      </ActionButton>
      <ActionButton
        disabled={busy}
        onClick={() => run("/device-ingestion/payments", "post", json())}
      >
        Start payment
      </ActionButton>
      <ActionButton
        disabled={busy || !reference}
        onClick={() => run(`/device-ingestion/payments/${reference}`, "get")}
      >
        Payment status
      </ActionButton>
      <ActionButton
        disabled={busy || !reference}
        onClick={() =>
          run(`/device-ingestion/payments/${reference}/cancel`, "post", json())
        }
      >
        Cancel payment
      </ActionButton>
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
