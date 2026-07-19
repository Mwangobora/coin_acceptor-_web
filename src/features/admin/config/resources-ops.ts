import { KeyRound, LockKeyhole, PlugZap, RadioTower } from "lucide-react";

import type { ResourceConfig } from "../types/resource";
import {
  commandFields,
  credentialFields,
  lockerFields,
  portFields,
} from "./operations";

export const opsResources: ResourceConfig[] = [
  {
    key: "device-credentials",
    title: "Device Credentials",
    description: "Issue, rotate, and revoke embedded-device credentials.",
    path: "/device-credentials",
    createPath: (body) => `/devices/${body.deviceId}/credentials`,
    omitOnCreate: ["deviceId"],
    icon: KeyRound,
    columns: ["keyId", "deviceId", "credentialType", "status", "lastUsedAt"],
    createFields: [
      { name: "deviceId", label: "Device ID", required: true },
      ...credentialFields,
    ],
    rowActions: [
      {
        label: "Rotate",
        path: (row) => `/devices/${row.deviceId}/credentials/${row.id}/rotate`,
        fields: [{ name: "reason", label: "Reason" }],
      },
      {
        label: "Revoke",
        path: (row) => `/devices/${row.deviceId}/credentials/${row.id}/revoke`,
        fields: [{ name: "reason", label: "Reason", required: true }],
      },
    ],
  },
  {
    key: "lockers",
    title: "Lockers",
    description: "Manage cabinet lockers and operational availability.",
    path: "/lockers",
    createPath: (body) => `/devices/${body.deviceId}/lockers`,
    omitOnCreate: ["deviceId"],
    icon: LockKeyhole,
    columns: [
      "lockerNumber",
      "label",
      "availabilityStatus",
      "doorStatus",
      "lockStatus",
    ],
    createFields: [
      { name: "deviceId", label: "Device ID", required: true },
      ...lockerFields,
    ],
    updateFields: lockerFields,
  },
  {
    key: "charging-ports",
    title: "Charging Ports",
    description: "Configure locker charging ports and power state.",
    path: "/charging-ports",
    createPath: (body) => `/lockers/${body.lockerId}/charging-ports`,
    omitOnCreate: ["lockerId"],
    icon: PlugZap,
    columns: [
      "portNumber",
      "portType",
      "status",
      "powerState",
      "maximumCurrentMa",
    ],
    createFields: [
      { name: "lockerId", label: "Locker ID", required: true },
      ...portFields,
    ],
    updateFields: portFields,
  },
  {
    key: "device-commands",
    title: "Device Commands",
    description:
      "Queue backend-to-device commands and inspect acknowledgements.",
    path: "/device-commands",
    createPath: (body) => `/devices/${body.deviceId}/commands`,
    omitOnCreate: ["deviceId"],
    icon: RadioTower,
    columns: ["commandType", "status", "deviceId", "requestedAt", "expiresAt"],
    createFields: [
      { name: "deviceId", label: "Device ID", required: true },
      ...commandFields,
    ],
  },
];
