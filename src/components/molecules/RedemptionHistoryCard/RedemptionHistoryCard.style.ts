import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../../shared/Constants";
const redemptionHistoryCardStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#C9C9C9",
    width: DEVICE_WIDTH - 60,
    padding: 10,
    justifyContent: "center",
  },
  itemContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  addressAndContactContainer: {
    flexDirection: "row",
  },
});

export default redemptionHistoryCardStyles;
