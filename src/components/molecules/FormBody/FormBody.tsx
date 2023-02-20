import React from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Text } from "react-native-paper";
import { PrimaryButton } from "../../atoms";
import { IFormBody } from "./FormBody.interface";
import FormBodyStyles from "./FormBody.style";
const FormBody = ({ children }: IFormBody) => {
  return (
    <>
      <View>
        <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
          Sign up to continue
        </Text>
        <Text variant="titleSmall" style={{ fontWeight: "300" }}>
          Hello, I guess you are new around here. You can start using the
          application after signing up
        </Text>
      </View>
      <View style={FormBodyStyles.textBoxesContainer}>{children}</View>
      <PrimaryButton>{"Hello Login"}</PrimaryButton>
    </>
  );
};

export { FormBody };
