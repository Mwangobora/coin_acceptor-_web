import { isAxiosError } from "axios";

export type ApiError = {
  message: string;
  status?: number;
  code?: string;
  errors: string[];
  requestId?: string;
  details?: unknown;
};

type ApiErrorBody = {
  message?: string;
  code?: string;
  errors?: string[];
  requestId?: string;
};

function readBody(data: unknown): ApiErrorBody {
  if (typeof data !== "object" || data === null) return {};
  const body = data as Record<string, unknown>;

  return {
    message: typeof body.message === "string" ? body.message : undefined,
    code: typeof body.code === "string" ? body.code : undefined,
    errors: Array.isArray(body.errors)
      ? body.errors.filter((entry): entry is string => typeof entry === "string")
      : undefined,
    requestId:
      typeof body.requestId === "string" ? body.requestId : undefined,
  };
}

// The response interceptor in api-client.ts already normalizes axios
// errors into ApiError before they reach a catch/onError handler, so a
// value passed here may already be normalized. Guard against
// re-normalizing it (which would drop the real message/code) by passing
// it through unchanged.
function isNormalizedApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    !isAxiosError(error) &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string" &&
    "errors" in error
  );
}

export function normalizeApiError(error: unknown): ApiError {
  if (isNormalizedApiError(error)) {
    return error;
  }

  if (!isAxiosError(error)) {
    return {
      message: error instanceof Error ? error.message : "Unexpected error",
      errors: [],
    };
  }

  const body = readBody(error.response?.data);

  return {
    message: body.message ?? error.message ?? "Request failed",
    status: error.response?.status,
    code: body.code,
    errors: body.errors ?? [],
    requestId: body.requestId,
    details: error.response?.data,
  };
}

export function getApiErrorMessage(error: unknown) {
  return normalizeApiError(error).message;
}
