"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import { useMemo } from "react";

import ActionButton from "@/components/ui/action-button";

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
  const visibleColumns = config.columns.slice(0, 4);

  const columnHelper = createColumnHelper<ResourceRow>();
  const columns = useMemo(
    () =>
      visibleColumns.map((col) =>
        columnHelper.accessor(col as keyof ResourceRow, {
          id: col,
          header: () => label(col),
          cell: (info) => display(info.getValue()),
        }),
      ),
    [visibleColumns, columnHelper],
  );

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="bg-card rounded-xl border p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold">{config.title}</h2>
          <p className="text-muted-foreground truncate text-xs">
            {config.description}
          </p>
        </div>
        <ActionButton asChild action="outline" size="sm">
          <Link href={`/admin/${config.key}`}>Open</Link>
        </ActionButton>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] overflow-hidden rounded-md text-sm">
          <thead className="text-muted-foreground bg-muted/10 dark:bg-popover border-b text-xs">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-3 py-3 text-left text-xs font-semibold tracking-wide uppercase"
                  >
                    {header.isPlaceholder ? null : (
                      <div className="text-muted-foreground">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  className="text-muted-foreground px-3 py-6 text-center"
                  colSpan={visibleColumns.length}
                >
                  Loading...
                </td>
              </tr>
            ) : failed ? (
              <tr>
                <td
                  className="text-muted-foreground px-3 py-6 text-center"
                  colSpan={visibleColumns.length}
                >
                  Could not load
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td
                  className="text-muted-foreground px-3 py-6 text-center"
                  colSpan={visibleColumns.length}
                >
                  No records
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-muted/5 even:bg-muted/50 last:border-0 odd:bg-transparent"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="max-w-48 truncate px-3 py-3 align-top"
                    >
                      <div className="text-card-foreground text-sm">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
