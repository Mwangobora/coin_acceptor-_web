import type { ResourceRow } from "@/features/admin/types/resource";

export type Station = ResourceRow & {
  code?: string;
  name?: string;
  region?: string;
  district?: string;
  status?: string;
};
