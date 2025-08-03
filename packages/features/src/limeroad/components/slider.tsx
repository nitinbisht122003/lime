// import { Center } from "@app/ui/components/center";
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@app/ui/components/slider";
import { View } from "@app/ui/elements/view";

export function Example() {
  return (
    <View className="h-[150px] w-[300px]">
      <Slider
        defaultValue={30}
        size="md"
        orientation="horizontal"
        isDisabled={false}
        isReversed={false}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </View>
  );
}
