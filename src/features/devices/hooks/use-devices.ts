"use client";

import { resourceMap } from "@/features/admin/config/resources";
import {
  useCreateResource,
  useResourceList,
  useUpdateResource,
} from "@/features/admin/hooks/use-resource";

export function useDevices(page: number, search: string) {
  return useResourceList(resourceMap.devices, page, search);
}

export function useCreateDevice() {
  return useCreateResource(resourceMap.devices);
}

export function useUpdateDevice() {
  return useUpdateResource(resourceMap.devices);
}
