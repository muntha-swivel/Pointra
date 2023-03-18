import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardScreen, MerchantSignupScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { MerchantNavigation } from "./MerchantNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [user, setUser] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="MerchantScreen" component={MerchantNavigation} />
        ) : (
          <Stack.Screen name="Home" component={MerchantSignupScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export { StackNavigation };
