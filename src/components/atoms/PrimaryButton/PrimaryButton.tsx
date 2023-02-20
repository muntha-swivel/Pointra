import React from "react";
import { Button } from "react-native-paper";
import buttonStyles from "./PrimaryButton.style";
import { ButtonProps } from "react-native-paper";

const PrimaryButton = ({ ...props }: ButtonProps) => {
  return (
    <Button mode="contained" style={buttonStyles.button} {...props}></Button>
  );
};
export { PrimaryButton };
