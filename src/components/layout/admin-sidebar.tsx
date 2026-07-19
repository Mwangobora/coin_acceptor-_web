"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { adminNavigation } from "@/config/admin-navigation";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/stores/ui-store";

import { AppLogo } from "./app-logo";
import { SidebarNavigationItem } from "./sidebar-navigation-item";

export function AdminSidebar() {
  const compact = useUiStore((state) => state.isSidebarCollapsed);
  const toggleSidebar = useUiStore((state) => state.toggleSidebar);
  const ToggleIcon = compact ? PanelLeftOpen : PanelLeftClose;

  return (
    <aside className="border-sidebar-border bg-sidebar text-sidebar-foreground fixed inset-y-0 left-0 z-50 hidden h-dvh border-r lg:block">
      <div
        className={
          compact
            ? "h-full w-20 transition-[width] duration-200"
            : "h-full w-72 transition-[width] duration-200"
        }
      >
        <div
          className={cn(
            "border-sidebar-border relative flex h-16 items-center border-b",
            compact ? "justify-center px-2" : "justify-between gap-2 px-4",
          )}
        >
          <AppLogo compact={compact} />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={compact ? "Expand sidebar" : "Collapse sidebar"}
            className={cn(
              "bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border hover:bg-sidebar-primary hover:text-sidebar-primary-foreground border shadow-sm",
              compact && "absolute top-1/2 -right-3 size-9 -translate-y-1/2",
            )}
            onClick={toggleSidebar}
          >
            <ToggleIcon size={17} aria-hidden="true" />
          </Button>
        </div>
        <nav aria-label="Admin navigation" className="flex flex-col gap-1 p-3">
          {adminNavigation.map((item) => (
            <SidebarNavigationItem
              key={item.title}
              item={item}
              compact={compact}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}
