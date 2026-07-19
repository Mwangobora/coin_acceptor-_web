"use client";

import { Button } from "@/components/ui/button";

import type { ResourceRow, RowAction } from "../types/resource";

export function TableActions({
  row,
  actions,
  onView,
  onEdit,
  onAction,
}: {
  row: ResourceRow;
  actions?: RowAction[];
  onView: (row: ResourceRow) => void;
  onEdit?: (row: ResourceRow) => void;
  onAction?: (row: ResourceRow, action: RowAction) => void;
}) {
  return (
    <div className="flex justify-end gap-1">
      <Button size="sm" variant="outline" onClick={() => onView(row)}>
        Details
      </Button>
      {onEdit ? (
        <Button size="sm" variant="ghost" onClick={() => onEdit(row)}>
          Edit
        </Button>
      ) : null}
      {actions?.map((action) => (
        <Button
          key={action.label}
          size="sm"
          variant="ghost"
          onClick={() => onAction?.(row, action)}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}
