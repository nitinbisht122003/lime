import type { VariantDto } from "../variant";
import type { SizeGuideDto } from "./size-guide";

export interface SizeSelectorDto {
  variants: VariantDto[];
  size_guide?: SizeGuideDto;
}
