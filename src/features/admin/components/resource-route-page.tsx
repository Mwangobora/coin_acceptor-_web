"use client";

import { ResourcePage } from "@/features/admin/components/resource-page";
import { resourceMap } from "@/features/admin/config/resources";

export function ResourceRoutePage({ resource }: { resource: string }) {
  return <ResourcePage config={resourceMap[resource]} />;
}
