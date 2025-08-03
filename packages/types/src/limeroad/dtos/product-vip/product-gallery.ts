import type { Href } from "../../../common";

// Define types for the gallery item payload structure
export interface GalleryImage {
  low: Href;
  high: Href;
}

export type KeyHighlightAttribute = Record<string, string>;

export interface KeyHighlights {
  heading: string;
  display_attributes: KeyHighlightAttribute[];
}

export interface BaseGalleryItem {
  type: "image" | "video";
}

export interface ImageGalleryItem extends BaseGalleryItem {
  type: "image";
  image: GalleryImage;
  key_highlights?: KeyHighlights;
}

export interface VideoGalleryItem extends BaseGalleryItem {
  type: "video";
  url: Href;
  thumbnail: Href;
}

export type GalleryItem = ImageGalleryItem | VideoGalleryItem;

export interface ProductGalleryDto {
  data: GalleryItem[];
}
