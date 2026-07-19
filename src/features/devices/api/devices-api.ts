import {
  createResource,
  listResource,
  updateResource,
} from "@/features/admin/api/admin-api";
import type { ResourceRow } from "@/features/admin/types/resource";

import type { Device } from "../types/devices.types";

const path = "/devices";

export function listDevices(page = 1, search = "") {
  return listResource<Device>(path, {
    page,
    pageSize: 10,
    search,
    searchParam: "search",
  });
}

export function createDevice(body: ResourceRow) {
  return createResource(path, body);
}

export function updateDevice(id: string, body: ResourceRow) {
  return updateResource(path, id, body);
}
