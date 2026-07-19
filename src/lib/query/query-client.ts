import { QueryClient } from "@tanstack/react-query";

function shouldRetry(failureCount: number, error: unknown) {
  const status =
    typeof error === "object" && error && "status" in error
      ? Number(error.status)
      : undefined;

  if (status && status >= 400 && status < 500) {
    return false;
  }

  return failureCount < 2;
}

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
        refetchOnWindowFocus: false,
        retry: shouldRetry,
      },
      mutations: {
        retry: shouldRetry,
      },
    },
  });
}
