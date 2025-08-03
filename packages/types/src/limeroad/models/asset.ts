export type Asset<
  AssetType extends string,
  AssetPayloadMap extends Record<
    AssetType,
    {
      dto: unknown;
      view_model: unknown;
    }
  >,
  ModelType extends "dto" | "view_model"
> = {
  [T in AssetType]: {
    type: T;
    payload: AssetPayloadMap[T][ModelType];
  };
}[AssetType];
