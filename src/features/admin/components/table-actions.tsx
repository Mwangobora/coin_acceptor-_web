"use client";

import ActionButton from "@/components/ui/action-button";

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
      <ActionButton size="sm" action="info" onClick={() => onView(row)}>
        Details
      </ActionButton>
      {onEdit ? (
        <ActionButton size="sm" action="edit" onClick={() => onEdit(row)}>
          Edit
        </ActionButton>
      ) : null}
      {actions?.map((action) => (
        <ActionButton
          key={action.label}
          size="sm"
          action="secondary"
          onClick={() => onAction?.(row, action)}
        >
          {action.label}
        </ActionButton>
      ))}
    </div>
  );
}
