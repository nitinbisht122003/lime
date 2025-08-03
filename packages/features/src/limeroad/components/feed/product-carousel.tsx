import type { ComponentProps } from "react";

import type { ProductCarouselViewModel } from "@app/types/limeroad";
import { Carousel, CarouselPagination, CarouselSlides } from "@app/ui/components/carousel";
import {
  ProductCard as ProductCardUI,
  ProductImage,
  ProductImageContainer,
  ProductRating,
  ProductTag
} from "@app/ui/components/product-card";
import { View } from "@app/ui/elements/view";

import { ProductDescriptionSection } from "./product-card";

type ProductCarouselProps = ComponentProps<typeof ProductCardUI> & {
  product: ProductCarouselViewModel;
};

export default function ProductCarousel({ product, size = "xl", ...props }: ProductCarouselProps) {
  return (
    <ProductCardUI size={size} {...props}>
      <ProductCarouselImageSection
        images={product.images}
        altText={product.name}
        rating={product.rating}
      />
      <ProductDescriptionSection product={product} />
    </ProductCardUI>
  );
}

export function ProductCarouselImageSection({
  images,
  altText,
  rating
}: {
  images: string[];
  altText: string;
  rating?: number;
}) {
  const carouselItems = images.map((img) => ({
    src: img,
    altText: altText
  }));

  return (
    <ProductImageContainer>
      <Carousel loop>
        <CarouselSlides
          data={carouselItems}
          width={456}
          fullWidth
          aspectRatio={35 / 48}
          renderItem={({ item }) => {
            return <ProductImageRender {...item} />;
          }}
        />
        <CarouselPagination
          data={carouselItems}
          containerStyle={{ position: "absolute", bottom: 10, left: 0, right: 0 }}
        />
      </Carousel>
      <ProductTag>Lowest Price</ProductTag>
      {typeof rating === "number" && <ProductRating rating={rating} />}
    </ProductImageContainer>
  );
}

interface ProductImageRenderProps {
  src: string;
  altText: string;
}

export function ProductImageRender({ src, altText }: ProductImageRenderProps) {
  return (
    <View className="relative h-full w-full">
      <ProductImage
        src={src}
        alt={altText}
        size="full"
        className="h-full w-full rounded-lg object-cover object-top"
      />
    </View>
  );
}
