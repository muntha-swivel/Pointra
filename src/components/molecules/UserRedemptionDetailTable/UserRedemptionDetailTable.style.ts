import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../../shared/Constants";

const userRedemptionDetailTableStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: DEVICE_WIDTH - 60,
    height: 130,
  },
  childContainer: {
    justifyContent: "space-around",
  },
  fontStyle: {
    fontWeight: "500",
    fontSize: 16,
  },
});

export default userRedemptionDetailTableStyles;
