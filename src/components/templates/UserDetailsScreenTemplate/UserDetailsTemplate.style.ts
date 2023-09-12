import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../../shared/Constants";

const userDetailsTemplateStyles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    marginBottom: 30,
  },
  label: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 16,
    fontWeight: "300",
  },
  button: {
    width: DEVICE_WIDTH - 30,
    borderRadius: 10,
    marginTop: 30,
  },
});

export default userDetailsTemplateStyles;
