import type { HTMLAttributes } from "react";

type LinearGradientProps = HTMLAttributes<HTMLDivElement> & {
  colors: string[];
  locations?: number[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  className?: string;
};

export function LinearGradient({
  colors,
  style,
  className,
  children,
  ...props
}: LinearGradientProps) {
  // Build the CSS gradient string
  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;
  return (
    <div
      style={{
        background: gradient,
        ...style
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
