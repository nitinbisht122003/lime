export interface ProductDto {
  id: string;
  name: string;
  brand: string;
  rating: number;
  image_url: string;
  seo_url: string;
  lr_trusted?: boolean;
}
