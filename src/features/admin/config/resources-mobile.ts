import { Activity, Waves } from "lucide-react";

import type { ResourceConfig } from "../types/resource";

export const mobileResources: ResourceConfig[] = [
  {
    key: "device-events",
    title: "Device Events",
    description: "Inspect embedded-device event ingestion records.",
    path: "/device-events",
    icon: Activity,
    columns: [
      "eventType",
      "eventCategory",
      "deviceId",
      "processingStatus",
      "receivedAt",
    ],
  },
  {
    key: "device-telemetry",
    title: "Device Telemetry",
    description: "Review latest telemetry reported by devices.",
    path: "/device-telemetry",
    icon: Waves,
    columns: [
      "deviceId",
      "powerSource",
      "batteryPercentage",
      "temperatureCelsius",
      "createdAt",
    ],
  },
];
