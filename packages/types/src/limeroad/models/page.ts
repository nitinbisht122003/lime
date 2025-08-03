import type { ApiResponse } from "./api";

export type Page = "home" | "product-vip" | "search" | "cart" | "checkout" | "lr-credit";

export type PageResponse<T = unknown> = ApiResponse<PageData<T>>;

export interface PageData<T = unknown> {
  items: T[];
  meta: PageMeta;
}

interface PageMeta {
  id: Page; // Unique identifier for this page
}
