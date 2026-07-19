import type { ResourceConfig } from "../types/resource";
import { accessResources } from "./resources-access";
import { coreResources } from "./resources-core";
import { mobileResources } from "./resources-mobile";
import { opsResources } from "./resources-ops";

export const resourceConfigs = [
  ...coreResources,
  ...opsResources,
  ...accessResources,
  ...mobileResources,
];

export const resourceMap = Object.fromEntries(
  resourceConfigs.map((config) => [config.key, config]),
) as Record<string, ResourceConfig>;
