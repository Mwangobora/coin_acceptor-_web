"use client";

import { motion } from "motion/react";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { MetricCard } from "@/components/shared/metric-card";

import { metricSections } from "../config/dashboard-sections";
import { useDashboardData } from "../hooks/use-dashboard";
import { DashboardMiniTable } from "./dashboard-mini-table";

export function DashboardPage() {
  const data = useDashboardData();
  const totals = Object.fromEntries(
    data.map((item) => [item.config.key, item.total]),
  );

  return (
    <PageContainer>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <PageHeader
          title="Admin Dashboard"
          description="Live backend overview across station, device, access, and audit APIs."
        />
        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {metricSections.map((metric) => (
            <MetricCard
              key={metric.key}
              label={metric.label}
              value={String(totals[metric.key] ?? 0)}
              helper="Loaded from API"
              icon={metric.icon}
            />
          ))}
        </section>
        <section className="mt-6 grid gap-4 xl:grid-cols-2">
          {data.map((item) => (
            <DashboardMiniTable
              key={item.config.key}
              config={item.config}
              rows={item.items}
              loading={item.isLoading}
              failed={item.isError}
            />
          ))}
        </section>
      </motion.div>
    </PageContainer>
  );
}
