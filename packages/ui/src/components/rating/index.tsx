"use client";

import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";

import type { ComponentPropsWithVariants, IStyleContext } from "../../types";
import { Text } from "../../elements/text";
import { View } from "../../elements/view";
import { StarIcon } from "../../icons/star-icon";
import { Icon } from "../icon";
import { ratingIconStyle, ratingStyle, ratingValueStyle } from "./styles";

// Define the component scope for context
const SCOPE = "RATING";

type IContext = IStyleContext<typeof ratingStyle>;

// Create root component with style context
const RatingRoot = withStyleContext<IContext, typeof View>(View, SCOPE);

// Rating component props
interface RatingProps extends ComponentPropsWithVariants<typeof RatingRoot, typeof ratingStyle> {
  rating: number;
  showValue?: boolean;
  iconClassName?: string;
}

export function Rating({
  className,
  size = "md",
  rating,
  showValue = true,
  iconClassName,
  ...props
}: RatingProps) {
  return (
    <RatingRoot {...props} className={ratingStyle({ size, class: className })} context={{ size }}>
      {showValue && <RatingValue>{rating}</RatingValue>}
      <RatingIcon className={iconClassName} />
    </RatingRoot>
  );
}

// RatingValue component
type RatingValueProps = ComponentPropsWithVariants<typeof Text, typeof ratingValueStyle>;

function RatingValue({ className, children, ...props }: RatingValueProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <Text
      {...props}
      className={ratingValueStyle({
        parentVariants: { size },
        class: className
      })}
    >
      {children}
    </Text>
  );
}

// RatingIcon component
type RatingIconProps = ComponentPropsWithVariants<typeof View, typeof ratingIconStyle>;

function RatingIcon({ className, ...props }: RatingIconProps) {
  const { size } = useStyleContext<IContext>(SCOPE);

  return (
    <View
      {...props}
      className={ratingIconStyle({
        parentVariants: { size },
        class: className
      })}
    >
      <Icon as={StarIcon} />
    </View>
  );
}

export { ratingIconStyle, ratingStyle, ratingValueStyle };
