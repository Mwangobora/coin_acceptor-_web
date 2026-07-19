import { isAxiosError } from "axios";

export type ApiFieldErrors = Record<string, string[]>;

export type ApiError = {
  message: string;
  status?: number;
  code?: string;
  fieldErrors?: ApiFieldErrors;
  details?: unknown;
};

function readMessage(data: unknown) {
  if (typeof data === "object" && data && "message" in data) {
    const value = data.message;
    return typeof value === "string" ? value : undefined;
  }

  return undefined;
}

export function normalizeApiError(error: unknown): ApiError {
  if (!isAxiosError(error)) {
    return {
      message: error instanceof Error ? error.message : "Unexpected error",
    };
  }

  const data = error.response?.data;

  return {
    message: readMessage(data) ?? error.message ?? "Request failed",
    status: error.response?.status,
    code: error.code,
    details: data,
  };
}

export function getApiErrorMessage(error: unknown) {
  return normalizeApiError(error).message;
}
