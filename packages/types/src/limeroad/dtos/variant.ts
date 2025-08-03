import type { SizeUnit } from "./product-vip/size-guide";

export interface VariantDto {
  id: string;
  size: string;
  size_info?: Record<SizeUnit, string>;
  availability?: number;
}
