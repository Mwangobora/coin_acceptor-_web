import type { ResourceRow } from "@/features/admin/types/resource";

export type ChargingPort = ResourceRow & {
  portNumber?: number;
  portType?: string;
  status?: string;
  powerState?: string;
};
