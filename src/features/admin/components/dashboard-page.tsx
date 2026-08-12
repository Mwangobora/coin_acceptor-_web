"use client";

import { motion } from "motion/react";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { MetricCard } from "@/components/shared/metric-card";

import { metricSections } from "../config/dashboard-sections";
import { useDashboardData } from "../hooks/use-dashboard";
import { DashboardMiniTable } from "./dashboard-mini-table";

const containerMotion = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemMotion = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

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
        <motion.section
          className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          variants={containerMotion}
          initial="hidden"
          animate="show"
        >
          {metricSections.map((metric) => (
            <motion.div key={metric.key} variants={itemMotion}>
              <MetricCard
                label={metric.label}
                value={String(totals[metric.key] ?? 0)}
                helper="Loaded from API"
                icon={metric.icon}
              />
            </motion.div>
          ))}
        </motion.section>
        <motion.section
          className="mt-6 grid gap-4 xl:grid-cols-2"
          variants={containerMotion}
          initial="hidden"
          animate="show"
        >
          {data.map((item) => (
            <motion.div key={item.config.key} variants={itemMotion}>
              <DashboardMiniTable
                config={item.config}
                rows={item.items}
                loading={item.isLoading}
                failed={item.isError}
              />
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
    </PageContainer>
  );
}
