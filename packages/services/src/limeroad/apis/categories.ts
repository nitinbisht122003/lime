// import type { ApiClient } from "@app/core/lib";
// import type { CategoriesResponse } from "@app/types/limeroad";

// import { getLrApiClient } from "../client";

// class CategoryService {
//   private static instance: CategoryService | null = null;
//   private apiClient: ApiClient | null = null;

//   private constructor() {
//     // Private constructor to prevent instantiation
//     // from outside the class
//   }

//   private getApiClient(): ApiClient {
//     if (this.apiClient) return this.apiClient;

//     // Lazy initialization of the API client
//     this.apiClient = getLrApiClient();

//     return this.apiClient;
//   }

//   static getInstance(): CategoryService {
//     CategoryService.instance ??= new CategoryService();

//     return CategoryService.instance;
//   }

//   async getCategories() {
//     const response = await this.getApiClient().get<CategoriesResponse>(
//       "categories/category_browse"
//     );

//     return response.data;
//   }
// }

// export const categoryService = CategoryService.getInstance();
