import React from "react";

import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel
} from "@app/ui/components/checkbox";
import { View } from "@app/ui/elements/view";
import { CheckIcon } from "@app/ui/icons/check-icon";

export function App() {
  const [values, setValues] = React.useState(["Eng"]);
  return (
    <CheckboxGroup
      value={values}
      onChange={(keys: string[]) => {
        setValues(keys);
      }}
    >
      <View className="gap-3">
        <Checkbox value="Eng">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Framer</CheckboxLabel>
        </Checkbox>
        <Checkbox value="invison">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Invision Studio</CheckboxLabel>
        </Checkbox>
        <Checkbox value="adobe">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Adobe XD</CheckboxLabel>
        </Checkbox>
      </View>
    </CheckboxGroup>
  );
}
