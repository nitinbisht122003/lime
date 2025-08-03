import type { ComponentProps } from "react";

import type { ProductViewModel, StoryCardCarouselViewModel } from "@app/types/limeroad";
import { Carousel, CarouselPagination, CarouselSlides } from "@app/ui/components/carousel";
import { Icon } from "@app/ui/components/icon";
import {
  ProductCard as ProductCardUI,
  ProductDescription,
  ProductImageContainer,
  ProductLikeButton,
  ProductRating,
  ProductTitle
} from "@app/ui/components/product-card";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { ShareIconHOC } from "@app/ui/icons/share-icon";
import { SimilarIconHOC } from "@app/ui/icons/similar-icon";

import { ProductPriceSection } from "./feed/product-card";
import { ProductImageRender } from "./feed/product-carousel";
import { Divider } from "@app/ui/components/divider";

type StoryCardCarouselProps = ComponentProps<typeof View> & {
  storyData: StoryCardCarouselViewModel;
};

export default function StoryCardCarousel({ storyData, ...props }: StoryCardCarouselProps) {
  return (
    <View {...props}>
      {storyData.data.map((storyProduct) => (
        <ProductCardUI key={storyProduct.id} className="relative">
          <View className="absolute left-3 top-0 z-20 rounded-b-full bg-white p-2 shadow-lg">
            <Text className="text-lg font-semibold">{storyProduct.story_no}</Text>
          </View>
          <View className="absolute bottom-28 right-5 z-20 flex-row items-center gap-2">
            <Icon as={SimilarIconHOC({ fill: "#F52773" })} size="xl" />
          </View>
          <StoryImageSectionWrapper
            images={storyProduct.images}
            altText={storyProduct.name}
            rating={storyProduct.rating}
          />

          <ProductDescriptionSection product={storyProduct} />

          <Divider className="my-4" />  

        </ProductCardUI>
      ))}
    </View>
  );
}

export function StoryImageSectionWrapper({
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
      <View></View>
      {typeof rating === "number" && <ProductRating rating={rating} />}
    </ProductImageContainer>
  );
}

type ProductDescription = Pick<ProductViewModel, "name" | "mrp" | "selling_price">;

interface ProductDescriptionProps {
  product: ProductDescription;
}

export function ProductDescriptionSection({ product }: ProductDescriptionProps) {
  const { name, mrp, selling_price } = product;

  return (
    <ProductDescription>
      <View className="flex-row items-start gap-2">
        <ProductTitle className="flex-1">{name}</ProductTitle>
        <ProductLikeButton />
        <Icon as={ShareIconHOC({ fill: "#696969" })} size="md" />
      </View>
      <ProductPriceSection mrp={mrp} sellingPrice={selling_price} />
    </ProductDescription>
  );
}
