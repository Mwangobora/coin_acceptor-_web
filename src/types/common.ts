export type AsyncState<TData> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: TData }
  | { status: "error"; message: string };

export type PaginationParams = {
  page: number;
  pageSize: number;
};
