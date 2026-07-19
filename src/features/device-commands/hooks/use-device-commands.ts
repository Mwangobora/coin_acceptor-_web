"use client";

import { resourceMap } from "@/features/admin/config/resources";
import {
  useCreateResource,
  useResourceList,
  useRunResourceAction,
} from "@/features/admin/hooks/use-resource";

const config = resourceMap["device-commands"];

export function useDeviceCommands(page: number) {
  return useResourceList(config, page, "");
}

export function useCreateDeviceCommand() {
  return useCreateResource(config);
}

export function useDeviceCommandAction() {
  return useRunResourceAction(config);
}
