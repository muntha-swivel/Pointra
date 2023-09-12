import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import redemptionHistoryCardStyles from "./RedemptionHistoryCard.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "react-native-paper";

const RedemptionHistoryCard = () => {
  const theme = useTheme();
  return (
    <View style={redemptionHistoryCardStyles.container}>
      <View style={redemptionHistoryCardStyles.itemContainer}>
        <Text variant="titleMedium">User 007</Text>
        <Text variant="titleMedium" style={{ fontWeight: "400" }}>
          Last Redemption 21th Jan 2023
        </Text>
      </View>
      <View
        style={[
          redemptionHistoryCardStyles.addressAndContactContainer,
          redemptionHistoryCardStyles.itemContainer,
        ]}
      >
        <Ionicons name={"location-outline"} size={30} color={"#03B0A9"} />
        <View style={{ marginLeft: 10 }}>
          <Text>Address</Text>
          <Text>No 12,Lorem ipsum, dolor sit amet</Text>
        </View>
      </View>
      <View
        style={[
          redemptionHistoryCardStyles.addressAndContactContainer,
          redemptionHistoryCardStyles.itemContainer,
        ]}
      >
        <Ionicons
          name={"call-outline"}
          size={30}
          color={theme.colors.primary}
        />
        <View style={{ marginLeft: 10 }}>
          <Text>Contact Number</Text>
          <Text>0112 303 111</Text>
        </View>
      </View>
    </View>
  );
};

export { RedemptionHistoryCard };
