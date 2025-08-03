import { feedService } from "@app/services/limeroad/apis/feed";

import { Feed } from "../components/feed";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Screen } from "../components/screen";

export async function HomeScreen() {
  const feed = await feedService.getFeed({ id: "home" });

  return (
    <Screen
      header={<Header navOptions={["wishlist", "notification", "profile"]} />}
      footer={<Footer />}
    >
      <Feed feed={feed} />
    </Screen>
  );
}
