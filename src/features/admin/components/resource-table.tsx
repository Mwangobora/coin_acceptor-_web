"use client";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useMemo, useState } from "react";

import type { ResourceRow, RowAction } from "../types/resource";
import { display, label } from "./resource-detail";
import { TableActions } from "./table-actions";

type Props = {
  rows: ResourceRow[];
  columns: string[];
  onView: (row: ResourceRow) => void;
  onEdit?: (row: ResourceRow) => void;
  actions?: RowAction[];
  onAction?: (row: ResourceRow, action: RowAction) => void;
};

export function ResourceTable({
  rows,
  columns,
  onView,
  onEdit,
  actions,
  onAction,
}: Props) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const tableColumns = useMemo(
    () =>
      columns.map((key) => ({
        accessorKey: key,
        header: () => <Header labelText={label(key)} />,
        cell: ({ getValue }: { getValue: () => unknown }) => (
          <span className="line-clamp-2">{display(getValue())}</span>
        ),
      })),
    [columns],
  );
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: rows,
    columns: tableColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-muted">
            {table.getHeaderGroups().map((group) => (
              <tr key={group.id}>
                {group.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-3 py-3 text-left font-medium"
                  >
                    <button
                      className="flex cursor-pointer items-center gap-2"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </button>
                  </th>
                ))}
                <th className="px-3 py-3 text-right font-medium">Actions</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="max-w-56 px-3 py-3 align-top">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="px-3 py-3 text-right">
                  <TableActions
                    row={row.original}
                    actions={actions}
                    onView={onView}
                    onEdit={onEdit}
                    onAction={onAction}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Header({ labelText }: { labelText: string }) {
  return (
    <>
      {labelText}
      <ArrowUpDown size={14} aria-hidden="true" />
    </>
  );
}
