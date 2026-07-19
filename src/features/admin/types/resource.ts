import type { LucideIcon } from "lucide-react";

export type PageMeta = {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export type PaginatedResponse<T> = {
  items: T[];
  pagination: PageMeta;
};

export type FieldKind = "text" | "number" | "select" | "textarea" | "json";

export type FormField = {
  name: string;
  label: string;
  kind?: FieldKind;
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

export type RowAction = {
  label: string;
  path: (row: ResourceRow) => string;
  method?: "post" | "patch" | "put" | "delete";
  fields?: FormField[];
};

export type ResourceRow = Record<string, unknown> & { id?: string };

export type ResourceConfig = {
  key: string;
  title: string;
  description: string;
  path: string;
  createPath?: (body: ResourceRow) => string;
  omitOnCreate?: string[];
  icon: LucideIcon;
  columns: string[];
  createFields?: FormField[];
  updateFields?: FormField[];
  searchParam?: string;
  statusField?: string;
  rowActions?: RowAction[];
};
