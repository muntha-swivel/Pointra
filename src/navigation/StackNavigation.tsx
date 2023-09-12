import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardScreen, MerchantSignupScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MerchantSignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export { StackNavigation };
