// import { categoryService } from "@app/services/limeroad";
import { Card } from "@app/ui/components/card";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

// import { Log } from "../../common/tracking";
// import { CategoriesList } from "../categories/categories-list";

export function CategoriesScreen() {
  // const _categories = await categoryService.getCategories();

  return (
    <Card size="md" variant="elevated" className="text-primary-900">
      <View className="w-16">
        <Text className="text-success-300">categories</Text>
      </View>
    </Card>
  );
}
