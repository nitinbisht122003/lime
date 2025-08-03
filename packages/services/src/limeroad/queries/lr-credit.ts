import { queryOptions } from "@tanstack/react-query";

import { lrCreditService } from "../apis/lr-credit";

export function lrCreditQueryOptions() {
  return queryOptions({
    queryKey: ["lr-credit"],
    queryFn: () => lrCreditService.getLrCredit()
  });
}
