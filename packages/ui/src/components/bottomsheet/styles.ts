import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const contentStyle = tva({
  base: "fixed bottom-0 left-0 right-0 mt-24 flex h-fit flex-col rounded-t-lg bg-white px-4 py-3 outline-none"
});

export const backdropStyle = tva({
  base: "fixed inset-0 bg-black/40"
});

export const dragIndicatorStyle = tva({
  base: "mb-2"
});

export const titleStyle = tva({
  base: "text-typography-900 text-lg font-medium"
});

export const descriptionStyle = tva({
  base: "text-typography-600 mx-auto mb-4 text-sm"
});

export const closeStyle = tva({
  base: "flex"
});

export const headerStyle = tva({
  base: "bg-lr-grey-50 border-lr-grey-100 flex-row items-center justify-between rounded-t-lg border-b p-4"
});
