export interface FabDto {
  type: "call_to_help" | "hot";
}

export interface FabsDto {
  fabs: FabDto[];
}
