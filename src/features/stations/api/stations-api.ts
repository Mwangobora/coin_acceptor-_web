import {
  createResource,
  listResource,
  updateResource,
} from "@/features/admin/api/admin-api";
import type { ResourceRow } from "@/features/admin/types/resource";

import type { Station } from "../types/stations.types";

const path = "/stations";

export function listStations(page = 1, search = "") {
  return listResource<Station>(path, {
    page,
    pageSize: 10,
    search,
    searchParam: "search",
  });
}

export function createStation(body: ResourceRow) {
  return createResource(path, body);
}

export function updateStation(id: string, body: ResourceRow) {
  return updateResource(path, id, body);
}
