import {
  Activity,
  BatteryCharging,
  CreditCard,
  KeyRound,
  LockKeyhole,
  MapPin,
  PlugZap,
  RadioTower,
  ScrollText,
  ShieldCheck,
  Users,
  Waves,
} from "lucide-react";

import { resourceMap } from "./resources";

const keys = [
  "stations",
  "devices",
  "lockers",
  "charging-ports",
  "device-credentials",
  "device-commands",
  "device-events",
  "device-telemetry",
  "payments",
  "users",
  "roles",
  "permissions",
  "audit-logs",
];

export const dashboardSections = keys
  .map((key) => resourceMap[key])
  .filter(Boolean);

export const metricSections = [
  { key: "stations", label: "Stations", icon: MapPin },
  { key: "devices", label: "Devices", icon: BatteryCharging },
  { key: "lockers", label: "Lockers", icon: LockKeyhole },
  { key: "charging-ports", label: "Ports", icon: PlugZap },
  { key: "device-credentials", label: "Credentials", icon: KeyRound },
  { key: "device-commands", label: "Commands", icon: RadioTower },
  { key: "device-events", label: "Events", icon: Activity },
  { key: "device-telemetry", label: "Telemetry", icon: Waves },
  { key: "payments", label: "Payments", icon: CreditCard },
  { key: "users", label: "Users", icon: Users },
  { key: "roles", label: "Roles", icon: ShieldCheck },
  { key: "audit-logs", label: "Audit Logs", icon: ScrollText },
];
