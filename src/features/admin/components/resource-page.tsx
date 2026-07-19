"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared";

import {
  useCreateResource,
  useResourceList,
  useRunResourceAction,
  useUpdateResource,
} from "../hooks/use-resource";
import type { ResourceConfig, ResourceRow, RowAction } from "../types/resource";
import { FormDialog, RecordDialog } from "./resource-dialogs";
import { Pagination } from "./resource-pagination";
import { ResourceTable } from "./resource-table";
import { ResourceToolbar } from "./resource-toolbar";

export function ResourcePage({ config }: { config: ResourceConfig }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState<ResourceRow | null>(null);
  const [editing, setEditing] = useState<ResourceRow | null>(null);
  const [creating, setCreating] = useState(false);
  const [action, setAction] = useState<{ row: ResourceRow; spec: RowAction }>();
  const list = useResourceList(config, page, search);
  const create = useCreateResource(config);
  const update = useUpdateResource(config);
  const runAction = useRunResourceAction(config);
  const rows = list.data?.items ?? [];
  const meta = list.data?.pagination;

  return (
    <PageContainer>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <PageHeader title={config.title} description={config.description} />
        <ResourceToolbar
          search={search}
          canCreate={Boolean(config.createFields)}
          onSearch={setSearch}
          onCreate={() => setCreating(true)}
          onRefresh={() => list.refetch()}
        />
        {list.isLoading ? <LoadingState /> : null}
        {list.isError ? <ErrorState title="Could not load data" /> : null}
        {!list.isLoading && rows.length === 0 ? (
          <EmptyState title="No records" description="Try another search." />
        ) : null}
        {rows.length > 0 ? (
          <ResourceTable
            rows={rows}
            columns={config.columns}
            onView={setDetail}
            onEdit={config.updateFields ? setEditing : undefined}
            actions={config.rowActions}
            onAction={(row, spec) => setAction({ row, spec })}
          />
        ) : null}
        <Pagination
          page={page}
          total={meta?.totalPages ?? 1}
          onPage={setPage}
        />
      </motion.div>
      <RecordDialog
        title="Details"
        row={detail}
        onOpenChange={() => setDetail(null)}
      />
      <FormDialog
        title={`Create ${config.title}`}
        open={creating}
        fields={config.createFields}
        busy={create.isPending}
        onOpenChange={setCreating}
        onSubmit={(body) =>
          create.mutate(body, { onSuccess: () => setCreating(false) })
        }
      />
      <FormDialog
        title={`Edit ${config.title}`}
        open={Boolean(editing)}
        fields={config.updateFields}
        initial={editing ?? undefined}
        busy={update.isPending}
        onOpenChange={() => setEditing(null)}
        onSubmit={(body) => {
          if (editing?.id)
            update.mutate(
              { id: editing.id, body },
              { onSuccess: () => setEditing(null) },
            );
        }}
      />
      {action ? (
        <FormDialog
          title={action.spec.label}
          open
          fields={action.spec.fields}
          busy={runAction.isPending}
          onOpenChange={() => setAction(undefined)}
          onSubmit={(body) =>
            runAction.mutate(
              {
                path: action.spec.path(action.row),
                method: action.spec.method ?? "post",
                body,
              },
              { onSuccess: () => setAction(undefined) },
            )
          }
        />
      ) : null}
    </PageContainer>
  );
}
