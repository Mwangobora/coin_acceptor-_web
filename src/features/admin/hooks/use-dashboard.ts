"use client";

import { useQueries } from "@tanstack/react-query";

import { listResource } from "../api/admin-api";
import { dashboardSections } from "../config/dashboard-sections";
import type { ResourceConfig, ResourceRow } from "../types/resource";

export type DashboardResult = {
  config: ResourceConfig;
  items: ResourceRow[];
  total: number;
  isLoading: boolean;
  isError: boolean;
};

export function useDashboardData() {
  const queries = useQueries({
    queries: dashboardSections.map((config) => ({
      queryKey: ["dashboard", config.key, config.path],
      queryFn: () => listResource(config.path, { page: 1, pageSize: 5 }),
      staleTime: 30_000,
    })),
  });

  return queries.map((query, index): DashboardResult => {
    const data = query.data;
    return {
      config: dashboardSections[index],
      items: data?.items ?? [],
      total: data?.pagination.totalItems ?? 0,
      isLoading: query.isLoading,
      isError: query.isError,
    };
  });
}
