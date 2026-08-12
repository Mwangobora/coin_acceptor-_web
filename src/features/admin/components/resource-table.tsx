"use client";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

import { DataTableContainer } from "@/components/shared";

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
    <DataTableContainer>
      <table className="w-full min-w-[760px] text-sm">
        <thead className="text-muted-foreground bg-muted/40 border-b text-xs">
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id}>
              {group.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-3 py-3 text-left font-semibold tracking-wide uppercase"
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
              <th className="px-3 py-3 text-right font-semibold tracking-wide uppercase">
                Actions
              </th>
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <motion.tr
              key={row.id}
              className="hover:bg-muted/40 border-t"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: Math.min(index, 8) * 0.03 }}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="text-card-foreground max-w-56 px-3 py-3 align-top"
                >
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
            </motion.tr>
          ))}
        </tbody>
      </table>
    </DataTableContainer>
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
