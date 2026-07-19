import { ScrollText, ShieldCheck, UserCog } from "lucide-react";

import type { ResourceConfig } from "../types/resource";
import { roleAssignmentFields, roleFields, roleUpdateFields } from "./access";

export const accessResources: ResourceConfig[] = [
  {
    key: "roles",
    title: "Roles",
    description: "Maintain access-control roles.",
    path: "/roles",
    icon: ShieldCheck,
    columns: ["code", "name", "status", "isSystemRole", "updatedAt"],
    searchParam: "search",
    createFields: roleFields,
    updateFields: roleUpdateFields,
  },
  {
    key: "permissions",
    title: "Permissions",
    description: "Inspect available backend permission codes.",
    path: "/permissions",
    icon: ShieldCheck,
    columns: ["code", "module", "action", "description"],
    searchParam: "search",
  },
  {
    key: "role-assignments",
    title: "Role Assignments",
    description: "Assign and revoke user roles by station scope.",
    path: "/role-assignments",
    createPath: (body) => `/users/${body.userId}/role-assignments`,
    omitOnCreate: ["userId"],
    icon: UserCog,
    columns: ["roleCode", "userId", "stationId", "assignedAt", "revokedAt"],
    createFields: [
      { name: "userId", label: "User ID", required: true },
      ...roleAssignmentFields,
    ],
    rowActions: [
      {
        label: "Revoke",
        path: (row) => `/users/${row.userId}/role-assignments/${row.id}/revoke`,
        fields: [{ name: "reason", label: "Reason", kind: "textarea" }],
      },
    ],
  },
  {
    key: "audit-logs",
    title: "Audit Logs",
    description: "Review security and operational audit trail.",
    path: "/audit-logs",
    icon: ScrollText,
    columns: ["action", "entityType", "actorType", "stationId", "occurredAt"],
  },
];
