import { View } from "@app/ui/elements/view";

import { FilterBadges } from "./filter-badges";

export function ProductFilterRail() {
  return (
    <View>
      <FilterBadges
        filters={[{ id: "1", label: "text", value: "value" }]}
        onFilterChange={(filter) => {
          console.log(filter.value);
        }}
      />
    </View>
  );
}
