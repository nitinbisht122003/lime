import type { ReactNode } from "react";

/**
 * Grid layout direction types (horizontal or vertical)
 */
export type GridDirection = "horizontal" | "vertical";

/**
 * Base properties shared by all grid item types
 */
interface BaseGridItem {
  type: "root" | "grid" | "element";
}

/**
 * Shared layout properties for container-type items (root and grid)
 */
interface ContainerLayout {
  direction: GridDirection;
  split: number[]; // Percentages that should add up to 100
  gap?: number;
}

/**
 * Basic grid element
 */
export interface IBasicGridElement {
  image: string;
  text?: string;
  rounded?: boolean;
}

/**
 * Root grid item - the top level container of the grid layout
 */
export interface GridRootItem<T extends object = IBasicGridElement>
  extends BaseGridItem,
    ContainerLayout {
  type: "root";
  width?: number | `${number}%`;
  height?: number | `${number}%`;
  aspectRatio?: number;
  children: GridItem<T>[];
}

/**
 * Standard grid container item - can contain other grids or elements
 */
export interface GridContainerItem<T extends object = IBasicGridElement>
  extends BaseGridItem,
    ContainerLayout {
  type: "grid";
  children: GridItem<T>[];
}

/**
 * Element item - a leaf node in the grid that renders actual content
 */
export interface GridElementItem<T extends object = IBasicGridElement> extends BaseGridItem {
  type: "element";
  data: T;
}

/**
 * Union type representing any grid item (container or element)
 */
export type GridItem<T extends object = IBasicGridElement> =
  | GridContainerItem<T>
  | GridElementItem<T>;

/**
 * The complete grid layout data structure
 */
export type GridLayoutData<T extends object = IBasicGridElement> = GridRootItem<T>;

/**
 * Props for the GridLayout component
 */
export interface GridLayoutProps<T extends object = IBasicGridElement> {
  /** The grid layout data structure */
  data: GridLayoutData<T>;

  /** Optional class name for the root container */
  className?: string;

  /** Optional custom renderer for element items */
  renderElement?: (item: GridElementItem<T>, index: number) => ReactNode;
}
