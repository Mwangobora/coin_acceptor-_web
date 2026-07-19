import axios from "axios";

import { env } from "@/lib/env";

import { normalizeApiError } from "./api-error";

export const API_TIMEOUT = 15_000;

export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  timeout: API_TIMEOUT,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(normalizeApiError(error)),
);
