"use client";

import { resourceMap } from "@/features/admin/config/resources";
import {
  useCreateResource,
  useResourceList,
  useUpdateResource,
} from "@/features/admin/hooks/use-resource";

export function useLockers(page: number) {
  return useResourceList(resourceMap.lockers, page, "");
}

export function useCreateLocker() {
  return useCreateResource(resourceMap.lockers);
}

export function useUpdateLocker() {
  return useUpdateResource(resourceMap.lockers);
}
