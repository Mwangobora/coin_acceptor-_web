import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { UiFoundationPreview } from "@/components/admin/ui-foundation-preview";

export default function AdminOverviewPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Admin Overview"
        description="Web administration interface foundation"
      />
      <UiFoundationPreview />
    </PageContainer>
  );
}
