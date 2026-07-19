"use client";

import { resourceMap } from "@/features/admin/config/resources";
import { useResourceList } from "@/features/admin/hooks/use-resource";

export function useDeviceEvents(page: number) {
  return useResourceList(resourceMap["device-events"], page, "");
}

export function useDeviceTelemetry(page: number) {
  return useResourceList(resourceMap["device-telemetry"], page, "");
}
