import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function HandlingGestures() {
  const pressed = useSharedValue(false);
  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onEnd(() => {
      pressed.value = false;
    });
  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? "#FFE04B" : "#B58DF1",
    transform: [
      {
        scale: withTiming(pressed.value ? 5 : 1, {
          duration: 1000,
        }),
      },
    ],
  }));
  {
    /*below for u can grab the circle */
  }
  const grabPress = useSharedValue(false);
  const grabX = useSharedValue(0);
  const grabY = useSharedValue(0);
  const pan = Gesture.Pan()
    .onBegin(() => {
      grabPress.value = true;
    })
    .onChange((event) => {
      grabX.value = event.translationX; // Track horizontal movement
      grabY.value = event.translationY;
    })
    .onFinalize(() => {
      grabX.value = withSpring(0); // Reset position
      grabY.value = withSpring(0);
      grabPress.value = false;
    });
  const animatedStyless = useAnimatedStyle(() => ({
    transform: [
      { translateX: grabX.value },
      { translateY: grabY.value },
      { scale: withTiming(grabPress.value ? 1.2 : 1) },
    ],
    backgroundColor: grabPress.value ? "blue" : "#b58df1",
    zIndex: grabPress.value ? 99 : 0,
  }));
  return (
    <View style={styles.container}>
      <GestureDetector gesture={tap}>
        <Animated.View style={[styles.circle, animatedStyles]} />
      </GestureDetector>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.circle, animatedStyless]} />
      </GestureDetector>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    position: "relative",
  },
  circle: {
    height: 120,
    width: 120,
    borderRadius: 500,
  },
});
