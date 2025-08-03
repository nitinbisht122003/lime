"use client";

import { useCallback } from "react";
import { useWindowDimensions } from "react-native";

import type { Href } from "@app/types/common";
import { Carousel, CarouselPagination, CarouselSlides } from "@app/ui/components/carousel";
import { Icon } from "@app/ui/components/icon";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader
} from "@app/ui/components/modal";
import { Zoom } from "@app/ui/components/zoom";
import { Image } from "@app/ui/elements/image";
import { View } from "@app/ui/elements/view";
import { ChevronLeftIcon } from "@app/ui/icons/chevron-left-icon";
import { cn } from "@app/ui/utils/cn";

interface ZoomedGalleryModalProps {
  isOpen: boolean;
  onClose?: () => void;
  images: Href[];
  initialIndex: number;
}

export function ZoomedGalleryModal({
  isOpen,
  onClose,
  images,
  initialIndex
}: ZoomedGalleryModalProps) {
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const { width, height } = useWindowDimensions();

  const carouselPaginationData = images.map((item, index) => ({
    id: `zoom-image-${index}`,
    thumbnail: item
  }));

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="full">
      <ModalBackdrop className="bg-white" />
      <ModalContent className="m-0 h-screen border-none bg-white p-0">
        <ModalHeader className="flex w-full flex-row items-center justify-start bg-white px-4 pt-2">
          <ModalCloseButton
            className="flex h-11 w-11 items-center justify-center"
            onPress={handleClose}
          >
            <Icon as={ChevronLeftIcon} size="xl" />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody className="flex flex-1 flex-col justify-between p-0">
          {/* Main Carousel */}
          <View className="flex flex-1 items-center justify-center">
            <Carousel loop defaultIndex={initialIndex}>
              <CarouselSlides
                data={images.map((item) => ({ item }))}
                renderItem={({ item }) => (
                  <ZoomedGalleryModalContent item={item} width={width} height={height} />
                )}
                aspectRatio={453 / 600}
              />
              <CarouselPagination
                data={carouselPaginationData}
                renderItem={(item, index, isActive) => (
                  <CarouselPaginationItem
                    index={index}
                    thumbnail={item.thumbnail}
                    isActive={isActive}
                  />
                )}
              />
            </Carousel>
          </View>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function CarouselPaginationItem({
  index,
  thumbnail,
  isActive
}: {
  index: number;
  thumbnail: string;
  isActive: boolean;
}) {
  return (
    <View
      key={index}
      className={cn(
        "mx-1 aspect-[3/4] h-20 overflow-hidden rounded",
        isActive && "border-primary border-2"
      )}
    >
      <Image src={thumbnail} alt="Thumbnail" width="100%" height="100%" objectFit="cover" />
    </View>
  );
}

function ZoomedGalleryModalContent({
  item,
  width,
  height
}: {
  item: { item: Href };
  width: number;
  height: number;
}) {
  return (
    <Zoom>
      <Image
        src={item.item}
        alt="Product Image"
        width={width}
        height={height}
        objectFit="contain"
        className="h-full w-full object-contain"
      />
    </Zoom>
  );
}
