import type { FeedDataViewModel, FeedQueryDto, FeedResponseDto } from "@app/types/limeroad";
import { sleep } from "@app/core/utils";

import { getFeed } from "../mocks/feed";
import { AbstractService } from "../models/abstract-service";
import { transformFeedDataDtoToViewModel } from "../transforms/feed";

class FeedService extends AbstractService {
  private static instance: FeedService | null = null;

  private constructor() {
    super();
    // Private constructor to prevent instantiation
    // from outside the class
  }

  static getInstance(): FeedService {
    FeedService.instance ??= new FeedService();

    return FeedService.instance;
  }

  async getFeed(_query: FeedQueryDto): Promise<FeedDataViewModel> {
    await sleep(300);

    const response: FeedResponseDto = {
      data: getFeed()
    };

    // const response = await this.getApiClient().get<FeedResponse>("feed", {
    //   searchParams: {
    //     ...query
    //   }
    // });

    return transformFeedDataDtoToViewModel(response.data);
  }
}

export const feedService = FeedService.getInstance();
