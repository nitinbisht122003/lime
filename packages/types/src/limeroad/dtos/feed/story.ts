import type { GridLayoutData } from "../../../common";

export interface StoryUserDto {
  name: string;
  avatar: string;
  followers: number;
}

export interface StoryProductDto {
  id: string;
  image: string;
}

export interface StoryDto {
  id: string;
  user: StoryUserDto;
  link: string;
  title: string;
  description: string;
  grid_data: GridLayoutData<StoryProductDto>;
  products_count: number;
}
