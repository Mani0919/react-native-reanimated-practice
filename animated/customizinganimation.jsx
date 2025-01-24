import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from "react-native-reanimated";

const duration = 2000;

export default function Customizinganimation({ width = 400 }) {
  const defaultAnim = useSharedValue(width / 2 - 160);
  const linear = useSharedValue(width / 2 - 160);

  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }],
  }));
  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: linear.value }],
  }));
  const animatedVerticalDefault = useAnimatedStyle(() => ({
    transform: [{ translateY: defaultAnim.value }],
  }));
  React.useEffect(() => {
    linear.value = withRepeat(
      // highlight-next-line
      withTiming(-linear.value, {
        duration,
        easing: Easing.out(Easing.exp),
      }),
      -1,
      true
    );
    defaultAnim.value = withRepeat(
      // highlight-next-line
      withTiming(-defaultAnim.value, {
        duration,
      }),
      -1,
      true
    );
  }, []);
  const offset = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));
  const OFFSET = 40;

  const handlePress = () => {
    offset.value = withRepeat(withTiming(OFFSET), 6, true);
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedDefault]}>
        <Text style={styles.text}>inout</Text>
      </Animated.View>

      <Animated.View style={[styles.box, animatedChanged]}>
        <Text style={styles.text}>linear</Text>
      </Animated.View>
      <Animated.View style={[styles.box, animatedVerticalDefault]}>
        <Text style={styles.text}>Vertical</Text>
      </Animated.View>
      <Animated.View style={[styles.box, style]} />
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Button title="shake" onPress={handlePress} />
        <Button
          title="reset"
          onPress={() => {
            offset.value = 0;
          }}
        />
      </View>
      <View>
        <Text>
          In the above animation (withRepeat method) , if we observes the
          animation starts at one postion , but not ends at that position, it is
          ending slightly right to the inital position , for that we using
          (withSequence method ) to end the animation at the same position in
          below you can see
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: "#b58df1",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#b58df1",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
