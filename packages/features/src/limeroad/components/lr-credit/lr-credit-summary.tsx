"use client";

import type { ComponentProps, FC } from "react";
import { Fragment, useCallback, useState } from "react";

import type {
  CreditAction,
  CreditStatus,
  LrCreditSummaryViewModel,
  SummaryItemViewModel
} from "@app/types/limeroad";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetPortal,
  BottomSheetTitle
} from "@app/ui/components/bottomsheet";
import { Divider } from "@app/ui/components/divider";
import { Icon } from "@app/ui/components/icon";
import { Pressable } from "@app/ui/elements/pressable";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { LeftArrowCircleIconHOC } from "@app/ui/icons/left-arrow-circle-icon";
import { RightArrowCircleIconHOC } from "@app/ui/icons/right-arrow-circle-icon";
import { XIcon } from "@app/ui/icons/x-icon";
import { cn } from "@app/ui/utils/cn";

type LrCreditSummaryProps = ComponentProps<typeof View> & {
  data: LrCreditSummaryViewModel;
};

export const LrCreditSummary: FC<LrCreditSummaryProps> = ({ data, ...props }) => {
  // data
  const { title, items } = data;

  // hooks
  const [showDetailsSheet, setShowDetailsSheet] = useState(false);
  const [selectedSummaryItem, setSelectedSummaryItem] = useState<SummaryItemViewModel | null>(null);

  // actions
  const handleDetailsSheetOpenChange = useCallback((open: boolean) => {
    setShowDetailsSheet(open);
    setSelectedSummaryItem(null);
  }, []);

  const handleSummaryItemPress = useCallback((item: SummaryItemViewModel) => {
    setSelectedSummaryItem(item);
    setShowDetailsSheet(true);
  }, []);

  return (
    <View {...props}>
      {/* title */}
      {title && <Text className="text-lr-grey-950 p-4 py-6 text-base font-semibold">{title}</Text>}
      {/* items */}
      <View className="gap-2 px-4">
        {items.map((item, index) => (
          <Fragment key={index}>
            <Divider className="my-0" />
            <LrCreditSummaryItem item={item} onPress={() => handleSummaryItemPress(item)} />
          </Fragment>
        ))}
      </View>
      {/* details sheet */}
      {selectedSummaryItem && (
        <LrCreditDetailsSheet
          open={showDetailsSheet}
          onOpenChange={handleDetailsSheetOpenChange}
          summaryItem={selectedSummaryItem}
        />
      )}
    </View>
  );
};

type LrCreditSummaryItemProps = ComponentProps<typeof Pressable> & {
  item: SummaryItemViewModel;
};

const LrCreditSummaryItem: FC<LrCreditSummaryItemProps> = ({
  item,
  onPress,
  className,
  ...props
}) => {
  // data
  const { title, subtitle, action, status, amount, formattedDate } = item;

  // derived
  const formattedTitle = `${title} ${status === "expired" ? "(Expired)" : status === "pending" ? "(Pending)" : ""}`;

  return (
    <Pressable onPress={onPress} className={cn("bg-white py-2", className)} {...props}>
      <View className="flex-row items-center justify-between">
        <View className="flex-1 flex-row items-center gap-1">
          <LrCreditSummaryItemIcon status={status} action={action} size="xl" />
          <View className="gap-1">
            <LrCreditSummaryItemTitle title={formattedTitle} />
            <LrCreditSummaryItemSubtitle subtitle={subtitle} />
          </View>
        </View>
        <View className="items-end gap-1">
          <LrCreditSummaryItemDate date={formattedDate} />
          <LrCreditSummaryItemAmount amount={amount} status={status} action={action} />
        </View>
      </View>
    </Pressable>
  );
};

type LrCreditSummaryItemIconProps = ComponentProps<typeof Icon> & {
  status: CreditStatus;
  action: CreditAction;
};

const LrCreditSummaryItemIcon: FC<LrCreditSummaryItemIconProps> = ({
  status,
  action,
  ...props
}) => {
  if (status === "expired")
    return <Icon as={LeftArrowCircleIconHOC({ fill: "#98a2b3", stroke: "white" })} {...props} />;

  if (status === "pending")
    return <Icon as={RightArrowCircleIconHOC({ fill: "#facc15", stroke: "white" })} {...props} />;

  if (action === "credit")
    return <Icon as={RightArrowCircleIconHOC({ fill: "#99cc33", stroke: "white" })} {...props} />;

  return <Icon as={LeftArrowCircleIconHOC({ fill: "#ef4444", stroke: "white" })} {...props} />;
};

type LrCreditSummaryItemTitleProps = ComponentProps<typeof View> & {
  title: string;
};

const LrCreditSummaryItemTitle: FC<LrCreditSummaryItemTitleProps> = ({ title, ...props }) => {
  return (
    <Text className="text-lr-grey-800 text-sm" {...props}>
      {title}
    </Text>
  );
};

type LrCreditSummaryItemSubtitleProps = ComponentProps<typeof Text> & {
  subtitle: string;
};

const LrCreditSummaryItemSubtitle: FC<LrCreditSummaryItemSubtitleProps> = ({
  subtitle,
  ...props
}) => {
  return (
    <Text className="text-lr-grey-500 text-xs" {...props}>
      {subtitle}
    </Text>
  );
};

type LrCreditSummaryItemAmountProps = ComponentProps<typeof Text> & {
  amount: number;
  status: CreditStatus;
  action: CreditAction;
};

const LrCreditSummaryItemAmount: FC<LrCreditSummaryItemAmountProps> = ({
  amount,
  status,
  action,
  ...props
}) => {
  const sign = action === "credit" ? "+" : "-";

  if (status === "expired")
    return (
      <Text className="text-lr-grey-400 text-sm font-semibold" {...props}>
        ₹{amount}
      </Text>
    );

  if (status === "pending")
    return (
      <Text className="text-sm font-semibold text-yellow-400" {...props}>
        {sign} ₹{amount}
      </Text>
    );

  if (action === "credit")
    return (
      <Text className="text-lr-green-400 text-sm font-semibold" {...props}>
        {sign} ₹{amount}
      </Text>
    );

  return (
    <Text className="text-error-400 text-sm font-semibold" {...props}>
      {sign} ₹{amount}
    </Text>
  );
};

type LrCreditSummaryItemDateProps = ComponentProps<typeof Text> & {
  date: string;
};

const LrCreditSummaryItemDate: FC<LrCreditSummaryItemDateProps> = ({ date, ...props }) => {
  return (
    <Text className="text-lr-grey-800 text-xs" {...props}>
      {date}
    </Text>
  );
};

type LrCreditDetailsSheetProps = ComponentProps<typeof BottomSheet> & {
  summaryItem: SummaryItemViewModel;
};

const LrCreditDetailsSheet: FC<LrCreditDetailsSheetProps> = ({ summaryItem, ...props }) => {
  // data
  const { title, subtitle, formattedExpiryDate } = summaryItem;

  return (
    <BottomSheet {...props}>
      <BottomSheetPortal>
        <BottomSheetContent className="p-0">
          <BottomSheetHeader>
            <BottomSheetTitle>Transaction Details</BottomSheetTitle>
            <BottomSheetClose>
              <Icon as={XIcon} size="xs" className="text-lr-grey-600" />
            </BottomSheetClose>
          </BottomSheetHeader>
          <View className="gap-2 px-4 py-6">
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-semibold">Type:</Text>
              <Text className="text-lr-grey-500 text-sm font-medium">{title}</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-semibold">Details:</Text>
              <Text className="text-lr-grey-500 text-sm font-medium">{subtitle}</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-semibold">Expiry:</Text>
              <Text className="text-lr-grey-500 text-sm font-medium">{formattedExpiryDate}</Text>
            </View>
          </View>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
};
