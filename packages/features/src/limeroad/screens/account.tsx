import { account } from "@app/services/limeroad/mocks/account";

import { AccountHome } from "../components/account/account-home";
import { Header } from "../components/header";
import { Screen } from "../components/screen";

export function AccountScreen() {
  return (
    <Screen header={<Header back title="Account" navOptions={["search", "wishlist", "cart"]} />}>
      <AccountHome data={account} />
    </Screen>
  );
}
