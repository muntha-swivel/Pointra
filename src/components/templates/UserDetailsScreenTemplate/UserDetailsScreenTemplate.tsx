import React from "react";
import { View } from "react-native";
import { UserDetailCard, UserRedemptionDetailTable } from "../../molecules";
import { Text } from "react-native-paper";
import { PrimaryButton } from "../../atoms";
import userDetailsTemplateStyles from "./UserDetailsTemplate.style";

const UserDetailsScreenTemplate = () => {
  return (
    <View style={userDetailsTemplateStyles.container}>
      <Text variant="headlineMedium" style={userDetailsTemplateStyles.title}>
        User Details
      </Text>
      <Text variant="labelLarge" style={userDetailsTemplateStyles.label}>
        Scanned QR code to get 10 points for the last purchase you made on the
        store.
      </Text>
      <UserDetailCard />
      <UserRedemptionDetailTable />
      <PrimaryButton style={userDetailsTemplateStyles.button}>
        Redeem Points
      </PrimaryButton>
    </View>
  );
};

export { UserDetailsScreenTemplate };
