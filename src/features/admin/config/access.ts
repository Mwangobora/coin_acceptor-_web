import type { FormField } from "../types/resource";

export const roleFields: FormField[] = [
  { name: "name", label: "Name", required: true },
  { name: "description", label: "Description", kind: "textarea" },
];

export const roleUpdateFields: FormField[] = [
  { name: "name", label: "Name", required: true },
  { name: "description", label: "Description", kind: "textarea" },
];

export const roleAssignmentFields: FormField[] = [
  { name: "roleId", label: "Role ID", required: true },
  { name: "stationId", label: "Station ID" },
  { name: "expiresAt", label: "Expires at" },
];

export const passwordField: FormField[] = [
  { name: "temporaryPassword", label: "Temporary password", required: true },
];
