import { CheckoutScreen } from "@app/features/limeroad/screens/checkout";

export default async function CheckoutPage({
  params
}: {
  params: Promise<{ clientTxnId: string }>;
}) {
  const { clientTxnId } = await params;

  return <CheckoutScreen clientTxnId={clientTxnId} />;
}
