import { View } from "react-native";
import { MerchantSignupForm } from "../../organisms";
import templateStyles from "../commonTemplate.style";
const FormBodyScreenTemplate = () => {
  return (
    <View style={templateStyles.container}>
      <MerchantSignupForm />
    </View>
  );
};
export { FormBodyScreenTemplate };
