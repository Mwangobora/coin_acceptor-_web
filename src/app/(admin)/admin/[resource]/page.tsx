import { notFound } from "next/navigation";

import { ResourcePage } from "@/features/admin/components/resource-page";
import { resourceMap } from "@/features/admin/config/resources";

export default async function AdminResourcePage({
  params,
}: {
  params: Promise<{ resource: string }>;
}) {
  const { resource } = await params;
  const config = resourceMap[resource];
  if (!config) notFound();
  return <ResourcePage config={config} />;
}
