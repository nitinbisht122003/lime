import type { ProductCardDto } from "../product-card";

export interface ProductCarouselDto extends Omit<ProductCardDto, "image_url"> {
  images: string[];
}
