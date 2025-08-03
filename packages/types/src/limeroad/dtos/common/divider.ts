export interface DividerDto {
  orientation: "horizontal" | "vertical";
  margin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}
