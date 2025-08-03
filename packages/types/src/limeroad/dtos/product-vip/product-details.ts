export interface ProductAttribute {
  key: string;
  value: string;
}

export interface ProductDetailsDto {
  id: string;
  description?: string;
  highlights?: ProductAttribute[];
  additionalInfo?: ProductAttribute[];
}
