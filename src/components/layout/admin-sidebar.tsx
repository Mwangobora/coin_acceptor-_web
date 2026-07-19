"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { adminNavigation } from "@/config/admin-navigation";
import { useUiStore } from "@/stores/ui-store";

import { AppLogo } from "./app-logo";
import { SidebarNavigationItem } from "./sidebar-navigation-item";

export function AdminSidebar() {
  const compact = useUiStore((state) => state.isSidebarCollapsed);
  const toggleSidebar = useUiStore((state) => state.toggleSidebar);
  const ToggleIcon = compact ? PanelLeftOpen : PanelLeftClose;

  return (
    <aside className="border-sidebar-border bg-sidebar text-sidebar-foreground sticky top-0 hidden h-dvh shrink-0 border-r lg:block">
      <div className={compact ? "w-20" : "w-72"}>
        <div className="border-sidebar-border flex h-16 items-center justify-between gap-2 border-b px-4">
          <AppLogo compact={compact} />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={compact ? "Expand sidebar" : "Collapse sidebar"}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={toggleSidebar}
          >
            <ToggleIcon size={18} aria-hidden="true" />
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
