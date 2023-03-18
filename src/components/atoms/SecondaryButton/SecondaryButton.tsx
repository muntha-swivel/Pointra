import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { ButtonProps } from "react-native-paper";

const SecondaryButton = ({ ...props }: ButtonProps) => {
  return (
    <Button
      mode="contained"
      buttonColor="#F5F5F5"
      textColor="black"
      {...props}
    ></Button>
  );
};
export { SecondaryButton };
