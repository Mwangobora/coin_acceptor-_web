import { createResource, listResource } from "@/features/admin/api/admin-api";
import type { ResourceRow } from "@/features/admin/types/resource";

import type { DeviceCredential } from "../types/device-credentials.types";

export function listDeviceCredentials(page = 1) {
  return listResource<DeviceCredential>("/device-credentials", {
    page,
    pageSize: 10,
  });
}

export function createDeviceCredential(deviceId: string, body: ResourceRow) {
  return createResource(`/devices/${deviceId}/credentials`, body);
}
