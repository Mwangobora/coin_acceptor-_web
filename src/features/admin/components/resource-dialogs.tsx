"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { FormField, ResourceRow } from "../types/resource";
import { ResourceDetail } from "./resource-detail";
import { ResourceForm } from "./resource-form";

export function RecordDialog({
  title,
  row,
  onOpenChange,
}: {
  title: string;
  row: ResourceRow | null;
  onOpenChange: () => void;
}) {
  return (
    <Dialog open={Boolean(row)} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Full record details</DialogDescription>
        </DialogHeader>
        {row ? <ResourceDetail row={row} /> : null}
      </DialogContent>
    </Dialog>
  );
}

export function FormDialog({
  title,
  open,
  fields,
  initial,
  busy,
  onOpenChange,
  onSubmit,
}: {
  title: string;
  open: boolean;
  fields?: FormField[];
  initial?: ResourceRow;
  busy?: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (body: ResourceRow) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Complete the form and save.</DialogDescription>
        </DialogHeader>
        {fields ? (
          <ResourceForm
            fields={fields}
            initial={initial}
            busy={busy}
            submitLabel="Save"
            onSubmit={onSubmit}
          />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
