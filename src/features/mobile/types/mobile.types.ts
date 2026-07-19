export type DeviceRequestMethod = "get" | "post";

export type DeviceRequestInput = {
  apiKey: string;
  path: string;
  method?: DeviceRequestMethod;
  body?: unknown;
};

export type MobileConsoleState = {
  apiKey: string;
  reference: string;
  payload: string;
  result: unknown;
  busy: boolean;
};
