"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import type { FormField } from "../types/resource";

export function FieldControl({
  field,
  value,
  onChange,
}: {
  field: FormField;
  value: unknown;
  onChange: (name: string, value: unknown) => void;
}) {
  const textValue =
    typeof value === "string" || typeof value === "number" ? value : "";
  if (field.kind === "textarea" || field.kind === "json") {
    return (
      <Textarea
        required={field.required}
        placeholder={field.placeholder}
        value={field.kind === "json" ? jsonValue(value) : String(textValue)}
        onChange={(event) => onChange(field.name, event.target.value)}
      />
    );
  }
  if (field.kind === "select") {
    return (
      <select
        className="bg-background h-11 rounded-md border px-3 text-sm"
        required={field.required}
        value={String(textValue)}
        onChange={(event) => onChange(field.name, event.target.value)}
      >
        <option value="">Select...</option>
        {field.options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    );
  }
  return (
    <Input
      required={field.required}
      type={field.kind === "number" ? "number" : "text"}
      placeholder={field.placeholder}
      value={String(textValue)}
      onChange={(event) => onChange(field.name, event.target.value)}
    />
  );
}

function jsonValue(value: unknown) {
  if (typeof value === "string") return value;
  return value ? JSON.stringify(value, null, 2) : "{}";
}
