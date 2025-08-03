"use client";

import { useState } from "react";

import type { CustomIconHOC } from "@app/ui/types";
import {
  FooterNavIcon,
  FooterNavImage,
  FooterNavItem,
  FooterNavTitle,
  Footer as FooterUI
} from "@app/ui/components/footer";
import { Link } from "@app/ui/elements/link";
import { BagIconHOC } from "@app/ui/icons/bag-icon";
import { HomeIconHOC } from "@app/ui/icons/home-icon";
import { OfferIconHOC } from "@app/ui/icons/offer-icon";
import { StoreIconHOC } from "@app/ui/icons/store-icon";

import { ROUTES } from "../utils/routes";

interface IFooterNav {
  icon?: CustomIconHOC;
  image?: string;
  title: string;
  link: string;
}

type FooterNavOption = "home" | "store" | "search" | "offers" | "bag";

interface FooterProps {
  defaultSelected?: FooterNavOption;
  navOptions?: FooterNavOption[];
}

const footerNavs: Record<FooterNavOption, IFooterNav> = {
  home: {
    icon: HomeIconHOC,
    title: "Home",
    link: ROUTES.HOME
  },
  store: {
    icon: StoreIconHOC,
    title: "Store",
    link: ROUTES.STORE
  },
  search: {
    title: "Search",
    image: "https://n-img1.junaroad.com/assets/images/mobileNotif/img-1748241156918.jpg",
    link: ROUTES.SEARCH("none")
  },
  offers: {
    icon: OfferIconHOC,
    title: "Offers",
    link: ROUTES.OFFERS
  },
  bag: {
    icon: BagIconHOC,
    title: "Bag",
    link: ROUTES.CART
  }
};

export function Footer({
  defaultSelected = "home",
  navOptions = ["home", "store", "search", "offers", "bag"]
}: FooterProps) {
  const [selected, setSelected] = useState<FooterNavOption>(defaultSelected);

  return (
    <FooterUI size="md">
      {navOptions.map((option) => {
        const { icon, image, title, link } = footerNavs[option];
        const isSelected = selected === option;

        return (
          <Link href={link} onClick={() => setSelected(option)}>
            <FooterNavItem key={option}>
              {image && <FooterNavImage src={image} alt={title} />}
              {icon && <FooterNavIcon as={icon({ fill: isSelected ? "currentColor" : "none" })} />}
              <FooterNavTitle>{title}</FooterNavTitle>
            </FooterNavItem>
          </Link>
        );
      })}
    </FooterUI>
  );
}
