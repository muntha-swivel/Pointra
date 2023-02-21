import React, { useState, useEffect } from "react";
import { FormBody } from "../../../molecules";
import { TextInput } from "react-native-paper";
import { TInput } from "../../../atoms";
import { DEVICE_HEIGHT } from "../../../../shared/Constants";
import { KeyboardAvoidingView, ScrollView, SafeAreaView } from "react-native";
import { useKeyboard } from "../../../../hooks";

const MerchantSignupForm = () => {
  const [text, setText] = React.useState("");
  const [secureText, setSecureText] = React.useState(true);
  const { isKeyboardOpen } = useKeyboard();
  const [btnDisable, setBtnDisable] = useState(false);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentInset={{ bottom: isKeyboardOpen ? DEVICE_HEIGHT * 0.15 : 0 }}
        >
          <FormBody
            title="Sign up to continue"
            message=" Hello, I guess you are new around here. You can start using the
          application after signing up"
            onSubmit={() => console.log("submitted")}
            submitBtnText={"Signup"}
            submitBtnDisabled={btnDisable}
          >
            <>
              <TInput
                label="User Name"
                value={text}
                onChangeText={(text) => setText(text)}
              />
              <TInput
                label="Store Name"
                value={text}
                onChangeText={(text) => setText(text)}
              />
              <TInput
                label="Business License No"
                value={text}
                onChangeText={(text) => setText(text)}
                mode="flat"
              />
              <TInput
                label="Store Address"
                value={text}
                onChangeText={(text) => setText(text)}
              />
              <TInput
                label="Phone Number"
                value={text}
                onChangeText={(text) => setText(text)}
              />
              <TInput
                label="Email Address"
                value={text}
                onChangeText={(text) => setText(text)}
              />

              <TInput
                label="Password"
                secureTextEntry={secureText}
                right={
                  <TextInput.Icon
                    icon="eye"
                    onPress={() => setSecureText(!secureText)}
                  />
                }
              />
            </>
          </FormBody>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export { MerchantSignupForm };
