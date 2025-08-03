"use client";

import type { TickerViewModel } from "@app/types/limeroad";
import type { CustomIcon } from "@app/ui/types";
import { Icon } from "@app/ui/components/icon";
import { Ticker as TickerUI } from "@app/ui/components/ticker";
import { HeptagramIcon } from "@app/ui/icons/heptagram-icon";

interface TickerProps {
  ticker: TickerViewModel;
}

type Separator = NonNullable<TickerViewModel["separator"]>;

const separatorIconMap: Record<Separator, CustomIcon> = {
  heptagram: HeptagramIcon
};

export function Ticker({ ticker }: TickerProps) {
  const SeparatorIcon = ticker.separator ? separatorIconMap[ticker.separator] : null;

  const separatorString = SeparatorIcon == null ? ticker.separator : undefined;

  if (SeparatorIcon) {
    return (
      <TickerUI
        texts={ticker.announcements}
        renderSeparator={() => <Icon as={SeparatorIcon} size="sm" className="text-white" />}
      />
    );
  }

  return <TickerUI texts={ticker.announcements} separator={separatorString} />;
}
