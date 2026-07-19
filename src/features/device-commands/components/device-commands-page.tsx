"use client";

import { ResourcePage } from "@/features/admin/components/resource-page";
import { resourceMap } from "@/features/admin/config/resources";

export function DeviceCommandsPage() {
  return <ResourcePage config={resourceMap["device-commands"]} />;
}
