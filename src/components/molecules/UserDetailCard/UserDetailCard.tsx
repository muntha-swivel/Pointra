import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Avatar } from "react-native-paper";
import userCardStyles from "./UserDetailCard.style";
const UserDetailCard = () => {
  return (
    <View style={userCardStyles.container}>
      <Avatar.Image
        size={100}
        source={require("../../../../assets/Avatar.png")}
      />
      <View>
        <Text variant="titleLarge"> Jan Doe</Text>
        <Text variant="titleMedium"> shopstore@gamil.com</Text>
        <Text variant="titleMedium"> +94 77121212</Text>
      </View>
    </View>
  );
};

export { UserDetailCard };
