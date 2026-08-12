import { BatteryCharging, MapPin, Users } from "lucide-react";

import type { ResourceConfig } from "../types/resource";
import { passwordField } from "./access";
import {
  deviceFields,
  stationFields,
  statusOptions,
  userFields,
} from "./basic-fields";

export const coreResources: ResourceConfig[] = [
  {
    key: "stations",
    title: "Stations",
    description: "Register and maintain charging station locations.",
    path: "/stations",
    icon: MapPin,
    columns: ["code", "name", "region", "district", "status", "totalDevices"],
    searchParam: "search",
    createFields: stationFields,
    updateFields: stationFields,
    rowActions: [
      {
        label: "Set status",
        method: "patch",
        path: (row) => `/stations/${row.id}/status`,
        fields: [
          {
            name: "status",
            label: "Status",
            kind: "select",
            options: ["active", "inactive", "maintenance"],
          },
          { name: "reason", label: "Reason", kind: "textarea" },
        ],
      },
    ],
  },
  {
    key: "devices",
    title: "Devices",
    description: "Manage embedded device inventory and lifecycle.",
    path: "/devices",
    icon: BatteryCharging,
    columns: [
      "deviceCode",
      "name",
      "lifecycleStatus",
      "connectivityStatus",
      "lastSeenAt",
    ],
    searchParam: "search",
    createFields: deviceFields,
    updateFields: deviceFields.filter((field) => field.name !== "stationId"),
    rowActions: [
      {
        label: "Lifecycle",
        method: "patch",
        path: (row) => `/devices/${row.id}/lifecycle-status`,
        fields: [
          {
            name: "lifecycleStatus",
            label: "Lifecycle",
            kind: "select",
            options: ["active", "maintenance", "decommissioned"],
          },
          { name: "reason", label: "Reason", kind: "textarea" },
        ],
      },
    ],
  },
  {
    key: "users",
    title: "Users",
    description: "Create operators and manage access status.",
    path: "/users",
    icon: Users,
    columns: ["fullName", "email", "phoneNumber", "status", "lastLoginAt"],
    searchParam: "search",
    createFields: userFields,
    updateFields: userFields.filter(
      (field) => !["email", "temporaryPassword"].includes(field.name),
    ),
    rowActions: [
      {
        label: "Status",
        method: "patch",
        path: (row) => `/users/${row.id}/status`,
        fields: [
          {
            name: "status",
            label: "Status",
            kind: "select",
            options: statusOptions,
          },
        ],
      },
      {
        label: "Password",
        path: (row) => `/users/${row.id}/set-temporary-password`,
        fields: passwordField,
      },
    ],
  },
];
