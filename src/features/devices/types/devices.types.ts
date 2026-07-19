import type { ResourceRow } from "@/features/admin/types/resource";

export type Device = ResourceRow & {
  deviceCode?: string;
  name?: string;
  lifecycleStatus?: string;
  connectivityStatus?: string;
};
