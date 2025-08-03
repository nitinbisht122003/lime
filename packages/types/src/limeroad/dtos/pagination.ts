import type { Href } from "../../common";

export interface PaginationDto<AssetType extends string> {
  url: Href;
  assetType: AssetType;
  ttl: number; // Time to live in seconds
}
