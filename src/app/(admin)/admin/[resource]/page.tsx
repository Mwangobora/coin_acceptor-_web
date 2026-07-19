import { notFound } from "next/navigation";

import { ResourceRoutePage } from "@/features/admin/components/resource-route-page";
import { resourceMap } from "@/features/admin/config/resources";

export default async function AdminResourcePage({
  params,
}: {
  params: Promise<{ resource: string }>;
}) {
  const { resource } = await params;
  const config = resourceMap[resource];
  if (!config) notFound();
  return <ResourceRoutePage resource={resource} />;
}
