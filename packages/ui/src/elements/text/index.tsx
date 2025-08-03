import { Text as RNText } from "react-native";

import type { ComponentPropsWithVariants } from "../../types";
import { textStyle } from "./styles";

type ITextProps = ComponentPropsWithVariants<typeof RNText, typeof textStyle>;

const Text = ({
  className,
  isTruncated,
  bold,
  underline,
  strikeThrough,
  sub,
  italic,
  highlight,
  ...props
}: ITextProps) => {
  return (
    <RNText
      {...props}
      className={textStyle({
        isTruncated,
        bold,
        underline,
        strikeThrough,
        sub,
        italic,
        highlight,
        class: className
      })}
    />
  );
};

export { Text };
