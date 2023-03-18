import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { RedemptionHistoryCard, GroupedButton } from "../../molecules";
import { Text } from "react-native-paper";

const RedemptionHistoryScreenTemplate = () => {
  return (
    <SafeAreaView>
      <View style={redemptionHistoryTemplateStyles.pageTitle}>
        <Text variant="headlineSmall" style={{ fontWeight: "500" }}>
          Redemption History
        </Text>
      </View>
      <View style={redemptionHistoryTemplateStyles.groupedButtonsView}>
        <GroupedButton />
      </View>
      <Text
        variant="headlineSmall"
        style={{ fontWeight: "600", textAlign: "center" }}
      >
        Customer Redemption History
      </Text>
      <View style={{}}>
        <Text
          variant="labelLarge"
          style={{ fontWeight: "200", textAlign: "center" }}
        >
          The history of last redemption of subscribed customer are listed as
          follow
        </Text>
      </View>
      <RedemptionHistoryCard />
    </SafeAreaView>
  );
};

export { RedemptionHistoryScreenTemplate };

const redemptionHistoryTemplateStyles = StyleSheet.create({
  pageTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  groupedButtonsView: {
    marginTop: 10,
    marginBottom: 10,
  },
});
