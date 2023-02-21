import React, { useState } from "react";
import { FormBody } from "../../../molecules";
import { TInput } from "../../../atoms";
import { TextInput } from "react-native-paper";

const LoginForm = () => {
  const [text, setText] = useState("");
  const [secureText, setSecureText] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  return (
    <FormBody
      title="Welcome Back to POINTRA !"
      message="I am happy to see you again. You can continue where you left off by logging in."
      onSubmit={() => console.log("submited")}
      submitBtnText="Login"
      submitBtnDisabled={btnDisable}
    >
      <>
        <TInput
          label="User Name"
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
  );
};

export { LoginForm };
