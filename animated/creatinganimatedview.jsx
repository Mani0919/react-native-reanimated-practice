import { View, Text } from "react-native";
import React from "react";
import Animated, { useSharedValue } from "react-native-reanimated";

export default function Creatinganimatedview() {
  const width = useSharedValue(100);
  return (
    <View>
      <Animated.View
        style={{
          width: width.value,
          height: 50,
          backgroundColor: "blue",
        }}
      />
    </View>
  );
}
