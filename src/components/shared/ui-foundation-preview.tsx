import { BatteryCharging } from "lucide-react";

import {
  PaymentMethodBadge,
  PowerStatusBadge,
  SectionCard,
  StatusBadge,
} from "@/components/shared";

export function UiFoundationPreview() {
  return (
    <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
      <SectionCard
        title="UI Foundation Ready"
        description="Reusable admin shell, tokens and badge variants are available."
      >
        <div className="text-muted-foreground flex items-center gap-3 text-sm">
          <BatteryCharging
            className="text-primary"
            size={20}
            aria-hidden="true"
          />
          <span>Prepared for charging-station monitoring workflows.</span>
        </div>
      </SectionCard>
      <SectionCard title="Operational Badges">
        <div className="flex flex-wrap gap-2">
          <StatusBadge variant="online" />
          <StatusBadge variant="charging" />
          <StatusBadge variant="warning" />
          <StatusBadge variant="maintenance" />
          <StatusBadge variant="offline" />
          <StatusBadge variant="critical" />
          <StatusBadge variant="pending" />
        </div>
      </SectionCard>
      <SectionCard title="Payment Methods">
        <div className="flex flex-wrap gap-2">
          <PaymentMethodBadge variant="coin" />
          <PaymentMethodBadge variant="qr" />
        </div>
      </SectionCard>
      <SectionCard title="Power States">
        <div className="flex flex-wrap gap-2">
          <PowerStatusBadge variant="grid" />
          <PowerStatusBadge variant="backup" />
          <PowerStatusBadge variant="disconnected" />
          <PowerStatusBadge variant="failure" />
        </div>
      </SectionCard>
    </div>
  );
}
