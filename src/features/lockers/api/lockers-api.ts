import {
  createResource,
  listResource,
  updateResource,
} from "@/features/admin/api/admin-api";
import type { ResourceRow } from "@/features/admin/types/resource";

import type { Locker } from "../types/lockers.types";

export function listLockers(page = 1) {
  return listResource<Locker>("/lockers", { page, pageSize: 10 });
}

export function createLocker(deviceId: string, body: ResourceRow) {
  return createResource(`/devices/${deviceId}/lockers`, body);
}

export function updateLocker(id: string, body: ResourceRow) {
  return updateResource("/lockers", id, body);
}
