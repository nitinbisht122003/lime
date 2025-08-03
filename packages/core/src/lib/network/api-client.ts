import type { KyResponse, Options } from "ky";
import ky, { HTTPError, TimeoutError } from "ky";

type ResponseType = "json" | "text" | "blob";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export class ApiClient {
  private RESRPONSE_CONTENT_TYPE: Record<ResponseType, string[]> = {
    json: ["application/json"],
    text: ["text/*"],
    blob: ["application/octet-stream", "image/*"]
  };

  private client: typeof ky;

  constructor(options?: Options) {
    this.client = ky.create(options);
  }

  async get<T>(path: string, options?: Options): Promise<T> {
    try {
      const response = await this.client.get(path, options);
      return await this.parseResponse<T>(response);
    } catch (error) {
      throw await this.handleError(error);
    }
  }

  async post<T>(path: string, json?: unknown, options?: Options): Promise<T> {
    try {
      const response = await this.client.post(path, { json, ...options });
      return await this.parseResponse<T>(response);
    } catch (error) {
      throw await this.handleError(error);
    }
  }

  async put<T>(path: string, json?: unknown, options?: Options): Promise<T> {
    try {
      const response = await this.client.put(path, { json, ...options });
      return await this.parseResponse<T>(response);
    } catch (error) {
      throw await this.handleError(error);
    }
  }

  async delete<T>(path: string, options?: Options): Promise<T> {
    try {
      const response = await this.client.delete(path, options);
      return await this.parseResponse<T>(response);
    } catch (error) {
      throw await this.handleError(error);
    }
  }

  private async parseResponse<T = unknown>(response: KyResponse): Promise<T> {
    if (response.status === 204) return null as unknown as T;

    const contentType = response.headers.get("content-type") ?? "";

    switch (this.matchContentType(contentType)) {
      case "json":
        return await response.json<T>();
      case "text":
        return (await response.text()) as unknown as T;
      case "blob":
        return (await response.blob()) as unknown as T;
      default:
        throw new ApiError(500, `Unsupported content type: ${contentType}`, null);
    }
  }

  // regex match the content type
  private matchContentType(contentType: string) {
    for (const [type, patterns] of Object.entries(this.RESRPONSE_CONTENT_TYPE)) {
      if (patterns.some((pattern) => contentType.match(pattern))) {
        return type as ResponseType;
      }
    }

    return null;
  }

  private async handleError(error: unknown): Promise<ApiError> {
    if (error instanceof HTTPError) {
      const status = error.response.status;
      const response = await error.response.json<unknown>();
      return new ApiError(status, error.message, response);
    } else if (error instanceof TimeoutError) {
      return new ApiError(408, "Request timed out");
    } else if (error instanceof Error) {
      return new ApiError(500, error.message);
    }

    return new ApiError(500, "Unknown error occurred");
  }
}
