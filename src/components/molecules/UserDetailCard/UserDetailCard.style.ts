import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../../shared/Constants";

const userCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: DEVICE_WIDTH - 60,
    padding: 20,
    height: 130,
    backgroundColor: "#DDF1F1",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default userCardStyles;
