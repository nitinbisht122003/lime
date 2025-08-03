export type Separator = "heptagram";

export interface TickerDto {
  announcements: string[];
  separator?: Separator;
}
