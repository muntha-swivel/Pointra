import React from "react";
import { View } from "react-native";
import { RedemptionHistoryScreenTemplate } from "../../../components/templates";
import redemptionHistoryStyles from "./RedemptionHistoryScreen.style";
const RedemptionHistoryScreen = () => {
  return (
    <View style={redemptionHistoryStyles.container}>
      <RedemptionHistoryScreenTemplate />
    </View>
  );
};

export { RedemptionHistoryScreen };
