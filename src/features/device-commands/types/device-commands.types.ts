import type { ResourceRow } from "@/features/admin/types/resource";

export type DeviceCommand = ResourceRow & {
  commandType?: string;
  status?: string;
  deviceId?: string;
  requestedAt?: string;
  expiresAt?: string;
};
