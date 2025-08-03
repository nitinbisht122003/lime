import type { ReactNode } from "react";

/**
 * Props for the Ticker component
 */
export interface TickerProps {
  /**
   * Array of text items to display
   */
  texts: string[];

  /**
   * Separator symbol between items
   * @default "•"
   */
  separator?: string;

  /**
   * Speed of the ticker in pixels per second
   * @default 50
   */
  speed?: number;

  /**
   * Direction of the ticker animation
   * @default "left"
   */
  direction?: "left" | "right";

  /**
   * Number of times to repeat the items for smoother looping
   * @default 2
   */
  repeat?: number;

  /**
   * Custom renderer for ticker items
   */
  renderItem?: (text: string, index: number) => ReactNode;

  /**
   * Custom renderer for separator
   */
  renderSeparator?: () => ReactNode;
}

/**
 * Props for the TickerAnimation component
 */
export interface TickerAnimationProps {
  /**
   * Child components to animate
   */
  children: ReactNode;

  /**
   * Speed of the animation in pixels per second
   */
  speed: number;

  /**
   * Direction of the animation
   */
  direction: "left" | "right";

  /**
   * Number of repeated items
   * @default 2
   */
  repeat?: number;
}
