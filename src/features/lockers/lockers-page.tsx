"use client";

import { ResourcePage } from "@/features/admin/components/resource-page";
import { resourceMap } from "@/features/admin/config/resources";

export function LockersPage() {
  return <ResourcePage config={resourceMap.lockers} />;
}
