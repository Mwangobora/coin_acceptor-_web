import type { ResourceRow } from "@/features/admin/types/resource";

export type DeviceCredential = ResourceRow & {
  keyId?: string;
  deviceId?: string;
  credentialType?: string;
  status?: string;
};
