import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import userRedemptionDetailTableStyles from "./UserRedemptionDetailTable.style";
function UserRedemptionDetailTable() {
  return (
    <View style={userRedemptionDetailTableStyles.container}>
      <View style={userRedemptionDetailTableStyles.childContainer}>
        <Text
          variant="labelLarge"
          style={userRedemptionDetailTableStyles.fontStyle}
        >
          Last Redemption
        </Text>
        <Text
          variant="labelLarge"
          style={userRedemptionDetailTableStyles.fontStyle}
        >
          Available Points
        </Text>
        <Text
          variant="labelLarge"
          style={userRedemptionDetailTableStyles.fontStyle}
        >
          Redeem Points
        </Text>
      </View>
      <View style={userRedemptionDetailTableStyles.childContainer}>
        <Text
          variant="labelLarge"
          style={userRedemptionDetailTableStyles.fontStyle}
        >
          : 07th Feb 2023
        </Text>
        <Text
          variant="labelLarge"
          style={userRedemptionDetailTableStyles.fontStyle}
        >
          : 115 Points
        </Text>
        <Text
          variant="labelLarge"
          style={userRedemptionDetailTableStyles.fontStyle}
        >
          : 10 Points
        </Text>
      </View>
    </View>
  );
}

export { UserRedemptionDetailTable };
