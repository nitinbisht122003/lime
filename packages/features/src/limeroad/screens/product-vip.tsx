import { productVipService } from "@app/services/limeroad/apis/product-vip";

import { ProductVip } from "../components/product-vip";
import { Screen } from "../components/screen";
import { ProductVipProvider } from "../providers/product-vip";

export async function ProductVipScreen() {
  const productVip = await productVipService.getProductVip();

  return (
    <ProductVipProvider>
      <Screen>
        <ProductVip productVip={productVip} />
      </Screen>
    </ProductVipProvider>
  );
}
