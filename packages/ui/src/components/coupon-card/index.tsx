import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import { Button, ButtonText } from "../button";
import { Icon } from "../icon";
import {
  couponCardButtonStyle,
  couponCardButtonTextStyle,
  couponCardContentStyle,
  couponCardDescriptionStyle,
  couponCardIconStyle,
  couponCardStyle,
  couponCardTitleStyle
} from "./styles";

const SCOPE = "COUPON_CARD";

type IContext = IStyleContext<typeof couponCardStyle>;

const CouponCardRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

type ICouponCardProps = ComponentPropsWithVariants<typeof CouponCardRoot, typeof couponCardStyle>;

export function CouponCard({
  className,
  size = "md",
  variant = "primary",
  ...props
}: ICouponCardProps) {
  return (
    <CouponCardRoot
      {...props}
      className={couponCardStyle({ class: className, size, variant })}
      context={{ size, variant }}
    />
  );
}

type ICouponCardContentProps = ComponentPropsWithVariants<
  typeof View,
  typeof couponCardContentStyle
>;

export function CouponCardContent({ className, ...props }: ICouponCardContentProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      className={couponCardContentStyle({ class: className, parentVariants: { size } })}
      {...props}
    />
  );
}

type ICouponCardIconProps = ComponentPropsWithVariants<typeof Icon, typeof couponCardIconStyle>;

export function CouponCardIcon({ className, ...props }: ICouponCardIconProps) {
  const { size, variant } = useStyleContext<IContext>(SCOPE);

  return (
    <Icon
      className={couponCardIconStyle({ class: className, parentVariants: { size, variant } })}
      {...props}
    />
  );
}

type ICouponCardTitleProps = ComponentPropsWithVariants<typeof Text, typeof couponCardTitleStyle>;

export function CouponCardTitle({ className, ...props }: ICouponCardTitleProps) {
  const { size, variant } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      className={couponCardTitleStyle({ class: className, parentVariants: { size, variant } })}
      {...props}
    />
  );
}

type ICouponCardDescriptionProps = ComponentPropsWithVariants<
  typeof Text,
  typeof couponCardDescriptionStyle
>;

export function CouponCardDescription({ className, ...props }: ICouponCardDescriptionProps) {
  const { size, variant } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      className={couponCardDescriptionStyle({
        class: className,
        parentVariants: { size, variant }
      })}
      {...props}
    />
  );
}

type ICouponCardButtonProps = ComponentPropsWithVariants<
  typeof Button,
  typeof couponCardButtonStyle
>;

export function CouponCardButton({
  className,
  variant = "link",
  size = "sm",
  ...props
}: ICouponCardButtonProps) {
  const { size: parentSize } = useStyleContext<IContext>(SCOPE);

  return (
    <Button
      variant={variant}
      size={size}
      className={couponCardButtonStyle({
        class: className,
        parentVariants: { size: parentSize }
      })}
      {...props}
    />
  );
}

type ICouponCardButtonTextProps = ComponentPropsWithVariants<
  typeof ButtonText,
  typeof couponCardButtonTextStyle
>;

export function CouponCardButtonText({ className, ...props }: ICouponCardButtonTextProps) {
  const { size, variant } = useStyleContext<IContext>(SCOPE);

  return (
    <ButtonText
      className={couponCardButtonTextStyle({ class: className, parentVariants: { size, variant } })}
      {...props}
    />
  );
}
