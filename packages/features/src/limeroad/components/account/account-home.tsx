"use client";

import type { ComponentProps, FC } from "react";
import { Fragment, useCallback, useState } from "react";
import { Pressable } from "react-native";

import type { AccountViewModel, BarcodeViewModel } from "@app/types/limeroad";
import { Button, ButtonText } from "@app/ui/components/button";
import { Divider } from "@app/ui/components/divider";
import { Icon } from "@app/ui/components/icon";
import { Modal, ModalBackdrop, ModalBody, ModalContent } from "@app/ui/components/modal";
import { Image } from "@app/ui/elements/image";
import { Link } from "@app/ui/elements/link";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { ChevronRightIcon } from "@app/ui/icons/chevron-right-icon";
import { cn } from "@app/ui/utils/cn";

import { ROUTES } from "../../utils/routes";

type AccountProps = ComponentProps<typeof View> & {
  data: AccountViewModel;
};

interface AccountOption {
  title: string;
  description?: string;
  link?: string;
  action?: () => void;
}

export const AccountHome: FC<AccountProps> = ({ data, ...props }) => {
  // actions
  const handleContactUs = useCallback(() => {
    alert("Contact me");
  }, []);

  const handleDeleteAccount = useCallback(() => {
    alert("Delete Account Clicked");
  }, []);

  const handleLogout = useCallback(() => {
    alert("Logout Clicked");
  }, []);

  // derived
  const accountOptions: AccountOption[] = [
    {
      title: "My Profile",
      description: "Manage your Likes, Looks & Stories",
      link: ROUTES.ACCOUNT.PROFILE
    },
    {
      title: "My Orders",
      description: "Manage your current and past orders",
      link: ROUTES.ACCOUNT.ORDERS
    },
    {
      title: "My Rewards & Coupons",
      description: "View your rewards & coupons",
      link: ROUTES.ACCOUNT.REWARDS
    },
    {
      title: "My Returns",
      description: "View your recent returns",
      link: ROUTES.ACCOUNT.RETURNS
    },
    {
      title: "LR Credits",
      description: "View your LR transactions",
      link: ROUTES.ACCOUNT.CREDITS
    },
    {
      title: "My Wishlist",
      description: "View your wishlist",
      link: ROUTES.ACCOUNT.WISHLIST
    },
    {
      title: "Contact Us",
      description: "01246650600",
      action: handleContactUs
    },
    {
      title: "Delete Account",
      action: handleDeleteAccount
    },
    {
      title: "Logout",
      action: handleLogout
    }
  ];

  return (
    <View className="m-2.5 gap-4" {...props}>
      {/* profile card */}
      <ProfileCard data={data} />
      {/* account options */}
      <View
        className="border-lr-grey-100 rounded-lg bg-white p-4"
        style={{
          boxShadow: "rgb(50 50 93 / 35%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px"
        }}
      >
        {accountOptions.map((option, idx) => (
          <Fragment key={option.title}>
            {idx > 0 && <Divider className="my-2" />}
            <AccountOption option={option} />
          </Fragment>
        ))}
      </View>
    </View>
  );
};

type AccountOptionProps = ComponentProps<typeof View> & {
  option: AccountOption;
};

const AccountOption = ({ option, className, ...props }: AccountOptionProps) => {
  // data
  const { title, description, link, action } = option;

  if (link)
    return (
      <Link href={link}>
        <View className={cn("flex-row items-center justify-between py-1", className)} {...props}>
          <View className="gap-1">
            <Text className="text-lr-grey-950 text-xs font-semibold uppercase">{title}</Text>
            {description && <Text className="text-lr-grey-400 text-xs">{description}</Text>}
          </View>
          <Icon as={ChevronRightIcon} size="md" className="text-lr-grey-800" />
        </View>
      </Link>
    );

  if (action)
    return (
      <Pressable className={cn("gap-1 py-1", className)} onPress={action} {...props}>
        <Text className="text-lr-grey-950 text-xs font-semibold uppercase">{title}</Text>
        {description && <Text className="text-lr-grey-400 text-xs">{description}</Text>}
      </Pressable>
    );
};

export const ProfileCard = ({ data }: { data: AccountViewModel }) => {
  // data
  const { profile_image, job_title, name, contact_number, barcode, lr_credits } = data;

  // hooks
  const [isBarcodeModalOpen, setBarcodeModalOpen] = useState(false);

  // actions
  const handleScanAtStorePress = useCallback(() => {
    setBarcodeModalOpen(true);
  }, []);

  const handleBarcodeModalClose = useCallback(() => {
    setBarcodeModalOpen(false);
  }, []);

  return (
    <View className="items-center gap-4 rounded-lg bg-[#555555] py-6">
      <View className="items-center gap-1.5">
        <Image src={profile_image} alt={name} className="rounded-full" size="sm" />
        <Text className="text-lr-grey-400 rounded-md bg-white p-1.5 text-xs font-bold uppercase">
          {job_title}
        </Text>
      </View>
      <View className="items-center gap-1">
        <Text className="text-xl uppercase text-white">{name}</Text>
        <Text className="text-sm text-white">{contact_number}</Text>
      </View>
      <View className="items-center gap-1">
        <Text className="text-lg text-white">LR CREDITS</Text>
        <Text className="text-sm text-white">{lr_credits}</Text>
      </View>
      <Button variant="outline" action="secondary" size="sm" onPress={handleScanAtStorePress}>
        <View className="h-4 w-8 flex-1 items-center">
          <Image src={barcode.image} alt="barcode" size="full"></Image>
        </View>
        <ButtonText className="text-sm font-semibold uppercase text-white">
          Scan At Store
        </ButtonText>
      </Button>
      <BarcodeModal
        name={name}
        barcode={barcode}
        isOpen={isBarcodeModalOpen}
        onClose={handleBarcodeModalClose}
      />
    </View>
  );
};

type BarcodeModalProps = ComponentProps<typeof Modal> & {
  name: string;
  barcode: BarcodeViewModel;
};

const BarcodeModal = ({ name, barcode, isOpen, onClose, ...props }: BarcodeModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" className="p-0" {...props}>
      <ModalBackdrop />
      <ModalContent>
        <ModalBody className="p-4">
          <View className="gap-2">
            <View className="flex-row gap-1">
              <Text className="text-xs">Dear:</Text>
              <Text className="text-xs font-semibold">{name},</Text>
            </View>
            <Text className="text-xs">{barcode.description}</Text>
            <Image
              src={barcode.image}
              alt="QR Code for scanning at store"
              size="md"
              className="mx-auto"
            />
          </View>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
