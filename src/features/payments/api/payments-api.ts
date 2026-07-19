import { listResource, runAction } from "@/features/admin/api/admin-api";
import type { ResourceRow } from "@/features/admin/types/resource";

import type { Payment } from "../types/payments.types";

export function listPayments(page = 1, search = "") {
  return listResource<Payment>("/payments", {
    page,
    pageSize: 10,
    search,
    searchParam: "search",
  });
}

export function refundPayment(id: string, body: ResourceRow) {
  return runAction(`/payments/${id}/refund`, "post", body);
}
