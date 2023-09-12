import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ScanQRCodeScreen,
  UserDetailsScreen,
  RedemptionHistoryScreen,
} from "../screens";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MerchantNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";

          if (route.name === "Scan") {
            iconName = focused ? "qr-code" : "qr-code-outline";
          } else if (route.name === "UserDetails") {
            iconName = focused ? "card" : "card-outline";
          } else if (route.name === "Points") {
            iconName = focused ? "grid" : "grid-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#9B81E5",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Scan" component={ScanQRCodeScreen} />
      <Tab.Screen name="UserDetails" component={UserDetailsScreen} />
      <Tab.Screen name="Points" component={RedemptionHistoryScreen} />
    </Tab.Navigator>
  );
};

export { MerchantNavigation };
