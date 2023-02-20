import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import textInputStyles from "./TInput.style";
const TInput = ({ ...props }: TextInputProps) => {
  return (
    <TextInput
      mode="flat"
      style={textInputStyles.input}
      theme={{ colors: { onSurfaceVariant: "#C5C5C7" } }}
      {...props}
    />
  );
};

export { TInput };
