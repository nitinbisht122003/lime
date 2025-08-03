import type { StoryHighlightsDto } from "../dtos";
import type { StoryHighlightsViewModel } from "../view-models";
import type { CommonAssetPayloadMap, CommonAssetType } from "./common";

export type HomeAssetType = CommonAssetType | "story_highlights";

export interface HomeAssetPayloadMap extends CommonAssetPayloadMap {
  story_highlights: {
    dto: StoryHighlightsDto;
    view_model: StoryHighlightsViewModel;
  };
}
