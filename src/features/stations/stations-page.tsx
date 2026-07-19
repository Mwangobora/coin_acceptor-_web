"use client";

import { ResourcePage } from "@/features/admin/components/resource-page";
import { resourceMap } from "@/features/admin/config/resources";

export function StationsPage() {
  return <ResourcePage config={resourceMap.stations} />;
}
