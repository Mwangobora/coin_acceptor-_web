"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      richColors
      closeButton
      position="top-right"
      toastOptions={{
        classNames: {
          toast: "border bg-card text-card-foreground",
        },
      }}
    />
  );
}
