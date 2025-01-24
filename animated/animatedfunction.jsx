import { View, Text, Button } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function Animatedfunction() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  const handlePresss = () => {
    width.value = withSpring(width.value - 50);
  };
  const animatedStyles = useAnimatedStyle(() => ({
    width: width.value, // Connect the shared value to the width
  }));

  return (
    <View style={{ marginTop: 20, display: "flex", alignItems: "center" }}>
      <Animated.View
        style={[
          animatedStyles,
          {
            height: 100,
            backgroundColor: "violet",
          },
        ]}
      />
      <View style={{ marginTop: 20, marginBottom: 20,display: "flex", flexDirection: "row",gap: 20 }}>
        <Button
          onPress={handlePress}
          title="Increae Width"
          style={{ width: 100, height: 50 }}
        />
        <Button
          onPress={handlePresss}
          title="Decrease Width"
          style={{ width: 100, height: 50 }}
        />
      </View>
    </View>
  );
}
