import {
  createResource,
  listResource,
  updateResource,
} from "@/features/admin/api/admin-api";
import type { ResourceRow } from "@/features/admin/types/resource";

import type { ChargingPort } from "../types/charging-ports.types";

export function listChargingPorts(page = 1) {
  return listResource<ChargingPort>("/charging-ports", { page, pageSize: 10 });
}

export function createChargingPort(lockerId: string, body: ResourceRow) {
  return createResource(`/lockers/${lockerId}/charging-ports`, body);
}

export function updateChargingPort(id: string, body: ResourceRow) {
  return updateResource("/charging-ports", id, body);
}
