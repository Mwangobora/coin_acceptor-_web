"use client";

import { formatDateTime } from "@/lib/formatters/date-time";

import type { ResourceRow } from "../types/resource";

export function ResourceDetail({ row }: { row: ResourceRow }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {Object.entries(row).map(([key, value]) => (
        <div key={key} className="rounded-md border p-3">
          <dt className="text-muted-foreground text-xs font-medium">
            {label(key)}
          </dt>
          <dd className="mt-1 text-sm break-words">{display(value)}</dd>
        </div>
      ))}
    </dl>
  );
}

export function display(value: unknown) {
  if (value === null || value === undefined || value === "") return "None";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (typeof value === "object") return JSON.stringify(value);
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return formatDateTime(value);
  }
  return String(value);
}

export function label(key: string) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
}
