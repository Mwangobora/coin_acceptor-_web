"use client";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { Check, Edit2, Info, Plus, Trash2 } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ActionType =
  | "primary"
  | "edit"
  | "delete"
  | "success"
  | "info"
  | "add"
  | "outline"
  | "secondary"
  | "ghost";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
type ButtonSize = VariantProps<typeof buttonVariants>["size"];

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  action?: ActionType;
  size?: "default" | "sm" | "icon";
  asChild?: boolean;
  iconOnly?: boolean;
};

const VARIANT_BY_ACTION: Record<ActionType, ButtonVariant> = {
  primary: "default",
  edit: "edit",
  delete: "destructive",
  success: "success",
  info: "info",
  add: "default",
  outline: "outline",
  secondary: "secondary",
  ghost: "ghost",
};

function ActionIcon({
  action,
  className,
}: {
  action: ActionType;
  className?: string;
}) {
  switch (action) {
    case "edit":
      return <Edit2 size={16} className={className} aria-hidden="true" />;
    case "delete":
      return <Trash2 size={16} className={className} aria-hidden="true" />;
    case "success":
      return <Check size={16} className={className} aria-hidden="true" />;
    case "info":
      return <Info size={16} className={className} aria-hidden="true" />;
    case "add":
      return <Plus size={16} className={className} aria-hidden="true" />;
    default:
      return null;
  }
}

const ICON_ACTIONS = new Set<ActionType>([
  "edit",
  "delete",
  "success",
  "info",
  "add",
]);

export function ActionButton({
  action = "primary",
  size = "default",
  asChild = false,
  iconOnly = false,
  children,
  className,
  ...props
}: Props) {
  const hasIcon = ICON_ACTIONS.has(action);
  const variant = VARIANT_BY_ACTION[action];
  const mergedClassName = cn(iconOnly ? "px-2" : "px-4", className);

  if (asChild) {
    return (
      <Slot className={mergedClassName} {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <Button
      variant={variant}
      size={size as ButtonSize}
      className={mergedClassName}
      {...props}
    >
      {iconOnly && hasIcon ? (
        <ActionIcon action={action} />
      ) : (
        <>
          {hasIcon && (
            <ActionIcon action={action} className="mr-2 inline-block" />
          )}
          {children}
        </>
      )}
    </Button>
  );
}

export default ActionButton;
