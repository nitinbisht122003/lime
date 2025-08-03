import type { ComponentProps, ReactNode } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

type ZoomProps = ComponentProps<typeof TransformWrapper> & {
  children: ReactNode;
};

export const Zoom = ({ children, ...props }: ZoomProps) => {
  return (
    <TransformWrapper {...props}>
      <TransformComponent>{children}</TransformComponent>
    </TransformWrapper>
  );
};
