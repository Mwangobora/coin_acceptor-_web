export type ApiListResponse<TItem> = {
  count: number;
  results: TItem[];
};

export type ApiRequestOptions = {
  signal?: AbortSignal;
};
