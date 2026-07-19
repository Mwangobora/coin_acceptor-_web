"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;
export const SheetTitle = SheetPrimitive.Title;
export const SheetDescription = SheetPrimitive.Description;

export function SheetContent({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof SheetPrimitive.Content>) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="bg-foreground/50 fixed inset-0 z-50" />
      <SheetPrimitive.Content
        className={cn(
          "bg-sidebar text-sidebar-foreground fixed inset-y-0 left-0 z-50 w-[min(20rem,85vw)] shadow-lg outline-none",
          className,
        )}
        {...props}
      >
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="text-sidebar-foreground hover:bg-sidebar-accent absolute top-3 right-3"
        >
          <SheetPrimitive.Close aria-label="Close navigation">
            <X size={18} aria-hidden="true" />
          </SheetPrimitive.Close>
        </Button>
        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}
