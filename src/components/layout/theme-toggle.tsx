"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import ActionButton from "@/components/ui/action-button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <ActionButton
      type="button"
      action="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </ActionButton>
  );
}
