"use client";

import { adminNavigation } from "@/config/admin-navigation";
import { AppLogo } from "./app-logo";
import { SidebarNavigationItem } from "./sidebar-navigation-item";

export function AdminSidebar({ compact = false }: { compact?: boolean }) {
  return (
    <aside className="sticky top-0 hidden h-dvh shrink-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:block">
      <div className={compact ? "w-20" : "w-72"}>
        <div className="flex h-16 items-center border-b border-sidebar-border px-4">
          <AppLogo compact={compact} />
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
