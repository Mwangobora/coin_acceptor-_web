import { apiClient } from "@/lib/api/api-client";

import type { DeviceRequestInput } from "../types/mobile.types";

export async function deviceRequest<T = unknown>({
  apiKey,
  path,
  method = "get",
  body,
}: DeviceRequestInput) {
  const { data } = await apiClient.request<T>({
    url: path,
    method,
    data: body,
    headers: { Authorization: `DeviceApiKey ${apiKey}` },
  });
  return data;
}
