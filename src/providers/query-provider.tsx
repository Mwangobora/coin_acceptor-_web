"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type ReactNode, useState } from "react";

import { createQueryClient } from "@/lib/query/query-client";

export function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => createQueryClient());
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isDevelopment ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    </QueryClientProvider>
  );
}
