"use client";

import { resourceMap } from "@/features/admin/config/resources";
import {
  useCreateResource,
  useResourceList,
  useUpdateResource,
} from "@/features/admin/hooks/use-resource";

export function useStations(page: number, search: string) {
  return useResourceList(resourceMap.stations, page, search);
}

export function useCreateStation() {
  return useCreateResource(resourceMap.stations);
}

export function useUpdateStation() {
  return useUpdateResource(resourceMap.stations);
}
