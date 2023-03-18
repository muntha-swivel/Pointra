import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../../shared/Constants";

const groupedButtonStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    borderRadius: 10,
    width: DEVICE_WIDTH * 0.4,
    height: 50,
    justifyContent: "center",
  },
});

export default groupedButtonStyles;
