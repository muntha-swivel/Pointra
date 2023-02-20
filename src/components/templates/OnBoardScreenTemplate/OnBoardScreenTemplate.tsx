import React from "react";
import { PrimaryButton } from "../../atoms";
import QRCode from "react-native-qrcode-svg";
import { View } from "react-native";
import templateStyles from "../commonTemplate.style";
const OnBoardScreenTemplate = ({ navigation }: any) => {
  const my_object = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };

  const user = JSON.stringify(my_object);

  return (
    <View style={templateStyles.container}>
      <QRCode value="Hell Muntha" />
    </View>
  );
};

export { OnBoardScreenTemplate };
