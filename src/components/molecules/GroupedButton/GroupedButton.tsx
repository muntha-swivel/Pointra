import { useState } from "react";
import { Button } from "react-native-paper";
import { View } from "react-native";
import groupedButtonStyles from "./GroupedButton.style";
const GroupedButton = () => {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <View style={groupedButtonStyles.container}>
      <Button
        mode="contained"
        buttonColor={activeButton ? "" : "#F5F5F5"}
        textColor={activeButton ? "" : "black"}
        style={groupedButtonStyles.btn}
      >
        Hello
      </Button>
      <Button
        mode="contained"
        style={groupedButtonStyles.btn}
        buttonColor={activeButton ? "#F5F5F5" : ""}
        textColor={activeButton ? "black" : ""}
      >
        World
      </Button>
    </View>
  );
};

export { GroupedButton };
