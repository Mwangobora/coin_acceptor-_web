"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;

export function DropdownMenuContent({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        align="end"
        className={cn(
          "bg-popover text-popover-foreground z-50 min-w-48 rounded-md border p-1 shadow-sm",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

export function DropdownMenuItem({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        "focus:bg-accent focus:text-accent-foreground flex min-h-10 cursor-default items-center rounded-sm px-2 text-sm outline-none select-none",
        className,
      )}
      {...props}
    />
  );
}
