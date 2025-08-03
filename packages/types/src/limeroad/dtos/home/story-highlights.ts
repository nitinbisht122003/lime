export type MediaType = "image" | "video";

export interface StoryItemDto {
  id: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
  media: {
    type: MediaType;
    url: string;
    duration?: number; // Seconds - for custom durations
    thumbnail?: string; // Optional thumbnail for videos
  };
  timestamp: number; // Unix timestamp
  seen: boolean;
}

export interface StoryGroupDto {
  id: string;
  label: string;
  thumbnail: string;
  stories: StoryItemDto[];
  seen: boolean;
}

export interface StoryHighlightsDto {
  story_groups: StoryGroupDto[];
}
