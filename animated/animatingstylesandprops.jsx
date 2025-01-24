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

  const r = useSharedValue(20);
  const handleCircle = () => {
    r.value += 10;
  };

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));
  return (
    <View>
      {/*moving object to right or left */}
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
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Button onPress={MovestoRight} title="Move to Right" />
        <Button onPress={MovestoLeft} title="Move to Left" />
      </View>
      {/* increase the circle  */}
      {/* First Circle */}
      <View style={{ marginTop: 20 ,display: "flex", alignItems: "center" }}>
        <Svg style={{ width: 100, height: 100 }}>
          <AnimatedCircle cx="50" cy="50" r={r.value} fill="blue" />
        </Svg>

        {/* Second Circle */}
        <Svg style={styles.svgStyle}>
          <AnimatedCircle
            cx="50"
            cy="50"
            fill="orange"
            animatedProps={animatedProps}
          />
        </Svg>

        {/* Change Radius Button */}
        <TouchableOpacity style={styles.touchable} onPress={handleCircle}>
          <Text style={styles.buttonText}>Increase Circle Radius</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  svgStyle: {
    marginTop: 20, // Spacing between circles
    height: 100,
    width: 100,
  },
  touchable: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});
