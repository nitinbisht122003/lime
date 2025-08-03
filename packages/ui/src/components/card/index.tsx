import type { ComponentPropsWithVariants } from "../../types";
import { View } from "../../elements/view";
import { cardStyle } from "./styles";

type ICardProps = ComponentPropsWithVariants<typeof View, typeof cardStyle>;

const Card = ({ className, size = "md", variant = "elevated", ...props }: ICardProps) => {
  return <View {...props} className={cardStyle({ size, variant, class: className })} />;
};

export { Card };
