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
import Creatinganimatedview from "./animated/creatinganimatedview";
import Animatedfunction from "./animated/animatedfunction";
import Animatingstylesandprops from "./animated/animatingstylesandprops";

export default function App() {
  const width = useSharedValue(100);
  const translateX = useSharedValue(0);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);


  const r = useSharedValue(20);
  const handleCircle = () => {
    r.value += 10;
  };

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

  return (
    <View style={styles.container}>
      <Creatinganimatedview/>
      <Animatedfunction/>
      <Animatingstylesandprops/>
    

      {/* First Circle */}
      <Svg style={{width: 100, height: 100}}>
        <AnimatedCircle cx="50" cy="50" r={r.value} fill="blue" />
      </Svg>

      {/* Second Circle */}
      <Svg style={styles.svgStyle}>
        <AnimatedCircle cx="50" cy="50" fill="orange" animatedProps={animatedProps} />
      </Svg>

      {/* Change Radius Button */}
      <TouchableOpacity style={styles.touchable} onPress={handleCircle}>
        <Text style={styles.buttonText}>Increase Circle Radius</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
