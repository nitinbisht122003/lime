"use client";

import type { FC } from "react";
import { useState } from "react";

import type { ProductGalleryViewModel } from "@app/types/limeroad";
import { Carousel, CarouselPagination, CarouselSlides } from "@app/ui/components/carousel";

import { GalleryItem as GalleryItemUI } from "./gallery-item";
import { ZoomedGalleryModal } from "./zoom-gallery-modal";

interface ProductGalleryProps {
  gallery: ProductGalleryViewModel;
}

export const ProductGallery: FC<ProductGalleryProps> = ({ gallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  // Filter only image items for the zoom modal
  const imageItems = gallery.data.filter((item) => item.type === "image");

  // get image.high from image items
  const zoomImages = imageItems.map((item) => item.image.high);

  const carouselData = gallery.data.map((item) => ({ item }));

  return (
    <>
      <Carousel loop>
        <CarouselSlides
          data={carouselData}
          renderItem={({ item, index }) => (
            <GalleryItem
              item={item.item}
              index={index}
              aspectRatio={453 / 600}
              setCurrentIndex={setCurrentIndex}
              setIsZoomModalOpen={setIsZoomModalOpen}
            />
          )}
          aspectRatio={453 / 600}
        />
        <CarouselPagination data={carouselData} />
      </Carousel>
      <ZoomedGalleryModal
        isOpen={isZoomModalOpen}
        onClose={() => setIsZoomModalOpen(false)}
        images={zoomImages}
        initialIndex={currentIndex}
      />
    </>
  );
};

const GalleryItem = ({
  item,
  index,
  aspectRatio,
  setCurrentIndex,
  setIsZoomModalOpen
}: {
  item: ProductGalleryViewModel["data"][number];
  index: number;
  aspectRatio: number;
  setCurrentIndex: (index: number) => void;
  setIsZoomModalOpen: (isOpen: boolean) => void;
}) => {
  return (
    <GalleryItemUI
      item={item}
      onPress={
        item.type === "image"
          ? () => {
              setCurrentIndex(index);
              setIsZoomModalOpen(true);
            }
          : undefined
      }
      aspectRatio={aspectRatio}
    />
  );
};
