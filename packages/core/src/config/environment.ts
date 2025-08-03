import { z } from "zod";

// Base environment schema that all environments must extend
export const BaseEnvSchema = z.object({});

type BaseEnv = z.infer<typeof BaseEnvSchema>;

export class EnvironmentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnvironmentError";
  }
}

export class Environment<T extends BaseEnv> {
  private static instances: Map<string, Environment<BaseEnv>> = new Map<
    string,
    Environment<BaseEnv>
  >();
  private env: T;
  private schema: z.ZodType<T>;

  private constructor(schema: z.ZodType<T>) {
    this.schema = schema;
    this.env = {} as T; // Initialize with an empty object
  }

  /**
   * Get typed instance of Environment
   */
  static getInstance<T extends BaseEnv>(namespace: string, schema: z.ZodType<T>): Environment<T> {
    if (!Environment.instances.has(namespace)) {
      Environment.instances.set(namespace, new Environment<T>(schema));
    }
    return Environment.instances.get(namespace) as Environment<T>;
  }

  /**
   * Configure environment with validation
   */
  configure(env: Record<string, string | undefined>): void {
    const parsed = this.schema.safeParse(env);

    if (!parsed.success) {
      throw new EnvironmentError(
        `Invalid environment configuration for namespace: ${parsed.error.errors
          .map((e) => `${e.path.join()}: ${e.message}`)
          .join(", ")}`
      );
    }

    this.env = parsed.data;
  }

  /**
   * Get typed environment variable
   */
  get<K extends keyof T>(key: K): T[K] {
    if (!(key in this.env)) {
      throw new EnvironmentError(`Environment variable ${String(key)} not found`);
    }

    return this.env[key];
  }

  /**
   * Get all environment variables
   */
  getAll(): T {
    return { ...this.env };
  }
}
