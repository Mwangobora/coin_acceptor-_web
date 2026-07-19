"use client";

import { resourceMap } from "@/features/admin/config/resources";
import {
  useResourceList,
  useRunResourceAction,
} from "@/features/admin/hooks/use-resource";

export function usePayments(page: number, search: string) {
  return useResourceList(resourceMap.payments, page, search);
}

export function usePaymentAction() {
  return useRunResourceAction(resourceMap.payments);
}
