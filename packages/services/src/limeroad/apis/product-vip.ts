import type { ApiClient } from "@app/core/lib";
import type {
  ProductVipDataViewModel,
  ProductVipQueryDto,
  ProductVipResponseDto
} from "@app/types/limeroad";
import { sleep } from "@app/core/utils";

import { getLrApiClient } from "../client";
import { getProductVip } from "../mocks/product-vip";
import { transformProductVipDataDtoToViewModel } from "../transforms/product-vip";

class ProductVipService {
  private static instance: ProductVipService | null = null;
  private apiClient: ApiClient | null = null;

  private constructor() {
    // Private constructor to prevent instantiation
    // from outside the class
  }

  private getApiClient(): ApiClient {
    if (this.apiClient) return this.apiClient;

    // Lazy initialization of the API client
    this.apiClient = getLrApiClient();

    return this.apiClient;
  }

  static getInstance(): ProductVipService {
    ProductVipService.instance ??= new ProductVipService();

    return ProductVipService.instance;
  }

  async getProductVip(_query?: ProductVipQueryDto): Promise<ProductVipDataViewModel> {
    await sleep(300);

    const response: ProductVipResponseDto = {
      data: getProductVip()
    };

    // In a real implementation, we would use:
    // const response = await this.getApiClient().get<ProductVipResponse>("product-vip", {
    //   searchParams: {
    //     ...query
    //   }
    // });

    return transformProductVipDataDtoToViewModel(response.data);
  }
}

export const productVipService = ProductVipService.getInstance();
