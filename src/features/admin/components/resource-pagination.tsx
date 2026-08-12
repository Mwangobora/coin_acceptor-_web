"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import ActionButton from "@/components/ui/action-button";

export function Pagination({
  page,
  total,
  onPage,
}: {
  page: number;
  total: number;
  onPage: (page: number) => void;
}) {
  return (
    <div className="text-muted-foreground mt-4 flex items-center justify-between text-sm">
      <span>
        Page {page} of {Math.max(total, 1)}
      </span>
      <div className="flex gap-2">
        <ActionButton
          action="outline"
          size="sm"
          disabled={page <= 1}
          onClick={() => onPage(page - 1)}
        >
          <ChevronLeft size={16} />
          Previous
        </ActionButton>
        <ActionButton
          action="outline"
          size="sm"
          disabled={page >= total}
          onClick={() => onPage(page + 1)}
        >
          Next
          <ChevronRight size={16} />
        </ActionButton>
      </div>
    </div>
  );
}
