import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

export default function Animatingstylesandprops() {
  const translateX = useSharedValue(0);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const MovestoRight = () => {
    translateX.value = translateX.value + 50;
  };
  const MovestoLeft = () => {
    translateX.value = translateX.value - 50;
  };
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }));
  return (
    <View>
      <Animated.View
        style={[
          {
            width: 50,
            height: 50,
            backgroundColor: "blue",
            marginBottom: 20, // Add spacing between elements
          },
          animatedStyles,
        ]}
      />
      <View style={{ marginTop: 20, display: "flex", flexDirection: "row", gap: 20 }}>
        <Button onPress={MovestoRight} title="Move to Right" />
        <Button onPress={MovestoLeft} title="Move to Left" />
      </View>
    </View>
  );
}
