import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { PrimaryButton } from "../../atoms";
import { IFormBody } from "./FormBody.interface";
import FormBodyStyles from "./FormBody.style";
const FormBody = ({
  children,
  title,
  message,
  onSubmit,
  submitBtnText,
  submitBtnDisabled,
}: IFormBody) => {
  return (
    <>
      <View>
        <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
          {title}
        </Text>
        <Text variant="titleSmall" style={{ fontWeight: "300" }}>
          {message}
        </Text>
      </View>
      <View style={FormBodyStyles.textBoxesContainer}>{children}</View>
      <PrimaryButton onPress={onSubmit} disabled={submitBtnDisabled}>
        {submitBtnText}
      </PrimaryButton>
    </>
  );
};

export { FormBody };
