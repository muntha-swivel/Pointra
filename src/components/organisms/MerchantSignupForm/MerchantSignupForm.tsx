import React, { useState, useEffect } from "react";
import { FormBody } from "../../molecules";
import { TextInput } from "react-native-paper";
import { TInput } from "../../atoms";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Button,
} from "react-native";

const MerchantSignupForm = () => {
  const [text, setText] = React.useState("");
  const [secureText, setSecureText] = React.useState(true);

  const { height: windowHeight } = Dimensions.get("window");

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        // Get the height of the keyboard from the event
        const keyboardHeight = event.endCoordinates.height;

        // Calculate the height of the visible screen
        const visibleHeight = windowHeight - keyboardHeight;

        // Update the state with the keyboard height
        setKeyboardHeight(keyboardHeight / 4);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        // Reset the keyboard height when the keyboard is hidden
        setKeyboardHeight(0);
      }
    );

    // Remove the listeners when the component is unmounted
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={{ paddingBottom: 100 }}
          contentInset={{ bottom: keyboardHeight }}
        >
          <FormBody>
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

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
  },
  scroll: {
    alignSelf: "stretch",
  },
  scrollContainer: {
    alignSelf: "stretch",
    flexGrow: 1,
  },
});
