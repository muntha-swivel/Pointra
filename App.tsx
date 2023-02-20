import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/theme";
import { StackNavigation } from "./src/navigation";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StackNavigation />
    </PaperProvider>
  );
}
