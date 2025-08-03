import type { ProductCarouselDto } from "./feed";

export interface StoryCardCarouselDto{
    data: StoryCardCarousel[];
} 

export interface StoryCardCarousel extends ProductCarouselDto{
    story_no: string;
}