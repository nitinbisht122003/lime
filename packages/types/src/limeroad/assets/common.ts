import type { DividerDto, FabsDto, FeedDataDto, PromonoteDto, SpacingDto } from "../dtos";
import type {
  DividerViewModel,
  FabsViewModel,
  FeedDataViewModel,
  PromonoteViewModel,
  SpacingViewModel
} from "../view-models";

export type CommonAssetType = "divider" | "spacing" | "promonote" | "fabs" | "feed";

export interface CommonAssetPayloadMap {
  divider: {
    dto: DividerDto;
    view_model: DividerViewModel;
  };
  spacing: {
    dto: SpacingDto;
    view_model: SpacingViewModel;
  };
  promonote: {
    dto: PromonoteDto;
    view_model: PromonoteViewModel;
  };
  fabs: {
    dto: FabsDto;
    view_model: FabsViewModel;
  };
  feed: {
    dto: FeedDataDto;
    view_model: FeedDataViewModel;
  };
}
