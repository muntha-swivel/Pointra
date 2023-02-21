import { View } from "react-native";
import { MerchantSignupForm, LoginForm } from "../../organisms";
import templateStyles from "../commonTemplate.style";
const FormBodyScreenTemplate = () => {
  return (
    <View style={templateStyles.container}>
      <LoginForm />
    </View>
  );
};
export { FormBodyScreenTemplate };
