import { Text } from "@app/ui/elements/text";

import { Header } from "../components/header";
import { Screen } from "../components/screen";

export function ListingScreen() {
  return (
    <Screen
      header={<Header logo={false} back title="All" navOptions={["search", "wishlist", "cart"]} />}
    >
      <Text>ListingScreen</Text>
    </Screen>
  );
}
