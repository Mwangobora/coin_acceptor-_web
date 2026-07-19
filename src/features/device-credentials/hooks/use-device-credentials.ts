"use client";

import { resourceMap } from "@/features/admin/config/resources";
import {
  useCreateResource,
  useResourceList,
  useRunResourceAction,
} from "@/features/admin/hooks/use-resource";

const config = resourceMap["device-credentials"];

export function useDeviceCredentials(page: number) {
  return useResourceList(config, page, "");
}

export function useCreateDeviceCredential() {
  return useCreateResource(config);
}

export function useDeviceCredentialAction() {
  return useRunResourceAction(config);
}
