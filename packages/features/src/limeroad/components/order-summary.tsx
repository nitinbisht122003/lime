"use client";

import type { ComponentProps, FC } from "react";

import type { OrderSummaryViewModel } from "@app/types/limeroad";
import { Divider } from "@app/ui/components/divider";
import { Link } from "@app/ui/elements/link";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";
import { cn } from "@app/ui/utils/cn";

type RowItem = OrderSummaryViewModel[number];

const SummaryValue: FC<{ item: RowItem }> = ({ item }) => {
  const { type, value, value_color, strike_text } = item;

  const prefix = ["money", "positive_money", "negative_money"].includes(type) ? "₹" : "";

  const sign = type === "positive_money" ? "+" : type === "negative_money" ? "-" : "";

  const valueText = value ? `${sign}${prefix}${value}` : undefined;

  const valueColor = value_color ?? "#000000";

  return (
    <View className="flex-row items-center text-[13px] leading-[14px]">
      {strike_text && <Text className="text-lr-grey-800 mr-1.5 line-through">{strike_text}</Text>}
      {valueText && <Text style={{ color: valueColor }}>{valueText}</Text>}
    </View>
  );
};

const SummaryLabel: FC<{ name: string; color?: string; className?: string }> = ({
  name,
  color = "#000000",
  className
}) => (
  <Text className={cn("text-lr-grey-800 text-[13px] leading-[14px]", className)} style={{ color }}>
    {name}
  </Text>
);

const SummaryRow: FC<{ item: RowItem }> = ({ item }) => {
  const { name, type, link, name_color } = item;

  if (type === "link" && link)
    return (
      <Link href={link} className="flex-row items-center justify-between leading-[14px]">
        <SummaryLabel name={name} color={name_color} className="underline" />
        <SummaryValue item={item} />
      </Link>
    );

  return (
    <View className="flex-row items-center justify-between">
      <SummaryLabel name={name} color={name_color} />
      <SummaryValue item={item} />
    </View>
  );
};

const TotalRow: FC<{ item: RowItem }> = ({ item }) => (
  <View className="flex-row items-center justify-between">
    <Text className="text-lr-grey-950 text-[13px] leading-[14px]">{item.name}</Text>
    <Text className="text-lr-grey-950 text-sm font-semibold">₹{item.value}</Text>
  </View>
);

type OrderSummaryProps = ComponentProps<typeof View> & {
  summary: OrderSummaryViewModel;
  title?: string;
};

export const OrderSummary: FC<OrderSummaryProps> = ({
  summary,
  title = "Order Summary",
  ...props
}) => {
  if (summary.length === 0) return null;

  const totalComponent = summary.find((component) => component.key === "final_amount");
  const summaryItems = summary.filter((component) => component.key !== "final_amount");

  return (
    <View {...props}>
      <Text className="text-lr-grey-800 mb-4 text-base font-semibold">{title}</Text>
      <View className="border-lr-grey-200 gap-1 rounded-md border p-3">
        {summaryItems.map((item, index) => (
          <SummaryRow key={index} item={item} />
        ))}
        <Divider className="mb-2 mt-3" />
        {totalComponent && <TotalRow item={totalComponent} />}
      </View>
    </View>
  );
};
