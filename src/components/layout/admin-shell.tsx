"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";

import { LoadingState } from "@/components/shared";
import { useCurrentUser } from "@/features/auth/hooks/use-auth";

import { AdminHeader } from "./admin-header";
import { AdminSidebar } from "./admin-sidebar";

export function AdminShell({ children }: { children: ReactNode }) {
  const user = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (user.isError) router.replace("/login");
  }, [router, user.isError]);

  if (user.isLoading) return <LoadingState />;
  if (user.isError) return null;

  return (
    <div className="bg-background min-h-dvh">
      <div className="flex min-w-0">
        <AdminSidebar />
        <div className="flex min-h-dvh min-w-0 flex-1 flex-col">
          <AdminHeader />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
