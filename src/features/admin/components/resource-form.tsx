"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import type { FormField, ResourceRow } from "../types/resource";
import { FieldControl } from "./form-control";

type Props = {
  fields: FormField[];
  initial?: ResourceRow;
  submitLabel: string;
  busy?: boolean;
  onSubmit: (value: ResourceRow) => void;
};

export function ResourceForm({
  fields,
  initial,
  submitLabel,
  busy,
  onSubmit,
}: Props) {
  const [value, setValue] = useState<ResourceRow>(() => initial ?? {});
  const setField = (name: string, next: unknown) =>
    setValue((current) => ({ ...current, [name]: next }));

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(parsePayload(fields, value));
      }}
    >
      {fields.map((field) => (
        <label key={field.name} className="grid gap-2 text-sm font-medium">
          {field.label}
          <FieldControl
            field={field}
            value={value[field.name]}
            onChange={setField}
          />
        </label>
      ))}
      <Button disabled={busy}>{busy ? "Saving..." : submitLabel}</Button>
    </form>
  );
}

function parsePayload(fields: FormField[], value: ResourceRow) {
  return Object.fromEntries(
    fields
      .map((field) => [field.name, parseField(field, value[field.name])])
      .filter(([, item]) => item !== ""),
  );
}

function parseField(field: FormField, value: unknown) {
  if (field.kind === "number") return Number(value);
  if (field.kind === "json" && typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return {};
    }
  }
  return value;
}
