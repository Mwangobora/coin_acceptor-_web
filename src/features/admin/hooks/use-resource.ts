"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { getApiErrorMessage } from "@/lib/api/api-error";

import * as api from "../api/admin-api";
import type { ResourceConfig, ResourceRow } from "../types/resource";

export function useResourceList(
  config: ResourceConfig,
  page: number,
  search: string,
) {
  return useQuery({
    queryKey: [
      "resource",
      config.key,
      config.path,
      config.searchParam,
      page,
      search,
    ],
    queryFn: () =>
      api.listResource(config.path, {
        page,
        pageSize: 10,
        search,
        searchParam: config.searchParam,
      }),
  });
}

export function useCreateResource(config: ResourceConfig) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: ResourceRow) =>
      api.createResource(
        config.createPath?.(body) ?? config.path,
        omitFields(body, config.omitOnCreate),
      ),
    onSuccess: () => {
      toast.success(`${config.title} created`);
      void queryClient.invalidateQueries({
        queryKey: ["resource", config.key],
      });
    },
    onError: (error) => toast.error(getApiErrorMessage(error)),
  });
}

function omitFields(body: ResourceRow, fields?: string[]) {
  if (!fields?.length) return body;
  return Object.fromEntries(
    Object.entries(body).filter(([key]) => !fields.includes(key)),
  );
}

export function useUpdateResource(config: ResourceConfig) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }: { id: string; body: ResourceRow }) =>
      api.updateResource(config.path, id, body),
    onSuccess: () => {
      toast.success(`${config.title} updated`);
      void queryClient.invalidateQueries({
        queryKey: ["resource", config.key],
      });
    },
    onError: (error) => toast.error(getApiErrorMessage(error)),
  });
}

export function useRunResourceAction(config: ResourceConfig) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: {
      path: string;
      method: "post" | "patch" | "put" | "delete";
      body?: ResourceRow;
    }) => api.runAction(input.path, input.method, input.body),
    onSuccess: () => {
      toast.success("Action completed");
      void queryClient.invalidateQueries({
        queryKey: ["resource", config.key],
      });
    },
    onError: (error) => toast.error(getApiErrorMessage(error)),
  });
}
