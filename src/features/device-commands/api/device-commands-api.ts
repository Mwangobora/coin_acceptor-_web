import {
  createResource,
  listResource,
  runAction,
} from "@/features/admin/api/admin-api";
import type { ResourceRow } from "@/features/admin/types/resource";

import type { DeviceCommand } from "../types/device-commands.types";

export function listDeviceCommands(page = 1) {
  return listResource<DeviceCommand>("/device-commands", {
    page,
    pageSize: 10,
  });
}

export function createDeviceCommand(deviceId: string, body: ResourceRow) {
  return createResource(`/devices/${deviceId}/commands`, body);
}

export function cancelDeviceCommand(id: string, body: ResourceRow) {
  return runAction(`/device-commands/${id}/cancel`, "post", body);
}
