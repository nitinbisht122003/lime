import { z } from "zod";

import { BaseEnvSchema, Environment } from "@app/core/config";

// Define API service environment schema with development defaults
const ApiEnvSchema = z.object({
  ...BaseEnvSchema.shape,
  API_URL: z.string()
});

// Type inference for API environment
export type LRApiEnv = z.infer<typeof ApiEnvSchema>;

// Create API environment instance
export const LrApiEnv = Environment.getInstance<LRApiEnv>("limeroad-api", ApiEnvSchema);
