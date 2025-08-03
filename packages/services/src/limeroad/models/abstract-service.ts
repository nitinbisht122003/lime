import type { ApiClient } from "@app/core/lib";

import { getLrApiClient } from "../client";

export abstract class AbstractService {
  private apiClient: ApiClient | null = null;

  protected getApiClient(): ApiClient {
    if (this.apiClient) return this.apiClient;

    this.apiClient = getLrApiClient();

    return this.apiClient;
  }
}
