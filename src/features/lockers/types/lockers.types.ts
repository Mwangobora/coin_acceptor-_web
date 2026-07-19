import type { ResourceRow } from "@/features/admin/types/resource";

export type Locker = ResourceRow & {
  lockerNumber?: number;
  label?: string;
  availabilityStatus?: string;
  doorStatus?: string;
  lockStatus?: string;
};
