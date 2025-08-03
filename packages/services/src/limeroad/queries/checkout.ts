import { checkoutService } from "../apis/checkout";

export const checkoutQueryOptions = ({ clientTxnId }: { clientTxnId: string }) => {
  return {
    queryKey: ["checkout", clientTxnId],
    queryFn: () => checkoutService.getCheckout({ client_txn_id: clientTxnId })
  };
};
