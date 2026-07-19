import { apiClient } from "@/lib/api/api-client";

import type { PaginatedResponse, ResourceRow } from "../types/resource";

export type ListParams = {
  page?: number;
  pageSize?: number;
  search?: string;
  searchParam?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export async function listResource<T extends ResourceRow>(
  path: string,
  params: ListParams,
) {
  const query = {
    page: params.page,
    pageSize: params.pageSize,
    sortBy: params.sortBy,
    sortOrder: params.sortOrder,
    ...(params.search && params.searchParam
      ? { [params.searchParam]: params.search }
      : {}),
  };
  const { data } = await apiClient.get<PaginatedResponse<T>>(path, {
    params: query,
  });
  return data;
}

export async function createResource(path: string, body: ResourceRow) {
  const { data } = await apiClient.post<ResourceRow>(path, body);
  return data;
}

export async function updateResource(
  path: string,
  id: string,
  body: ResourceRow,
) {
  const { data } = await apiClient.patch<ResourceRow>(`${path}/${id}`, body);
  return data;
}

export async function runAction(
  path: string,
  method: "post" | "patch" | "put" | "delete",
  body?: ResourceRow,
) {
  const { data } = await apiClient.request<ResourceRow>({
    url: path,
    method,
    data: body,
  });
  return data;
}
