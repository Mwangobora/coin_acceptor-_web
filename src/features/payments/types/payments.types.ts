import type { ResourceRow } from "@/features/admin/types/resource";

export type Payment = ResourceRow & {
  paymentReference?: string;
  paymentMethod?: string;
  status?: string;
  expectedAmountMinor?: string;
  receivedAmountMinor?: string;
};
