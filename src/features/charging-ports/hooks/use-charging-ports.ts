"use client";

import { resourceMap } from "@/features/admin/config/resources";
import {
  useCreateResource,
  useResourceList,
  useUpdateResource,
} from "@/features/admin/hooks/use-resource";

const config = resourceMap["charging-ports"];

export function useChargingPorts(page: number) {
  return useResourceList(config, page, "");
}

export function useCreateChargingPort() {
  return useCreateResource(config);
}

export function useUpdateChargingPort() {
  return useUpdateResource(config);
}
