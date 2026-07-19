import type { ResourceRow } from "@/features/admin/types/resource";

export type DeviceEvent = ResourceRow & {
  eventType?: string;
  eventCategory?: string;
  processingStatus?: string;
  receivedAt?: string;
};

export type DeviceTelemetry = ResourceRow & {
  deviceId?: string;
  powerSource?: string;
  batteryPercentage?: number;
  temperatureCelsius?: number;
};
