"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { AdminNavigationItem } from "@/types/navigation";

type SidebarNavigationItemProps = {
  item: AdminNavigationItem;
  compact?: boolean;
};

const baseClass =
  "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function SidebarNavigationItem({
  item,
  compact = false,
}: SidebarNavigationItemProps) {
  const pathname = usePathname();
  const isActive = item.href === pathname;
  const Icon = item.icon;
  const content = (
    <>
      <Icon size={18} aria-hidden="true" />
      <span className={cn("truncate", compact && "sr-only")}>{item.title}</span>
    </>
  );

  if (!item.href || item.disabled) {
    return (
      <span
        aria-disabled="true"
        className={cn(baseClass, "text-sidebar-foreground/45")}
        title={compact ? item.title : undefined}
      >
        {content}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        baseClass,
        isActive
          ? "bg-sidebar-primary text-sidebar-primary-foreground"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground",
      )}
      title={compact ? item.title : undefined}
    >
      {content}
    </Link>
  );
}
