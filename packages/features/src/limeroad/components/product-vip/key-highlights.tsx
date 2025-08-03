import { useEffect, useRef } from "react";

import type { KeyHighlights as KeyHighlightsType } from "@app/types/limeroad";
import { LinearGradient } from "@app/ui/components/linear-gradient";
import { Animated } from "@app/ui/elements/animated";
import { Text } from "@app/ui/elements/text";
import { View } from "@app/ui/elements/view";

interface KeyHighlightsProps {
  highlights: KeyHighlightsType;
}

interface AnimationPair {
  fade: Animated.Value;
  translate: Animated.Value;
}

export function KeyHighlights({ highlights }: KeyHighlightsProps) {
  // Create animations for title and each attribute
  const titleFade = useRef(new Animated.Value(0)).current;
  const titleTranslate = useRef(new Animated.Value(-200)).current;

  const containerFade = useRef(new Animated.Value(0)).current;
  const containerWidth = useRef(new Animated.Value(0)).current;

  const attributeAnimations = useRef<AnimationPair[]>(
    highlights.display_attributes.map(() => ({
      fade: new Animated.Value(0),
      translate: new Animated.Value(-200)
    }))
  ).current;

  useEffect(() => {
    // start with container animation
    const containerAnimation = Animated.parallel([
      Animated.timing(containerFade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(containerWidth, {
        toValue: 200,
        duration: 200,
        useNativeDriver: true
      })
    ]);

    // Start with title animation
    const titleAnimation = Animated.parallel([
      Animated.timing(titleFade, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(titleTranslate, {
        toValue: 20,
        duration: 200,
        useNativeDriver: true
      })
    ]);

    // Create animations for each attribute with increasing delays
    const attributeAnimationSequence = attributeAnimations.map((animation, index) => {
      return Animated.sequence([
        Animated.delay(100 + index * 200), // Start after title + stagger between attributes
        Animated.parallel([
          Animated.timing(animation.fade, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
          }),
          Animated.timing(animation.translate, {
            toValue: 20,
            duration: 200,
            useNativeDriver: true
          })
        ])
      ]);
    });

    // Combine title and attribute animations
    Animated.sequence([
      containerAnimation,
      titleAnimation,
      Animated.stagger(200, attributeAnimationSequence)
    ]).start();

    // Cleanup
    return () => {
      titleFade.setValue(0);
      titleTranslate.setValue(-200);
      containerFade.setValue(0);
      containerWidth.setValue(-200);
      attributeAnimations.forEach((animation) => {
        animation.fade.setValue(0);
        animation.translate.setValue(-200);
      });
    };
  }, [highlights, attributeAnimations, containerFade, containerWidth, titleFade, titleTranslate]);

  return (
    <LinearGradient
      style={{ position: "absolute", left: 0, top: 0, width: "50%", height: "100%", zIndex: 50 }}
      colors={[
        "rgba(18,18,18,1)",
        "rgba(18,18,18,0.75)",
        "rgba(18,18,18,0.65)",
        "rgba(18,18,18,0.35)",
        "rgba(18,18,18,0)"
      ]}
      locations={[-0.2, 0.3, 0.5, 0.8, 0.99]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Animated.View
        className="absolute left-0 top-0 z-50 h-full w-1/2"
        style={{
          opacity: containerFade,
          width: containerWidth
        }}
      >
        <View className="absolute inset-0" />
        <Animated.View className="mt-[34px] p-3">
          <Animated.View
            style={{
              opacity: titleFade,
              transform: [{ translateX: titleTranslate }]
            }}
          >
            <Text className="mb-4 text-lg font-bold text-white">Key{"\n"}Highlights</Text>
          </Animated.View>

          {highlights.display_attributes.map((attr, index) => (
            <KeyHighlightItem
              key={`${attr.key}-${index}`}
              attr={attr}
              index={index}
              highlights={highlights}
              attributeAnimations={attributeAnimations}
            />
          ))}
        </Animated.View>
      </Animated.View>
    </LinearGradient>
  );
}

const KeyHighlightItem = ({
  attr,
  index,
  highlights,
  attributeAnimations
}: {
  attr: KeyHighlightsType["display_attributes"][number];
  index: number;
  highlights: KeyHighlightsType;
  attributeAnimations: AnimationPair[];
}) => {
  const attributeAnimation = attributeAnimations[index];

  if (!attributeAnimation) return null;

  return (
    <Animated.View
      style={{
        opacity: attributeAnimation.fade,
        transform: [{ translateX: attributeAnimation.translate }]
      }}
      className="mt-2"
    >
      <Text className="text-[9px] leading-5 text-white/70">{attr.key}</Text>
      <Text className="text-sm leading-5 tracking-[0.5px] text-white">{attr.value}</Text>
      {index < highlights.display_attributes.length - 1 && (
        <View className="mt-1.5 h-[1px] w-11 bg-gray-500/50" />
      )}
    </Animated.View>
  );
};
