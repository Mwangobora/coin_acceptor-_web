"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { ResourceConfig, ResourceRow } from "../types/resource";
import { display, label } from "./resource-detail";

export function DashboardMiniTable({
  config,
  rows,
  loading,
  failed,
}: {
  config: ResourceConfig;
  rows: ResourceRow[];
  loading: boolean;
  failed: boolean;
}) {
  const columns = config.columns.slice(0, 4);
  return (
    <section className="bg-card rounded-lg border p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold">{config.title}</h2>
          <p className="text-muted-foreground truncate text-xs">
            {config.description}
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href={`/admin/${config.key}`}>Open</Link>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-sm">
          <thead className="text-muted-foreground border-b text-xs">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-2 py-2 text-left font-medium">
                  {label(column)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{content(rows, columns, loading, failed)}</tbody>
        </table>
      </div>
    </section>
  );
}

function content(
  rows: ResourceRow[],
  columns: string[],
  loading: boolean,
  failed: boolean,
) {
  if (loading) return <StateRow columns={columns.length} text="Loading..." />;
  if (failed)
    return <StateRow columns={columns.length} text="Could not load" />;
  if (rows.length === 0)
    return <StateRow columns={columns.length} text="No records" />;
  return rows.map((row) => (
    <tr
      key={String(row.id ?? JSON.stringify(row))}
      className="border-b last:border-0"
    >
      {columns.map((column) => (
        <td key={column} className="max-w-48 truncate px-2 py-2">
          {display(row[column])}
        </td>
      ))}
    </tr>
  ));
}

function StateRow({ columns, text }: { columns: number; text: string }) {
  return (
    <tr>
      <td
        className="text-muted-foreground px-2 py-6 text-center"
        colSpan={columns}
      >
        {text}
      </td>
    </tr>
  );
}
