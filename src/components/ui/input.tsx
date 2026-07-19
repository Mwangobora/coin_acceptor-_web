import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "bg-background flex h-11 w-full rounded-md border px-3 py-2 text-sm outline-none",
        "placeholder:text-muted-foreground focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
        className,
      )}
      {...props}
    />
  );
}
