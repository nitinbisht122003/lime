"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import { Button, ButtonText } from "@app/ui/components/button";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Image } from "../../elements/image";
import { Icon } from "../icon";
import {
  imageSize,
  promonoteButtonStyle,
  promonoteButtonTextStyle,
  promonoteIconStyle,
  promonoteImageStyle,
  promonoteStyle,
  promonoteSubtitleStyle,
  promonoteTitleStyle
} from "./styles";

const SCOPE = "PROMONOTE";

type IContext = IStyleContext<typeof promonoteStyle>;

const PromonoteRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

type IPromonoteProps = ComponentPropsWithVariants<typeof PromonoteRoot, typeof promonoteStyle>;

export function Promonote({ className, size, type, children, ...props }: IPromonoteProps) {
  return (
    <PromonoteRoot
      {...props}
      className={promonoteStyle({ size, type, class: className })}
      context={{ size, type }}
    >
      {children}
    </PromonoteRoot>
  );
}

type IPromonoteImageProps = ComponentPropsWithVariants<typeof Image, typeof promonoteImageStyle>;

export function PromonoteImage({ className, ...props }: IPromonoteImageProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Image
      size={imageSize[size]}
      {...props}
      className={promonoteImageStyle({ class: className })}
    />
  );
}

type IPromonoteIconProps = ComponentPropsWithVariants<typeof Icon, typeof promonoteIconStyle>;

export function PromonoteIcon({ className, ...props }: IPromonoteIconProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Icon
      {...props}
      className={promonoteIconStyle({ class: className, parentVariants: { size } })}
    />
  );
}

type IPromonoteTitleProps = ComponentPropsWithVariants<typeof Text, typeof promonoteTitleStyle>;
export function PromonoteTitle({ className, children, ...props }: IPromonoteTitleProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={promonoteTitleStyle({ class: className, parentVariants: { size } })}
    >
      {children}
    </Text>
  );
}

type IPromonoteSubTitleProps = ComponentPropsWithVariants<
  typeof Text,
  typeof promonoteSubtitleStyle
>;
export function PromonoteSubTitle({ className, children, ...props }: IPromonoteSubTitleProps) {
  const { size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={promonoteSubtitleStyle({ class: className, parentVariants: { size } })}
    >
      {children}
    </Text>
  );
}

type IPromonoteButtonProps = ComponentPropsWithVariants<typeof Button, typeof promonoteButtonStyle>;

export function PromonoteButton({
  variant = "solid",
  className,
  children,
  ...props
}: IPromonoteButtonProps) {
  const { type = "info", size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <Button
      {...props}
      className={promonoteButtonStyle({
        class: className,
        parentVariants: { type, size },
        variant
      })}
    >
      {children}
    </Button>
  );
}

type IPromonoteButtonTextProps = ComponentPropsWithVariants<
  typeof ButtonText,
  typeof promonoteButtonTextStyle
>;
export function PromonoteButtonText({ className, children, ...props }: IPromonoteButtonTextProps) {
  const { type = "info", size = "md" } = useStyleContext<IContext>(SCOPE);

  return (
    <ButtonText
      {...props}
      className={promonoteButtonTextStyle({ class: className, parentVariants: { type, size } })}
    >
      {children}
    </ButtonText>
  );
}
