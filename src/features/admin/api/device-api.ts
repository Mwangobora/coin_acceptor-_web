import { apiClient } from "@/lib/api/api-client";

type DeviceInput = {
  apiKey: string;
  path: string;
  method?: "get" | "post";
  body?: unknown;
};

export async function deviceRequest<T = unknown>({
  apiKey,
  path,
  method = "get",
  body,
}: DeviceInput) {
  const { data } = await apiClient.request<T>({
    url: path,
    method,
    data: body,
    headers: { Authorization: `DeviceApiKey ${apiKey}` },
  });
  return data;
}
