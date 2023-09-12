import React from "react";
import { View } from "react-native";
import { UserDetailsScreenTemplate } from "../../../components/templates";
import userDetailsScreenStyle from "./UserDetailsScreen.style";
const UserDetailsScreen = () => {
  return (
    <View style={userDetailsScreenStyle.container}>
      <UserDetailsScreenTemplate />
    </View>
  );
};
export { UserDetailsScreen };
