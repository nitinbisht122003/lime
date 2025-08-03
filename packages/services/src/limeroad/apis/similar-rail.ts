import type { ApiClient } from "@app/core/lib";
import type { ProductRailViewModel } from "@app/types/limeroad";
import { sleep } from "@app/core/utils";

import { getLrApiClient } from "../client";
import { products } from "../mocks/products";

class SimilarRailService {
  private static instance: SimilarRailService | null = null;
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

  static getInstance(): SimilarRailService {
    SimilarRailService.instance ??= new SimilarRailService();

    return SimilarRailService.instance;
  }

  async getSimilarProducts(): Promise<ProductRailViewModel> {
    await sleep(300); // Simulate API delay

    // In a real implementation, we would use:
    // return this.getApiClient().get<ProductRailViewModel>("similar-products", {
    //   searchParams: { page, limit }
    // });

    // Mock response
    return {
      products: products.map((product) => ({
        ...product,
        selling_price: Math.floor(Math.random() * 2000) + 1000,
        mrp: Math.floor(Math.random() * 3000) + 2000
      })),
      title: "Similar Products",
      link: {
        url: "/similar-products",
        label: "View All"
      }
    };
  }
}

export const similarRailService = SimilarRailService.getInstance();
