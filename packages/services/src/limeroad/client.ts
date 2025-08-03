import { ApiClient } from "@app/core/lib";

import { LrApiEnv } from "./env";

class LrApiClient {
  private static instance: ApiClient | null = null;

  private constructor() {
    // Private constructor to prevent instantiation
    // from outside the class
  }

  static getInstance(): ApiClient {
    LrApiClient.instance ??= new ApiClient({
      prefixUrl: LrApiEnv.get("API_URL")
    });

    return LrApiClient.instance;
  }
}

export const getLrApiClient = () => LrApiClient.getInstance();
