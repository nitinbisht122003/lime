"use client";

import type { ComponentProps, FC } from "react";

import type { PromonoteViewModel } from "@app/types/limeroad";
import type { CustomIcon } from "@app/ui/types";
import {
  PromonoteButton,
  PromonoteButtonText,
  PromonoteIcon,
  PromonoteImage,
  PromonoteSubTitle,
  PromonoteTitle,
  Promonote as PromonoteUI
} from "@app/ui/components/promonote";
import { View } from "@app/ui/elements/view";
import { SuccessIconHOC } from "@app/ui/icons/success-icon";

type PromonoteProps = ComponentProps<typeof PromonoteUI> & {
  data: PromonoteViewModel;
};

export const Promonote: FC<PromonoteProps> = ({ data, ...props }) => {
  const { variant, size, title, subtitle, action_button } = data;

  const imageSrc = getVariantImage(variant);
  const IconComponent = getVariantIcon(variant);

  const handleActionPress = () => {
    if (!action_button) return;

    if (action_button.type === "link" && action_button.link) {
      window.location.href = action_button.link;
    } else if (action_button.type === "api" && action_button.api) {
      console.log("API call:", action_button.api);
    }
  };

  return (
    <PromonoteUI size={size} type={variant} {...props}>
      <View className="flex-1 flex-row items-center gap-2">
        {/* icon */}
        {imageSrc ? (
          <PromonoteImage src={imageSrc} alt="Promonote image" />
        ) : IconComponent ? (
          <PromonoteIcon as={IconComponent} />
        ) : null}
        {/* title and subtitle */}
        <View className="flex-1">
          {title && <PromonoteTitle>{title}</PromonoteTitle>}
          {subtitle && <PromonoteSubTitle>{subtitle}</PromonoteSubTitle>}
        </View>
      </View>
      {/* action button */}
      {action_button && (
        <PromonoteButton variant={action_button.variant} onPress={handleActionPress}>
          <PromonoteButtonText>{action_button.text}</PromonoteButtonText>
        </PromonoteButton>
      )}
    </PromonoteUI>
  );
};

const getVariantImage = (variant: PromonoteViewModel["variant"]) => {
  switch (variant) {
    case "info":
      return "https://img0.junaroad.com/images/boradcasticon4x.png";
    case "gold":
      return "https://img1.junaroad.com/assets/images/mobileNotif/img-1733741522686.jpg";
    default:
      return null;
  }
};

const getVariantIcon = (variant: PromonoteViewModel["variant"]): CustomIcon | null => {
  switch (variant) {
    case "success":
      return SuccessIconHOC({ fill: "#99CC33" });
    default:
      return null;
  }
};
