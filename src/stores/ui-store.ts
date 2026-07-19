"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type UiStore = {
  isSidebarCollapsed: boolean;
  setSidebarCollapsed: (isCollapsed: boolean) => void;
  toggleSidebar: () => void;
};

export const useUiStore = create<UiStore>()(
  persist(
    (set) => ({
      isSidebarCollapsed: false,
      setSidebarCollapsed: (isSidebarCollapsed) => set({ isSidebarCollapsed }),
      toggleSidebar: () =>
        set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
    }),
    {
      name: "admin-ui-preferences",
      partialize: (state) => ({
        isSidebarCollapsed: state.isSidebarCollapsed,
      }),
    },
  ),
);
