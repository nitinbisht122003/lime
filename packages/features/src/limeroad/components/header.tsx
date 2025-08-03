"use client";

import type { ComponentProps } from "react";
import { useCallback } from "react";

import type { CustomIcon } from "@app/ui/types";
import {
  HeaderBack,
  HeaderLogo,
  HeaderNav,
  HeaderNavIcon,
  HeaderTitle,
  Header as UIHeader
} from "@app/ui/components/header";
import { Icon } from "@app/ui/components/icon";
import { Link } from "@app/ui/elements/link";
import { View } from "@app/ui/elements/view";
import { BagIconHOC } from "@app/ui/icons/bag-icon";
import { BellIcon } from "@app/ui/icons/bell-icon";
import { ChevronLeftIcon } from "@app/ui/icons/chevron-left-icon";
import { HeartIconHOC } from "@app/ui/icons/heart-icon";
import { LimeroadLogo } from "@app/ui/icons/limeroad-logo";
import { SearchIcon } from "@app/ui/icons/search-icon";
import { UserIcon } from "@app/ui/icons/user-icon";

import { ROUTES } from "../utils/routes";

interface IHeaderNav {
  icon: CustomIcon;
  link: string;
}

type HeaderNavOption = "wishlist" | "cart" | "profile" | "search" | "notification";

const headerNavs: Record<HeaderNavOption, IHeaderNav> = {
  wishlist: {
    icon: HeartIconHOC(),
    link: ROUTES.ACCOUNT.WISHLIST
  },
  cart: {
    icon: BagIconHOC({ fill: "#404040" }),
    link: ROUTES.CART
  },
  profile: {
    icon: UserIcon,
    link: ROUTES.ACCOUNT.HOME
  },
  search: {
    icon: SearchIcon,
    link: ROUTES.SEARCH("none")
  },
  notification: {
    icon: BellIcon,
    link: ROUTES.NOTIFICATION
  }
};

type HeaderProps = ComponentProps<typeof UIHeader> & {
  title?: string;
  back?: boolean;
  onBack?: () => void;
  logo?: boolean;
  navOptions?: HeaderNavOption[];
};

export const Header = ({
  title,
  back = false,
  onBack,
  logo = true,
  navOptions = [],
  size = "sm",
  ...props
}: HeaderProps) => {
  const handleBack = useCallback(() => {
    if (onBack) {
      onBack();
    }
  }, [onBack]);

  const showBack = back || onBack !== undefined;

  return (
    <UIHeader size={size} {...props}>
      <View className="flex-row items-center">
        {showBack && (
          <HeaderBack onPress={handleBack}>
            <Icon as={ChevronLeftIcon} size="xl" className="text-typography-800" />
          </HeaderBack>
        )}

        {title ? (
          <HeaderTitle>{title}</HeaderTitle>
        ) : logo ? (
          <HeaderLogo>
            <Icon as={LimeroadLogo} height={23} />
          </HeaderLogo>
        ) : null}
      </View>

      <HeaderNav spacing="sm">
        {navOptions.map((option) => {
          const { icon: IconComponent, link } = headerNavs[option];

          return (
            <Link href={link} key={option}>
              <HeaderNavIcon>
                <Icon as={IconComponent} size="xl" className="text-typography-800" />
              </HeaderNavIcon>
            </Link>
          );
        })}
      </HeaderNav>
    </UIHeader>
  );
};
