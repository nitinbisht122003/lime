import type { ProductDto } from "../product";
import type { VariantDto } from "../variant";

export type VariantPriceMap = Record<
  VariantDto["id"],
  {
    mrp: number;
    selling_price: number;
  }
>;

export interface ProductInfoDto extends ProductDto {
  variant_price_map: VariantPriceMap;
  base_variant_id: string;
  pricing_text: string;
}
