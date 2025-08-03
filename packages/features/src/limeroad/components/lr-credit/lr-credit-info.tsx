"use client";

import type { ComponentProps, FC } from "react";
import { useCallback, useState } from "react";

import type { LrCreditInfoViewModel } from "@app/types/limeroad";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetPortal,
  BottomSheetTitle
} from "@app/ui/components/bottomsheet";
import { Icon } from "@app/ui/components/icon";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalHeader
} from "@app/ui/components/modal";
import { Image } from "@app/ui/elements/image";
import { Link } from "@app/ui/elements/link";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { InfoIcon } from "@app/ui/icons/info-icon";
import { RightArrowIconHOC } from "@app/ui/icons/right-arrow-icon";
import { ShoppingBagIcon } from "@app/ui/icons/shopping-bag-icon";
import { XIcon } from "@app/ui/icons/x-icon";

type LrCreditInfoProps = ComponentProps<typeof View> & {
  data: LrCreditInfoViewModel;
};

export const LrCreditInfo: FC<LrCreditInfoProps> = ({ data, ...props }) => {
  // data
  const { total_credits, transferable_credits, promotional_credits, tnc, shop_link, faq } = data;

  // hooks
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showFaqSheet, setShowFaqSheet] = useState(false);

  // actions
  const handleOpenInfoModal = useCallback(() => {
    setShowInfoModal(true);
  }, []);

  const handleCloseInfoModal = useCallback(() => {
    setShowInfoModal(false);
  }, []);

  const handleOpenFaqSheet = useCallback(() => {
    setShowFaqSheet(true);
  }, []);

  const handleCloseFaqSheet = useCallback(() => {
    setShowFaqSheet(false);
  }, []);

  return (
    <View
      {...props}
      className="from-lr-green-200 to-lr-green-50 relative items-center bg-gradient-to-b p-4"
    >
      {/* info modal */}
      <Pressable className="absolute right-4 top-2" onPress={handleOpenInfoModal}>
        <Icon as={InfoIcon} size="lg" />
      </Pressable>
      <LrCreditInfoModal
        isOpen={showInfoModal}
        onClose={handleCloseInfoModal}
        info={{
          transferableCredits: transferable_credits,
          promotionalCredits: promotional_credits,
          tnc
        }}
      />
      {/* available lr credits */}
      <Text className="mb-2 mt-3 text-center text-xs font-semibold">AVAILABLE LR CREDITS</Text>
      <Text className="text-lr-green-400 mb-8 text-[40px] font-bold">₹{total_credits}</Text>
      {/* faq */}
      <Pressable onPress={handleOpenFaqSheet}>
        <Text className="text-lr-green-600 mb-6 text-xl underline">How to use LR Credits?</Text>
      </Pressable>
      <LrCreditFaqSheet
        faq={{
          title: faq.title,
          faqs: faq.faq_list
        }}
        open={showFaqSheet}
        onOpenChange={handleCloseFaqSheet}
      />
      {/* shop link */}
      {shop_link && (
        <Link href={shop_link} className="mt-2 w-full max-w-md overflow-hidden rounded shadow">
          <View className="flex-row items-center gap-2 bg-white px-6 py-4">
            <Icon as={ShoppingBagIcon} size="xl" />
            <Text className="text-lr-grey-900 flex-1 text-lg font-medium">Shop Now</Text>
            <Icon as={RightArrowIconHOC({ fill: "#67921D" })} size="lg" />
          </View>
        </Link>
      )}
    </View>
  );
};

type LrCreditInfoModalProps = ComponentProps<typeof Modal> & {
  info: {
    transferableCredits: number;
    promotionalCredits: number;
    tnc: string[];
  };
};

export const LrCreditInfoModal: FC<LrCreditInfoModalProps> = ({
  info,
  isOpen,
  onClose,
  size = "lg",
  ...props
}) => {
  const { transferableCredits, promotionalCredits, tnc } = info;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} {...props}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader className="p-3">
          <Text className="flex-1 text-center text-lg font-semibold">LR Credits</Text>
        </ModalHeader>
        <ModalBody className="m-0">
          <View className="border-lr-grey-500 flex flex-row items-center border-b border-t">
            <View className="flex-1 items-center p-2">
              <Text className="text-lr-grey-500 mb-1 text-xs">PROMOTIONAL</Text>
              <Text className="text-lr-green-400 text-sm font-semibold">₹{promotionalCredits}</Text>
            </View>
            <View className="border-lr-grey-500 flex-1 items-center border-l p-2">
              <Text className="text-lr-grey-500 mb-1 text-xs">TRANSFERABLE</Text>
              <Text className="text-lr-green-400 text-sm font-semibold">
                ₹{transferableCredits}
              </Text>
            </View>
          </View>
          {/* terms & conditions */}
          <View className="gap-2 p-4">
            <Text className="text-sm font-semibold">Terms & Conditions</Text>
            <View className="gap-1.5">
              {tnc.map((item, idx) => (
                <View key={idx} className="flex-row items-center gap-1.5">
                  <Text className="text-lr-grey-600 text-xs">*</Text>
                  <Text className="text-lr-grey-600 text-justify text-xs">{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

type LrCreditFaqSheetProps = ComponentProps<typeof BottomSheet> & {
  faq: {
    title: string;
    faqs: { title: string; description: string; image: string }[];
  };
};

export const LrCreditFaqSheet: FC<LrCreditFaqSheetProps> = ({
  faq,
  open,
  onOpenChange,
  ...props
}) => {
  const { title, faqs } = faq;

  return (
    <BottomSheet open={open} onOpenChange={onOpenChange} {...props}>
      <BottomSheetPortal>
        <BottomSheetContent className="p-0">
          <BottomSheetHeader className="bg-lr-grey-200">
            <BottomSheetTitle>{title}</BottomSheetTitle>
            <BottomSheetClose>
              <Icon as={XIcon} size="2xs" />
            </BottomSheetClose>
          </BottomSheetHeader>
          <View className="gap-4 px-4 pb-6 pt-4">
            {/* faqs */}
            {faqs.map((faq, idx) => (
              <View
                key={idx}
                className="bg-lr-grey-100 border-lr-grey-200 flex-row items-center gap-3 rounded-lg border p-4"
              >
                <View className="flex-1">
                  <Text className="mb-1 text-base">{faq.title}</Text>
                  <Text className="text-lr-grey-700 mb-2 text-sm">{faq.description}</Text>
                </View>
                <Image src={faq.image} alt={faq.title} className="h-full w-24" />
              </View>
            ))}
            {/* more faqs */}
            <View className="items-center">
              <Text className="text-lg">
                To know more, check (
                <Link href={"#"} className="text-lr-green-400 mb-2 pl-1 underline">
                  FAQs
                </Link>
                )
              </Text>
            </View>
          </View>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
};
