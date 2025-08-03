import type { ComponentPropsWithVariants } from "../../types";
import { skeletonStyle, skeletonTextStyle } from "./styles";

type ISkeletonProps = ComponentPropsWithVariants<"div", typeof skeletonStyle> & {
  startColor?: string;
  isLoaded?: boolean;
};

export function Skeleton({
  className,
  variant = "rounded",
  children,
  speed = 2,
  startColor = "bg-background-300",
  isLoaded = false,
  ...props
}: ISkeletonProps) {
  if (!isLoaded) {
    return (
      <div
        {...props}
        className={`animate-pulse ${startColor} ${skeletonStyle({
          variant,
          speed,
          class: className
        })}`}
      />
    );
  } else {
    return children;
  }
}

type ISkeletonTextProps = ComponentPropsWithVariants<"div", typeof skeletonTextStyle> & {
  _lines?: number;
  isLoaded?: boolean;
  startColor?: string;
};

export function SkeletonText({
  className,
  _lines,
  isLoaded = false,
  startColor = "bg-background-200",
  gap = 2,
  children,
  ref,
  ...props
}: ISkeletonTextProps) {
  if (!isLoaded) {
    if (_lines) {
      return (
        <div
          ref={ref}
          className={`flex flex-col ${skeletonTextStyle({
            gap
          })}`}
        >
          {Array.from({ length: _lines }).map((_, index) => (
            <div
              {...props}
              key={index}
              className={`animate-pulse ${startColor} ${skeletonTextStyle({
                class: className
              })}`}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div
          {...props}
          ref={ref}
          className={`animate-pulse ${startColor} ${skeletonTextStyle({
            class: className
          })}`}
        />
      );
    }
  } else {
    return children;
  }
}
