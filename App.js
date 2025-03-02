import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
import Customizinganimation from "./animated/customizinganimation";
import WithSequence from "./animated/withSequence";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HandlingGestures from "./animated/handlingGestures";
export default function App() {
  const width = useSharedValue(100);
  const translateX = useSharedValue(0);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Creatinganimatedview />
          <Animatedfunction />
          <Animatingstylesandprops />
          <Customizinganimation />
          <WithSequence />
          <HandlingGestures/>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    position:"relative"
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
