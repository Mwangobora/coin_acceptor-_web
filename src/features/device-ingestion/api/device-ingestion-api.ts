import { listResource } from "@/features/admin/api/admin-api";
import type { ResourceRow } from "@/features/admin/types/resource";
import { apiClient } from "@/lib/api/api-client";

import type {
  DeviceEvent,
  DeviceTelemetry,
} from "../types/device-ingestion.types";

export function listDeviceEvents(page = 1) {
  return listResource<DeviceEvent>("/device-events", { page, pageSize: 10 });
}

export function listDeviceTelemetry(page = 1) {
  return listResource<DeviceTelemetry>("/device-telemetry", {
    page,
    pageSize: 10,
  });
}

export async function ingestDeviceEvent(apiKey: string, body: ResourceRow) {
  const { data } = await apiClient.post("/device-ingestion/events", body, {
    headers: { Authorization: `DeviceApiKey ${apiKey}` },
  });
  return data;
}
