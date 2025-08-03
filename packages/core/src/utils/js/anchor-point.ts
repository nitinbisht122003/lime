// utils/anchor-point.ts
import type { TransformsStyle } from "react-native";

interface Point {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

/**
 * Transforms with anchor point
 *
 * @param transform - The transform style
 * @param anchorPoint - The anchor point (0,0 is top-left, 1,1 is bottom-right)
 * @param size - The size of the element
 * @returns A new transform with the anchor point applied
 */
export function withAnchorPoint(transform: TransformsStyle, anchorPoint: Point, size: Size) {
  // Extract the dimensions
  const { width, height } = size;
  // Extract x and y anchor point values
  const { x, y } = anchorPoint;

  // Calculate the anchor point position
  const anchorPointX = x * width;
  const anchorPointY = y * height;

  // Create a new transform with translations before and after
  // to ensure we rotate/scale around the anchor point
  return {
    transform: [
      // First translate to the anchor point
      { translateX: anchorPointX },
      { translateY: anchorPointY },
      // Then apply all the original transforms
      ...(transform.transform ?? []),
      // Then translate back from the anchor point
      { translateX: -anchorPointX },
      { translateY: -anchorPointY }
    ]
  };
}
