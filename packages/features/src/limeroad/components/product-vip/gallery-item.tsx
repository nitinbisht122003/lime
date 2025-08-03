"use client";

import type { DimensionValue } from "react-native";
import { Dimensions } from "react-native";

import type {
  GalleryItem as GalleryItemType,
  ImageGalleryItem,
  VideoGalleryItem
} from "@app/types/limeroad";
import { Image } from "@app/ui/elements/image";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";

import { useProductVipContext } from "../../hooks/product-vip";
import { Video } from "../video";
import { KeyHighlights } from "./key-highlights";

interface GalleryItemProps {
  item: GalleryItemType;
  onPress?: () => void;
  width?: DimensionValue;
  height?: DimensionValue;
  aspectRatio?: number;
}

export function GalleryItem({
  item,
  onPress,
  width = "100%",
  height,
  aspectRatio
}: GalleryItemProps) {
  const { similarRailRef, scrollViewRef } = useProductVipContext();

  const containerStyle = {
    width,
    height,
    aspectRatio
  };

  const handleSimilarClick = () => {
    if (similarRailRef.current) {
      // Get the y position of the similar rail
      similarRailRef.current.measure((x, y, width, height, pageX, pageY) => {
        const windowHeight = Dimensions.get("window").height;
        const scrollToY = pageY - windowHeight / 2 + height / 2;

        scrollViewRef.current?.scrollTo({ y: scrollToY, animated: true });
      });
    }
  };

  const handlePress = () => {
    onPress?.();
  };

  return (
    <Pressable onPress={handlePress} style={[{ position: "relative" }, containerStyle]}>
      {item.type === "image" && (
        <GalleryItemImage item={item} handleSimilarClick={handleSimilarClick} />
      )}
      {item.type === "video" && <GalleryItemVideo item={item} />}
    </Pressable>
  );
}

const GalleryItemImage = ({
  item,
  handleSimilarClick
}: {
  item: ImageGalleryItem;
  handleSimilarClick: () => void;
}) => {
  return (
    <>
      <Image src={item.image} alt="Product Image" className="h-full w-full object-cover" />
      {item.key_highlights && <KeyHighlights highlights={item.key_highlights} />}
      <Pressable
        onPress={handleSimilarClick}
        className="absolute bottom-4 right-4 z-10 rounded-full bg-white/90 px-4 py-2"
      >
        <Text className="text-sm font-medium text-gray-800">Similar Items</Text>
      </Pressable>
    </>
  );
};

const GalleryItemVideo = ({ item }: { item: VideoGalleryItem }) => {
  return (
    <>
      <Video src={item.url} poster={item.thumbnail} />
    </>
  );
};
