import Link from "next/link";

import { EmptyState } from "@/components/shared";
import ActionButton from "@/components/ui/action-button";

export default function NotFound() {
  return (
    <main className="bg-background flex min-h-dvh items-center justify-center px-4">
      <div className="grid gap-4">
        <EmptyState
          title="Page not found"
          description="The requested admin page is not available."
        />
        <ActionButton asChild>
          <Link href="/admin">Return to admin</Link>
        </ActionButton>
      </div>
    </main>
  );
}
