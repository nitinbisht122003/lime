import type { ComponentProps } from "react";

import { Text } from "../../elements/text";

type TextLinearGradientProps = ComponentProps<typeof Text> & {
  start?: string;
  end?: string;
  color?: string;
};

// Custom function to generate gradient colors automatically
export function generateGradientColors(baseColor: string): { start: string; end: string } {
  const cleanColor = baseColor.replace("#", "").toLowerCase();

  if (cleanColor === "ffffff" || cleanColor === "white") {
    return { start: "#111827", end: "#6B7280" };
  }

  if (cleanColor === "000000" || cleanColor === "black") {
    return { start: "#000000", end: "#6B7280" };
  }

  const hex = cleanColor.padStart(6, "0");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Create lighter version for start (add 60 to each component)
  const lightR = Math.min(255, r + 60);
  const lightG = Math.min(255, g + 60);
  const lightB = Math.min(255, b + 60);

  // Create darker version for end (subtract 80 from each component for more darkness)
  const darkR = Math.max(0, r - 80);
  const darkG = Math.max(0, g - 80);
  const darkB = Math.max(0, b - 80);

  const startColor = `#${lightR.toString(16).padStart(2, "0")}${lightG.toString(16).padStart(2, "0")}${lightB.toString(16).padStart(2, "0")}`;
  const endColor = `#${darkR.toString(16).padStart(2, "0")}${darkG.toString(16).padStart(2, "0")}${darkB.toString(16).padStart(2, "0")}`;

  return { start: endColor, end: startColor };
}

export function TextLinearGradient({
  children,
  start,
  end,
  color,
  ...props
}: TextLinearGradientProps) {
  let gradientStart: string;
  let gradientEnd: string;

  if (color) {
    const generated = generateGradientColors(color);
    gradientStart = generated.start;
    gradientEnd = generated.end;
  } else if (start && end) {
    gradientStart = start;
    gradientEnd = end;
  } else if (start || end) {
    const baseColor = start ?? end ?? "#3B82F6";
    const generated = generateGradientColors(baseColor);
    gradientStart = start ?? generated.start;
    gradientEnd = end ?? generated.end;
  } else {
    gradientStart = "#3B82F6";
    gradientEnd = "#1E40AF";
  }

  const textStyle = {
    background: `linear-gradient(90deg, ${gradientStart} 0%, ${gradientEnd} 100%) text`,
    WebkitTextFillColor: "transparent",
    color: "transparent"
  };

  return (
    <Text {...props} style={textStyle}>
      {children}
    </Text>
  );
}
