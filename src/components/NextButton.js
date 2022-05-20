import { View, StyleSheet } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
const NextButton = () => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <View style={styles.container}>
       
      <Svg width={size} height={size}>
        <Circle
          stroke="#F4338F"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * 25) / 100}
        />
      </Svg>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
